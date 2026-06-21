const CONTENT = {
  vacancies: [
    {
      id: 1,
      title: "Data Analyst / M&E Specialist",
      company: "FHI 360",
      location: "Душанбе",
      type: "Полная занятость",
      tags: ["Здравоохранение", "Данные", "M&E"],
      remote: true,
      isNew: true,
      date: "2026-06-19",
      url: "https://www.fhi360.org/careers",
      icon: "ti-chart-bar",
      color: "purple"
    },
    {
      id: 2,
      title: "Инженер по бизнес-аналитике",
      company: "МегаФон Таджикистан",
      location: "Душанбе",
      type: "Полная занятость",
      tags: ["IT", "BI", "SQL"],
      remote: false,
      isNew: false,
      date: "2026-06-16",
      url: "https://jobmf.tj",
      icon: "ti-database",
      color: "teal"
    },
    {
      id: 3,
      title: "Digital Health Data Officer",
      company: "WHO Tajikistan",
      location: "Душанбе",
      type: "Контракт",
      tags: ["ООН", "Здравоохранение", "Данные"],
      remote: false,
      isNew: true,
      date: "2026-06-20",
      url: "https://www.who.int/careers",
      icon: "ti-heart-rate-monitor",
      color: "coral"
    },
    {
      id: 4,
      title: "AI/ML Engineer (удалённо)",
      company: "Codenrock / Remote",
      location: "Удалённо",
      type: "Проектная",
      tags: ["Python", "ML", "ИИ"],
      remote: true,
      isNew: true,
      date: "2026-06-21",
      url: "https://codenrock.com",
      icon: "ti-robot",
      color: "purple"
    },
    {
      id: 5,
      title: "SMM & Digital Content Specialist",
      company: "Авесто Групп",
      location: "Душанбе",
      type: "Полная занятость",
      tags: ["SMM", "Контент", "Цифровые медиа"],
      remote: false,
      isNew: false,
      date: "2026-06-14",
      url: "https://somon.tj/vakansii",
      icon: "ti-brand-instagram",
      color: "teal"
    },
    {
      id: 6,
      title: "Project Data Manager",
      company: "UNAIDS Tajikistan",
      location: "Душанбе",
      type: "Контракт",
      tags: ["ООН", "ВИЧ", "Данные"],
      remote: false,
      isNew: false,
      date: "2026-06-10",
      url: "https://reliefweb.int/jobs",
      icon: "ti-file-analytics",
      color: "coral"
    }
  ],

  contests: [
    {
      id: 1,
      title: "Цифровой прорыв: сезон ИИ",
      type: "hackathon",
      typeLabel: "Хакатон",
      deadline: "2026-08-15",
      prize: "10 000 000 ₽",
      url: "https://hackathons.pro",
      online: true,
      description: "Международный хакатон по ИИ — онлайн, открыт для СНГ"
    },
    {
      id: 2,
      title: "Humphrey Fellowship Program 2027",
      type: "fellowship",
      typeLabel: "Стипендия",
      deadline: "2026-10-01",
      prize: "Полное финансирование",
      url: "https://www.humphreyfellowship.org",
      online: false,
      description: "Годовая стажировка в США для mid-career специалистов в сфере здравоохранения"
    },
    {
      id: 3,
      title: "ANaMed AI Challenge",
      type: "hackathon",
      typeLabel: "Конкурс",
      deadline: "2026-09-30",
      prize: "5 000 000 ₸",
      url: "https://news.kaznmu.edu.kz",
      online: true,
      description: "Конкурс ИИ-проектов в сфере здравоохранения и медицины"
    },
    {
      id: 4,
      title: "Union World Conference on Lung Health",
      type: "conference",
      typeLabel: "Конференция",
      deadline: "2026-09-01",
      prize: "Travel grant",
      url: "https://www.theunion.org/what-we-do/conferences",
      online: false,
      description: "Ежегодная конференция Stop TB — travel grants для специалистов из LMIC"
    },
    {
      id: 5,
      title: "EHRA Travel Grant — ЦА",
      type: "grant",
      typeLabel: "Грант",
      deadline: "2026-08-01",
      prize: "Поездка оплачена",
      url: "https://harmreductioneurasia.org/tenders-and-announcements",
      online: false,
      description: "Гранты на поездки для специалистов по снижению вреда из Центральной Азии"
    },
    {
      id: 6,
      title: "Rotary Global Grant — здравоохранение",
      type: "grant",
      typeLabel: "Грант",
      deadline: "2026-10-15",
      prize: "До $30 000",
      url: "https://www.rotary.org/en/our-programs/grants",
      online: false,
      description: "Международные гранты на проекты в сфере общественного здравоохранения"
    }
  ],

  news: [
    {
      id: 1,
      title: "В Таджикистане 8 вузов открыли специальность «Искусственный интеллект»",
      source: "Asia-Plus",
      date: "2026-06-18",
      url: "https://asiaplustj.info"
    },
    {
      id: 2,
      title: "Global Fund запускает GC8 — новые гранты для TB/HIV программ в регионе",
      source: "EECA Platform",
      date: "2026-06-15",
      url: "https://eecaplatform.org"
    },
    {
      id: 3,
      title: "МегаФон Таджикистан внедряет BI-аналитику и набирает специалистов по данным",
      source: "jobmf.tj",
      date: "2026-06-16",
      url: "https://jobmf.tj"
    },
    {
      id: 4,
      title: "UNAIDS: дефицит финансирования угрожает программам по ВИЧ в ЦА в 2026 году",
      source: "UNAIDS",
      date: "2026-06-12",
      url: "https://www.unaids.org"
    },
    {
      id: 5,
      title: "Хакатон по ИИ в здравоохранении пройдёт онлайн в сентябре 2026",
      source: "codenrock.com",
      date: "2026-06-10",
      url: "https://codenrock.com"
    }
  ]
};
