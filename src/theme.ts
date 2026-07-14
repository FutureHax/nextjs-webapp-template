"use client";

import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

/**
 * FutureHax hello-world theme: red + black (matches futurehax-website).
 * Implements the @futurehax/nextjs-common-ui semantic token contract.
 * Product apps may keep this or swap the brand palette; keep the semantic names.
 */
const config = defineConfig({
  conditions: {
    dark: '.dark &, [data-theme="dark"] &',
  },
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: "#ffebee" },
          100: { value: "#ffcdd2" },
          200: { value: "#ef9a9a" },
          300: { value: "#e57373" },
          400: { value: "#ef5350" },
          500: { value: "#f44336" },
          600: { value: "#e53935" },
          700: { value: "#d32f2f" },
          800: { value: "#c62828" },
          900: { value: "#b71c1c" },
        },
        gray: {
          50: { value: "#fafafa" },
          100: { value: "#f4f4f5" },
          200: { value: "#e4e4e7" },
          300: { value: "#d4d4d8" },
          400: { value: "#a1a1aa" },
          500: { value: "#71717a" },
          600: { value: "#52525b" },
          700: { value: "#3f3f46" },
          800: { value: "#27272a" },
          900: { value: "#18181b" },
          950: { value: "#09090b" },
        },
      },
    },
    semanticTokens: {
      colors: {
        "text.primary": { value: { _light: "{colors.gray.950}", _dark: "{colors.gray.50}" } },
        "text.secondary": { value: { _light: "{colors.gray.800}", _dark: "{colors.gray.200}" } },
        "text.muted": { value: { _light: "{colors.gray.600}", _dark: "{colors.gray.400}" } },
        "text.accent": { value: { _light: "{colors.brand.700}", _dark: "{colors.brand.300}" } },
        "text.onAccent": { value: { _light: "{colors.gray.50}", _dark: "{colors.gray.50}" } },
        "text.danger": { value: { _light: "{colors.brand.800}", _dark: "{colors.brand.200}" } },

        "bg.canvas": { value: { _light: "{colors.gray.50}", _dark: "#000000" } },
        "bg.card": { value: { _light: "{colors.gray.100}", _dark: "{colors.gray.900}" } },
        "bg.panel": { value: { _light: "{colors.gray.100}", _dark: "{colors.gray.950}" } },
        "bg.header": { value: { _light: "rgba(250,250,250,0.92)", _dark: "rgba(0,0,0,0.92)" } },
        "bg.accent.subtle": { value: { _light: "{colors.brand.50}", _dark: "rgba(229,57,53,0.18)" } },

        "border.muted": { value: { _light: "rgba(24,24,27,0.1)", _dark: "rgba(250,250,250,0.12)" } },
        "border.primary": { value: { _light: "rgba(24,24,27,0.16)", _dark: "rgba(250,250,250,0.18)" } },
        "border.accent": { value: { _light: "{colors.brand.600}", _dark: "{colors.brand.400}" } },

        "interactive.primary": { value: { _light: "{colors.brand.600}", _dark: "{colors.brand.400}" } },

        brand: {
          solid: { value: { _light: "{colors.brand.600}", _dark: "{colors.brand.500}" } },
          contrast: { value: { _light: "{colors.gray.50}", _dark: "{colors.gray.50}" } },
          fg: { value: { _light: "{colors.brand.700}", _dark: "{colors.brand.200}" } },
          muted: { value: { _light: "{colors.brand.100}", _dark: "rgba(229,57,53,0.2)" } },
          subtle: { value: { _light: "{colors.brand.50}", _dark: "rgba(229,57,53,0.14)" } },
          emphasized: { value: { _light: "{colors.brand.500}", _dark: "{colors.brand.300}" } },
          focusRing: { value: { _light: "{colors.brand.600}", _dark: "{colors.brand.400}" } },
          border: { value: { _light: "{colors.brand.600}", _dark: "{colors.brand.400}" } },
        },
      },
    },
  },
  globalCss: {
    html: {
      bg: "bg.canvas",
    },
    body: {
      bg: "bg.canvas",
      color: "text.primary",
    },
    "html, body": {
      minHeight: "100vh",
    },
  },
});

export const system = createSystem(defaultConfig, config);
