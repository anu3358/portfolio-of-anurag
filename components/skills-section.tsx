"use client"

import { useEffect, useRef, useState } from "react"
import { Code, Wrench, Users } from "lucide-react"

const skillsData = {
  Programming: {
    icon: Code,
    skills: [
      { name: "Python", level: 85 },
      { name: "C++", level: 75 },
      { name: "JavaScript", level: 70 },
      { name: "HTML/CSS", level: 80 },
    ],
  },
  "Tools & Technologies": {
    icon: Wrench,
    skills: [
      { name: "Git", level: 70 },
      { name: "VS Code", level: 90 },
      { name: "Arduino", level: 65 },
      { name: "CAD Software", level: 60 },
    ],
  },
  "Soft Skills": {
    icon: Users,
    skills: [
      { name: "Problem Solving", level: 85 },
      { name: "Team Collaboration", level: 80 },
      { name: "Critical Thinking", level: 85 },
      { name: "Communication", level: 75 },
    ],
  },
}

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-16">Technical Skills & Expertise</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skillsData).map(([category, data], categoryIndex) => {
            const IconComponent = data.icon
            return (
              <div
                key={category}
                className={`bg-slate-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${
                  isVisible ? "animate-slide-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${categoryIndex * 200}ms` }}
              >
                <div className="flex items-center mb-6">
                  <IconComponent className="text-teal-600 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-blue-900">{category}</h3>
                </div>

                <div className="space-y-4">
                  {data.skills.map((skill, index) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-teal-600 font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-teal-500 to-teal-600 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: isVisible ? `${skill.level}%` : "0%",
                            transitionDelay: `${categoryIndex * 200 + index * 100}ms`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
