import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";

const inserted: Array<() => ReactNode> = [];

vi.mock("next/navigation", () => ({
  useServerInsertedHTML: (callback: () => ReactNode) => {
    inserted.push(callback);
  },
}));

const { default: ChakraProviders } = await import("./ChakraProviders");

describe("ChakraProviders", () => {
  it("keeps Emotion styles out of the body so hydration sees only app markup", () => {
    inserted.length = 0;
    const body = renderToStaticMarkup(
      <ChakraProviders>
        <Box color="rgb(1, 2, 3)">record</Box>
      </ChakraProviders>,
    );

    expect(body).toContain("record");
    expect(body).not.toContain("<style");

    const head = renderToStaticMarkup(<>{inserted.map((callback) => callback())}</>);
    expect(head).toContain("<style");
    expect(head).toContain("color:rgb(1, 2, 3)");
  });
});
