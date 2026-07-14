"use client";

import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";
import { SoftCard } from "@futurehax/nextjs-common-ui";

import { APP_TITLE } from "@/lib/site";

export function StatusPageContent() {
  return (
    <Box py={{ base: 12, md: 20 }} bg="bg.canvas">
      <Container maxW="3xl">
        <VStack align="stretch" gap={8}>
          <Box textAlign="center">
            <Heading as="h1" size="3xl" color="text.primary" mb={3}>
              Status
            </Heading>
            <Text color="text.muted">Current operational status for {APP_TITLE}.</Text>
          </Box>
          <SoftCard>
            <Heading as="h2" size="md" color="text.accent" mb={2}>
              All systems operational
            </Heading>
            <Text color="text.secondary" lineHeight="1.7">
              This is a starter status page. Replace it with real uptime checks when the product needs them.
            </Text>
          </SoftCard>
        </VStack>
      </Container>
    </Box>
  );
}
