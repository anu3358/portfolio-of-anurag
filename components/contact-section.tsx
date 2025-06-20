"use client"

import type React from "react"

import { useState } from "react"
import { Mail, MapPin, Phone, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <div className="text-6xl md:text-8xl font-bold text-blue-900 transform -rotate-12">
          SMALL PROGRESS IS STILL A PROGRESS
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-16">Let's Connect</h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-slate-50 rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-900 mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="anuragsaini3358@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <Input
                  type="text"
                  name="subject"
                  placeholder="AI/ML/DEEP LEARNING"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-blue-900 mb-6">Get in Touch</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                I'm always excited to discuss new opportunities, collaborate on projects, or simply connect with fellow
                enthusiasts in AI/ML and engineering.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-teal-100 p-3 rounded-full">
                  <Mail className="text-teal-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900">Email</h4>
                  <p className="text-gray-600">anuragsaini3358@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-teal-100 p-3 rounded-full">
                  <Phone className="text-teal-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900">Phone</h4>
                  <p className="text-gray-600">Available upon request</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-teal-100 p-3 rounded-full">
                  <MapPin className="text-teal-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900">Location</h4>
                  <p className="text-gray-600">GURDASPUR, PUNJAB</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-teal-100 p-3 rounded-full">
                  <Clock className="text-teal-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900">Availability</h4>
                  <p className="text-gray-600">Open for internships and collaborations</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg p-6 text-white">
              <h4 className="font-semibold mb-2">Ready to Collaborate?</h4>
              <p className="text-sm opacity-90">
                I'm actively seeking internship opportunities and exciting projects in AI/ML, software development, and
                engineering innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
