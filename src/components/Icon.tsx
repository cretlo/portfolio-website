import {
    SiJavascript,
    SiTypescript,
    SiHtml5,
    SiCss3,
    SiSass,
    SiPython,
    SiCsharp,
    SiLua,
    SiC,
    SiHaskell,
    SiNginx,
    SiDocker,
    SiReact,
    SiNextdotjs,
    SiVite,
    SiAstro,
    SiWebpack,
    SiNodedotjs,
    SiExpress,
    SiPostgresql,
    SiRedis,
    SiFirebase,
    SiNeovim,
    SiI3,
    SiArchlinux,
    SiTmux,
    SiGnubash,
    SiStripe,
    SiTailwindcss,
    SiBootstrap,
    SiUnity,
    SiBlender,
    SiGithub,
    SiGit,
    SiSpringboot,
} from "react-icons/si";

import { PiFileSqlFill } from "react-icons/pi";
import { DiJava } from "react-icons/di";
import { TbArrowBadgeDown } from "react-icons/tb";
import SecurityPlus from "../assets/logos/securityplus-logo-certified-ce-black.png";
import NetworkPlus from "../assets/logos/networkplus-logo-certified-ce-black.png";

const iconMap = {
    javascript: SiJavascript,
    typescript: SiTypescript,
    html: SiHtml5,
    css: SiCss3,
    sass: SiSass,
    python: SiPython,
    sql: PiFileSqlFill,
    csharp: SiCsharp,
    lua: SiLua,
    c: SiC,
    java: DiJava,
    haskell: SiHaskell,
    nginx: SiNginx,
    docker: SiDocker,
    react: SiReact,
    nextjs: SiNextdotjs,
    vite: SiVite,
    astro: SiAstro,
    webpack: SiWebpack,
    nodejs: SiNodedotjs,
    express: SiExpress,
    postgres: SiPostgresql,
    redis: SiRedis,
    firebase: SiFirebase,
    neovim: SiNeovim,
    i3: SiI3,
    arch: SiArchlinux,
    tmux: SiTmux,
    bash: SiGnubash,
    stripe: SiStripe,
    tailwind: SiTailwindcss,
    bootstrap: SiBootstrap,
    unity: SiUnity,
    blender: SiBlender,
    github: SiGithub,
    git: SiGit,
    downArrow: TbArrowBadgeDown,
    springboot: SiSpringboot,
    securityplus: SecurityPlus,
    networkplus: NetworkPlus,
};

export default function Icon({
    title,
    size = 58,
    className = "fill-slate-500",
}: {
    title: string;
    size: number | undefined;
    className: string | undefined;
}) {
    const IconComponent = iconMap[title];

    // Edge case since CompTIA doesn't provide SVG logo files
    //
    // The filter was calculated from https://codepen.io/sosuke/pen/Pjoqqp with the slate-500 color extracted using
    // firefox dev tools color picker
    if (title.includes("plus")) {
        return (
            <img
                src={IconComponent.src}
                alt={title + " logo"}
                style={{
                    filter: "invert(42%) sepia(37%) saturate(256%) hue-rotate(176deg) brightness(97%) contrast(92%);",
                    width: size * 1.5,
                }}
            />
        );
    }

    return <IconComponent title={title} size={size} className={className} />;
}
