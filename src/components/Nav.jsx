import { useState } from "react";

export default function Nav() {
    return (
        <nav className="flex border-b border-b-black justify-between items-center py-5 mx-4">
            <h1 className="text-4xl border-b border-black">Ian</h1>
            <div className="flex gap-12">
                <a href="/">Home</a>
                <a href="/#projects">Projects</a>
                <a href="/technologies">Technologies</a>
            </div>
        </nav>
    );
}
