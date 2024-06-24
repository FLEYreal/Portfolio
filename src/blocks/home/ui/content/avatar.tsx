// Basics
import Image from "next/image"

// Libs
import { getTranslations } from "next-intl/server"

// Assets
import AvatarImage from "@/assets/images/avatar.webp"

export const Avatar = async () => {
  const t = await getTranslations("home");
  return <div className="relative mb-12">
    <div className="w-40 h-40 md:w-48 md:h-48 bg-gradient-to-br from-[#8eddff] to-background rounded-full">
      <Image src={AvatarImage} alt="Avatar" fill className="rounded-full p-[2px]" />
    </div>
    <div className="w-full absolute -bottom-10 flex flex-col text-center">
      <div className="bg-gradient-to-br from-[#8eddff] to-white bg-clip-text text-transparent font-bold text-[48px] h-[58px]">FLEY</div>
      <p className="bg-gradient-to-br from-white to-slate-600 bg-clip-text text-transparent text-md">({t("its-my-website")}!)</p>
    </div>
  </div>
}