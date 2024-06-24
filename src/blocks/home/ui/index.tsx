// UI
import { Spotlight } from "@/shared/ui/spotlight";

// Insides
import { HomeContent } from "./content";

export const Home = () => {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden h-screen bg-background dark:bg-grid-white/[0.032] bg-grid-black/[0.1] flex items-center justify-center"
    >

      {/* Container for smooth animation of background appearance */}
      <div className="w-full h-screen animate-backgroundOpacity absolute" />

      <Spotlight fill="#38bdf8" className="mt-36 ml-[15vw]" />

      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      {/* Container with content */}
      <HomeContent />
    </section>
  )
}
