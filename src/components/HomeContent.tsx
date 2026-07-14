"use client";

import { Box, Text } from "@chakra-ui/react";
import { FUTUREHAX_LINKS, PATREON_TIERS, type CatalogCounts } from "@futurehax/nextjs-common";
import {
  CmsKeyActivateSection,
  DemoSection,
  FaqSection,
  FeaturesSection,
  FinalCtaSection,
  FullAccessSection,
  HeroSection,
  HowItWorksSection,
  SoftCard,
} from "@futurehax/nextjs-common-ui";
import { useEffect, useState } from "react";

import { APP_TITLE } from "@/lib/site";

const PRICING_FEATURES = [
  "Shared Chakra shell (header, footer, login, contact)",
  "Twin-path Full access pricing pattern",
  "Patreon catalog link + CMS download-key activation",
  "CMS helpers, org links, and SEO factories",
  "Semantic token theme contract",
  "Local commons packages while you build",
];

const FEATURE_CARDS = [
  {
    title: "Shared marketing shells",
    description: "Hero, features, how-it-works, demo, FAQ, and final CTA from @futurehax/nextjs-common-ui/landing.",
  },
  {
    title: "Twin-path pricing",
    description: "Buy once or unlock via Patreon with FullAccessSection and live catalog counts.",
  },
  {
    title: "Legal and contact ready",
    description: "About, contact, privacy, and terms pages reuse the shared FutureHax page kits.",
  },
];

const HOW_STEPS = [
  {
    title: "Clone the template",
    description: "Start from nextjs-webapp-template or this starter harness and replace placeholders.",
  },
  {
    title: "Compose the landing",
    description: "Wire shared landing sections in order and drop product media into DemoSection.",
  },
  {
    title: "Theme with tokens",
    description: "Keep unique brand color by remapping semantic tokens in src/theme.ts.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Do product apps have to use every section?",
    answer:
      "Use the canonical order for SaaS consistency. Conditional sections (like free promo pricing) can still swap inside their band.",
  },
  {
    question: "Where does product-specific media live?",
    answer: "In the DemoSection children slot and optional HeroSection media slot. Commons only owns the frame.",
  },
  {
    question: "Is the CMS key section required?",
    answer: "No. Starter and template include it as an entitlement demo. Product apps can omit it.",
  },
];

export function HomeContent() {
  const [counts, setCounts] = useState<CatalogCounts | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/catalog-counts")
      .then((res) => (res.ok ? res.json() : null))
      .then((result) => {
        if (!cancelled && result && typeof result.modules === "number") {
          setCounts(result as CatalogCounts);
        }
      })
      .catch(() => undefined);
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <>
      <HeroSection
        title={APP_TITLE}
        description="Hello-world FutureHax Next app powered by @futurehax/nextjs-common and @futurehax/nextjs-common-ui. Same landing structure for every SaaS clone; unique theme and copy."
        primaryCta={{ label: "Try login card", href: "/login" }}
        secondaryCta={{ label: "See Full access", href: "#pricing" }}
      />

      <FeaturesSection
        id="features"
        heading="What you get"
        description="Shared shells for marketing pages, with product apps free to brand uniquely."
        features={FEATURE_CARDS}
      />

      <DemoSection
        id="demo"
        heading="Product preview"
        description="Drop a screenshot, interactive demo, or SoftCard placeholder here."
      >
        <SoftCard textAlign="center" py={{ base: 12, md: 16 }}>
          <Text color="text.muted">Demo media slot</Text>
          <Text fontSize="sm" color="text.secondary" mt={2}>
            Replace this SoftCard with product UI, a theme-aware shot, or an interactive preview.
          </Text>
        </SoftCard>
      </DemoSection>

      <HowItWorksSection
        id="how-it-works"
        heading="How it works"
        description="Three steps from clone to a production-shaped landing."
        steps={HOW_STEPS}
      />

      <Box id="pricing">
        <FullAccessSection
          features={PRICING_FEATURES}
          buy={{
            title: "Buy once",
            price: "$15",
            priceNote: "one-time",
            cta: "Buy full access (stub)",
            footnote: "No subscription. Yours forever.",
            onBuy: () => {
              window.alert("Stub checkout. Wire Lemon Squeezy or your store here.");
            },
          }}
          patreon={{
            variant: "showcase",
            title: "Included with Patreon",
            bullets: [
              "Free copies of every paid FutureHax release while subscribed",
              "Early access, roadmaps, and the full project catalog",
            ],
            cta: "View Patreon",
            patreonHref: FUTUREHAX_LINKS.PATREON,
            projectsHref: FUTUREHAX_LINKS.PROJECTS,
            tiers: PATREON_TIERS.map((tier) => ({
              slug: tier.slug,
              label: tier.label,
              price: tier.price,
              priceNote: tier.priceNote,
              summary: tier.summary,
              featured: tier.slug === "captain",
              unlocksThisProduct: tier.slug === "captain",
            })),
          }}
          counts={counts}
          showCountsPlaceholder
        />
      </Box>

      <Box id="link-access">
        <CmsKeyActivateSection catalogHref={FUTUREHAX_LINKS.CATALOG} />
      </Box>

      <FaqSection id="faq" items={FAQ_ITEMS} />

      <FinalCtaSection
        heading="Ready to ship your own FutureHax app?"
        description="Clone the template, remap tokens, and keep this landing structure."
        cta={{ label: "Open login", href: "/login" }}
      />
    </>
  );
}
