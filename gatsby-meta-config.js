module.exports = {
  title: `Sanghwa's devlog`,
  description: `상화의 개발기록`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://imsh.netlify.app`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: `Iam-Sanghwa/iamsh-blog`, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `김상화`,
    bio: {
      role: `개발자`,
      description: ['좀 더 좋은 세상을 만들고 싶은', '같이 일하고 싶은', '책임감과 열정이 있는'],
      thumbnail: 'profile.gif', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/Iam-sanghwa`, // `https://github.com/zoomKoding`,
      linkedIn: ``, // `https://www.linkedin.com/in/jinhyeok-jeong-800871192`,
      email: `kimsh9026@gmail.com`, // `zoomkoding@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      
      {
        date: '2016.03 ~ 2020. 02.',
        activity: '슬기로운 학부생활',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
      {
        date: '2020. 02. ~ 2023. 05.',
        activity: '슬기롭지못한 첫 직장생활',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      {
        date: '2023. 06. ~ 2023. 08.',
        activity: '잊지못할 Refresh 여행',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      {
        date: '2024. 02. ~ ',
        activity: '부캠 중입니당,,',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },      
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '배달 어플리케이션',
        description:
          '배달의 민족 천명 전,, 교내 배달 업체를 리스트업하고, 전화 연결 기능을 제공하는 하이브리드 어플리케이션입니다.',
        techStack: ['ionic', 'firebase'],
        thumbnailUrl: 'blog.png',
        links: {
          post: '/gatsby-starter-zoomkoding-introduction',
          github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
          demo: 'https://www.zoomkoding.com',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: '배달 어플리케이션',
        description: '배달의 민족 천명 전,, 교내 배달 업체를 리스트업하고, 전화 연결 기능을 제공하는 하이브리드 어플리케이션입니다.',
        techStack: ['ionic', 'firebase'],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
      {
        title: '동행 모집 어플리케이션',
        description: '여행지 위치 기반으로 주변 여행객과의 매칭을 제공하는 하이브리드 어플리케이션입니다.',
        techStack: ['Flutter', 'Firebase'],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
    ],
  },
};
