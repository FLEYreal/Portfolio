"use client";

// Libs
import { useTranslations } from "next-intl";

// UI
import { DropdownMenu, DropdownMenuContent, DropdownMenuSeparator, DropdownMenuTrigger } from "@/shared/ui/dropdown-menu";
import { Button } from "@/shared/ui/button";
import { ChevronDown } from "lucide-react";
import { ContactsDropdownItem } from "./item";

// My Nametags / Ids in social media / messangers
const telegramId = "DuckWatchingAirplane"
const discordId = "fley0609"
const githubId = "FLEYreal"
const email = "borisov.nikita.off@gmail.com"
const phone = "89500664032";

/** Dropdown with options to contact me */
export const ContactsDropdown = () => {
  // Default Setup
  const t = useTranslations("contacts")

  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="text-md flex flex-row gap-2 items-center justify-center text-slate-400">
            {t("contacts")}
            <ChevronDown size="16" />
          </Button>
        </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {/* List of social media */}
        <ContactsDropdownItem title={t("telegram")} link={`https://t.me/${telegramId}`} text={`@${telegramId}`} />
        <ContactsDropdownItem title={t("discord")} link="https://discord.com/channels/@me" text={`@${discordId}`} />
        <ContactsDropdownItem title={t("github")} link={`https://github.com/${githubId}`} text={`@${githubId}`} />

        <DropdownMenuSeparator />

        {/* Contacts */}
        <ContactsDropdownItem title={t("email")} link={`mailto:${email}`} text={email} />
        <ContactsDropdownItem newTab={false} title={t("phone-number")} link={`tel:${phone}`} text={phone} />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}