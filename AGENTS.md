<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes. APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Branching

- `main` is the production branch. Vercel auto deploys main on every merge.
- All work happens on `dev`. Never commit or push to main directly.
- The workflow `.github/workflows/auto-pr-dev-to-main.yml` keeps an open PR from dev to main on every push to dev. Merge that PR when ready to ship.
- Branch protection on main is enforced at GitHub level: no direct push, PR required (0 reviews), no force push, no deletion.
