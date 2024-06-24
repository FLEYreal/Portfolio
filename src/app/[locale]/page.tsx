// Insides
import "./globals.css"

// Blocks
import { Header } from "@/blocks/header";
import { Home } from "@/blocks/home";
import { About } from "@/blocks/about";

export default function HomePage() {
  return (
    <>
      <Header />
      <Home />
      <About />
    </>
  );
}
