"use client";

import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { useServerInsertedHTML } from "next/navigation";
import { useState, type ReactNode } from "react";

/**
 * Emotion writes server styles inline next to each element unless a cache flushes them into the
 * document head. Inline `<style>` siblings do not exist on the client, so hydration fails.
 */
export function EmotionRegistry({ children }: { children: ReactNode }) {
  const [registry] = useState(() => {
    const cache = createCache({ key: "css" });
    cache.compat = true;
    const insert = cache.insert;
    let pending: string[] = [];
    cache.insert = (...args) => {
      const serialized = args[1];
      if (cache.inserted[serialized.name] === undefined) pending.push(serialized.name);
      return insert(...args);
    };
    const flush = () => {
      const names = pending;
      pending = [];
      return names;
    };
    return { cache, flush };
  });

  useServerInsertedHTML(() => {
    const names = registry.flush();
    if (names.length === 0) return null;
    const styles = names.map((name) => registry.cache.inserted[name]).join("");
    return (
      <style
        key={registry.cache.key}
        data-emotion={`${registry.cache.key} ${names.join(" ")}`}
        dangerouslySetInnerHTML={{ __html: styles }}
      />
    );
  });

  return <CacheProvider value={registry.cache}>{children}</CacheProvider>;
}
