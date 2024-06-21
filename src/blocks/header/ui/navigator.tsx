// Libs
import { getTranslations } from "next-intl/server"

// Insides
import { HeaderItem } from "./item"

export const HeaderNavigator = async () => {
  const t = await getTranslations("header");
  return (
    <nav className="flex flex-row gap-1 items-center justify-center">
      <HeaderItem href="#home">{t("home")}</HeaderItem>
      <HeaderItem href="#about">{t("about")}</HeaderItem>
      <HeaderItem href="#portfolio">{t("portfolio")}</HeaderItem>
      <HeaderItem href="#experience">{t("experience")}</HeaderItem>
    </nav>
  )
}