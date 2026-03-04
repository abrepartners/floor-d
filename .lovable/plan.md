

## Fix Blog Spacing and Typography

**Root cause**: The `@tailwindcss/typography` plugin is installed as a dependency but is not registered in `tailwind.config.ts` plugins. This means all `prose` classes on the blog post page (headings, paragraphs, lists, tables, spacing) are having no effect.

### Changes

**1. Register typography plugin in Tailwind config** (`tailwind.config.ts`)
- Add `require("@tailwindcss/typography")` to the plugins array alongside `tailwindcss-animate`

**2. Refine blog post prose styling** (`src/pages/BlogPost.tsx`)
- Update the `prose` class configuration to ensure proper heading sizes, paragraph spacing, and table styling that matches the warm brand aesthetic
- Add `prose-h2` and `prose-h3` size overrides for better visual hierarchy
- Ensure FAQ sections and markdown tables render with correct spacing

**3. Refine blog listing page spacing** (`src/pages/Blog.tsx`)
- Minor padding/gap adjustments on the cards grid for better visual rhythm

Once the typography plugin is active, the markdown content will automatically get proper heading sizes, paragraph spacing, list styling, table formatting, and blockquote styling -- fixing the core issue.

