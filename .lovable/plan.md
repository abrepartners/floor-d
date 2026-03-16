

## Update Site: Remove Price Ranges & Update Blog Table Images

### 1. Remove price ranges from flooring category pages

**`src/pages/FlooringCategory.tsx`** (line 150-152): Remove the `<p>` element displaying `category.priceRange`.

**`src/data/flooringCategories.ts`**: Remove the `priceRange` property from the interface and all 5 category objects (hardwood, LVP, tile, laminate, carpet).

### 2. Remove price mentions from blog post content

The following blog posts contain price-per-sqft figures in their markdown tables and text:

- **"hardwood-vs-lvp"** — Table on lines 147-158 has cost columns (`$6-11/sq ft`, `$3-6/sq ft`). Also inline price mentions throughout.
- **"flooring-cost-guide"** — Entire table on lines 204-211 is a pricing table. Also numerous inline price references.
- **"best-flooring-kids-pets"** — Inline price mentions (e.g. "$2-4/sq ft", "$2/sq ft").
- **"kitchen-bathroom-flooring-guide"** — Inline prices like "$3-6/sq ft", "$5-10/sq ft".
- **"why-shop-local-central-arkansas"** — Price mention "$2/sq ft" in FAQ.

**Approach**: Remove price columns from markdown tables and strip inline price-per-sqft references from all blog content, keeping the prose natural.

### 3. Technical detail

- The `FlooringCategory` TypeScript interface will have `priceRange` removed — this is a breaking change that will surface any other usages at compile time.
- Blog content is plain markdown strings; tables will be edited to remove cost rows/columns while keeping the comparison structure intact.

