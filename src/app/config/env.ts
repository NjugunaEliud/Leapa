import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  client: {
    NEXT_PUBLIC_LEAPA_WIDGET_SCRIPT: z.string().min(1),
    NEXT_PUBLIC_LEAPA_WIDGET_STYLES: z.string().min(1),
    NEXT_PUBLIC_LEAPA_API_KEY: z.string().min(1),
  },
  // If you're using Next.js < 13.4.4, you'll need to specify the runtimeEnv manually
  runtimeEnv: {
    NEXT_PUBLIC_LEAPA_WIDGET_SCRIPT:
      process.env.NEXT_PUBLIC_LEAPA_WIDGET_SCRIPT,

    NEXT_PUBLIC_LEAPA_WIDGET_STYLES:
      process.env.NEXT_PUBLIC_LEAPA_WIDGET_STYLES,

    NEXT_PUBLIC_LEAPA_API_KEY: process.env.NEXT_PUBLIC_LEAPA_API_KEY,
  },
  // For Next.js >= 13.4.4, you only need to destructure client variables:
  // experimental__runtimeEnv: {
  //   NEXT_PUBLIC_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_PUBLISHABLE_KEY,
  // }
});
