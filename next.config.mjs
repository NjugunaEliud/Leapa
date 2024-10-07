import { createJiti } from "jiti";
import { fileURLToPath } from "node:url";
const jiti = createJiti(fileURLToPath(import.meta.url));

await jiti.import("./src/config/env.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;
