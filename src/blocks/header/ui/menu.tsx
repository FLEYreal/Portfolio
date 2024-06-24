"use client";

// Widgets
import { LanguageSwitch } from "@/widgets/language-switch";
import { ContactsDropdown } from "@/widgets/contacts-dropdown/ui";

// Shared
import { useBreakpoint } from "@/shared/utils/use-breakpoints";

export const HeaderMenu = () => {
  // Default setups
  const { isMd } = useBreakpoint("md");

  return (
    <>
      <ContactsDropdown />
      {isMd && <LanguageSwitch />}
    </>
  )
}