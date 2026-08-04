"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  image: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "E-Learning Platform",
    description:
      "ระบบ e-learning ครบวงจร รองรับการสร้างคอร์ส เรียนออนไลน์ ระบบ Q&A และ certificate พัฒนาเป็นทีมสำหรับโปรเจกต์จบการศึกษา",
    tech: ["Nuxt.js", "Go", "MySQL", "Docker",],
    featured: false,
      // demo: "https://elearning.csmju.com",
    image: "/images/banner/e-learning-csmju.png",
  },
  {
    title: "Comcamp23",
    description:
      "เว็บไซต์ประชาสัมพันธ์ ค่ายยุวชนคอมพิวเตอร์ประจำปี 2567 ณ มหาวิทยาลัยแม่โจ้ ",
    tech: ["Vue.js", "JavaScript", "CSS"],
    // demo: "https://www.cs.mju.ac.th/comcamp/",
    image: "/images/banner/comcamp23.png",
  },
  {
    title: "E-Sport Science Week67",
    description:
      "เว็บไซต์ประกาศการแข่งขัน E-Sport ROV ในงานสัปดาห์วิทยาศาสตร์ประจำปี 2567 ณ มหาวิทยาลัยแม่โจ้ ",
    tech: ["HTML", "JavaScript", "Tailwind CSS"],
    // demo: "https://www.cs.mju.ac.th/e-sports_sciweek/",
    image: "/images/banner/e-port-rov-mju67.png",
  },
  {
    title: "BoBill ",
    description:
      "ระบบจัดการและออกเอกสารใบแจ้งหนี้ (Invoice) สำหรับธุรกิจขนาดเล็ก",
    tech: ["Next.js", "Node.js", "TypeScript", "PostgreSQL","Tailwind CSS", ],
    image: "/images/banner/bobill.png",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
            Projects
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="gradient-text">ผลงาน</span>
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className={`group gradient-border rounded-2xl overflow-hidden transition-all duration-300 ${
                project.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Image/Emoji area */}
              <div className="relative h-48 bg-linear-to-br from-primary/5 to-accent/5 flex items-center justify-center overflow-hidden">
                {project.image.startsWith("/") ? (
                  <div className="relative w-full h-full group-hover:scale-110 transition-transform duration-500">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                ) : (
                  <span className="text-6xl group-hover:scale-110 transition-transform duration-500">
                    {project.image}
                  </span>
                )}
                {project.featured && (
                  <span className="absolute top-4 right-4 px-3 py-1 text-xs font-medium bg-primary/20 text-primary-light rounded-full border border-primary/30">
                    Featured
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-light transition-colors">
                  {project.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs bg-surface-lighter/50 text-text-secondary rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-text-muted hover:text-primary-light transition-colors"
                    >
                      <FaGithub />
                      Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-text-muted hover:text-primary-light transition-colors"
                    >
                      <FaExternalLinkAlt className="text-xs" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
