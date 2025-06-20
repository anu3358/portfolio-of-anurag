"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 animate-fade-in">
          <Image
            src="/placeholder.svg?height=200&width=200"
            alt="Anurag Saini"
            width={200}
            height={200}
            className="rounded-full mx-auto mb-6 border-4 border-white shadow-xl"
          />
        </div>

        <div className="animate-slide-up">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-4">ANURAG SAINI</h1>
          <h2 className="text-xl md:text-2xl text-teal-600 font-semibold mb-6">ENTHUSIAST AI/ML</h2>

          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8 leading-relaxed">
            Passionate about solving real-world problems through innovative engineering solutions. Currently pursuing my
            degree while building practical skills in programming and design.
          </p>

          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-blue-900"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/anu3358"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-blue-900"
            >
              <Github size={24} />
            </a>
            <a
              href="mailto:anuragsaini3358@gmail.com"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-blue-900"
            >
              <Mail size={24} />
            </a>
          </div>

          <Button
            onClick={scrollToContact}
            className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  )
}
