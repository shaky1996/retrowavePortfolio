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
        name: 'Barcelona',
        demo: 'https://shakbarcelona2024.web.app/',
        github: 'https://github.com/shaky1996/portfolio_barcelona',
        image: barcelona,
        stack: ['HTML', 'CSS', 'JavaScript']
    },
    {
        id: 2,
        name: 'uFit',
        demo: 'https://snack.expo.dev/@yuldashev1996/ufit---portfolio-project-?platform=ios',
        github: 'https://github.com/shaky1996/uFit',
        image: ufit,
        stack: ['ReactNative', 'JavaScript', 'ExpoGo']
    },
    {
        id: 3,
        name: 'Portfolio',
        demo: 'https://portfolioshakhzod2024.web.app/',
        github: 'https://github.com/shaky1996/Portfolio',
        image: portfolio,
        stack: ['React', 'Bootstrap', 'JavaScript']
    }
];

export { socials, technology, project };
