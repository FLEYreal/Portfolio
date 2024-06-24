// Insides
import { Contacts } from "./contacts"
import { Stack } from "./stack"

export const About = () => {
  return <section id="about" className="container flex flex-col gap-24 justify-center items-center">
    <Stack />
    <Contacts />
  </section>
}