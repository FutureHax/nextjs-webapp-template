"use client";

import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

import { system } from "@/theme";
import { ColorModeProvider } from "@/providers/ColorModeProvider";
import { EmotionRegistry } from "@/providers/EmotionRegistry";

interface ProvidersProps {
  children: React.ReactNode;
}

export default function ChakraProviders({ children }: ProvidersProps) {
  return (
    <EmotionRegistry>
      <ChakraProvider value={system}>
        <ColorModeProvider>{children}</ColorModeProvider>
      </ChakraProvider>
    </EmotionRegistry>
  );
}
