import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">ANURAG SAINI</h3>
            <p className="text-blue-200">Enthusiast AI/ML Engineer</p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-blue-800 rounded-full hover:bg-blue-700 transition-colors duration-200"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/anu3358"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-blue-800 rounded-full hover:bg-blue-700 transition-colors duration-200"
            >
              <Github size={20} />
            </a>
            <a
              href="mailto:anuragsaini3358@gmail.com"
              className="p-2 bg-blue-800 rounded-full hover:bg-blue-700 transition-colors duration-200"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-200">
            © {new Date().getFullYear()} Anurag Saini. All rights reserved. Built with passion and dedication.
          </p>
        </div>
      </div>
    </footer>
  )
}
