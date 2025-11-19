import "./globals.css";
import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import Nav from "@/components/Nav";
import CustomCursor from "@/components/CustomCursor";
import { CursorProvider } from "@/components/CursorProvider";
import { Analytics } from '@vercel/analytics/next';

const cormorant = Cormorant_Garamond({
subsets: ["latin"],
weight: ["300", "400", "500", "600", "700"],
variable: "--font-cormorant",
});


export const metadata: Metadata = {
title: "OVERGROUND",
description: "Streetwear engineered for the ones who rise.",
};


export default function RootLayout({
children,
}: {
children: React.ReactNode;
}) {
return (
<html lang="en" className={cormorant.variable}>
<body className="bg-black text-white overflow-x-hidden select-none">
<CursorProvider>
<Nav />
<CustomCursor />
{children}
</CursorProvider>
<Analytics />
</body>
</html>
);
}