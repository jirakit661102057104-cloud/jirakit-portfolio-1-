export interface Project {
  id: string;
  title: string;
  titleTh?: string;
  description: string;
  descriptionTh?: string;
  image: string;
  additionalImages?: string[];
  downloadUrl?: string;
  status?: string;
  statusTh?: string;
  tags: string[];
  category: 'Web Dev' | 'UI Design' | 'IoT' | 'Mobile Apps' | 'Web Server' | 'Game Dev';
}

export interface Certificate {
  id: string;
  title: string;
  titleTh?: string;
  issuer: string;
  issuerTh?: string;
  date: string;
  dateTh?: string;
  category: 'Academic' | 'Student Activities' | 'Training';
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
    title: 'Faculty Activity Registration System',
    titleTh: 'ลงทะเบียนกิจกกรรมสำหรับนักศึกษาณะวิทยาศาสตร์และเทคโนโลยี',
    description: 'A comprehensive web application for managing and registering faculty activities for students.',
    descriptionTh: 'เว็บแอปพลิเคชันสำหรับการลงทะเบียนกิจกรรมต่างๆ สำหรับนักศึกษาคณะวิทยาศาสตร์และเทคโนโลยี',
    image: 'https://placehold.co/800x600?text=Faculty+Activity+System',
    additionalImages: [
      'https://placehold.co/800x600?text=Dashboard+View',
      'https://placehold.co/800x600?text=Registration+Form',
      'https://placehold.co/800x600?text=Admin+Panel'
    ],
    downloadUrl: '#',
    status: 'In Progress',
    statusTh: 'กำลังดำเนินการ',
    tags: ['REACT', 'NODE.JS', 'FIREBASE'],
    category: 'Web Dev'
  },
  {
    id: '2',
    title: 'UX/UI Application Design with Figma',
    titleTh: 'ออกแบบ UX/UI Application ด้วย Figma',
    description: 'Professional mobile application design using Figma, focusing on user experience and modern interface principles.',
    descriptionTh: 'การออกแบบแอปพลิเคชันมือถือระดับมืออาชีพด้วย Figma โดยเน้นที่ประสบการณ์ผู้ใช้และหลักการอินเทอร์เฟซที่ทันสมัย',
    image: 'https://placehold.co/800x600?text=Figma+Design+Project',
    status: 'In Progress',
    statusTh: 'กำลังดำเนินการ',
    tags: ['UI/UX', 'MOBILE'],
    category: 'UI Design',
    additionalImages: [
      'https://placehold.co/800x600?text=User+Flow',
      'https://placehold.co/800x600?text=Wireframes',
      'https://placehold.co/800x600?text=Visual+Design'
    ]
  },
  {
    id: '3',
    title: 'Smart Waste Sorting Bin Development',
    titleTh: 'การพัฒนาถังคัดแยกขยะอัจฉริยะ และ การเทรนโมเดล',
    description: 'Development of a smart bin that automatically sorts waste using AI models and model training.',
    descriptionTh: 'การพัฒนาถังขยะอัจฉริยะที่สามารถคัดแยกขยะได้โดยอัตโนมัติโดยใช้การเทรนโมเดล AI',
    image: 'https://placehold.co/800x600?text=Smart+Waste+Bin',
    status: 'In Progress',
    statusTh: 'กำลังดำเนินการ',
    tags: ['IOT', 'AI', 'MODEL TRAINING'],
    category: 'IoT',
    additionalImages: [
      'https://placehold.co/800x600?text=Hardware+Setup',
      'https://placehold.co/800x600?text=Model+Training+Process',
      'https://placehold.co/800x600?text=Testing+Phase'
    ]
  },
  {
    id: '7',
    title: 'IoT Air Conditioner Control System',
    titleTh: 'การติดตั้งสวิตช์เปิดปิดแอร์ระบบ IOT เชื่อมด้วยแอป SmartLife',
    description: 'Installation of smart switches for air conditioning control via the SmartLife mobile application.',
    descriptionTh: 'การติดตั้งสวิตช์อัจฉริยะสำหรับควบคุมเครื่องปรับอากาศผ่านแอปพลิเคชัน SmartLife',
    image: 'https://placehold.co/800x600?text=IoT+Air+Con',
    status: 'In Progress',
    statusTh: 'กำลังดำเนินการ',
    tags: ['IOT', 'SMART LIFE', 'AUTOMATION'],
    category: 'IoT',
    additionalImages: [
      'https://placehold.co/800x600?text=SmartLife+App+Interface',
      'https://placehold.co/800x600?text=Switch+Installation',
      'https://placehold.co/800x600?text=Automation+Rules'
    ]
  },
  {
    id: '4',
    title: 'My Website Portfolio',
    titleTh: 'เว็บไซต์พอร์ตโฟลิโอของฉัน',
    description: 'A personal portfolio web application showcasing my professional journey, projects, and achievements.',
    descriptionTh: 'เว็บแอปพลิเคชันพอร์ตโฟลิโอส่วนตัวที่รวบรวมผลงาน เกียรติบัตร และกิจกรรมต่างๆ ของฉัน',
    image: 'https://placehold.co/800x600?text=My+Portfolio+V2',
    additionalImages: [
      'https://placehold.co/800x600?text=Home+Screen',
      'https://placehold.co/800x600?text=Projects+Grid',
      'https://placehold.co/800x600?text=Contact+Section'
    ],
    downloadUrl: '#',
    status: 'In Progress',
    statusTh: 'กำลังดำเนินการ',
    tags: ['REACT', 'TAILWIND', 'MOTION'],
    category: 'Web Dev'
  },
  {
    id: '5',
    title: 'Lom Sak Tourism & OTOP Products App',
    titleTh: 'แอปพลิเคชั่นนำเสนอแหล่งท่องเที่ยวและสินค้า OTOP อำเภอหล่มสัก',
    description: 'A mobile application showcasing tourist attractions and OTOP products in Lom Sak District.',
    descriptionTh: 'แอปพลิเคชั่นนำเสนอแหล่งท่องเที่ยวและสินค้า OTOP อำเภอหล่มสัก เพื่อส่งเสริมการท่องเที่ยวและเศรษฐกิจท้องถิ่น',
    image: 'https://placehold.co/800x600?text=Lom+Sak+OTOP+App',
    status: 'In Progress',
    statusTh: 'กำลังดำเนินการ',
    tags: ['FLUTTER', 'FIREBASE', 'OTOP'],
    category: 'Mobile Apps',
    additionalImages: [
      'https://placehold.co/800x600?text=Home+Screen',
      'https://placehold.co/800x600?text=Tourist+Attractions',
      'https://placehold.co/800x600?text=OTOP+Products',
      'https://placehold.co/800x600?text=Map+View'
    ]
  },
  {
    id: '8',
    title: 'Smart Waste Sorting App',
    titleTh: 'แอปพลิเคชั่นคัดแยกขยะอัจฉริยะ',
    description: 'A mobile application for intelligent waste classification and sorting.',
    descriptionTh: 'แอปพลิเคชั่นสำหรับช่วยคัดแยกขยะอัจฉริยะ เพื่ออำนวยความสะดวกในการจัดการขยะอย่างถูกวิธี',
    image: 'https://placehold.co/800x600?text=Smart+Waste+App',
    status: 'In Progress',
    statusTh: 'กำลังดำเนินการ',
    tags: ['MOBILE', 'AI', 'ENVIRONMENT'],
    category: 'Mobile Apps',
    additionalImages: [
      'https://placehold.co/800x600?text=Camera+Scanner',
      'https://placehold.co/800x600?text=AI+Classification',
      'https://placehold.co/800x600?text=Sorting+Guide',
      'https://placehold.co/800x600?text=User+History'
    ]
  },
  {
    id: '6',
    title: 'Portfolio Version 1.0',
    titleTh: 'พอร์ตโฟลิโอ เวอร์ชัน 1.0',
    description: 'My initial exploration into professional portfolio design with a focus on typography and grid systems.',
    descriptionTh: 'การสำรวจเบื้องต้นของฉันในการออกแบบพอร์ตโฟลิโอระดับมืออาชีพโดยเน้นที่ตัวอักษรและระบบกริด',
    image: 'https://placehold.co/800x600?text=Coming+Soon',
    status: 'In Progress',
    statusTh: 'กำลังดำเนินการ',
    tags: ['DESIGN', 'TAILWIND'],
    category: 'UI Design',
    additionalImages: [
      'https://placehold.co/800x600?text=V1+Home',
      'https://placehold.co/800x600?text=V1+Layout',
      'https://placehold.co/800x600?text=V1+Typography'
    ]
  },
  {
    id: '9',
    title: 'Minecraft Server Hosting',
    titleTh: 'เปิดเซิฟเวอร์เกม มายคราฟ',
    description: 'Setting up and managing a dedicated Minecraft server for a community of players.',
    descriptionTh: 'การตั้งค่าและจัดการเซิร์ฟเวอร์เกม Minecraft สำหรับกลุ่มผู้เล่น',
    image: 'https://placehold.co/800x600?text=Minecraft+Server',
    status: 'In Progress',
    statusTh: 'กำลังดำเนินการ',
    tags: ['MINECRAFT', 'LINUX', 'NETWORKING'],
    category: 'Web Server',
    additionalImages: [
      'https://placehold.co/800x600?text=Server+Console',
      'https://placehold.co/800x600?text=Plugin+Setup',
      'https://placehold.co/800x600?text=In-game+View'
    ]
  },
  {
    id: '10',
    title: 'SomOh So Ghost',
    titleTh: 'SomOh So Ghost',
    description: 'A horror survival game built with Unreal Engine 5. Run away from a ghost modeled after a friend. Created for fun and UE5 practice.',
    descriptionTh: 'การสร้างเกม Horror ด้วย Unreal Engine 5 โดยชื่อโปรเจกต์เกมมีชื่อว่า SomOh So Ghost เป็นเกมวิ่งหนีผีที่ต้นแบบโมเดลมาจากเพื่อน จุดประสงค์เอาไว้ล้อเพื่อนเฉยๆ แต่หลักคือฝึกใช้ Unreal Engine 5',
    image: 'https://placehold.co/800x600?text=SomOh+So+Ghost',
    status: 'In Progress',
    statusTh: 'กำลังดำเนินการ',
    tags: ['UNREAL ENGINE 5', 'HORROR', '3D DESIGN'],
    category: 'Game Dev',
    additionalImages: [
      'https://placehold.co/800x600?text=UE5+Environment',
      'https://placehold.co/800x600?text=Ghost+Model',
      'https://placehold.co/800x600?text=Gameplay+Mechanics'
    ]
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
    category: 'Training',
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
    category: 'Training',
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
    category: 'Training',
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
    category: 'Training',
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
    category: 'Training',
    image: 'https://placehold.co/800x600?text=Coming+Soon'
  },
  {
    id: '7',
    title: 'Student Leader Award',
    titleTh: 'รางวัลผู้นำนักศึกษาดีเด่น',
    issuer: 'Student Affairs PCRU',
    issuerTh: 'กองพัฒนานักศึกษา มรภ.เพชรบูรณ์',
    date: 'Feb 2024',
    dateTh: 'กุมภาพันธ์ 2024',
    category: 'Student Activities',
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

