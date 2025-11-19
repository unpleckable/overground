"use client";
import { createContext, useContext, useState } from "react";


const CursorContext = createContext({ cursorType: "default", setCursorType: (t: string) => {} });


export function CursorProvider({ children }: { children: React.ReactNode }) {
const [cursorType, setCursorType] = useState("default");
return <CursorContext.Provider value={{ cursorType, setCursorType }}>{children}</CursorContext.Provider>;
}


export function useCursor() {
return useContext(CursorContext);
}