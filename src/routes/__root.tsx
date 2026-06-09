import {
  HeadContent,
  Link,
  Outlet,
  Scripts,
  createRootRoute,
} from "@tanstack/react-router";
import { Navbar } from "../components/layout/Navbar";
// import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
// import { TanStackDevtools } from '@tanstack/react-devtools'

import '../styles.css'
import { Footer } from "#/components/sections/cta-section";
import { CookieBanner } from "#/components/layout/CookieBanner";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Agiliza | A Solução para o Trabalho Informal" },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800;900&family=Barlow:wght@400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootDocument,
});


function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <head>
        <HeadContent />
      </head>
      <body className="bg-black text-white antialiased">
        <Navbar />
        {children}
         <Footer />
        <CookieBanner />
        <Scripts />
      </body>
    </html>
  );
}
