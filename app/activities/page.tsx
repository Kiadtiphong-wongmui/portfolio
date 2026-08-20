"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import {
  HiArrowLeft,
  HiLocationMarker,
  HiCalendar,
  HiUserGroup,
  HiX,
  HiSparkles,
  HiEye,
  HiCheckCircle,
  HiAcademicCap,
  HiCollection,
  HiBookmarkAlt,
  HiChevronLeft,
  HiChevronRight,
} from "react-icons/hi";
import { sampleActivities, textActivities, ActivityItem } from "../data/activities";
import Footer from "../components/Footer";

export default function ActivitiesPage() {
  const [activeModalActivity, setActiveModalActivity] = useState<ActivityItem | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  const openModal = (act: ActivityItem) => {
    setActiveModalActivity(act);
    setActiveImageIndex(0);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <div>
        {/* Top Navigation */}
        <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border py-4 px-6">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-primary transition-colors group"
            >
              <HiArrowLeft className="group-hover:-translate-x-1 transition-transform text-lg" />
              <span>กลับสู่หน้าหลัก</span>
            </Link>
            <span className="text-sm font-bold gradient-text">Kiadtiphong | Activities</span>
          </div>
        </header>

        <main className="pt-28 pb-20 px-4 sm:px-6 max-w-6xl mx-auto">
          {/* Header Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3 flex items-center justify-center gap-2">
              <HiAcademicCap className="text-primary text-xl" /> Activities & Experience
            </p>
            <h1 className="text-3xl sm:text-5xl font-extrabold mb-4">
              กิจกรรมและ<span className="gradient-text">ผลงาน</span>
            </h1>
            <p className="text-text-muted text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              รวบรวมกิจกรรมที่เคยเข้าร่วม ประสบการณ์ และผลงานต่างๆ
            </p>
          </motion.div>

          {/* Section 1: Text-Based Activity List */}
          {textActivities.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mb-14"
            >
              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                  <HiBookmarkAlt className="text-xl" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">รายการกิจกรรมที่เคยเข้าร่วม</h2>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {textActivities.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.08 }}
                    className="gradient-border p-5 rounded-2xl bg-surface/30 hover:bg-surface-light/50 transition-all duration-300 flex items-start gap-4 group"
                  >
                    {/* Number Badge */}
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-accent text-white font-extrabold text-sm flex items-center justify-center shrink-0 shadow-md shadow-primary/20 group-hover:scale-110 transition-transform">
                      {item.number || idx + 1}
                    </div>

                    {/* Text Details */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                        <h3 className="font-semibold text-sm text-foreground group-hover:text-primary-light transition-colors">
                          {item.title}
                        </h3>
                        {item.date && (
                          <span className="text-[11px] font-medium text-primary bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/20 shrink-0">
                            {item.date}
                          </span>
                        )}
                      </div>
                      {item.description && (
                        <p className="text-xs text-text-muted leading-relaxed mt-1">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Section 2: Detailed Activity Cards with Images */}
          <motion.section
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <HiSparkles className="text-xl" />
              </div>
              <div>
                <h2 className="text-xl font-bold">กิจกรรมและภาพบรรยากาศ</h2>
                <p className="text-xs text-text-muted">รายละเอียดกิจกรรมหลักพร้อมรูปภาพประกอบ</p>
              </div>
            </div>

            {/* Empty State */}
            {sampleActivities.length === 0 && (
              <div className="text-center py-16 gradient-border p-8 rounded-2xl bg-surface/30">
                <HiCollection className="text-5xl text-text-muted mx-auto mb-3 opacity-50" />
                <h3 className="text-lg font-bold mb-1">ยังไม่มีข้อมูลกิจกรรมแบบการ์ดภาพ</h3>
                <p className="text-xs text-text-muted max-w-sm mx-auto">
                  สามารถเพิ่มข้อมูลกิจกรรมเพิ่มเติมได้ที่ <code className="text-primary">app/data/activities.ts</code>
                </p>
              </div>
            )}

            {/* Activities Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {sampleActivities.map((act, index) => (
                <motion.div
                  key={act.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="gradient-border rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 bg-surface/40 hover:shadow-xl hover:shadow-primary/5"
                >
                  {/* Image Area */}
                  <div>
                    <div
                      onClick={() => openModal(act)}
                      className="relative h-56 bg-surface-light overflow-hidden cursor-pointer group"
                    >
                      {act.images.length > 0 ? (
                        <Image
                          src={act.images[0]}
                          alt={act.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-primary/10 via-surface to-accent/10 group-hover:scale-105 transition-transform duration-300">
                          <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-2">
                            <HiSparkles className="text-3xl" />
                          </div>
                          <span className="text-xs text-text-muted font-medium">คลิกขยายดูรูปและรายละเอียดเต็ม</span>
                        </div>
                      )}

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full bg-primary text-background shadow-lg">
                          <HiEye className="text-base" /> ดูรายละเอียดรูปเต็ม
                        </span>
                      </div>

                      {/* Image Count Badge */}
                      {act.images.length > 1 && (
                        <div className="absolute bottom-3 right-3 z-10 px-2.5 py-1 rounded-md bg-background/80 backdrop-blur-md text-[11px] font-semibold text-text-primary border border-border">
                          1/{act.images.length} รูป
                        </div>
                      )}
                    </div>

                    {/* Content Area */}
                    <div className="p-6">
                      <div className="flex flex-wrap items-center justify-between text-xs text-text-muted mb-3 gap-2">
                        <span className="flex items-center gap-1 text-primary font-medium">
                          <HiLocationMarker /> {act.locationName}
                        </span>
                        <span className="flex items-center gap-1">
                          <HiCalendar /> {act.date}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold mb-2 leading-snug hover:text-primary-light transition-colors">
                        {act.title}
                      </h3>

                      {/* Role */}
                      <div className="flex items-center gap-1.5 text-xs text-accent font-medium mb-3">
                        <HiUserGroup className="text-sm" />
                        <span>บทบาท: {act.role}</span>
                      </div>

                      <p className="text-text-muted text-xs leading-relaxed mb-4 line-clamp-3">
                        {act.description}
                      </p>

                      {/* Skill Badges */}
                      <div className="flex flex-wrap gap-1.5">
                        {act.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-0.5 text-[11px] bg-primary/10 text-primary-light border border-primary/20 rounded-md"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Footer Action */}
                  <div className="px-6 pb-6 pt-2 border-t border-border/40 flex items-center justify-between">
                    <button
                      onClick={() => openModal(act)}
                      className="text-xs font-semibold text-primary hover:text-primary-light flex items-center gap-1 transition-colors"
                    >
                      <HiEye /> รายละเอียดทั้งหมด
                    </button>
                    <span className="text-[11px] text-text-muted">
                      {act.images.length} รูปภาพ
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </main>
      </div>

      {/* Lightbox / Detail Modal */}
      <AnimatePresence>
        {activeModalActivity && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModalActivity(null)}
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
                onClick={() => setActiveModalActivity(null)}
                className="absolute top-4 right-4 text-text-muted hover:text-text-primary p-2 rounded-full hover:bg-surface-lighter transition-colors z-10"
                aria-label="Close modal"
              >
                <HiX className="text-xl" />
              </button>

              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                  <HiSparkles className="text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold leading-tight">{activeModalActivity.title}</h3>
                </div>
              </div>

              {/* Image Gallery / Carousel Banner */}
              <div className="relative w-full h-64 sm:h-80 bg-background/60 rounded-xl overflow-hidden border border-border flex items-center justify-center my-3 group/modalImg">
                {activeModalActivity.images.length > 0 ? (
                  <>
                    <Image
                      key={activeImageIndex}
                      src={activeModalActivity.images[activeImageIndex]}
                      alt={`${activeModalActivity.title} - Image ${activeImageIndex + 1}`}
                      fill
                      className="object-contain"
                    />

                    {/* Previous Button */}
                    {activeModalActivity.images.length > 1 && (
                      <button
                        onClick={() =>
                          setActiveImageIndex((prev) =>
                            prev === 0 ? activeModalActivity.images.length - 1 : prev - 1
                          )
                        }
                        className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/70 hover:bg-background text-text-primary border border-border backdrop-blur-md transition-colors"
                        aria-label="Previous image"
                      >
                        <HiChevronLeft className="text-xl" />
                      </button>
                    )}

                    {/* Next Button */}
                    {activeModalActivity.images.length > 1 && (
                      <button
                        onClick={() =>
                          setActiveImageIndex((prev) =>
                            prev === activeModalActivity.images.length - 1 ? 0 : prev + 1
                          )
                        }
                        className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/70 hover:bg-background text-text-primary border border-border backdrop-blur-md transition-colors"
                        aria-label="Next image"
                      >
                        <HiChevronRight className="text-xl" />
                      </button>
                    )}

                    {/* Thumbnail Selector Dots */}
                    {activeModalActivity.images.length > 1 && (
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-md border border-border">
                        {activeModalActivity.images.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setActiveImageIndex(i)}
                            className={`w-2.5 h-2.5 rounded-full transition-all ${
                              i === activeImageIndex
                                ? "bg-primary w-5"
                                : "bg-text-muted/50 hover:bg-text-muted"
                            }`}
                            aria-label={`Go to image ${i + 1}`}
                          />
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center p-6 text-center">
                    <HiSparkles className="text-6xl text-primary mb-3 opacity-60" />
                    <p className="text-sm font-semibold text-text-primary">
                      {activeModalActivity.title}
                    </p>
                  </div>
                )}
              </div>

              {/* Metadata */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-text-muted mb-4 pb-3 border-b border-border/40">
                <span className="flex items-center gap-1.5 text-primary font-medium">
                  <HiLocationMarker /> {activeModalActivity.locationName}
                </span>
                <span className="flex items-center gap-1.5">
                  <HiCalendar /> {activeModalActivity.date}
                </span>
                <span className="flex items-center gap-1.5 text-accent font-medium">
                  <HiUserGroup /> บทบาท: {activeModalActivity.role}
                </span>
              </div>

              {/* Description */}
              <div className="mb-4">
                <h4 className="text-xs font-semibold text-text-muted uppercase mb-1">
                  รายละเอียดสิ่งที่ได้ทำในกิจกรรม:
                </h4>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {activeModalActivity.description}
                </p>
              </div>

              {/* Skills Learned */}
              <div className="mt-auto">
                <h4 className="text-xs font-semibold text-text-muted uppercase mb-2">
                  ทักษะและสิ่งที่ได้รับ:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalActivity.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs bg-primary/10 text-primary-light border border-primary/20 rounded-full flex items-center gap-1"
                    >
                      <HiCheckCircle className="text-primary" /> {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
