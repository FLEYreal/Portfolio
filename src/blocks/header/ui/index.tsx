// UI
import { Separator } from "@/shared/ui/separator";

// Insides
import { HeaderNavigator } from "./navigator";

// Widgets
import { LanguageSwitch } from "@/widgets/language-switch";
import { ContactsDropdown } from "@/widgets/contacts-dropdown/ui";

export const Header = () => {
  return (
    <header className="overflow-hidden z-50 flex flex-row items-center justify-center gap-4 border-b fixed top-0 left-0 w-full h-16 bg-opacity-90 bg-background backdrop-blur-md">
      <HeaderNavigator />

      {/* Separator between navigation and menu */}
      <Separator orientation="vertical" className="h-4" />

      <div className="flex flex-row gap-2">
        <ContactsDropdown />
        <LanguageSwitch />
      </div>
    </header>
  )
}