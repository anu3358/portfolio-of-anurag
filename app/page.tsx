"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, MapPin, ExternalLink, Code, Star, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function Portfolio() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    setIsLoaded(true)

    const handleScroll = () => {
      const sections = ["hero", "skills", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const skills = {
    programming: [
      { name: "Python", level: 85 },
      { name: "C++", level: 75 },
      { name: "JavaScript", level: 70 },
      { name: "HTML/CSS", level: 80 },
    ],
    tools: [
      { name: "Git", level: 70 },
      { name: "VS Code", level: 90 },
      { name: "Arduino", level: 65 },
      { name: "CAD Software", level: 60 },
    ],
    soft: [
      { name: "Problem Solving", level: 90 },
      { name: "Team Collaboration", level: 85 },
      { name: "Critical Thinking", level: 80 },
      { name: "Communication", level: 75 },
    ],
  }

  const projects = [
    {
      title: "Calculator App",
      description: "A modern calculator with advanced mathematical functions and responsive design.",
      tech: ["JavaScript", "HTML", "CSS"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather application with location-based forecasts and interactive maps.",
      tech: ["Python", "API", "Flask"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Personal Blog",
      description: "A responsive blog platform with content management and user authentication.",
      tech: ["JavaScript", "Node.js", "MongoDB"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Arduino LED Controller",
      description: "IoT project controlling LED patterns through mobile app interface.",
      tech: ["Arduino", "C++", "Bluetooth"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Study Planner",
      description: "Task management app helping students organize their academic schedule.",
      tech: ["React", "JavaScript", "LocalStorage"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Portfolio Website",
      description: "This responsive portfolio website showcasing projects and skills.",
      tech: ["Next.js", "Tailwind", "TypeScript"],
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-slate-200 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-blue-800">ANURAG SAINI</div>
            <div className="hidden md:flex space-x-8">
              {["hero", "skills", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors ${
                    activeSection === section ? "text-blue-800 font-medium" : "text-slate-600 hover:text-blue-800"
                  }`}
                >
                  {section === "hero" ? "Home" : section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="pt-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-800 via-blue-700 to-blue-900"
      >
        <div
          className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="mb-8">
            <img
              src="/placeholder.svg?height=200&width=200"
              alt="Anurag Saini"
              className="w-48 h-48 rounded-full mx-auto mb-8 border-4 border-white/20 shadow-2xl"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
            ANURAG SAINI
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium mb-8 text-blue-100">ENTHUSIAST AI/ML</h2>
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed text-blue-100">
            Passionate about solving real-world problems through innovative engineering solutions. Currently pursuing my
            degree while building practical skills in programming and design.
          </p>
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://linkedin.com"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/anu3358"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="mailto:anuragsaini3358@gmail.com"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <button onClick={() => scrollToSection("skills")} className="animate-bounce">
            <ChevronDown className="w-8 h-8 text-white/70" />
          </button>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-800">Technical Skills & Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold mb-6 text-slate-800 capitalize">
                    {category === "programming"
                      ? "Programming"
                      : category === "tools"
                        ? "Tools & Technologies"
                        : "Soft Skills"}
                  </h3>
                  <div className="space-y-4">
                    {skillList.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-slate-700 font-medium">{skill.name}</span>
                          <span className="text-sm text-slate-500">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-800">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="aspect-video bg-slate-200">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-slate-800">{project.title}</h3>
                  <p className="text-slate-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-teal-100 text-teal-800">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Code className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                    <Button size="sm" className="flex-1 bg-teal-600 hover:bg-teal-700">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800/5 to-teal-600/5"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-800">Let's Connect</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold mb-6 text-slate-800">Send a Message</h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="AI/ML/DEEP LEARNING"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  <Button className="w-full bg-teal-600 hover:bg-teal-700 py-3">Send Message</Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <Card className="p-8">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-semibold mb-6 text-slate-800">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <Mail className="w-5 h-5 text-teal-600" />
                      <span className="text-slate-700">anuragsaini3358@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <MapPin className="w-5 h-5 text-teal-600" />
                      <span className="text-slate-700">Gurdaspur, Punjab</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Star className="w-5 h-5 text-teal-600" />
                      <span className="text-slate-700">Available for internships</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-8 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-white">
                <CardContent className="p-0 text-center">
                  <h3 className="text-2xl font-bold mb-4">Motivation</h3>
                  <p className="text-lg font-medium">"SMALL PROGRESS IS STILL PROGRESS"</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-slate-300">© 2024 Anurag Saini. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="https://linkedin.com" className="text-slate-300 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/anu3358" className="text-slate-300 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="mailto:anuragsaini3358@gmail.com" className="text-slate-300 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
