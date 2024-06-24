// Basics
import Link from "next/link"

// Libs
import { getTranslations } from "next-intl/server"

// UI
import { ChevronDown } from "lucide-react"

export const More = async () => {
  const t = await getTranslations("home");
  return <Link href="#about" className="group flex flex-col justify-center items-center text-slate-300 hover:text-white">
    {t("more")}
    <ChevronDown size={16} className="group-hover:translate-y-1 transition-all ease-in-out" />
  </Link>
}