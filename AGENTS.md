# Project Rules (`my_blog`)

## Git & Verification Workflow (NON-NEGOTIABLE)

1. **No Auto-Commit or Auto-Push**
   - Do **not** run `git commit` or `git push` automatically after making changes.
   - Keep all modifications in the working tree until the user explicitly confirms and asks to commit.

2. **Local Preview Before Commit**
   - After any content, layout, style, or configuration change, always let the user run and inspect the blog locally first (e.g., `npm run dev` at `http://localhost:4321/my_blog/` or `npm run build && npm run preview`).
   - Only proceed with `git commit` after the user has verified the effect locally and confirmed.
