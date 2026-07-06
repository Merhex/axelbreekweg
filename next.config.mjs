/**
 * When deploying to GitHub Pages under a project repo, the site is served
 * from https://<user>.github.io/<repo>/ , so we need a base path. It is
 * provided at build time via NEXT_PUBLIC_BASE_PATH (see the deploy workflow).
 * Locally it is empty, so `npm run dev` / `npm run build` work at the root.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
};

export default nextConfig;
