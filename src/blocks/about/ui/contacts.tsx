"use client"

// Basics
import Image from "next/image";
import Link from "next/link";

// Libs
import { useTranslations } from "next-intl";

// UI
import { Separator } from "@/shared/ui/separator";

// Shared
import { discordId, email, githubId, phone, telegramId } from "@/shared/config/contacts";
import { useCopy } from "@/shared/utils/use-copy";

// Assets
import GithubLogo from "@/assets/icons/github.svg";
import TelegramLogo from "@/assets/icons/telegram.svg";
import DiscordLogo from "@/assets/icons/discord.svg";
import { Button } from "@/shared/ui/button";
import { CopyIcon } from "lucide-react";

export const Contacts = () => {
  // Default Setup
  const { copy } = useCopy();
  const t = useTranslations("about");

  return (
    <div className="text-center">
      <h3 className="font-semibold text-[1.75rem]">{t("contacts")}</h3>

      <Separator className="w-[10%] mx-auto mt-5 mb-7" />

      <div className="flex flex-row gap-4 justify-center mb-4">
        <Link target="_blank" href={`https://github.com/${githubId}`}>
          <Image src={GithubLogo} alt="Github Logo" width={64} className="mb-1" />
        </Link>

        <Link target="_blank" href={`https://t.me/${telegramId}`}>
          <Image src={TelegramLogo} alt="Telegram Logo" width={64} className="mb-1" />
        </Link>

        <Image src={DiscordLogo} alt="Discord Logo" width={64} className="mb-1 cursor-pointer" onClick={() => copy(discordId)} />
      </div>

      <div className="text-slate-300 flex items-center justify-center gap-1 text-md">
        {email}
        <Button onClick={() => copy(email)} variant="ghost" size="icon" type="button">
          <CopyIcon size={16} />
        </Button>
      </div>
      <div className="text-slate-500 flex items-center justify-center gap-1 text-md">
        +{phone} ({t("russia")})
        <Button onClick={() => copy(phone)} variant="ghost" size="icon" type="button">
          <CopyIcon size={16} />
        </Button>
      </div>

    </div>
  )
}