import Link from "next/link";


export default function Nav() {
return (
<nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between bg-black/40 backdrop-blur-md border-b border-white/10">
<Link href="/" className="text-2xl tracking-widest font-semibold">
OVERGROUND
</Link>
<div className="flex gap-6 text-lg">
<Link href="/shop">Shop</Link>
</div>
</nav>
);
}