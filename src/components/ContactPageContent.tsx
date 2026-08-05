"use client";

import { Mail } from "lucide-react";
import { FUTUREHAX_LINKS } from "@futurehax/nextjs-common/links";
import { ContactSection } from "@futurehax/nextjs-common-ui";

export function ContactPageContent() {
  return (
    <ContactSection
      contactInfo={[
        {
          label: "Email",
          value: "ken@futurehax.com",
          href: "mailto:ken@futurehax.com",
          icon: <Mail size={20} />,
        },
      ]}
      socialLinks={[
        { label: "Discord", href: FUTUREHAX_LINKS.DISCORD },
        { label: "Patreon", href: FUTUREHAX_LINKS.PATREON },
        { label: "Catalog", href: FUTUREHAX_LINKS.CATALOG },
        { label: "Projects", href: FUTUREHAX_LINKS.PROJECTS },
        { label: "Website", href: FUTUREHAX_LINKS.FUTUREHAX },
      ]}
    />
  );
}
