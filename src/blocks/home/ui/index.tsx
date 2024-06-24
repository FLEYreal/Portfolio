// UI
import { Spotlight } from "@/shared/ui/spotlight";

// Insides
import { Avatar } from "./avatar";
import { Description } from "./description";
import { Separator } from "@/shared/ui/separator";

export const Home = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <Spotlight fill="#6366f1" className="ml-[25vw]" />

      {/* Container with content */}
      <div
        id="home"
        className="container mt-[calc(25vh+64px)] flex flex-col gap-2 text-center justify-center items-center"
      >
        <Avatar />
        <Description />

        <Separator className="w-24 my-4" />
      </div>
    </section>
  )
}