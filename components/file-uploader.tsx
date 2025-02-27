"use client"

import { useState, useRef, useCallback, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { useDropzone } from "react-dropzone"
import { FileIcon, UploadCloud, X, Download, RefreshCw } from "lucide-react"
import toast from "react-hot-toast"
import { cn } from "@/lib/utils"

interface FileUploaderProps {
  acceptedFileTypes: string
  outputFormat: string
  maxFileSize: number
  toolType: string
}

export default function FileUploader({ acceptedFileTypes, outputFormat, maxFileSize, toolType }: FileUploaderProps) {
  const [file, setFile] = useState<File | null>(null)
  const [isConverting, setIsConverting] = useState(false)
  const [conversionProgress, setConversionProgress] = useState(0)
  const [convertedFile, setConvertedFile] = useState<string | null>(null)
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null)

  // Parse accepted file types for dropzone
  const acceptedTypes = acceptedFileTypes.split(",").reduce(
    (acc, type) => {
      acc[type] = []
      return acc
    },
    {} as Record<string, string[]>,
  )

  // Handle file drop
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        const selectedFile = acceptedFiles[0]

        // Check file size
        if (selectedFile.size > maxFileSize * 1024 * 1024) {
          toast.error(`File size exceeds the ${maxFileSize}MB limit.`)
          return
        }

        setFile(selectedFile)
        setConvertedFile(null)
        setConversionProgress(0)
      }
    },
    [maxFileSize],
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: acceptedTypes,
    maxFiles: 1,
    disabled: isConverting,
  })

  // Simulate conversion process
  const startConversion = useCallback(() => {
    if (!file) return

    setIsConverting(true)
    setConversionProgress(0)

    // Simulate progress updates
    progressIntervalRef.current = setInterval(() => {
      setConversionProgress((prev) => {
        const newProgress = prev + Math.random() * 10

        if (newProgress >= 100) {
          if (progressIntervalRef.current) {
            clearInterval(progressIntervalRef.current)
          }

          // Simulate completion after progress reaches 100%
          setTimeout(() => {
            setIsConverting(false)
            setConversionProgress(100)
            setConvertedFile(URL.createObjectURL(new Blob([file], { type: `application/${outputFormat}` })))
            toast.success("Conversion completed successfully!")
          }, 500)

          return 100
        }

        return newProgress
      })
    }, 300)
  }, [file, outputFormat])

  // Start conversion automatically when a file is uploaded
  useEffect(() => {
    if (file && !isConverting && !convertedFile) {
      startConversion()
    }
  }, [file, isConverting, convertedFile, startConversion])

  // Reset the state
  const handleReset = () => {
    setFile(null)
    setConvertedFile(null)
    setConversionProgress(0)
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current)
    }
  }

  // Format file size
  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  return (
    <div className="space-y-6">
      {!file && (
        <div {...getRootProps()} className={cn("file-drop-area", isDragActive && "drag-active")}>
          <input {...getInputProps()} />
          <div className="flex flex-col items-center gap-4">
            <div className="rounded-full bg-primary/10 p-4">
              <UploadCloud className="h-8 w-8 text-primary" />
            </div>
            <div className="space-y-2 text-center">
              <p className="font-medium">
                Drag & drop your file here, or <span className="text-primary">browse</span>
              </p>
              <p className="text-sm text-muted-foreground">
                Supports {acceptedFileTypes.replace(/\./g, "")} files up to {maxFileSize}MB
              </p>
            </div>
          </div>
        </div>
      )}

      {file && !convertedFile && (
        <div className="rounded-lg border p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="rounded-full bg-primary/10 p-2">
                <FileIcon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-medium">{file.name}</p>
                <p className="text-sm text-muted-foreground">{formatFileSize(file.size)}</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={handleReset} disabled={isConverting}>
              <X className="h-5 w-5" />
              <span className="sr-only">Remove file</span>
            </Button>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Conversion progress</span>
              <span>{Math.round(conversionProgress)}%</span>
            </div>
            <Progress value={conversionProgress} className="h-2" />
          </div>

          {isConverting && (
            <div className="flex items-center justify-center">
              <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
              <span>Converting...</span>
            </div>
          )}
        </div>
      )}

      {convertedFile && (
        <div className="rounded-lg border p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="rounded-full bg-primary/10 p-2">
                <FileIcon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-medium">
                  {file?.name.split(".")[0]}.{outputFormat}
                </p>
                <p className="text-sm text-muted-foreground">Ready to download</p>
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={handleReset}>
              Convert Another File
            </Button>
            <Button asChild>
              <a href={convertedFile} download={`${file?.name.split(".")[0]}.${outputFormat}`}>
                <Download className="mr-2 h-4 w-4" />
                Download
              </a>
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

