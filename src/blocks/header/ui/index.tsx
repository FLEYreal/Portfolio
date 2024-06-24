// Basics
import dynamic from 'next/dynamic';

// UI
import { Separator } from "@/shared/ui/separator";

// Insides
const HeaderNavigator = dynamic(() => import('./navigator').then((module) => module.HeaderNavigator), { ssr: false });
const HeaderMenu = dynamic(() => import("./menu").then((module) => module.HeaderMenu), { ssr: false })
import { HeaderScrollBar } from "./scroll-bar";

export const Header = () => {
  return (
    <header className="px-6 z-50 flex flex-row-reverse md:flex-row items-center md:justify-center gap-1 border-b-[2px] fixed top-0 left-0 w-full h-16 bg-slate-950 bg-opacity-65 backdrop-blur-md">
      <HeaderNavigator />

      {/* Separator between navigation and menu */}
      <Separator orientation="vertical" className="h-4 mx-2" />

      {/* Menu with contacts and language switch */}
      <HeaderMenu />

      {/* Scrollbar of the header specifically */}
      <HeaderScrollBar />
    </header>
  )
}
