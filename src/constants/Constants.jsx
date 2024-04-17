import {
    githubIcon,
    linkedinIcon,
    resumeIcon,
    htmlIcon,
    cssIcon,
    javaScriptIcon,
    reactIcon,
    postgreSqlIcon,
    nodeIcon,
    bootstrapIcon,
    tailwindIcon,
    barcelona,
    ufit,
    portfolio
} from '../assets';

const socials = [
    {
        id: '1',
        name: 'LinkedIn',
        icon: linkedinIcon,
        link: 'https://www.linkedin.com/in/shak-yuldashev/'
    },
    {
        id: '2',
        name: 'Github',
        icon: githubIcon,
        link: 'https://github.com/shaky1996'
    },
    {
        id: '3',
        name: 'Resume',
        icon: resumeIcon,
        link: 'https://github.com/shaky1996'
    }
];

const technology = [
    {
        id: 1,
        name: 'HTML',
        icon: htmlIcon
    },
    {
        id: 2,
        name: 'CSS',
        icon: cssIcon
    },
    {
        id: 3,
        name: 'JavaScript',
        icon: javaScriptIcon
    },
    {
        id: 4,
        name: 'React / React Native',
        icon: reactIcon
    },
    {
        id: 5,
        name: 'PostgreSQL',
        icon: postgreSqlIcon
    },
    {
        id: 6,
        name: 'NodeJs(Express)',
        icon: nodeIcon
    },
    {
        id: 7,
        name: 'Bootstrap',
        icon: bootstrapIcon
    },
    {
        id: 8,
        name: 'Tailwind CSS',
        icon: tailwindIcon
    }
];

const project = [
    {
        id: 1,
        name: 'BARCELONA',
        demo: 'https://shakbarcelona2024.web.app/',
        github: 'https://github.com/shaky1996/portfolio_barcelona',
        image: barcelona,
        stack: ['html', 'css', 'javascript'],
        description: 'Responsive website demonstartes use of web fundamentals through the utilization of HTML, CSS, JavaScript and fetching data from an API without using any frameworks.'
    },
    {
        id: 2,
        name: 'UFIT',
        demo: 'https://snack.expo.dev/@yuldashev1996/ufit---portfolio-project-?platform=ios',
        github: 'https://github.com/shaky1996/uFit',
        image: ufit,
        stack: ['reactNative', 'javascript', 'expoGo'],
        description: 'React Native fitness app — lets users find instructions for different workouts with an easy-to-use interface. Users also can track workouts using built-in templates.'
    },
    {
        id: 3,
        name: 'PORTFOLIO',
        demo: 'https://portfolioshakhzod2024.web.app/',
        github: 'https://github.com/shaky1996/Portfolio',
        image: portfolio,
        stack: ['react', 'bootstrap', 'javascript'],
        description: 'Fully reponsive website built with React and react-bootstrap. Implemneted the use of framer motion animations as well as bootstrap classes for resposnive design.'
    }
];

export { socials, technology, project };
