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
} from "react-icons/si";

import { PiFileSqlFill } from "react-icons/pi";
import { FaJava } from "react-icons/fa";

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
    java: FaJava,
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
};

export default function Icon({ title, size = 48 }) {
    const IconComponent = iconMap[title];

    return (
        <IconComponent title={title} size={size} className="fill-slate-500" />
    );
}
