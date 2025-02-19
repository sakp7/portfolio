"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

// Animation variants
const slideIn = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function Page() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B0F1A] to-[#151B2E] text-white">
      {/* Navigation */}
      <header className="fixed top-0 w-full z-40 backdrop-blur-sm bg-[#0B0F1A]/80 border-b border-purple-500/20">
        <nav className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-semibold text-purple-500 hover:text-purple-400 transition-colors">
              Portfolio
            </Link>
            <ul className="hidden md:flex items-center gap-8">
              {[ "skills", "projects","blog", "education", "contact"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className="text-gray-300 hover:text-white transition-colors capitalize"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
{/* Hero Section */}
<section id="home" className="min-h-screen flex items-center pt-20">
  <div className="max-w-7xl mx-auto px-4 py-20">
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="flex flex-col md:flex-row items-center justify-between gap-12"
    >
      <motion.div variants={slideIn} className="flex-1 space-y-6">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
          Ram Saketh Pulijala
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-300 font-light">
          Software Developer & ML Engineer
        </h2>
        <p className="text-lg text-gray-400 max-w-xl">
          A passionate developer with expertise in Machine Learning, Android Development, and Generative AI.
          Building innovative solutions that make a difference.
        </p>
        <div className="flex gap-4">
          <a href="/RamResume.pdf" download="Ram Saketh Resume.pdf">
            <Button variant="default" className="bg-purple-600 hover:bg-purple-700">
              Download CV
            </Button>
          </a>
          <a href="mailto:sakethpulijala@gmail.com">
            <Button variant="outline" className="border-purple-500 text-black ">
              Contact Me
            </Button>
          </a>
        </div>
      </motion.div>
      <motion.div variants={slideIn} className="flex-shrink-0">
        <div className="relative w-96 h-96 md:w-150 md:h-150 rounded-full overflow-hidden border-4 border-purple-500/20">
          <Image src="/imgimg.jpeg" alt="Profile photo" fill className="object-cover" priority />
        </div>
      </motion.div>
    </motion.div>
  </div>
</section>


      {/* Skills & Expertise Section with Violet Shades */}
<section id="skills" className="py-20 bg-[#0A0C1D]">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-16 text-[#C77DFF]">
      Skills & Expertise
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        { 
          title: "Generative AI", 
          icon: "🤖", 
          skills: ["Langchain", "Agno Agents", "RAG", "Multimodels"],
          bg: "bg-[#4E2078]",
          border: "border-[#A854F5]",
        },
        { 
          title: "Machine Learning", 
          icon: "⚙️", 
          skills: ["TensorFlow", "Scikit-learn", "Computer Vision"],
          bg: "bg-[#4E2078]",
          border: "border-[#BF7FFF]",
        },
        { 
          title: "Backend", 
          icon: "🌐", 
          skills: ["FastAPI", "Firebase", "Railway"],
          bg: "bg-[#4E2078]",
          border: "border-[#D29CFF]",
        },
        { 
          title: "Android Development", 
          icon: "📱", 
          skills: ["Kotlin", "XML", "Android SDK", "Firebase"],
          bg: "bg-[#4E2078]",
          border: "border-[#E0AFFF]",
        }
      ].map(({ title, icon, skills, bg, border }) => (
        <div 
          key={title} 
          className={`p-6 rounded-xl shadow-lg ${bg} ${border} border transition-all duration-300 hover:scale-105 hover:shadow-purple-500/30`}
        >
          <h3 className="text-2xl font-semibold text-[#E0AFFF] flex items-center gap-2">
            {icon} {title}
          </h3>
          <ul className="mt-4 text-gray-300">
            {skills.map((skill) => (
              <li key={skill} className="mt-1">• {skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
</section>

   {/* Projects Section with Violet Shades */}
<section id="projects" className="py-20 bg-[#0A0C1D]">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-16 text-[#C77DFF]">
      Projects
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Generative AI Projects */}
      <div className="col-span-3">
        <h3 className="text-2xl font-semibold text-[#A854F5] mb-4">Generative AI</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Skin Care RAG", description: "An AI-powered RAG model for skin care insights.", tech: ["LangChain", "TensorFlow", "VectorDB"], bg: "bg-[#2D1B4A]", border: "border-[#A854F5]" },
            { title: "Agentic RAG", description: "A multi-agent RAG framework with enhanced memory.", tech: ["CrewAI", "LangChain", "LLM"], bg: "bg-[#2D1B4A]", border: "border-[#BF7FFF]" },
            { title: "Chat with Website", description: "A FastAPI-based chatbot that enables conversation with website content.", tech: ["FastAPI", "LlamaIndex", "VectorDB"], bg: "bg-[#2D1B4A]", border: "border-[#D29CFF]" }
          ].map((project) => (
            <div key={project.title} className={`${project.bg} ${project.border} border rounded-xl p-6 shadow-lg`}>
              <h4 className="text-xl font-bold text-[#E0AFFF]">{project.title}</h4>
              <p className="text-[#E0E0E0] mt-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tech) => (
                  <span key={tech} className="bg-[#622A96] text-[#F2C5FF] px-2 py-1 rounded-lg text-sm">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Machine Learning Projects */}
      <div className="col-span-3 mt-8">
        <h3 className="text-2xl font-semibold text-[#A854F5] mb-4">Machine Learning</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Sentiment Analysis", description: "A machine learning model analyzing sentiment in text.", tech: ["TensorFlow", "NLP", "Python"], bg: "bg-[#2D1B4A]", border: "border-[#E0AFFF]" },
            { title: "Car Price Prediction", description: "A predictive model for car pricing based on historical data.", tech: ["Scikit-learn", "Pandas", "Machine Learning"], bg: "bg-[#2D1B4A]", border: "border-[#F2C5FF]" }
          ].map((project) => (
            <div key={project.title} className={`${project.bg} ${project.border} border rounded-xl p-6 shadow-lg`}>
              <h4 className="text-xl font-bold text-[#E0AFFF]">{project.title}</h4>
              <p className="text-[#E0E0E0] mt-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tech) => (
                  <span key={tech} className="bg-[#4E2078] text-[#F2C5FF] px-2 py-1 rounded-lg text-sm">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Android Development Projects */}
      <div className="col-span-3 mt-8">
        <h3 className="text-2xl font-semibold text-[#A854F5] mb-4">Android Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Flex Pay", description: "A flexible payment system built using Android and Firebase.", tech: ["Kotlin", "Firebase", "Android SDK"], bg: "bg-[#2D1B4A]", border: "border-[#E0AFFF]" },
            { title: "Skin Sense AI", description: "An AI-powered Android app for skin disease detection.", tech: ["TensorFlow", "Kotlin", "Computer Vision"], bg: "bg-[#2D1B4A]", border: "border-[#F2C5FF]" }
          ].map((project) => (
            <div key={project.title} className={`${project.bg} ${project.border} border rounded-xl p-6 shadow-lg`}>
              <h4 className="text-xl font-bold text-[#E0AFFF]">{project.title}</h4>
              <p className="text-[#E0E0E0] mt-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tech) => (
                  <span key={tech} className="bg-[#4E2078] text-[#F2C5FF] px-2 py-1 rounded-lg text-sm">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Blog Section */}
      <section id="blog" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={slideIn}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text"
          >
            Latest Blog Posts
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Building Scalable ML Systems",
                date: "Feb 15, 2024",
                readTime: "5 min read",
                description: "A deep dive into architecting machine learning systems that scale.",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20(3732)-sv8C0pJcCiUyqMT5C4FlzZG1Y8GG4v.png",
              },
              {
                title: "The Future of Mobile Development",
                date: "Feb 10, 2024",
                readTime: "7 min read",
                description: "Exploring emerging trends in mobile app development for 2024 and beyond.",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20(3732)-sv8C0pJcCiUyqMT5C4FlzZG1Y8GG4v.png",
              },
              {
                title: "Web Performance Optimization",
                date: "Feb 5, 2024",
                readTime: "6 min read",
                description: "Essential techniques for building lightning-fast web applications.",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20(3732)-sv8C0pJcCiUyqMT5C4FlzZG1Y8GG4v.png",
              },
            ].map((post, index) => (
              <motion.div
                key={post.title}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={slideIn}
                whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.2 },
                }}
              >
                <Card className="overflow-hidden bg-[#1A1F35] border-purple-500/20 transition-all duration-300 hover:bg-[#232942] hover:shadow-xl hover:shadow-purple-500/10">
                  <div className="relative h-48">
                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex justify-between text-sm text-gray-400">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-purple-400">{post.title}</h3>
                    <p className="text-gray-400">{post.description}</p>
                    <Button
                      variant="outline"
                      className="w-full border-purple-500 text-purple-400 hover:bg-purple-500/10"
                      onClick={() => window.open("https://medium.com", "_blank")}
                    >
                      Read on Medium
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto px-4"
        >
          <motion.h2
            variants={slideIn}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text"
          >
            Education
          </motion.h2>
          <div className="space-y-8">
            {[
              {
                degree: "Bachelor of Technology in Computer Science",
                school: "Anurag University",
                period: "2020-2024",
                specialization: "Graduated with Distinction, achieving an 8.64 CGPA",
              },
              {
                degree: "12th",
                school: "Sri Chaitanya Junior College",
                period: "2018-2020",
                specialization: "JEE 95 percentile Board 94.6%",
              },
              {
                degree: "10th",
                school: "Kakatiya High School",
                period: "2018",
                specialization: "CGPA: 9.3",
              },
            ].map((edu) => (
              <motion.div key={edu.degree} variants={slideIn}>
                <Card className="p-6 bg-[#1A1F35] border-purple-500/20">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-purple-400">{edu.degree}</h3>
                      <p className="text-gray-400 mt-2">{edu.school}</p>
                      <p className="text-gray-500 mt-1">{edu.specialization}</p>
                    </div>
                    <Badge variant="outline" className="border-purple-500 text-purple-400">
                      {edu.period}
                    </Badge>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Footer/Contact Section */}
      <footer id="contact" className="py-20 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h2
              variants={slideIn}
              className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text"
            >
              Let's Connect
            </motion.h2>
            <motion.div variants={slideIn} className="flex justify-center gap-6 mb-8">
              {[
                { icon: <Github className="w-6 h-6" />, href: "https://github.com/sakp7", target: "_blank", rel: "noopener noreferrer" },
                { icon: <Linkedin className="w-6 h-6" />, href: "https://www.linkedin.com/in/ramsaketh", target: "_blank", rel: "noopener noreferrer" },
                { icon: <Mail className="w-6 h-6" />, href: "mailto:sakethpulijala@gmail.com", target: "_blank", rel: "noopener noreferrer" },
                  
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                >
                  {social.icon}
                </Link>
              ))}
            </motion.div>
            <motion.p variants={slideIn} className="text-gray-400">
              © 2025 Ram Saketh Pulijala. All rights reserved.
            </motion.p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}

