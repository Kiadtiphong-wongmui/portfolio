"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
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
  HiBadgeCheck,
  HiCheckCircle,
} from "react-icons/hi";
import { sampleActivities, ActivityItem, ActivityCategory } from "../data/activities";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Dynamic import for Leaflet Map component (SSR Disabled)
const ActivitiesMap = dynamic(() => import("../components/ActivitiesMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[450px] rounded-2xl bg-surface/50 border border-border flex items-center justify-center text-text-muted">
      <div className="flex flex-col items-center gap-2">
        <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
        <span className="text-sm">กำลังโหลดแผนที่กิจกรรม...</span>
      </div>
    </div>
  ),
});

const categoryOptions: { key: ActivityCategory; label: string }[] = [
  { key: "all", label: "ทั้งหมด" },
  { key: "faculty", label: "งานคณะ / มหาวิทยาลัย" },
  { key: "volunteer", label: "จิตอาสา / ลงพื้นที่" },
  { key: "academic", label: "วิชาการ / อบรม" },
  { key: "other", label: "กิจกรรมอื่นๆ" },
];

export default function ActivitiesPage() {
  const [selectedCategory, setSelectedCategory] = useState<ActivityCategory>("all");
  const [selectedActivity, setSelectedActivity] = useState<ActivityItem | null>(null);
  const [activeModalActivity, setActiveModalActivity] = useState<ActivityItem | null>(null);

  // Filter activities
  const filteredActivities = sampleActivities.filter((item) =>
    selectedCategory === "all" ? true : item.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <div>
        {/* Simple Top Navigation */}
        <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border py-4 px-6">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-primary transition-colors group"
            >
              <HiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
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
              <HiSparkles className="text-emerald-400" /> Extracurricular & Community Works
            </p>
            <h1 className="text-3xl sm:text-5xl font-extrabold mb-4">
              กิจกรรมและ<span className="gradient-text">ประสบการณ์จิตอาสา</span>
            </h1>
            <p className="text-text-muted text-sm sm:text-base max-w-2xl mx-auto">
              รวบรวมรูปภาพ ตำแหน่งสถานที่ และรายละเอียดกิจกรรมที่ได้ไปร่วมจัด ช่วยงานคณะ
              ลงพื้นที่จิตอาสา และอบรมพัฒนาทักษะต่างๆ
            </p>
          </motion.div>

          {/* Interactive Map Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-14"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <HiLocationMarker className="text-emerald-400 text-2xl" />
                แผนที่แสดงพิกัดสถานที่กิจกรรม
              </h2>
              {selectedActivity && (
                <button
                  onClick={() => setSelectedActivity(null)}
                  className="text-xs text-text-muted hover:text-primary transition-colors"
                >
                  คืนค่ามุมมองแผนที่
                </button>
              )}
            </div>

            <ActivitiesMap
              activities={filteredActivities}
              selectedActivityId={selectedActivity?.id || null}
              onSelectActivity={(act) => {
                setSelectedActivity(act);
                setActiveModalActivity(act);
              }}
            />
          </motion.section>

          {/* Category Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-2 mb-10"
          >
            {categoryOptions.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  selectedCategory === cat.key
                    ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-background shadow-lg shadow-emerald-500/20 scale-105"
                    : "glass text-text-secondary hover:text-foreground hover:bg-surface-light"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>

          {/* Activities Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredActivities.map((act, index) => (
              <motion.div
                key={act.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className={`gradient-border rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 bg-surface/40 ${
                  selectedActivity?.id === act.id ? "ring-2 ring-emerald-400" : ""
                }`}
              >
                {/* Image / Header Banner Area */}
                <div>
                  <div
                    onClick={() => {
                      setSelectedActivity(act);
                      setActiveModalActivity(act);
                    }}
                    className="relative h-56 bg-surface-light overflow-hidden cursor-pointer group"
                  >
                    {/* Fallback pattern or real image */}
                    {act.images.length > 0 && !act.images[0].includes("sample") ? (
                      <Image
                        src={act.images[0]}
                        alt={act.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-emerald-500/10 via-surface to-teal-500/10 group-hover:scale-105 transition-transform duration-300">
                        <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-2">
                          <HiSparkles className="text-3xl" />
                        </div>
                        <span className="text-xs text-text-muted font-medium">คลิกเพื่อดูรูปภาพและรายละเอียดเต็ม</span>
                      </div>
                    )}

                    {/* Category Tag Badge */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-background/80 backdrop-blur-md text-emerald-400 border border-emerald-400/30">
                        {act.categoryLabel}
                      </span>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full bg-emerald-400 text-background shadow-lg">
                        <HiEye className="text-base" /> ขยายดูรูปและรายละเอียด
                      </span>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-6">
                    <div className="flex flex-wrap items-center justify-between text-xs text-text-muted mb-3 gap-2">
                      <span className="flex items-center gap-1 text-emerald-400 font-medium">
                        <HiLocationMarker /> {act.locationName}
                      </span>
                      <span className="flex items-center gap-1">
                        <HiCalendar /> {act.date}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold mb-2 leading-snug hover:text-emerald-400 transition-colors">
                      {act.title}
                    </h3>

                    {/* Role */}
                    <div className="flex items-center gap-1.5 text-xs text-primary-light font-medium mb-3">
                      <HiUserGroup className="text-sm" />
                      <span>{act.role}</span>
                    </div>

                    <p className="text-text-muted text-xs leading-relaxed mb-4 line-clamp-3">
                      {act.description}
                    </p>

                    {/* Skill Badges */}
                    <div className="flex flex-wrap gap-1.5">
                      {act.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-0.5 text-[11px] bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 rounded-md"
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
                    onClick={() => {
                      setSelectedActivity(act);
                      setActiveModalActivity(act);
                    }}
                    className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 transition-colors"
                  >
                    <HiEye /> ดูรายละเอียดภาพเต็ม
                  </button>
                  <button
                    onClick={() => setSelectedActivity(act)}
                    className="text-xs text-text-muted hover:text-primary flex items-center gap-1 transition-colors"
                  >
                    <HiLocationMarker /> ดูตำแหน่งบนแผนที่
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
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
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
                  <HiSparkles className="text-2xl" />
                </div>
                <div>
                  <span className="text-xs text-emerald-400 font-semibold uppercase">
                    {activeModalActivity.categoryLabel}
                  </span>
                  <h3 className="text-xl font-bold leading-tight">{activeModalActivity.title}</h3>
                </div>
              </div>

              {/* Image Banner */}
              <div className="relative w-full h-64 sm:h-80 bg-background/60 rounded-xl overflow-hidden border border-border flex items-center justify-center my-3">
                {activeModalActivity.images.length > 0 &&
                !activeModalActivity.images[0].includes("sample") ? (
                  <Image
                    src={activeModalActivity.images[0]}
                    alt={activeModalActivity.title}
                    fill
                    className="object-contain"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center p-6 text-center">
                    <HiSparkles className="text-6xl text-emerald-400 mb-3 opacity-60" />
                    <p className="text-sm font-semibold text-text-primary">
                      {activeModalActivity.title}
                    </p>
                    <p className="text-xs text-text-muted mt-2 max-w-md">
                      สามารถวางไฟล์รูปภาพกิจกรรมของคุณไว้ในโฟลเดอร์{" "}
                      <code className="text-emerald-400 bg-surface-lighter px-2 py-0.5 rounded">
                        public/images/activities/
                      </code>{" "}
                      แล้วอัปเดตเส้นทางไฟล์ใน <code className="text-emerald-400">app/data/activities.ts</code>
                    </p>
                  </div>
                )}
              </div>

              {/* Metadata */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-text-muted mb-4 pb-3 border-b border-border/40">
                <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                  <HiLocationMarker /> {activeModalActivity.locationName}
                </span>
                <span className="flex items-center gap-1.5">
                  <HiCalendar /> {activeModalActivity.date}
                </span>
                <span className="flex items-center gap-1.5 text-primary-light font-medium">
                  <HiUserGroup /> {activeModalActivity.role}
                </span>
              </div>

              {/* Description */}
              <div className="mb-4">
                <h4 className="text-xs font-semibold text-text-muted uppercase mb-1">
                  รายละเอียดสิ่งที่ทำในกิจกรรม:
                </h4>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {activeModalActivity.description}
                </p>
              </div>

              {/* Skills Learned */}
              <div className="mt-auto">
                <h4 className="text-xs font-semibold text-text-muted uppercase mb-2">
                  ทักษะที่ได้เรียนรู้และใช้ในงาน:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalActivity.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 rounded-full flex items-center gap-1"
                    >
                      <HiCheckCircle className="text-emerald-400" /> {skill}
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
