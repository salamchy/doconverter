import type { Metadata } from "next"
import FileUploader from "@/components/file-uploader"
import { notFound } from "next/navigation"

interface PageProps {
  params: {
    tool: string
  }
}

// Define the conversion tools and their metadata
const conversionTools = {
  "pdf-to-word": {
    title: "PDF to Word Converter",
    description: "Convert PDF files to editable Word documents online for free.",
    acceptedFileTypes: ".pdf",
    outputFormat: "docx",
    maxFileSize: 10, // MB
  },
  "word-to-pdf": {
    title: "Word to PDF Converter",
    description: "Convert Word documents to PDF format online for free.",
    acceptedFileTypes: ".doc,.docx",
    outputFormat: "pdf",
    maxFileSize: 10, // MB
  },
  "pdf-to-jpg": {
    title: "PDF to JPG Converter",
    description: "Convert PDF pages to JPG images online for free.",
    acceptedFileTypes: ".pdf",
    outputFormat: "jpg",
    maxFileSize: 10, // MB
  },
  "jpg-to-pdf": {
    title: "JPG to PDF Converter",
    description: "Convert JPG images to PDF documents online for free.",
    acceptedFileTypes: ".jpg,.jpeg,.png",
    outputFormat: "pdf",
    maxFileSize: 10, // MB
  },
  "pdf-to-excel": {
    title: "PDF to Excel Converter",
    description: "Convert PDF tables to Excel spreadsheets online for free.",
    acceptedFileTypes: ".pdf",
    outputFormat: "xlsx",
    maxFileSize: 10, // MB
  },
  "excel-to-pdf": {
    title: "Excel to PDF Converter",
    description: "Convert Excel spreadsheets to PDF format online for free.",
    acceptedFileTypes: ".xls,.xlsx",
    outputFormat: "pdf",
    maxFileSize: 10, // MB
  },
  "pdf-to-ppt": {
    title: "PDF to PPT Converter",
    description: "Convert PDF files to PowerPoint presentations online for free.",
    acceptedFileTypes: ".pdf",
    outputFormat: "pptx",
    maxFileSize: 10, // MB
  },
  "ppt-to-pdf": {
    title: "PPT to PDF Converter",
    description: "Convert PowerPoint presentations to PDF format online for free.",
    acceptedFileTypes: ".ppt,.pptx",
    outputFormat: "pdf",
    maxFileSize: 10, // MB
  },
}

// Generate metadata for the page
export function generateMetadata({ params }: PageProps): Metadata {
  const tool = params.tool

  if (!conversionTools[tool as keyof typeof conversionTools]) {
    return {
      title: "Tool Not Found",
      description: "The requested conversion tool was not found.",
    }
  }

  const toolInfo = conversionTools[tool as keyof typeof conversionTools]

  return {
    title: `${toolInfo.title} - DocConverter`,
    description: toolInfo.description,
  }
}

export default function ConversionToolPage({ params }: PageProps) {
  const { tool } = params
  const toolInfo = conversionTools[tool as keyof typeof conversionTools]

  // If the tool doesn't exist, return 404
  if (!toolInfo) {
    notFound()
  }

  return (
    <div className="container py-12 md:py-16">
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{toolInfo.title}</h1>
          <p className="text-muted-foreground">{toolInfo.description}</p>
        </div>

        <FileUploader
          acceptedFileTypes={toolInfo.acceptedFileTypes}
          outputFormat={toolInfo.outputFormat}
          maxFileSize={toolInfo.maxFileSize}
          toolType={tool}
        />
      </div>
    </div>
  )
}

