// UI
import { Separator } from "@/shared/ui/separator";

// Insides
import { HeaderNavigator } from "./navigator";
import { HeaderScrollBar } from "./scroll-bar";
import { HeaderMenu } from "./menu";

export const Header = () => {
  return (
    <header className="z-50 flex flex-row-reverse md:flex-row items-center justify-center gap-4 border-b-[2px] fixed top-0 left-0 w-full h-16 bg-background backdrop-blur-md">
      <HeaderNavigator />

      {/* Separator between navigation and menu */}
      <Separator orientation="vertical" className="h-4" />

      {/* Menu with contacts and language switch */}
      <HeaderMenu />

      {/* Scrollbar of the header specifically */}
      <HeaderScrollBar />
    </header>
  )
}