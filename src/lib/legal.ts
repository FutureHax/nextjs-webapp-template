import { buildAboutContent, buildPrivacyPolicy, buildTermsOfService } from "@futurehax/nextjs-common";

import { APP_TITLE } from "@/lib/site";

const product = { productName: APP_TITLE };

export const aboutContent = buildAboutContent({ productName: APP_TITLE });
export const privacyContent = buildPrivacyPolicy(product);
export const termsContent = buildTermsOfService(product);
