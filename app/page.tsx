"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { FileText, FileImage, FileSpreadsheet, FileIcon as FilePresentation, ArrowRight } from "lucide-react"
import ToolCard from "@/components/tool-card"
import { motion } from "framer-motion"

export default function Home() {
  const conversionTools = [
    {
      id: "pdf-to-word",
      title: "PDF to Word",
      description: "Convert PDF files to editable Word documents",
      icon: <FileText className="h-10 w-10 text-primary" />,
      path: "/convert/pdf-to-word",
    },
    {
      id: "word-to-pdf",
      title: "Word to PDF",
      description: "Convert Word documents to PDF format",
      icon: <FileText className="h-10 w-10 text-primary" />,
      path: "/convert/word-to-pdf",
    },
    {
      id: "pdf-to-jpg",
      title: "PDF to JPG",
      description: "Convert PDF pages to JPG images",
      icon: <FileImage className="h-10 w-10 text-primary" />,
      path: "/convert/pdf-to-jpg",
    },
    {
      id: "jpg-to-pdf",
      title: "JPG to PDF",
      description: "Convert JPG images to PDF documents",
      icon: <FileImage className="h-10 w-10 text-primary" />,
      path: "/convert/jpg-to-pdf",
    },
    {
      id: "pdf-to-excel",
      title: "PDF to Excel",
      description: "Convert PDF tables to Excel spreadsheets",
      icon: <FileSpreadsheet className="h-10 w-10 text-primary" />,
      path: "/convert/pdf-to-excel",
    },
    {
      id: "excel-to-pdf",
      title: "Excel to PDF",
      description: "Convert Excel spreadsheets to PDF format",
      icon: <FileSpreadsheet className="h-10 w-10 text-primary" />,
      path: "/convert/excel-to-pdf",
    },
    {
      id: "pdf-to-ppt",
      title: "PDF to PPT",
      description: "Convert PDF files to PowerPoint presentations",
      icon: <FilePresentation className="h-10 w-10 text-primary" />,
      path: "/convert/pdf-to-ppt",
    },
    {
      id: "ppt-to-pdf",
      title: "PPT to PDF",
      description: "Convert PowerPoint presentations to PDF format",
      icon: <FilePresentation className="h-10 w-10 text-primary" />,
      path: "/convert/ppt-to-pdf",
    },
  ]

  return (
    <div className="flex flex-col items-center">
      {/* Enhanced Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-primary/5 via-primary/10 to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-2"
            >
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none xl:text-7xl/none">
                Convert Your Documents with Ease
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl lg:text-2xl">
                Fast, secure, and free document conversion tools for all your needs. Transform between PDF, Word, JPG,
                Excel, and PowerPoint formats in seconds.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-x-4"
            >
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="#conversion-tools">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#features">Learn More</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose Our Converter?</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Our document conversion tools are designed to make your life easier.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-8">
            <Card>
              <CardContent className="flex flex-col items-center space-y-2 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M12 2v4" />
                    <path d="M12 18v4" />
                    <path d="m4.93 4.93 2.83 2.83" />
                    <path d="m16.24 16.24 2.83 2.83" />
                    <path d="M2 12h4" />
                    <path d="M18 12h4" />
                    <path d="m4.93 19.07 2.83-2.83" />
                    <path d="m16.24 7.76 2.83-2.83" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Fast & Efficient</h3>
                <p className="text-muted-foreground text-center">
                  Convert your documents in seconds with our optimized processing engine.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center space-y-2 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Secure & Private</h3>
                <p className="text-muted-foreground text-center">
                  Your files are processed securely and deleted after conversion.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center space-y-2 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Free to Use</h3>
                <p className="text-muted-foreground text-center">
                  All our conversion tools are completely free with no hidden fees.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Conversion Tools Section */}
      <section id="conversion-tools" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Conversion Tools</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Choose from our wide range of document conversion tools.
              </p>
            </div>
          </div>
          <div className="mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
            {conversionTools.map((tool) => (
              <ToolCard
                key={tool.id}
                title={tool.title}
                description={tool.description}
                icon={tool.icon}
                href={tool.path}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Convert Your Documents?
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Start using our free conversion tools today and save time.
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild size="lg">
                <Link href="#conversion-tools">
                  Get Started Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

