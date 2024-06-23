"use client"

// Basics
import Link from "next/link";

// Libs
import { useTranslations } from "next-intl";

// UI
import { BriefcaseBusinessIcon, CircleUserIcon, HomeIcon, MedalIcon, MenuIcon } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/shared/ui/dropdown-menu";
import { Button } from "@/shared/ui/button";

// Insides
import { HeaderItem } from "./item";

// Widgets
import { LanguageSwitch } from "@/widgets/language-switch";

// Shared
import { useSectionContext } from "@/shared/utils/use-section-context";
import { useBreakpoint } from "@/shared/utils/use-breakpoints";

export const HeaderNavigator = () => {
  // Contexts
  const { section } = useSectionContext();

  // Default setup
  const t = useTranslations("header");
  const { isMd } = useBreakpoint("md");

  if (isMd) return (
    <nav className="flex flex-row gap-1 items-center justify-center">
      <HeaderItem href="#home" selected={section === "home"}>{t("home")}</HeaderItem>
      <HeaderItem href="#about" selected={section === "about"}>{t("about")}</HeaderItem>
      <HeaderItem href="#portfolio" selected={section === "portfolio"}>{t("portfolio")}</HeaderItem>
      <HeaderItem href="#experience" selected={section === "experience"}>{t("experience")}</HeaderItem>
    </nav>
  )
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <MenuIcon />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <Link href="#home">
          <DropdownMenuItem>
            <HomeIcon size={20} />
            {t("home")}
          </DropdownMenuItem>
        </Link>
        <Link href="#about">
          <DropdownMenuItem>
            <CircleUserIcon size={20} />
            {t("about")}
          </DropdownMenuItem>
        </Link>
        <Link href="#portfolio">
          <DropdownMenuItem>
            <BriefcaseBusinessIcon size={20} />
            {t("portfolio")
          }</DropdownMenuItem>
        </Link>
        <Link href="#experience">
          <DropdownMenuItem>
            <MedalIcon size={20} />
            {t("experience")}
          </DropdownMenuItem>
        </Link>

        <DropdownMenuSeparator />

        <LanguageSwitch className="w-full rounded-md justify-start pl-6" />

      </DropdownMenuContent>
    </DropdownMenu>
  )
}