module.exports = {
  siteTitle: 'Pawel Niedzwiecki | Front End Developer',
  siteDescription: 'Front End developer and Graphic designer from Poland.',
  siteKeywords:
    'Pawel Niedzwiecki, Pawel, Niedzwiecki, developer, software engineer, front-end engineer, web developer, javascript, desginer',
  siteUrl: 'http://pawelniedzwiecki.pl',
  siteLanguage: 'en_US',
  googleAnalyticsID: '',
  googleVerification: '',
  name: 'Pawel Niedzwiecki',
  location: 'Szczecin, PL',
  email: 'niedzwieckipaul@gmail.com',
  github: 'https://github.com/PawelNiedzwiecki',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/PawelNiedzwiecki',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/paulpl',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/sleepy_weirdo',
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/ivellios',
    },    
    {
      name: 'Behance',
      url: 'https://www.behance.net/ivellios',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  yellowColor: '#F2C438',
  navyColor: '#C1C3EC',
  darkNavyColor: '#2F3659',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
