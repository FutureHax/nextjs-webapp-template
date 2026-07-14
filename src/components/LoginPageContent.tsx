"use client";

import { Button, Flex } from "@chakra-ui/react";
import { LoginCard } from "@futurehax/nextjs-common-ui";
import { LogIn } from "lucide-react";
import { useState } from "react";

export function LoginPageContent() {
  const [message, setMessage] = useState<string | null>(null);

  return (
    <Flex flex={1} align="center" justify="center" p={6} minH="60vh">
      <LoginCard
        title="Sign in"
        description="Stub provider button. Replace with Firebase Google, Discord OAuth, or your IdP."
        icon={<LogIn size={24} />}
        error={message}
      >
        <Button
          w="full"
          size="lg"
          colorPalette="brand"
          onClick={() => setMessage("Signed-in stub. Wire real auth in your product.")}
        >
          Continue with Google (stub)
        </Button>
      </LoginCard>
    </Flex>
  );
}
