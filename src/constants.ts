export interface Project {
  id: string;
  title: string;
  titleTh?: string;
  description: string;
  descriptionTh?: string;
  image: string;
  tags: string[];
  category: 'Web Dev' | 'UI Design' | 'IoT' | 'Mobile Apps';
}

export interface Certificate {
  id: string;
  title: string;
  titleTh?: string;
  issuer: string;
  issuerTh?: string;
  date: string;
  dateTh?: string;
  category: 'Development' | 'Networking' | 'Academic' | 'Cloud' | 'Data' | 'Design' | 'Cyber Security' | 'Soft Skills';
  image: string;
  credentialId?: string;
  description?: string;
  descriptionTh?: string;
}

export interface Activity {
  id: string;
  title: string;
  titleTh?: string;
  description: string;
  descriptionTh?: string;
  date: string;
  dateTh?: string;
  type: 'NATIONAL' | 'WORKSHOP' | 'VOLUNTEERING' | 'SPEAKING';
  icon: string;
  image: string;
}

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Student Management System',
    titleTh: 'ระบบจัดการนักศึกษา',
    description: 'A comprehensive dashboard for academic monitoring, grading, and attendance tracking for PCRU faculty.',
    descriptionTh: 'แดชบอร์ดที่ครอบคลุมสำหรับการติดตามวิชาการ การให้คะแนน และการเช็คชื่อสำหรับคณะครู PCRU',
    image: 'https://placehold.co/800x600?text=Coming+Soon',
    tags: ['REACT', 'NODE.JS'],
    category: 'Web Dev'
  },
  {
    id: '2',
    title: 'E-commerce Experience',
    titleTh: 'ประสบการณ์อีคอมเมิร์ซ',
    description: 'Modernized shopping interface focusing on high conversion and accessibility for mobile users.',
    descriptionTh: 'อินเทอร์เฟซการช็อปปิ้งที่ทันสมัยซึ่งเน้นการเพิ่มยอดขายและการเข้าถึงสำหรับผู้ใช้มือถือ',
    image: 'https://placehold.co/800x600?text=Coming+Soon',
    tags: ['UI/UX', 'MOBILE'],
    category: 'UI Design'
  },
  {
    id: '3',
    title: 'IoT Smart Home Hub',
    titleTh: 'ศูนย์กลางบ้านอัจฉริยะ IoT',
    description: 'An integrated system for controlling lights and security through a centralized hardware gateway.',
    descriptionTh: 'ระบบรวมสำหรับการควบคุมไฟและความปลอดภัยผ่านเกตเวย์ฮาร์ดแวร์ส่วนกลาง',
    image: 'https://placehold.co/800x600?text=Coming+Soon',
    tags: ['IOT', 'PYTHON'],
    category: 'IoT'
  },
  {
    id: '4',
    title: 'PCRU Analytics Dash',
    titleTh: 'แดชบอร์ดวิเคราะห์ PCRU',
    description: 'Visualizing academic performance datasets to identify student trends across the IT department.',
    descriptionTh: 'การแสดงข้อมูลชุดข้อมูลผลการเรียนเพื่อระบุแนวโน้มของนักศึกษาในภาควิชาไอที',
    image: 'https://placehold.co/800x600?text=Coming+Soon',
    tags: ['DATA', 'D3.JS'],
    category: 'Web Dev'
  },
  {
    id: '5',
    title: 'Mobile Learning App',
    titleTh: 'แอปพลิเคชันการเรียนรู้บนมือถือ',
    description: 'Interactive educational tools designed specifically for the PCRU student ecosystem.',
    descriptionTh: 'เครื่องมือการศึกษาแบบโต้ตอบที่ออกแบบมาโดยเฉพาะสำหรับระบบนิเวศของนักศึกษา PCRU',
    image: 'https://placehold.co/800x600?text=Coming+Soon',
    tags: ['SWIFT', 'EDUTECH'],
    category: 'Mobile Apps'
  },
  {
    id: '6',
    title: 'Portfolio Version 1.0',
    titleTh: 'พอร์ตโฟลิโอ เวอร์ชัน 1.0',
    description: 'My initial exploration into professional portfolio design with a focus on typography and grid systems.',
    descriptionTh: 'การสำรวจเบื้องต้นของฉันในการออกแบบพอร์ตโฟลิโอระดับมืออาชีพโดยเน้นที่ตัวอักษรและระบบกริด',
    image: 'https://placehold.co/800x600?text=Coming+Soon',
    tags: ['DESIGN', 'TAILWIND'],
    category: 'UI Design'
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    id: '1',
    title: 'Advanced Full-Stack Web Engineering',
    titleTh: 'วิศวกรรมเว็บ Full-Stack ขั้นสูง',
    issuer: 'Coursera & Google',
    issuerTh: 'Coursera และ Google',
    date: 'May 2023',
    dateTh: 'พฤษภาคม 2023',
    category: 'Development',
    image: 'https://placehold.co/800x600?text=Coming+Soon',
    credentialId: 'PCRU-IT-2024-9981-SK',
    description: 'This certification validates expertise in server management, cloud deployment strategies, and high-availability architecture for modern web applications.',
    descriptionTh: 'เกียรติบัตรนี้รับรองความเชี่ยวชาญในการจัดการเซิร์ฟเวอร์ กลยุทธ์การปรับใช้คลาวด์ และสถาปัตยกรรมที่มีความพร้อมใช้งานสูงสำหรับเว็บแอปพลิเคชันสมัยใหม่'
  },
  {
    id: '2',
    title: 'CCNA: Introduction to Networks',
    titleTh: 'CCNA: ความรู้พื้นฐานเกี่ยวกับเครือข่าย',
    issuer: 'Cisco Networking Academy',
    issuerTh: 'Cisco Networking Academy',
    date: 'Jan 2024',
    dateTh: 'มกราคม 2024',
    category: 'Networking',
    image: 'https://placehold.co/800x600?text=Coming+Soon'
  },
  {
    id: '3',
    title: 'Best Project Award: IT PCRU Expo',
    titleTh: 'รางวัลโปรเจกต์ยอดเยี่ยม: IT PCRU Expo',
    issuer: 'IT PCRU University',
    issuerTh: 'มหาวิทยาลัยราชภัฏเพชรบูรณ์',
    date: 'Aug 2023',
    dateTh: 'สิงหาคม 2023',
    category: 'Academic',
    image: 'https://placehold.co/800x600?text=Coming+Soon'
  },
  {
    id: '4',
    title: 'GCP Fundamentals: Core Infrastructure',
    titleTh: 'พื้นฐาน GCP: โครงสร้างพื้นฐานหลัก',
    issuer: 'Google Cloud',
    issuerTh: 'Google Cloud',
    date: 'Nov 2023',
    dateTh: 'พฤศจิกายน 2023',
    category: 'Cloud',
    image: 'https://placehold.co/800x600?text=Coming+Soon'
  },
  {
    id: '5',
    title: 'Python for Data Science Specialization',
    titleTh: 'ความเชี่ยวชาญ Python สำหรับวิทยาการข้อมูล',
    issuer: 'IBM Skills',
    issuerTh: 'IBM Skills',
    date: 'Mar 2024',
    dateTh: 'มีนาคม 2024',
    category: 'Data',
    image: 'https://placehold.co/800x600?text=Coming+Soon'
  },
  {
    id: '6',
    title: 'Human-Centered Design Fundamentals',
    titleTh: 'พื้นฐานการออกแบบที่เน้นมนุษย์เป็นศูนย์กลาง',
    issuer: 'Design Academy',
    issuerTh: 'Design Academy',
    date: 'Dec 2023',
    dateTh: 'ธันวาคม 2023',
    category: 'Design',
    image: 'https://placehold.co/800x600?text=Coming+Soon'
  }
];

export const ACTIVITIES: Activity[] = [
  {
    id: '1',
    title: 'National Hackathon 2023',
    titleTh: 'แฮกกาธอนระดับชาติ 2023',
    description: 'Lead Developer - Built a sustainable energy tracking application using React and Firebase. Won the "Most Innovative Solution" award among 50 competing teams.',
    descriptionTh: 'หัวหน้านักพัฒนา - สร้างแอปพลิเคชันติดตามพลังงานที่ยั่งยืนโดยใช้ React และ Firebase ได้รับรางวัล "โซลูชันนวัตกรรมยอดเยี่ยม" จาก 50 ทีมที่เข้าแข่งขัน',
    date: 'Dec 2023',
    dateTh: 'ธันวาคม 2023',
    type: 'NATIONAL',
    icon: 'trophy',
    image: 'https://placehold.co/800x600?text=Coming+Soon'
  },
  {
    id: '2',
    title: 'Web Development Intensive Workshop',
    titleTh: 'เวิร์กช็อปการพัฒนาเว็บแบบเข้มข้น',
    description: 'Participant - Advanced training session on React.js hooks, state management, and Tailwind CSS architecture. Applied skills to rebuild the IT PCRU club portal.',
    descriptionTh: 'ผู้เข้าร่วม - เซสชันการฝึกอบรมขั้นสูงเกี่ยวกับ React.js hooks, การจัดการสถานะ และสถาปัตยกรรม Tailwind CSS นำทักษะไปใช้ในการสร้างพอร์ทัลคลับ IT PCRU ใหม่',
    date: 'Oct 2023',
    dateTh: 'ตุลาคม 2023',
    type: 'WORKSHOP',
    icon: 'school',
    image: 'https://placehold.co/800x600?text=Coming+Soon'
  },
  {
    id: '3',
    title: 'IT PCRU Open House',
    titleTh: 'IT PCRU โอเพ่นเฮาส์',
    description: 'Infrastructure Lead - Orchestrated the networking setup for the annual Open House. Managed a team of 5 students to ensure seamless connectivity for 20+ exhibit booths.',
    descriptionTh: 'หัวหน้าโครงสร้างพื้นฐาน - จัดการการตั้งค่าเครือข่ายสำหรับโอเพ่นเฮาส์ประจำปี จัดการทีมงานนักศึกษา 5 คนเพื่อให้แน่ใจว่ามีการเชื่อมต่อที่ราบรื่นสำหรับบูธนิทรรศการกว่า 20 บูธ',
    date: 'Aug 2023',
    dateTh: 'สิงหาคม 2023',
    type: 'VOLUNTEERING',
    icon: 'groups',
    image: 'https://placehold.co/800x600?text=Coming+Soon'
  },
  {
    id: '4',
    title: 'Community Tech Talk: AI in Education',
    titleTh: 'การพูดคุยเทคโนโลยีชุมชน: AI ในการศึกษา',
    description: 'Guest Speaker - Delivered a presentation on how AI tools can bridge the educational gap in provincial schools. Attended by over 100 faculty members and students.',
    descriptionTh: 'วิทยากรรับเชิญ - บรรยายเกี่ยวกับวิธีที่เครื่องมือ AI สามารถลดช่องว่างทางการศึกษาในโรงเรียนส่วนภูมิภาค มีคณาจารย์และนักศึกษาเข้าร่วมกว่า 100 คน',
    date: 'June 2023',
    dateTh: 'มิถุนายน 2023',
    type: 'SPEAKING',
    icon: 'record_voice_over',
    image: 'https://placehold.co/800x600?text=Coming+Soon'
  }
];

