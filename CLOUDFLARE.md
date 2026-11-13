# Cloudflare Pages setup

This repository is configured for Cloudflare Pages. The Vite production build is written to `dist`, and the Pages Functions API is served from `functions/`.

## Create the Pages project

1. Sign in to the Cloudflare dashboard and open **Workers & Pages**.
2. Create a **Pages** project named `vyloop-social` (the name must match the deployment workflow).
3. If using the GitHub Actions workflow in this repository, add these repository secrets in GitHub under **Settings → Secrets and variables → Actions**:
   - `CLOUDFLARE_API_TOKEN`: a Cloudflare API token with permission to deploy Cloudflare Pages for the account.
   - `CLOUDFLARE_ACCOUNT_ID`: your Cloudflare account ID.
4. Push to `main` or run **Deploy to Cloudflare Pages** from the GitHub Actions tab.

The workflow installs dependencies, runs `npm run build`, then deploys `dist` to the Pages project. It uses `npm install` because this repository currently has no committed npm lockfile.

## Cloudflare Pages settings

- Build command (for a direct Cloudflare Git integration): `npm run build`
- Build output directory: `dist`
- Production branch: `main`
- Framework preset: Vite (or None)

Use either the GitHub Actions deployment workflow or Cloudflare's Git integration; you do not need both.

## Verify deployment

After deployment, open `https://YOUR-PROJECT.pages.dev/api/health`. A working deployment returns JSON with `status: "ok"`.

## Supabase secrets

For browser-side Supabase access, configure `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` as Pages environment variables. These are public client settings; protect data with Supabase Row Level Security. **Never put a Supabase service-role key in a `VITE_` variable or browser code.** Keep privileged keys only in server-side secrets and use them only in server-side functions.
