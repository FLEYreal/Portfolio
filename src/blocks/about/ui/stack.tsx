"use client"

// Basics
import Image from "next/image";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";

// Libs
import { useTranslations } from "next-intl";

// UI
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/shared/ui/carousel";
import { Separator } from "@/shared/ui/separator";

// Assets
import HTMLLogo from "@/assets/icons/html.svg";
import CSSLogo from "@/assets/icons/css.svg";
import SassLogo from "@/assets/icons/sass.svg";
import PythonLogo from "@/assets/icons/python.svg";
import FastAPILogo from "@/assets/icons/fastapi.svg";
import JavaScriptLogo from "@/assets/icons/javascript.svg";
import TypeScriptLogo from "@/assets/icons/typescript.svg";
import NextJSLogo from "@/assets/icons/nextjs.svg";
import ReactJSLogo from "@/assets/icons/reactjs.svg";
import TailwindLogo from "@/assets/icons/tailwind.svg";
import ShadcnLogo from "@/assets/icons/shadcn.svg";
import MUILogo from "@/assets/icons/mui.svg";
import ReduxLogo from "@/assets/icons/redux.svg";
import ElectronLogo from "@/assets/icons/electron.svg";
import TauriLogo from "@/assets/icons/tauri.svg";
import NodeJSLogo from "@/assets/icons/nodejs.svg";
import NestJSLogo from "@/assets/icons/nestjs.svg";
import PrismaLogo from "@/assets/icons/prisma.svg";
import MySQLLogo from "@/assets/icons/mysql.svg";
import PostgreSQLLogo from "@/assets/icons/postgresql.svg";
import MongoLogo from "@/assets/icons/mongo.svg";
import DockerLogo from "@/assets/icons/docker.svg";
import GraphQLLogo from "@/assets/icons/graphql.svg"

/** List of logos of the technologies from my stack */
const frontendStack: [StaticImport, string][] = [
  [HTMLLogo, "HTML"],
  [CSSLogo, "CSS"],
  [SassLogo, "Sass"],
  [JavaScriptLogo, "JavaScript"],
  [TypeScriptLogo, "TypeScript"],
  [NextJSLogo, "Next.JS"],
  [ReactJSLogo, "React.JS"],
  [TailwindLogo, "Tailwind"],
  [ShadcnLogo, "Shadcn/UI"],
  [MUILogo, "Material-UI"],
  [ReduxLogo, "Redux / RTK"],
  [ElectronLogo, "Electron"],
  [TauriLogo, "Tauri"],
]

const backendStack: [StaticImport, string][] = [
  [PythonLogo, "Python"],
  [FastAPILogo, "FastAPI"],
  [NodeJSLogo, "Node.js / Express.js"],
  [NestJSLogo, "Nest.js"],
  [GraphQLLogo, "GraphQL"],
  [PrismaLogo, "Prisma"],
  [MySQLLogo, "MySQL"],
  [PostgreSQLLogo, "PostgreSQL"],
  [MongoLogo, "MongoDB"],
  [DockerLogo, "Docker"],
]

export const Stack = () => {
  // Default Setup
  const t = useTranslations("about");

  return (
    <div className="text-center w-[calc(7rem*2)] sm:w-[calc(7rem*3)] md:w-[calc(7rem*5)]">
      <h3 className="font-semibold text-[1.75rem]">{t("tech-stack")}</h3>

      <Separator className="w-[10%] mx-auto my-8" />

      {/* Frontend Stack */}
      <h4 className="text-xl text-slate-400 mb-4">Frontend</h4>
      <Carousel opts={{ align: "start", startIndex: 3 }}>
        <CarouselContent className="mb-8">
          {frontendStack.map((logo) => (
            <CarouselItem key={logo[1]} className="basis-1/2 sm:basis-1/3 md:basis-1/5 flex flex-col justify-center items-center gap-2 font-semibold">
                <Image src={logo[0]} alt="Logo" height={96} className="rounded-lg" />
                {logo[1]}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* Backend Stack */}
      <h4 className="text-xl text-slate-400 mb-4">Backend</h4>
      <Carousel opts={{ align: "start", startIndex: 2 }}>
        <CarouselContent>
          {backendStack.map((logo) => (
            <CarouselItem key={logo[1]} className="basis-1/2 sm:basis-1/3 md:basis-1/5 flex flex-col justify-center items-center gap-2 font-semibold">
                <Image src={logo[0]} alt="Logo" height={96} className="rounded-lg" />
                {logo[1]}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}