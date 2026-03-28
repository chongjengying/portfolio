import type { NextConfig } from "next";

/**
 * Static export for Cloudflare Pages — build output is the `out/` directory.
 * @see https://nextjs.org/docs/app/building-your-application/deploying/static-exports
 */
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
