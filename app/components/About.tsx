"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { HiCode, HiLightningBolt, HiUserGroup } from "react-icons/hi";
import Image from "next/image";

const highlights = [
  {
    icon: <HiCode className="text-2xl text-primary" />,
    title: "Adaptive Learner",
    description: "ปรับตัวกับเทคโนโลยีใหม่ได้รวดเร็ว พร้อมเรียนรู้สิ่งใหม่",
  },
  {
    icon: <HiLightningBolt className="text-2xl text-primary" />,
    title: "Problem Solver",
    description: "วิเคราะห์และแก้ไขปัญหาอย่างเป็นระบบ",
  },
  {
    icon: <HiUserGroup className="text-2xl text-primary" />,
    title: "Team Player",
    description: "ทำงานร่วมกับทีมได้ดี สื่อสารชัดเจน",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
            About Me
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            เกี่ยวกับ<span className="gradient-text">ฉัน</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 animate-[spin_20s_linear_infinite]" />
              {/* Photo container */}
              <div className="absolute inset-4 rounded-full bg-surface-light overflow-hidden flex items-center justify-center glow">
                <Image
                  src="/images/banner/Kiadtiphong.jpg"
                  alt="Kiadtiphong Profile"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Right: Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-semibold mb-4">
              Full Stack Developer
            </h3>
            <p className="text-text-secondary leading-relaxed mb-4">
              สวัสดี! ผมชื่อ บอส เกียรติ์ติพงษ์ วงศ์มุ่ย จบการศึกษา
              สาขาวิทยาการคอมพิวเตอร์ คณะวิทยาศาสตร์ มหาวิทยาลัยแม่โจ้ 
            </p>
            <p className="text-text-secondary leading-relaxed mb-8">
              มีประสบการณ์ และเชี่ยวชาญด้าน Full Stack, Infrastructure 
              และ Server พร้อมที่จะเรียนรู้เทคโนโลยีใหม่ ๆ และพัฒนาตัวเองอยู่เสมอ
            </p>

            {/* Info chips */}
            <div className="flex flex-wrap gap-3 mb-8">
              {["จบการศึกษา", "Chiang Rai, Thailand", "Open to work"].map(
                (item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full glass text-sm text-text-secondary"
                  >
                    {item}
                  </span>
                ),
              )}
            </div>
          </motion.div>
        </div>

        {/* Highlight cards */}
        <div className="grid sm:grid-cols-3 gap-6 mt-16">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className="gradient-border p-6 rounded-2xl text-center hover:bg-surface-light/50 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                {item.icon}
              </div>
              <h4 className="font-semibold mb-2">{item.title}</h4>
              <p className="text-sm text-text-muted">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
