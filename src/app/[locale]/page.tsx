// Insides
import "./globals.css"

// Blocks
import { Header } from "@/blocks/header";
import { Home } from "@/blocks/home";

export default function HomePage() {
  return (
    <main className="w-full flex flex-col justify-center">
      <Header />
      <Home />
    </main>
  );
}
