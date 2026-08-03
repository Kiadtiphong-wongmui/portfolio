"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiGo,
  SiPostgresql,
  SiMysql,
  SiDocker,
  SiKubernetes,
  SiGit,
  SiGithub,
  SiFigma,
  SiLinux,
  SiNuxtdotjs,
  SiVuedotjs,
  SiMongodb,
  SiNextdotjs,
} from "react-icons/si";

type Skill = {
  name: string;
  icon: React.ReactNode;
  color: string;
};

type SkillCategory = {
  title: string;
  skills: Skill[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "Nuxt.js", icon: <SiNuxtdotjs />, color: "#00DC82" },
      {name: "Next.js", icon: <SiNextdotjs />, color: "#000000"},
      { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
      { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Go", icon: <SiGo />, color: "#00ADD8" },
      { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1" },
      { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Docker", icon: <SiDocker />, color: "#2496ED" },
      { name: "Kubernetes", icon: <SiKubernetes />, color: "#326CE5" },
      { name: "Git", icon: <SiGit />, color: "#F05032" },
      { name: "GitHub", icon: <SiGithub />, color: "#181717" },
      { name: "Linux", icon: <SiLinux />, color: "#FCC624" },
      { name: "Figma", icon: <SiFigma />, color: "#F24E1E" },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-surface/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
            Skills
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="gradient-text">ทักษะ</span>
          </h2>
        </motion.div>

        {/* Skill Categories */}
        <div className="space-y-12">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIdx * 0.15 }}
            >
              <h3 className="text-lg font-semibold text-text-secondary mb-6 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-primary" />
                {category.title}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: catIdx * 0.15 + i * 0.05,
                    }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="group gradient-border p-4 rounded-2xl flex flex-col items-center gap-3 cursor-default hover:bg-surface-light/50 transition-colors duration-300"
                  >
                    <span
                      className="text-3xl transition-transform duration-300 group-hover:scale-110"
                      style={{
                        color:
                          skill.name === "GitHub"
                            ? "currentColor"
                            : skill.color,
                      }}
                    >
                      {skill.icon}
                    </span>
                    <span className="text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
