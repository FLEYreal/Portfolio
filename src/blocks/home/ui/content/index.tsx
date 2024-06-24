// UI
import { Separator } from "@/shared/ui/separator";

// Insides
import { Avatar } from "./avatar";
import { Description } from "./description";
import { More } from "./more";

export const HomeContent = () => {
  return (
    <div className="animate-lineAppearance overflow-hidden container mt-[64px] flex flex-col gap-2 text-center justify-center items-center z-0 w-[80%] md:w-1/2">
      <Avatar />
      <Description />

      <Separator className="w-24 my-4" />

      <More />
    </div>
  )
}
