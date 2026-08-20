"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { HiBadgeCheck, HiExternalLink, HiX, HiEye, HiSparkles } from "react-icons/hi";
import Image from "next/image";

type Certificate = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  skills: string[];
  image: string;
  credentialUrl?: string;
};

const sampleCertificates: Certificate[] = [
  {
    id: "cert-ba-01",
    title: "หลักสูตรนักวิเคราะห์ธุรกิจ (Business Analyst)",
    issuer: "Depa x บริษัท อัลฟ่า คันเซ็ลเลอร์ จำกัด",
    date: "7 พ.ย. 2568 ",
    description:
      "โครงการพัฒนาทักษะและสร้างโอกาสการทำงาน สำหรับนักวิเคราะห์ธุรกิจรุ่นใหม่ (30 ชั่วโมง) ครอบคลุม Business Data Analysis Process, Statistical Analysis, Data Analytics กับ Altair AI Studio และการทำ Business Dashboard ด้วย Power BI",
    skills: [
      "Business Analysis",
      "Data Analysis",
      "Power BI",
      "Altair AI Studio",
      "Statistics",
    ],
    image: "/certificates/cert_ba_01.jpg",
  },
];

export default function Certificates() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeModalCert, setActiveModalCert] = useState<Certificate | null>(null);

  return (
    <section id="certificates" className="section-padding bg-surface/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3 flex items-center justify-center gap-2">
            <HiSparkles className="text-primary" /> Certifications & Awards
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            เกียรติบัตรและ<span className="gradient-text">ใบรับรอง</span>
          </h2>
          <p className="text-text-muted text-sm max-w-xl mx-auto mt-3">
            รวบรวมเกียรติบัตร รางวัลการแข่งขัน และใบประกาศนียบัตรการอบรมด้านการพัฒนาซอฟต์แวร์
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleCertificates.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group gradient-border rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 bg-surface/50"
            >
              {/* Top Image Preview Area */}
              <div>
                <div
                  onClick={() => setActiveModalCert(cert)}
                  className="relative h-48 bg-linear-to-br from-primary/10 via-surface to-accent/10 flex items-center justify-center overflow-hidden cursor-pointer group/img"
                >
                  {cert.image.startsWith("/") && !cert.image.includes("sample-cert.png") ? (
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-cover group-hover/img:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center p-6 text-center group-hover/img:scale-105 transition-transform duration-300">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2 border border-primary/20 text-primary">
                        <HiBadgeCheck className="text-3xl" />
                      </div>
                      <span className="text-xs text-text-muted font-medium">Click to view preview</span>
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-background/60 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                    <span className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-primary text-background shadow-md">
                      <HiEye className="text-base" /> ขยายดูรูป
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6">
                  <div className="flex items-center justify-between text-xs text-primary font-medium mb-2">
                    <span>{cert.issuer}</span>
                    <span className="text-text-muted">{cert.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary-light transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-text-muted text-xs leading-relaxed mb-4 line-clamp-2">
                    {cert.description}
                  </p>

                  {/* Skill Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-0.5 text-[11px] bg-surface-lighter/50 text-text-secondary rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Action Footer */}
              <div className="px-6 pb-6 pt-2 border-t border-border/40 flex items-center justify-between">
                <button
                  onClick={() => setActiveModalCert(cert)}
                  className="text-xs font-medium text-primary hover:text-primary-light flex items-center gap-1 transition-colors"
                >
                  <HiEye /> รายละเอียด
                </button>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-text-muted hover:text-primary-light flex items-center gap-1 transition-colors"
                  >
                    <HiExternalLink /> Verify
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox / Image Modal */}
      <AnimatePresence>
        {activeModalCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModalCert(null)}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="gradient-border bg-surface rounded-2xl max-w-3xl w-full p-6 sm:p-8 relative shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalCert(null)}
                className="absolute top-4 right-4 text-text-muted hover:text-text-primary p-2 rounded-full hover:bg-surface-lighter transition-colors z-10"
                aria-label="Close modal"
              >
                <HiX className="text-xl" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                  <HiBadgeCheck className="text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{activeModalCert.title}</h3>
                  <p className="text-xs text-primary">{activeModalCert.issuer} • {activeModalCert.date}</p>
                </div>
              </div>

              {/* Certificate Image View */}
              <div className="relative w-full h-64 sm:h-80 bg-background/50 rounded-xl overflow-hidden border border-border flex items-center justify-center my-4">
                {activeModalCert.image.startsWith("/") && !activeModalCert.image.includes("sample-cert.png") ? (
                  <Image
                    src={activeModalCert.image}
                    alt={activeModalCert.title}
                    fill
                    className="object-contain"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center p-6 text-center">
                    <HiBadgeCheck className="text-6xl text-primary mb-3 opacity-60" />
                    <p className="text-sm font-semibold text-text-primary">{activeModalCert.title}</p>
                    <p className="text-xs text-text-muted mt-1 max-w-sm">
                      คุณสามารถวางไฟล์รูปเกียรติบัตรจริงไว้ในโฟลเดอร์ <code className="text-primary bg-surface-lighter px-2 py-0.5 rounded">public/images/certificates/</code> แล้วเปลี่ยนเส้นทางไฟล์ในส่วนข้อมูล
                    </p>
                  </div>
                )}
              </div>

              <p className="text-sm text-text-muted leading-relaxed mb-4">
                {activeModalCert.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {activeModalCert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs bg-primary/10 text-primary-light border border-primary/20 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
