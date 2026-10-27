export type EducationItem = {
  school: string;
  schoolEn: string;
  degree: string;
  period: string;
};

export type CareerItem = {
  org: string;
  dept: string;
  title: string;
  period: string;
  current?: boolean;
};

export type ResearchArea = {
  zh: string;
  en: string;
  icon: string;
  blurb: string;
};

export const profile = {
  nameZh: '潘信宏',
  nameEn: 'Shin-Hung Pan',
  title: '朝陽科技大學 資訊管理系 助理教授',
  titleEn: 'Assistant Professor, Dept. of Information Management, CYUT',
  tel: '04-23323000',
  email: 'vincentpan@cyut.edu.tw',
  emailDisplay: 'vincentpan [at] cyut.edu.tw',
  tagline: '在程式碼與課堂之間，把知識揉成可被實踐的形狀。',
  intro:
    '專注於網頁技術、機器學習與人工智慧的跨域研究，並將研究成果帶回教室。十餘年教學生涯，相信技術若不能被理解與運用，就只是停留在論文裡的字句。',
};

export const education: EducationItem[] = [
  {
    school: '朝陽科技大學 資訊科技研究所',
    schoolEn: 'College of Informatics, CYUT',
    degree: '博士 / Ph.D.',
    period: '2006.09 — 2009.06',
  },
  {
    school: '朝陽科技大學 資訊管理系',
    schoolEn: 'Dept. of Information Management, CYUT',
    degree: '碩士 / Master',
    period: '2004.09 — 2006.04',
  },
  {
    school: '朝陽科技大學 工業工程與管理系',
    schoolEn: 'Dept. of Industrial Engineering & Management, CYUT',
    degree: '學士 / Bachelor',
    period: '1996.09 — 2000.06',
  },
];

export const career: CareerItem[] = [
  {
    org: '朝陽科技大學',
    dept: '資訊管理系',
    title: '助理教授',
    period: '2023.08 — 至今',
    current: true,
  },
  {
    org: '亞洲大學',
    dept: '行動商務與多媒體應用系',
    title: '助理教授，兼任資訊發展處數位教學中心主任',
    period: '2010.08 — 2023.07',
  },
  {
    org: '勤益科技大學',
    dept: '資訊管理系',
    title: '方案八博士教師（專任教師）',
    period: '2009.09 — 2010.07',
  },
  {
    org: '朝陽科技大學',
    dept: '資訊管理系',
    title: '兼任講師',
    period: '2008.09 — 2010.08',
  },
  {
    org: '朝陽科技大學',
    dept: '企業管理系',
    title: '專案約聘人員',
    period: '2003.10 — 2005.10',
  },
  {
    org: '億網科技',
    dept: '工程部門',
    title: '主任工程師',
    period: '2001.04 — 2003.09',
  },
];

export const researchAreas: ResearchArea[] = [
  {
    zh: '網頁技術',
    en: 'Web Technologies',
    icon: 'Code2',
    blurb: '前後端架構、互動體驗與現代 Web 標準的實踐與教學。',
  },
  {
    zh: '機器學習',
    en: 'Machine Learning',
    icon: 'BrainCircuit',
    blurb: '從資料中萃取模式，建構可解釋、可部署的預測模型。',
  },
  {
    zh: '人工智慧',
    en: 'Artificial Intelligence',
    icon: 'Sparkles',
    blurb: '智慧決策、推論與生成式方法在跨域場景的應用。',
  },
  {
    zh: '嵌入式系統與物聯網',
    en: 'Embedded System & IoT',
    icon: 'Cpu',
    blurb: '邊緣運算、感測網路與軟硬體整合的端點設計。',
  },
  {
    zh: '智慧型運輸系統',
    en: 'Intelligent Transport System',
    icon: 'Route',
    blurb: '車流感知、路網最佳化與即時交通決策輔助。',
  },
  {
    zh: '隨意式無線網路',
    en: 'Mobile Ad-hoc Network',
    icon: 'Wifi',
    blurb: '無基礎建設下的節點繞送、拓樸穩定性與節能策略。',
  },
];
