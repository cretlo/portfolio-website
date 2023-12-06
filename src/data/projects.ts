import {
    SiAstro,
    SiBootstrap,
    SiSass,
    SiExpress,
    SiStripe,
    SiNextdotjs,
    SiTailwindcss,
} from "react-icons/si";

export default [
    {
        params: {
            project: "charleston-assisted-living",
        },
        props: {
            title: "Charleston Assisted Living",
            imgPath: "/src/assets/charlestonal.png",
            desc: "some alt text",
            technologies: [SiAstro, SiBootstrap, SiSass],
            about: "",
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
            desc: "some alt text",
            technologies: [SiNextdotjs, SiTailwindcss, SiExpress, SiStripe],
            about: "",
            link: "https://momclubwyo.org",
            github: "https://github.com/cretlo/momclub",
        },
    },
];
