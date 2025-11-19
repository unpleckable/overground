"use client";
import { useState, useEffect } from "react";


export default function CustomCursor() {
const [pos, setPos] = useState({ x: 0, y: 0 });


useEffect(() => {
const move = (e: MouseEvent) => {
setPos({ x: e.clientX, y: e.clientY });
};
window.addEventListener("mousemove", move);
return () => window.removeEventListener("mousemove", move);
}, []);


return (
<div
className="pointer-events-none fixed top-0 left-0 z-[9999] hidden lg:block"
style={{
transform: `translate(${pos.x}px, ${pos.y}px)`,
}}
>
<div className="w-5 h-5 rounded-full bg-white mix-blend-difference"></div>
</div>
);
}