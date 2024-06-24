// Basics
import Image from "next/image"

// Libs
import { getTranslations } from "next-intl/server"

// Assets
import AvatarImage from "@/assets/images/avatar.jpg"

export const Avatar = async () => {
  const t = await getTranslations("home");
  return <div className="relative w-40 h-40 md:w-48 md:h-48 mb-12">
    <Image src={AvatarImage} alt="Avatar" fill className="rounded-full" />
    <div className="w-full absolute -bottom-10 flex flex-col text-center">
      <h1 className="font-bold text-[48px] h-[48px] mb-2">FLEY</h1>
      <p className="text-md text-slate-400">({t("its-my-website")}!)</p>
    </div>
  </div>
}