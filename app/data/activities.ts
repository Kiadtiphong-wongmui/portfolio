export type ActivityItem = {
  id: string;
  title: string;
  locationName: string;
  date: string;
  role: string;
  description: string;
  images: string[];
  skills: string[];
};

export type TextActivity = {
  id: string;
  number: number;
  title: string;
  description?: string;
  date?: string;
};

export const textActivities: TextActivity[] = [
  {
    id: "text-act-1",
    number: 1,
    title: "ได้รับรางวัลด้านผลการเรียนดีเด่น ประจำปีการศึกษา 2025, 2024 และ 2023",
    date: "ปี 2023 - 2025",
  },
  {
    id: "text-act-2",
    number: 2,
    title: "โครงการค่ายยุวชนคอมพิวเตอร์ ครั้งที่ 21 - 23",
    date: "ปี 2023 - 2025",
  },
  {
    id: "text-act-3",
    number: 3,
    title: "ผู้ช่วยสอนในรายวิชา ฐานข้อมูลเบื้องต้น",
    date: "ปี 2024",
  },
  {
    id: "text-act-4",
    number: 4,
    title: "โครงการ Link Cabling & Network Solution มหาวิทยาลัยแม่โจ้",
    date: "ปี 2024",
  },
  {
    id: "text-act-5",
    number: 5,
    title: "โครงการอบรมเตรียมความรู้พื้นฐานสำหรับนักศึกษาใหม่ สาขาวิทยาการคอมพิวเตอร์",
    date: "ปี 2024",
  },
  {
    id: "text-act-6",
    number: 6,
    title: "ผู้แทนหลักสูตรวิทยาการคอมพิวเตอร์ มหาวิทยาลัยแม่โจ้ ในการประเมินคุณภาพการศึกษาภายใน",
    date: "ปี 2024",
  },
  {
    id: "text-act-7",
    number: 7,
    title: "เข้าร่วมการประชุมวิชาการนานาชาติ ECTIDAMT & NCON",
    date: "ปี 2024",
  },
  {
    id: "text-act-8",
    number: 8,
    title: "กิจกรรมประชาสัมพันธ์หลักสูตรและจัดนิทรรศการ ณ มหาวิทยาลัยแม่โจ้ งานเกษตรครบรอบ 90 ปี มหาวิทยาลัยแม่โจ้",
    date: "ปี 2024",
  },
  {
    id: "text-act-9",
    number: 9,
    title: "โครงการพัฒนาทักษะด้านปัญญาประดิษฐ์ (AI) ขั้นพื้นฐาน สำหรับนักเรียน",
    date: "ปี 2023 - 2024",
  },
  {
    id: "text-act-10",
    number: 10,
    title: "โครงการอบรมเชิงปฏิบัติการการสร้างโมเดล 3 มิติ ด้วยโปรแกรม Tinkercad",
    date: "ปี 2023 - 2024",
  },
  {
    id: "text-act-11",
    number: 11,
    title: "เป็นหัวหน้าฝ่ายสื่อประชาสัมพันธ์ CSMJU STUDIO",
    date: "ปี 2023 - 2024",
  },
  {
    id: "text-act-12",
    number: 12,
    title: "โครงการอบรมทักษะแบบ AR ระดับเบื้องต้น สำหรับนักเรียน",
    date: "ปี 2023",
  },
];

export const sampleActivities: ActivityItem[] = [
  {
    id: "id_video_workshop",
    title: "โครงการอบรมเชิงปฏัติการการตัดต่อวีดีโอเบื้องต้น",
    locationName: "โรงเรียนนวมินทราชูทิศ พายัพ จังหวัดเชียงใหม่",
    date: "สิงหาคม 2567",
    role: "ผู้ช่วยสอน",
    description:
      "อบรมให้กับนักเรียนระดับชั้นมัธยมศึกษาตอนต้นและตอนปลาย ให้มีความรู้ความเข้าใจในการตัดต่อวีดีโอเบื้องต้น",
    images: [
      "/activities/A1.jpg",
      "/activities/A2.jpg",
    ],
    skills: ["Education", "Teaching", "Video Editing"],
  },
  {
    id: "id_ecti_work",
    title: "งานประชุมวิชาการระดับนานาชาติ (ECTI DAMT and NCON 2024)",
    locationName: "คณะวิทยาศาสตร์ มหาวิทยาลัยแม่โจ้",
    date: "มกราคม 2567",
    role: "ฝ่ายประสานงาน",
    description:
      "ช่วยอำนวยความสะดวก ประสานงาน และบันทึกภาพต่างๆภายในงานประชุมวิชาการ",
    images: [
      "/activities/A3.jpg",
      "/activities/A4.jpg",
    ],
    skills: ["Coordination", "Communication", "Documentation"],
  }
];
