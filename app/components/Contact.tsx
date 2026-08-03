"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const contactInfo = [
  {
    icon: <HiMail className="text-xl" />,
    label: "Email",
    value: "kiadtiphong.wongmui@gmail.com",
    href: "mailto:kiadtiphong.wongmui@gmail.com"
  },
  {
    icon: <HiPhone className="text-xl" />,
    label: "Phone",
    value: "0631298537",
    href: "tel:+66631298537",
  },
  {
    icon: <HiLocationMarker className="text-xl" />,
    label: "Location",
    value: "Thailand",
    href: "#",
  },
];

const socials = [
  {
    icon: <FaGithub className="text-xl" />,
    label: "GitHub",
    href: "https://github.com/kiadtiphong307",
    color: "hover:text-white",
  },
  {
    icon: <FaLinkedin className="text-xl" />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kiadtiphong-wongmui-001376362",
    color: "hover:text-blue-400",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            ติดต่อ<span className="gradient-text">ฉัน</span>
          </h2>
          <p className="text-text-muted mt-4 max-w-md mx-auto">
            สนใจร่วมงาน หรืออยากพูดคุย สามารถติดต่อผมได้เลยครับ
          </p>
        </motion.div>

        <div className="flex justify-center">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-lg space-y-8"
          >
            {/* Contact cards */}
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-center gap-6 p-6 rounded-2xl gradient-border hover:bg-surface-light/50 transition-colors duration-300 group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary text-2xl group-hover:bg-primary/20 transition-colors">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-text-muted mb-1">{info.label}</p>
                    <p className="text-lg text-text-primary font-medium">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social links */}
            <div className="flex flex-col items-center">
              <p className="text-sm text-text-muted mb-6">Find me on</p>
              <div className="flex gap-4">
                {socials.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-5 rounded-2xl gradient-border text-2xl text-text-muted ${social.color} transition-colors duration-300 bg-surface-light/30`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
