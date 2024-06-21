"use client"

// Libs
import { useTranslations } from "next-intl";

// Insides
import { HeaderItem } from "./item";

// Shared
import { useSectionContext } from "@/shared/utils/use-section-context";

export const HeaderNavigator = () => {
  // Contexts
  const { section } = useSectionContext();

  // Default setup
  const t = useTranslations("header");

  return (
    <nav className="flex flex-row gap-1 items-center justify-center">
      <HeaderItem href="#home" selected={section === "home"}>{t("home")}</HeaderItem>
      <HeaderItem href="#about" selected={section === "about"}>{t("about")}</HeaderItem>
      <HeaderItem href="#portfolio" selected={section === "portfolio"}>{t("portfolio")}</HeaderItem>
      <HeaderItem href="#experience" selected={section === "experience"}>{t("experience")}</HeaderItem>
    </nav>
  )
}