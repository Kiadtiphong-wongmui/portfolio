export type ActivityCategory = "all" | "faculty" | "volunteer" | "academic" | "other";

export type ActivityItem = {
  id: string;
  title: string;
  category: "faculty" | "volunteer" | "academic" | "other";
  categoryLabel: string;
  locationName: string;
  coordinates: [number, number]; // [lat, lng]
  date: string;
  role: string;
  description: string;
  images: string[];
  skills: string[];
};

export const sampleActivities: ActivityItem[] = [
  {
    id: "act-mju-openhouse",
    title: "กิจกรรม Open House และแนะนำสาขาวิทยาการคอมพิวเตอร์",
    category: "faculty",
    categoryLabel: "งานคณะ / มหาวิทยาลัย",
    locationName: "มหาวิทยาลัยแม่โจ้ (เชียงใหม่)",
    coordinates: [18.8931, 99.0143],
    date: "พฤศจิกายน 2025",
    role: "ทีมจัดกิจกรรม & วิทยากรประจำฐานแนะนำหลักสูตร",
    description:
      "เป็นตัวแทนนักศึกษาและสต๊าฟประจำฐานกิจกรรมในงาน Open House แนะนำหลักสูตรวิทยาการคอมพิวเตอร์แก่นักเรียนระดับมัธยมศึกษา สาธิตมินิโปรเจกต์ไอที นำเสนอแนวทางการศึกษาและตอบคำถามเกี่ยวกับการพัฒนาซอฟต์แวร์",
    images: [
      "/images/activities/openhouse_1.jpg",
    ],
    skills: ["Public Speaking", "Teamwork", "Event Planning", "Communication"],
  },
  {
    id: "act-volunteer-camp",
    title: "กิจกรรมค่ายจิตอาสาพัฒนาโรงเรียนและชุมชน",
    category: "volunteer",
    categoryLabel: "จิตอาสา / ลงพื้นที่",
    locationName: "โรงเรียนชุมชนบ้านป่าแดด (เชียงใหม่)",
    coordinates: [18.7562, 98.9831],
    date: "มกราคม 2025",
    role: "อาสาสมัครพัฒนาสนามเด็กเล่น & ปรับปรุงห้องคอมพิวเตอร์",
    description:
      "ลงพื้นที่ทำกิจกรรมจิตอาสาพัฒนาชุมชนร่วมกับชมรม ช่วยทาสี ปรับปรุงภูมิทัศน์โรงเรียน และช่วยตรวจสอบติดตั้งระบบคอมพิวเตอร์ห้องเรียนไอที เพื่อให้น้องๆ ในชุมชนมีอุปกรณ์และสื่อการเรียนรู้ที่พร้อมใช้งาน",
    images: [
      "/images/activities/volunteer_1.jpg",
    ],
    skills: ["Volunteer", "Community Service", "IT Maintenance", "Leadership"],
  },
  {
    id: "act-tech-workshop",
    title: "การอบรมเชิงปฏิบัติการพัฒนาเว็บแอปพลิเคชันด้วย Next.js & Tailwind",
    category: "academic",
    categoryLabel: "วิชาการ / อบรม",
    locationName: "คณะวิทยาศาสตร์ มหาวิทยาลัยแม่โจ้",
    coordinates: [18.8925, 99.0150],
    date: "สิงหาคม 2025",
    role: "ผู้ช่วยวิทยากร (Teaching Assistant)",
    description:
      "ทำหน้าที่เป็นผู้ช่วยวิทยากร คอยให้คำแนะนำแก่นักศึกษารุ่นน้องในการฝึกเขียนโค้ด React, Next.js และ Tailwind CSS ตรวจสอบข้อผิดพลาดของโค้ด (Debugging) และอธิบายแนวคิด Component-Based Architecture",
    images: [
      "/images/activities/workshop_1.jpg",
    ],
    skills: ["Mentoring", "React / Next.js", "Debugging", "Teaching Assistant"],
  },
  {
    id: "act-chiangrai-event",
    title: "กิจกรรมสัมมนานวัตกรรมดิจิทัลและการแข่งขันไอทีระดับภูมิภาค",
    category: "other",
    categoryLabel: "กิจกรรมอื่นๆ",
    locationName: "จังหวัดเชียงราย",
    coordinates: [19.9071, 99.8325],
    date: "มีนาคม 2025",
    role: "ตัวแทนเข้าร่วมสัมมนา & สต๊าฟประสานงาน",
    description:
      "เข้าร่วมงานสัมมนาเทคโนโลยีดิจิทัลและนวัตกรรมใหม่ๆ ของภาคเหนือ พร้อมร่วมเป็นสต๊าฟช่วยประสานงานดูแลสถานที่และอำนวยความสะดวกแก่ผู้เข้าแข่งขันในงาน",
    images: [
      "/images/activities/chiangrai_1.jpg",
    ],
    skills: ["Coordination", "Networking", "Event Support"],
  },
];
