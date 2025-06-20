"use client"

import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const projects = [
  {
    title: "Calculator App",
    description: "A modern calculator with advanced mathematical functions and responsive design.",
    image: "/placeholder.svg?height=200&width=300",
    techStack: ["JavaScript", "HTML", "CSS"],
    codeUrl: "#",
    demoUrl: "#",
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather application with location-based forecasts and interactive maps.",
    image: "/placeholder.svg?height=200&width=300",
    techStack: ["Python", "API", "Flask"],
    codeUrl: "#",
    demoUrl: "#",
  },
  {
    title: "Personal Blog",
    description: "A responsive blog platform with content management and user authentication.",
    image: "/placeholder.svg?height=200&width=300",
    techStack: ["JavaScript", "Node.js", "MongoDB"],
    codeUrl: "#",
    demoUrl: "#",
  },
  {
    title: "Arduino LED Controller",
    description: "IoT project controlling LED patterns through web interface and mobile app.",
    image: "/placeholder.svg?height=200&width=300",
    techStack: ["Arduino", "C++", "IoT"],
    codeUrl: "#",
    demoUrl: "#",
  },
  {
    title: "Study Planner",
    description: "Task management application helping students organize their academic schedule.",
    image: "/placeholder.svg?height=200&width=300",
    techStack: ["Python", "Tkinter", "SQLite"],
    codeUrl: "#",
    demoUrl: "#",
  },
  {
    title: "Portfolio Website",
    description: "This responsive portfolio website showcasing projects and technical skills.",
    image: "/placeholder.svg?height=200&width=300",
    techStack: ["Next.js", "React", "Tailwind"],
    codeUrl: "#",
    demoUrl: "#",
  },
]

const techColors: { [key: string]: string } = {
  JavaScript: "bg-yellow-100 text-yellow-800",
  Python: "bg-blue-100 text-blue-800",
  HTML: "bg-orange-100 text-orange-800",
  CSS: "bg-blue-100 text-blue-800",
  React: "bg-cyan-100 text-cyan-800",
  "Next.js": "bg-gray-100 text-gray-800",
  Tailwind: "bg-teal-100 text-teal-800",
  "Node.js": "bg-green-100 text-green-800",
  MongoDB: "bg-green-100 text-green-800",
  Arduino: "bg-teal-100 text-teal-800",
  "C++": "bg-purple-100 text-purple-800",
  IoT: "bg-indigo-100 text-indigo-800",
  API: "bg-red-100 text-red-800",
  Flask: "bg-gray-100 text-gray-800",
  Tkinter: "bg-blue-100 text-blue-800",
  SQLite: "bg-gray-100 text-gray-800",
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-16">Featured Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        techColors[tech] || "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 bg-white text-blue-900 border-blue-900 hover:bg-blue-900 hover:text-white"
                    asChild
                  >
                    <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600"
                    asChild
                  >
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
