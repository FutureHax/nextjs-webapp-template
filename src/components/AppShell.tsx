"use client";

import { Box, Flex } from "@chakra-ui/react";
import { createLegalNavLinks, FUTUREHAX_LINKS } from "@futurehax/nextjs-common";
import { SiteFooter, SiteHeader, UserMenu } from "@futurehax/nextjs-common-ui";
import type { ReactNode } from "react";

import { APP_TITLE } from "@/lib/site";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const legalLinks = [...createLegalNavLinks(), { href: "/status", label: "Status" }];

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
        tagline="Hello-world FutureHax Next app scaffolded from the shared commons packages."
        sections={[
          {
            title: "Product",
            links: [
              { href: "/", label: "Home" },
              { href: "/#pricing", label: "Full access" },
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
          {
            title: "Social",
            links: [
              { href: FUTUREHAX_LINKS.DISCORD, label: "Discord" },
              { href: FUTUREHAX_LINKS.PATREON, label: "Patreon" },
            ],
          },
        ]}
        copyright={`© ${new Date().getFullYear()} FutureHax`}
      />
    </Flex>
  );
}
