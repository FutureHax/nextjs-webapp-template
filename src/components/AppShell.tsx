"use client";

import { Box, Flex } from "@chakra-ui/react";
import { createLegalNavLinks, FUTUREHAX_LINKS } from "@futurehax/nextjs-common";
import { SiteFooter, SiteHeader, UserMenu } from "@futurehax/nextjs-common-ui";
import type { ReactNode } from "react";

import { APP_TITLE } from "@/lib/site";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/#full-access", label: "Full access" },
  { href: "/contact", label: "Contact" },
  { href: "/login", label: "Login" },
];

const legalLinks = createLegalNavLinks();

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <Flex direction="column" minH="100vh" bg="bg.canvas">
      <SiteHeader
        brand={
          <a href="/" style={{ fontWeight: 700, letterSpacing: "0.02em" }}>
            {APP_TITLE}
          </a>
        }
        links={navLinks}
        actions={<UserMenu user={null} signInHref="/login" />}
      />
      <Box as="main" flex="1">
        {children}
      </Box>
      <SiteFooter
        brand={<Box fontWeight="bold">{APP_TITLE}</Box>}
        sections={[
          {
            title: "Product",
            links: [
              { href: "/", label: "Home" },
              { href: "/#full-access", label: "Full access" },
              { href: "/login", label: "Login" },
            ],
          },
          {
            title: "Company",
            links: legalLinks,
          },
          {
            title: "FutureHax",
            links: [
              { href: FUTUREHAX_LINKS.FUTUREHAX, label: "Website" },
              { href: FUTUREHAX_LINKS.CATALOG, label: "Catalog" },
              { href: FUTUREHAX_LINKS.PROJECTS, label: "Projects" },
            ],
          },
        ]}
        socials={[
          { href: FUTUREHAX_LINKS.DISCORD, label: "Discord" },
          { href: FUTUREHAX_LINKS.PATREON, label: "Patreon" },
        ]}
        copyright={`© ${new Date().getFullYear()} FutureHax`}
      />
    </Flex>
  );
}
