// gitprofile.config.js

const config = {
  github: {
    username: 'AlifArshad04', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'alif-arshad-bakshi-344391161',
    twitter: '',
    mastodon: '',
    facebook: 'alif.arshad.b',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'arshadbakshi@iut-dhaka.edu',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Flutter',
    'JavaScript',
    'React.js',
    'Node.js',
    'MySQL',
    'Git',
    'Docker',
    'CSS',
  ],
  experiences: [
    {
      company: 'Battary Low Interactive Ltd.',
      position: 'App Development Intern',
      from: 'November 2023',
      to: 'Present',
      companyLink: 'https://batterylowinteractive.com/',
    },
    // {
    //   company: 'Company Name',
    //   position: 'Position',
    //   from: 'July 2019',
    //   to: 'August 2021',
    //   companyLink: 'https://example.com',
    // },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'Islamic University of Technology',
      degree: 'B.Sc. in Computer Science and Engineering',
      from: '2020',
      to: '2024',
    },
    {
      institution: 'Dhaka College',
      degree: 'HSC',
      from: '2017',
      to: '2019',
    },
    {
      institution: 'Government Laboratory High School, Dhaka',
      degree: 'SSC',
      from: '2007',
      to: '2017',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Ishara Buli',
      description:
        'An android application for learning Bangla sign language Topics License',
      imageUrl: 'https://cdn.pixabay.com/photo/2021/03/29/23/55/hand-sign-6135513_1280.png',
      link: 'https://github.com/squirtle-squad-iut/ishara_buli',
    },
    {
      title: 'Canvas',
      description:
        'Canvas is a drawing program written and developed using C++ and the SFML library. It was built in Visual Studio and runs on both Windows and Linux based operating systems.',
      imageUrl: 'https://paintology.in/wp-content/uploads/2021/07/wanderlust-acrylic-painting-on-canvas-760x760.jpg',
      link: 'https://github.com/Bhrom-but-better/Canvas',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'arshadbakshi', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'wireframe',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
