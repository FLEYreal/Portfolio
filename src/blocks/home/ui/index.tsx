// UI
import { Spotlight } from "@/shared/ui/spotlight";

// Insides
import { Avatar } from "./avatar";
import { Description } from "./description";
import { Separator } from "@/shared/ui/separator";
import { More } from "./more";

export const Home = () => {
  return (
    <section className="relative w-full overflow-hidden h-screen bg-background dark:bg-grid-white/[0.032] bg-grid-black/[0.1] flex items-center justify-center">

      {/* Container for smooth animation of background appearance */}
      <div className="w-full h-screen animate-backgroundOpacity absolute -z-50" />

      <Spotlight fill="#38bdf8" className="mt-32 ml-[3vw]" />
      <Spotlight fill="#6366f1" className="mt-64 ml-[32vw]" />

      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      {/* Container with content */}
      <div
        id="home"
        className="container mt-[calc(10vh+64px)] flex flex-col gap-2 text-center justify-center items-center z-0"
      >
        <Avatar />
        <Description />

        <Separator className="w-24 my-4" />

        <More />
      </div>
    </section>
  )
}
