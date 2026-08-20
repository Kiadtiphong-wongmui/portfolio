"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Link from "next/link";
import { HiAcademicCap, HiBriefcase, HiStar, HiMap, HiArrowRight } from "react-icons/hi";

type TimelineItem = {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  date: string;
  description: string;
  type: "education" | "work" | "Internship";
};

const timeline: TimelineItem[] = [
  {
    icon: <HiAcademicCap className="text-xl" />,
    title: "ปริญญาตรี สาขาวิทยาการคอมพิวเตอร์",
    subtitle: "มหาวิทยาลัยแม่โจ้",
    date: "2022 - 2026 ",
    description:
      "จบการศึกษาสาขาวิทยาการคอมพิวเตอร์ คณะวิทยาศาสตร์ มหาวิทยาลัยแม่โจ้",
    type: "education",
  },
  {
    icon: <HiBriefcase className="text-xl" />,
    title: "โปรเจกต์จบการศึกษา CSMJU MOOC",
    subtitle: "E-Learning Platform",
    date: "2025 - 2026",
    description:
      "พัฒนาระบบ e-learning สำหรับมหาวิทยาลัยแม่โจ้ ร่วมกับทีม ตำแหน่ง Technical Lead ",
    type: "work",
  },
  {
    icon: <HiStar className="text-xl" />,
    title: "ฝึกงาน",
    subtitle: "IGEARGEEK",
    date: "2025",
    description:
      "ฝึกงานจากบริษัท Startup IGEARGEEK ในตำแหน่ง Software Developer ",
    type: "Internship",
  },
  
];

const typeColor = {
  education: "text-blue-400 bg-blue-400/10 border-blue-400/30",
  work: "text-emerald-400 bg-emerald-400/10 border-emerald-400/30",
  Internship: "text-amber-400 bg-amber-400/10 border-amber-400/30",
};

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="education"
      className="section-padding bg-surface/30"
      ref={ref}
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
            Education&Experience
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            การศึกษาและ<span className="gradient-text">ประสบการณ์</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Decorative background elements */}
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
          {timeline.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className={`relative flex items-start gap-6 mb-12 ${
                i % 2 === 0
                  ? "md:flex-row"
                  : "md:flex-row-reverse md:text-right"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.2 + 0.1 }}
                  className={`w-12 h-12 rounded-full border-2 flex items-center justify-center bg-background ${typeColor[item.type]}`}
                >
                  {item.icon}
                </motion.div>
                {/* Dotted connector line to next item or CTA */}
                <div className="absolute top-12 left-1/2 -translate-x-1/2 h-20 w-px border-l-2 border-dotted border-primary/20" />
              </div>

              {/* Content card */}
              <div
                className={`ml-16 md:ml-0 md:w-[calc(50%-3rem)] ${
                  i % 2 === 0 ? "md:pr-8" : "md:pl-8"
                }`}
              >
                <div className="gradient-border p-6 rounded-2xl hover:bg-surface-light/50 transition-colors duration-300">
                  <span className="text-xs text-primary font-medium">
                    {item.date}
                  </span>
                  <h3 className="text-lg font-semibold mt-2 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-primary-light mb-3">
                    {item.subtitle}
                  </p>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Activities CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: timeline.length * 0.2 }}
            className="flex flex-col items-center justify-center pt-6 text-center z-20 relative"
          >
            <Link
              href="/activities"
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-background bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 shadow-[0_0_25px_rgba(52,211,153,0.4)] hover:shadow-[0_0_35px_rgba(52,211,153,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden"
            >
              {/* Subtle light shimmer animation */}
              <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
              
              <HiMap className="text-xl text-background group-hover:rotate-12 transition-transform duration-300" />
              <span className="tracking-wide font-bold">ดูรายละเอียดกิจกรรมเพิ่มเติม</span>
              <HiArrowRight className="text-xl group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
