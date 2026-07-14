"use client";

import { Button, Container, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { FUTUREHAX_LINKS, PATREON_TIERS, type CatalogCounts } from "@futurehax/nextjs-common";
import { CmsKeyActivateSection, FullAccessSection, LinkButton } from "@futurehax/nextjs-common-ui";
import { useEffect, useState } from "react";

import { APP_TITLE } from "@/lib/site";

const FEATURES = [
  "Shared Chakra shell (header, footer, login, contact)",
  "Twin-path Full access pricing pattern",
  "Patreon catalog link + CMS download-key activation",
  "CMS helpers, org links, and SEO factories",
  "Semantic token theme contract",
  "Local commons packages while you build",
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
      <Container maxW="3xl" py={{ base: 16, md: 24 }} textAlign="center">
        <VStack gap={6}>
          <Heading as="h1" size="4xl" color="text.primary">
            {APP_TITLE}
          </Heading>
          <Text fontSize="lg" color="text.muted" maxW="2xl">
            Hello-world FutureHax Next app powered by @futurehax/nextjs-common and @futurehax/nextjs-common-ui. The Full
            access section below intentionally showcases every Patreon tier; product apps normally highlight one unlock
            tier.
          </Text>
          <VStack gap={4}>
            <HStack gap={3} flexWrap="wrap" justify="center">
              <LinkButton href="/login" colorPalette="brand" size="lg">
                Try login card
              </LinkButton>
              <Button asChild variant="outline" colorPalette="brand" size="lg">
                <a href="#full-access">See Full access</a>
              </Button>
            </HStack>
            <Button asChild variant="ghost" size="md">
              <a href="#link-access">Link Patreon / key</a>
            </Button>
          </VStack>
        </VStack>
      </Container>

      <div id="full-access">
        <FullAccessSection
          features={FEATURES}
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
      </div>

      <div id="link-access">
        <CmsKeyActivateSection catalogHref={FUTUREHAX_LINKS.CATALOG} />
      </div>
    </>
  );
}
