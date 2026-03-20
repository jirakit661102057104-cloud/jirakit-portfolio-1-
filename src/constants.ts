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
    image: '/images/sciregis.png',
    additionalImages: [
      '/images/regis1.png',
      '/images/regis2.png',
      '/images/regis3.png',
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
    image: '/images/Figma.jpg',
    status: 'In Progress',
    statusTh: 'กำลังดำเนินการ',
    tags: ['UI/UX', 'MOBILE'],
    category: 'UI Design',
    additionalImages: [
      '/images/figma1.png',
      '/images/figma2.png',
      '/images/figma3.png'
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
    image: '/images/iotswitch1.jpg',
    status: 'In Progress',
    statusTh: 'กำลังดำเนินการ',
    tags: ['IOT', 'SMART LIFE', 'AUTOMATION'],
    category: 'IoT',
    additionalImages: [
      '/images/iotswitch2.jpg',
      '/images/iotswitch3.jpg',
      '/images/iotswitch4.jpg'
    ]
  },
  {
    id: '4',
    title: 'My Website Portfolio',
    titleTh: 'เว็บไซต์พอร์ตโฟลิโอของฉัน',
    description: 'A personal portfolio web application showcasing my professional journey, projects, and achievements.',
    descriptionTh: 'เว็บแอปพลิเคชันพอร์ตโฟลิโอส่วนตัวที่รวบรวมผลงาน เกียรติบัตร และกิจกรรมต่างๆ ของฉัน',
    image: '/images/mainport.png',
    additionalImages: [
      '/images/portfolio2.png',
      '/images/portfolio1.png',
    ],
    downloadUrl: '#',
    status: 'In Progress',
    statusTh: 'กำลังดำเนินการ',
    tags: ['REACT', 'TAILWIND', 'MOTION'],
    category: 'Web Dev'
  },
  {
    id: '5',
    title: 'Lom Sak Travel',
    titleTh: 'แอปพลิเคชั่นท่องเที่ยวหล่มสัก',
    description: 'A mobile application showcasing tourist attractions and OTOP products in Lom Sak District.',
    descriptionTh: 'แอปพลิเคชั่นนำเสนอแหล่งท่องเที่ยวและสินค้า OTOP อำเภอหล่มสัก เพื่อส่งเสริมการท่องเที่ยวและเศรษฐกิจท้องถิ่น',
    image: '/images/LomSakTravel.png',
    status: 'In Progress',
    statusTh: 'กำลังดำเนินการ',
    tags: ['JAVA', 'FIREBASE', 'Android Studio'],
    category: 'Mobile Apps',
    additionalImages: [
      '/images/Home.jpg',
      '/images/Touris.jpg',
      '/images/OTOP.jpg',
      '/images/Contact.jpg'
    ]
  },
  {
    id: '8',
    title: 'Smart Waste Sorting App',
    titleTh: 'แอปพลิเคชั่นคัดแยกขยะอัจฉริยะ',
    description: 'A mobile application for intelligent waste classification and sorting.',
    descriptionTh: 'แอปพลิเคชั่นสำหรับช่วยคัดแยกขยะอัจฉริยะ เพื่ออำนวยความสะดวกในการจัดการขยะอย่างถูกวิธี',
    image: '/images/ECOBIN.png',
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
    title: 'Portfolio ',
    titleTh: 'พอร์ตโฟลิโอ ',
    description: 'My initial exploration into professional portfolio design with a focus on typography and grid systems.',
    descriptionTh: 'การสำรวจเบื้องต้นของฉันในการออกแบบพอร์ตโฟลิโอระดับมืออาชีพโดยเน้นที่ตัวอักษรและระบบกริด',
    image: '/images/canva.png',
    status: 'In Progress',
    statusTh: 'กำลังดำเนินการ',
    tags: ['DESIGN','CANVAS'],
    category: 'UI Design',
    additionalImages: [
      '/images/myportfolio.png',

    ]
  },
  {
    id: '9',
    title: 'Minecraft Server Hosting',
    titleTh: 'เปิดเซิฟเวอร์เกม มายคราฟ',
    description: 'Setting up and managing a dedicated Minecraft server for a community of players.',
    descriptionTh: 'การตั้งค่าและจัดการเซิร์ฟเวอร์เกม Minecraft สำหรับกลุ่มผู้เล่น',
    image: '/images/Falix.jpg',
    status: 'In Progress',
    statusTh: 'กำลังดำเนินการ',
    tags: ['MINECRAFT', 'LINUX', 'NETWORKING'],
    category: 'Web Server',
    additionalImages: [
      '/images/severfalix.png',
      '/images/totalfalix.png',
    ]
  },
  {
    id: '10',
    title: 'SomOh So Ghost',
    titleTh: 'SomOh So Ghost',
    description: 'A horror survival game built with Unreal Engine 5. Run away from a ghost modeled after a friend. Created for fun and UE5 practice.',
    descriptionTh: 'การสร้างเกม Horror ด้วย Unreal Engine 5 โดยชื่อโปรเจกต์เกมมีชื่อว่า SomOh So Ghost เป็นเกมวิ่งหนีผีที่ต้นแบบโมเดลมาจากเพื่อน จุดประสงค์เอาไว้ล้อเพื่อนเฉยๆ แต่หลักคือฝึกใช้ Unreal Engine 5',
    image: '/images/unreal5.png',
    status: 'In Progress',
    statusTh: 'กำลังดำเนินการ',
    tags: ['UNREAL ENGINE 5', 'HORROR', '3D DESIGN'],
    category: 'Game Dev',
    additionalImages: [
      'https://placehold.co/800x600?text=UE5+Environment',
      '/images/ghostmodel.png',
      'https://placehold.co/800x600?text=Gameplay+Mechanics'
    ]
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    id: '1',
    title: 'Coming Soon',
    titleTh: 'เร็วๆ นี้',
    issuer: '-',
    issuerTh: '-',
    date: 'DD/MM/YYYY',
    dateTh: 'วว/ดด/ปปปป',
    category: 'Training',
    image: 'https://placehold.co/800x600?text=Coming+Soon',
    credentialId: '-',
    description: '-',
    descriptionTh: '-'
  },
  {
    id: '2',
    title: 'Coming Soon',
    titleTh: 'เร็วๆ นี้',
    issuer: '-',
    issuerTh: '-',
    date: 'DD/MM/YYYY',
    dateTh: 'วว/ดด/ปปปป',
    category: 'Training',
    image: 'https://placehold.co/800x600?text=Coming+Soon'
  },
  {
    id: '3',
    title: 'Coming Soon',
    titleTh: 'เร็วๆ นี้',
    issuer: '-',
    issuerTh: '-',
    date: 'DD/MM/YYYY',
    dateTh: 'วว/ดด/ปปปป',
    category: 'Academic',
    image: 'https://placehold.co/800x600?text=Coming+Soon'
  },
  {
    id: '4',
    title: 'Coming Soon',
    titleTh: 'เร็วๆ นี้',
    issuer: '-',
    issuerTh: 'Google Cloud',
    date: 'DD/MM/YYYY',
    dateTh: 'วว/ดด/ปปปป',
    category: 'Training',
    image: 'https://placehold.co/800x600?text=Coming+Soon'
  },
  {
    id: '5',
    title: 'Coming Soon',
    titleTh: 'เร็วๆ นี้',
    issuer: '-',
    issuerTh: '-',
    date: 'DD/MM/YYYY',
    dateTh: 'วว/ดด/ปปปป',
    category: 'Training',
    image: 'https://placehold.co/800x600?text=Coming+Soon'
  },
  {
    id: '6',
    title: 'Coming Soon',
    titleTh: 'เร็วๆ นี้',
    issuer: '-',
    issuerTh: '-',
    date: 'DD/MM/YYYY',
    dateTh: 'วว/ดด/ปปปป',
    category: 'Training',
    image: 'https://placehold.co/800x600?text=Coming+Soon'
  },
  {
    id: '7',
    title: 'Coming Soon',
    titleTh: 'เร็วๆ นี้',
    issuer: '-',
    issuerTh: '-',
    date: 'DD/MM/YYYY',
    dateTh: 'วว/ดด/ปปปป',
    category: 'Student Activities',
    image: 'https://placehold.co/800x600?text=Coming+Soon'
  }
];

export const ACTIVITIES: Activity[] = [
  {
    id: '1',
    title: 'AUCC 2026',
    titleTh: 'AUCC 2026',
    description: 'Asia Undergraduate Conference on Computing 2026 - Faculty and students participated in the 14th Asia Undergraduate Conference on Computing held between February 4–6, 2026, at Rambhai Barni Rajabhat University, Chanthaburi.',
    descriptionTh: 'Asia Undergraduate Conference on Computing 2026 - คณาจารย์และนักศึกษาเข้าร่วมการประชุมวิชาการระดับปริญญาตรีด้านคอมพิวเตอร์ในภูมิภาคเอเชีย ครั้งที่ 14 ระหว่างวันที่ 4–6 กุมภาพันธ์ 2569 ณ มหาวิทยาลัยราชภัฏรำไพพรรณี จังหวัดจันทบุรี',
    date: 'Feb 2026',
    dateTh: '4 กุมภาพันธ์ 2569',
    type: 'NATIONAL',
    icon: 'school',
    image: '/images/aucc2026.jpg'
  },
  {
    id: '2',
    title: 'Student Activities',
    titleTh: 'ด้านกิจกรรมนักศึกษา',
    description: 'Participated in the Science and Technology Student Network Project of 8 Northern Institutions. The Student Club received the "Sustainable Social Engineer" award, reflecting the potential of students in applying science and technology to community development.',
    descriptionTh: 'เข้าร่วมโครงการเครือข่ายนักศึกษาคณะวิทยาศาสตร์และเทคโนโลยี 8 สถาบันภาคเหนือ ในโอกาสนี้ สโมสรนักศึกษาคณะวิทยาศาสตร์และเทคโนโลยี ได้รับรางวัล “วิศวกรสังคมยั่งยืน” ซึ่งนับเป็นความภาคภูมิใจและสะท้อนถึงศักยภาพของนักศึกษาในการนำองค์ความรู้ด้านวิทยาศาสตร์และเทคโนโลยีไปประยุกต์ใช้ในการพัฒนาชุมชนและสังคมอย่างเป็นรูปธรรม',
    date: 'Jan 2026',
    dateTh: '28–30 มกราคม 2569',
    type: 'VOLUNTEERING',
    icon: 'groups',
    image: '/images/samo8.jpg'
  },
  {
    id: '3',
    title: 'Social Engineer Innovation',
    titleTh: 'การพรีเซนต์นวัตกรรมวิศวกรสังคม',
    description: 'Presentation of "Pyrolysis Waste Incinerator Innovation" by the Faculty of Science and Technology.',
    descriptionTh: 'การพรีเซนต์นวัตกรรมวิศวกรสังคม ของคณะวิทยาศาสตร์และเทคโนโลยี " นวัตรกรรม เตาเผาขยะ ด้วยกระบวนการ Pyrolysis "',
    date: 'Aug 2025',
    dateTh: '29 สิงหาคม 2568',
    type: 'NATIONAL',
    icon: 'science',
    image: '/images/socialEngi.jpg'
  },
  {
    id: '4',
    title: 'Smart Waste Management Workshop',
    titleTh: 'โครงการ การจัดการขยะอัจฉริยะ',
    description: 'Participated in a workshop on Smart Waste Management, integrating Hardware and Software using Arduino IDE.',
    descriptionTh: 'เข้าร่วมอบรม โครงการ การจัดการขยะอัจฉริยะ ที่มีการใช้ Hardware และ Software(Arduino IDE) ใช้ร่วมกัน',
    date: 'June 2025',
    dateTh: '13 มิถุนายน 2568',
    type: 'WORKSHOP',
    icon: 'hardware',
    image: '/images/smartbin.jpg'
  }
];

export const SKILLS = [
  {
    categoryKey: 'ide',
    items: ['Android Studio', 'VS Code']
  },
  {
    categoryKey: 'language',
    items: ['Java', 'PHP', 'HTML', 'Dart', 'Python', 'C']
  },
  {
    categoryKey: 'database',
    items: ['Firebase Console', 'MySQL', 'SQL Server Management', 'MariaDB']
  },
  {
    categoryKey: 'tool',
    items: ['Unreal Engine 5']
  }
];

