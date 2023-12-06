export default [
    {
        params: {
            project: "fullstack-planner-app",
        },
        props: {
            title: "Fullstack Planner App",
            imgPath: "/src/assets/planner.png",
            desc: "Screenshot of Fullstack Planner App's homepage.",
            technologies: [
                "react",
                "vite",
                "bootstrap",
                "express",
                "postgres",
                "redis",
                "docker",
            ],
            about: `The goal was to build as much as possible from scratch, only using the native apis from the technologies above, to feel the pain points of building your own authentication, state management, and REST apis, completely in Typescript, before utilizing libraries and frameworks that abstract a lot of the bare functionality from you. This allowed me to gain deeper insight into what goes into making a strictly typed fullstack application, completely dockerized for development and production, and hosted on a VPS using Nginx as a reverse proxy. However, I did use DrizzleORM for the types and database syncronization.`,
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
            imgPath: "/src/assets/charlestonal.png",
            desc: "Screenshot of the Charleston Assisted living website homepage.",
            technologies: ["astro", "bootstrap", "sass"],
            about: "With the clients request to keep it simple and easy to navigate, the website is single paged with a Google Lighthouse score of 99, 100, 100, 100 for performace, accessibility, best practices, and SEO. Bootstrap is customized using Sass, and built within Astro to make it as light as possible. On the quest for maximum optimizations, I learned how to implement responsive images for better loading times since the gallery section contained many of them.",
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
            imgPath: "/src/assets/momclub.png",
            desc: "Screenshot of Mom Club Wyoming, non-profit organization, website homepage.",
            technologies: ["nextjs", "tailwind", "express", "stripe"],
            about: "Originally built using create-react-app and Sass, I ported the project to NextJs and Tailwind to use SSG since the client would want to implement more robust functionality with a backend in the near future. This was also an opportunity I took to learn Tailwind, to see what the hype was all about (so far I like it a lot). Since the client wanted a single donation button, Stripe was used for handling the transactions, and modified using NodeJs since donations were not a default feature of the Stripe api.",
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
            imgPath: "/src/assets/vr_destruction.png",
            desc: "Screenshot of Virtual Reality Destruction gameplay footage.",
            technologies: ["csharp", "unity", "firebase", "blender"],
            about: "The end goal of the project was to build a time-based virtual reality destruction sandbox, taking motivation from the 1990s 2D game, Rampage. Completely physics based, the buildings are entirely destructible, allowing the player to cause destruction anyway they see fit. The player comes equipped with various abilities and movement capabilities such as walking, turning, leaping, climbing, punching, grabbing, and throwing, allowing for a dynamic motion experience. Additionally, for the time-based aspect of the experience, the player is timed with a tracked score that equates to the destruction they’ve caused, saved to a Firebase database, and displayed on an in-game world leaderboard. All of this resides in an environment completely constructed from scratch.",
            link: "",
            github: "https://github.com/cretlo/fullstack-personal-dashboard",
        },
    },
];
