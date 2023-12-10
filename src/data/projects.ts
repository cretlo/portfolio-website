import charlestonalImgData from "@assets/charlestonal.png";
import momclubImgData from "@assets/momclub.png";
import plannerImgData from "@assets/planner.png";
import vrImgData from "@assets/vr_destruction.png";

export default [
    {
        params: {
            project: "fullstack-planner-app",
        },
        props: {
            title: "Fullstack Planner App",
            imgData: plannerImgData,
            desc: "Screenshot of Fullstack Planner App's homepage.",
            technologies: ["react", "vite", "bootstrap", "nodejs", "express", "postgres", "redis", "docker"],
            about: `The app is a personal planner that allows you persist all your events, to-dos, and notes with a personal account. The goal was to build the majority of the functionality, using the native APIs from the technologies above, completely in Typescript. The reason was to feel the pain points of building your own authentication, state management, and REST APIs before utilizing libraries and frameworks that abstract a lot of the bare logic from you. This allowed me to gain deeper insight into what goes into making a strictly typed, fullstack application, and when to reach for libraries that can resolve those pain points. However, DrizzleORM was used for the types and database synchronization. Additionally, learning a drastic amount of docker through the process, the app is completely dockerized for easier development/deployment, and hosted on a VPS using Nginx as a reverse proxy to understand the DIY deployment process.`,
            link: "https://planner.ianreimers.com",
            github: "https://github.com/cretlo/fullstack-personal-dashboard",
        },
    },
    {
        params: {
            project: "charleston-assisted-living",
        },
        props: {
            title: "Charleston Assisted Living",
            imgData: charlestonalImgData,
            desc: "Screenshot of the Charleston Assisted living website homepage.",
            technologies: ["astro", "bootstrap", "sass"],
            about: `The single page website is built for an assisted living home located in Erie, CO. Originally built with Webpack and Sass, I recently ported the site over to Astro, for a better developer experience, and Bootstrap customized with Sass. With the clients request to keep it simple, accessible, fast, and easy to navigate, the website currently possesses a Google Lighthouse score of 99 performance, 100 accessibility, 100 best practices, and 100 SEO. On the quest for maximum optimizations, I learned how to implement responsive images for better loading times, since the gallery section contained many of them.`,
            link: "https://charlestonal.com",
            github: "https://github.com/cretlo/charlestonal",
        },
    },
    {
        params: {
            project: "mom-club",
        },
        props: {
            title: "Mom Club Wyoming",
            imgData: momclubImgData,
            desc: "Screenshot of Mom Club Wyoming, non-profit organization, website homepage.",
            technologies: ["nextjs", "tailwind", "express", "stripe"],
            about: `Mom Club is a non-profit organization located in Laramie, Wyoming. Originally built using create-react-app and Sass, I ported the project to NextJs and Tailwind since the client wants to implement more robust functionality in the near future. This was also an opportunity to learn Tailwind, which I thoroughly enjoyed. Stripe was used for handling the donation transactions and modified using NodeJs since donations were not a default feature of the Stripe API.`,
            link: "https://momclubwyo.org",
            github: "https://github.com/cretlo/momclub",
        },
    },
    {
        params: {
            project: "virtual-reality-destruction",
        },
        props: {
            title: "Virtual Reality Destruction",
            imgData: vrImgData,
            desc: "Screenshot of Virtual Reality Destruction gameplay footage.",
            technologies: ["csharp", "unity", "firebase", "blender"],
            about: `The end goal of the project was to build a time-based virtual reality destruction sandbox, taking motivation from the 1990s 2D game, Rampage. Completely physics based, the buildings are entirely destructible, allowing the player to cause destruction anyway they see fit. The player comes equipped with various abilities and movement capabilities such as walking, turning, leaping, climbing, punching, grabbing, and throwing, allowing for a dynamic motion experience. Additionally, for the time-based aspect of the experience, the player is timed with a tracked score that equates to the destruction they’ve caused, saved to a Firebase database, and displayed on an in-game world leaderboard. All of this resides in an environment completely constructed from Blender and native Unity components.`,
            link: "",
            github: "https://github.com/cretlo/fullstack-personal-dashboard",
        },
    },
];
