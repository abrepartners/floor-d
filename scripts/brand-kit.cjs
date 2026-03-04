const fs = require("fs");
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, HeadingLevel, BorderStyle, WidthType, ShadingType,
  PageBreak, LevelFormat
} = require("docx");

// Brand colors derived from logo #ECD1A2
const COLORS = {
  gold: "ECD1A2",
  goldDark: "A07A3B",
  primary: "B58B3D",
  charcoal: "2A2520",
  warmGray: "6B6460",
  cream: "F8F5F0",
  creamDark: "EDE8E0",
  white: "FFFFFF",
  black: "000000",
};

const border = { style: BorderStyle.SINGLE, size: 1, color: "DDDDDD" };
const borders = { top: border, bottom: border, left: border, right: border };
const noBorders = {
  top: { style: BorderStyle.NONE, size: 0 },
  bottom: { style: BorderStyle.NONE, size: 0 },
  left: { style: BorderStyle.NONE, size: 0 },
  right: { style: BorderStyle.NONE, size: 0 },
};
const cellMargins = { top: 100, bottom: 100, left: 140, right: 140 };

function colorSwatch(hex, name, hsl, width) {
  return new TableCell({
    borders: noBorders,
    width: { size: width, type: WidthType.DXA },
    margins: { top: 60, bottom: 60, left: 80, right: 80 },
    children: [
      new Paragraph({ spacing: { after: 0 }, children: [] }),
      new Paragraph({
        spacing: { before: 60, after: 40 },
        children: [new TextRun({ text: name, bold: true, size: 20, font: "Arial", color: COLORS.charcoal })],
      }),
      new Paragraph({
        spacing: { after: 20 },
        children: [new TextRun({ text: `#${hex}`, size: 18, font: "Arial", color: COLORS.warmGray })],
      }),
      new Paragraph({
        spacing: { after: 0 },
        children: [new TextRun({ text: hsl, size: 16, font: "Arial", color: COLORS.warmGray })],
      }),
    ],
  });
}

const doc = new Document({
  styles: {
    default: { document: { run: { font: "Arial", size: 22, color: COLORS.charcoal } } },
    paragraphStyles: [
      {
        id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 36, bold: true, font: "Playfair Display", color: COLORS.charcoal },
        paragraph: { spacing: { before: 360, after: 200 }, outlineLevel: 0 },
      },
      {
        id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 28, bold: true, font: "Arial", color: COLORS.primary },
        paragraph: { spacing: { before: 280, after: 160 }, outlineLevel: 1 },
      },
      {
        id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 24, bold: true, font: "Arial", color: COLORS.charcoal },
        paragraph: { spacing: { before: 200, after: 120 }, outlineLevel: 2 },
      },
    ],
  },
  numbering: {
    config: [
      {
        reference: "bullets",
        levels: [{
          level: 0, format: LevelFormat.BULLET, text: "\u2022", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } },
        }],
      },
    ],
  },
  sections: [
    // ── COVER PAGE ──
    {
      properties: {
        page: {
          size: { width: 12240, height: 15840 },
          margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 },
        },
      },
      children: [
        new Paragraph({ spacing: { before: 3600 }, children: [] }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 120 },
          children: [new TextRun({ text: "Floor'd", font: "Playfair Display", size: 72, bold: true, color: COLORS.charcoal })],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 40 },
          children: [new TextRun({ text: "FLOORING + FINISHES", size: 22, font: "Arial", color: COLORS.primary, characterSpacing: 300 })],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: COLORS.gold, space: 1 } },
          spacing: { after: 400 },
          children: [],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 80 },
          children: [new TextRun({ text: "Brand Identity Kit", font: "Playfair Display", size: 40, color: COLORS.charcoal })],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 600 },
          children: [new TextRun({ text: "Guidelines for consistent brand presentation", size: 22, color: COLORS.warmGray })],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [new TextRun({ text: "Prepared by Nu Elements Media", size: 20, color: COLORS.warmGray, italics: true })],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [new TextRun({ text: "March 2026", size: 20, color: COLORS.warmGray, italics: true })],
        }),
      ],
    },

    // ── BRAND OVERVIEW ──
    {
      properties: {
        page: {
          size: { width: 12240, height: 15840 },
          margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 },
        },
      },
      children: [
        new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Brand Overview")] }),
        new Paragraph({
          spacing: { after: 200 },
          children: [new TextRun({
            text: "Floor'd Flooring + Finishes is a neighborhood flooring store in Little Rock, Arkansas. We serve all of Central Arkansas with hardwood, luxury vinyl plank, tile, laminate, and carpet options for every style and every budget.",
            size: 22,
          })],
        }),

        new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Brand Name")] }),
        new Paragraph({
          spacing: { after: 100 },
          children: [
            new TextRun({ text: "Primary: ", bold: true }),
            new TextRun("Floor'd Flooring + Finishes"),
          ],
        }),
        new Paragraph({
          spacing: { after: 100 },
          children: [
            new TextRun({ text: "Short Form: ", bold: true }),
            new TextRun("Floor'd"),
          ],
        }),
        new Paragraph({
          spacing: { after: 200 },
          children: [
            new TextRun({ text: "Note: ", bold: true }),
            new TextRun("Always include the apostrophe in Floor'd. Never write as \"Floored\" or \"Floord\"."),
          ],
        }),

        new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Brand Personality")] }),
        new Paragraph({
          spacing: { after: 120 },
          children: [new TextRun("Floor'd speaks like a knowledgeable friend, not a salesperson. Our tone is:")],
        }),
        ...[
          "Approachable and casual \u2014 we use everyday language, not industry jargon",
          "Honest and transparent \u2014 we share real pricing and give genuine advice",
          "Inclusive \u2014 every budget is treated with equal respect, from $2/sq ft to $11/sq ft",
          "Warm and welcoming \u2014 bring the kids, grab a coffee, take your time",
          "Locally rooted \u2014 we know Central Arkansas homes and we care about this community",
        ].map(
          (item) =>
            new Paragraph({
              numbering: { reference: "bullets", level: 0 },
              spacing: { after: 60 },
              children: [new TextRun({ text: item, size: 22 })],
            })
        ),

        new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Target Audience")] }),
        new Paragraph({
          spacing: { after: 100 },
          children: [new TextRun("Our primary customer is a millennial homeowner (25-42) doing a \"vibe check\" on their home. They research online, trust reviews, and want to see and feel products in person. They appreciate honesty about pricing and real talk over sales pitches.")],
        }),
        new Paragraph({
          spacing: { after: 200 },
          children: [new TextRun("Secondary audiences include new construction builders, property managers, and commercial clients across Central Arkansas.")],
        }),

        new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Service Area")] }),
        new Paragraph({
          spacing: { after: 200 },
          children: [new TextRun("Little Rock, North Little Rock, Benton, Bryant, Conway, Cabot, Maumelle, Jacksonville, and all of Central Arkansas.")],
        }),

        new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Contact Information")] }),
        new Paragraph({
          spacing: { after: 60 },
          children: [
            new TextRun({ text: "Address: ", bold: true }),
            new TextRun("11915 I-30 Frontage Rd, Little Rock, AR 72209"),
          ],
        }),
        new Paragraph({
          spacing: { after: 60 },
          children: [
            new TextRun({ text: "Phone: ", bold: true }),
            new TextRun("(501) 555-1234"),
          ],
        }),
        new Paragraph({
          spacing: { after: 60 },
          children: [
            new TextRun({ text: "Website: ", bold: true }),
            new TextRun("floordflooringandfinishes.com"),
          ],
        }),

        // ── PAGE BREAK ──
        new Paragraph({ children: [new PageBreak()] }),

        // ── LOGO ──
        new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Logo")] }),
        new Paragraph({
          spacing: { after: 200 },
          children: [new TextRun("The Floor'd logo is a horizontal wordmark featuring an ornamental decorative icon alongside the brand name set in an elegant serif typeface, with \"FLOORING + FINISHES\" as a subtitle beneath.")],
        }),

        new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("Logo Versions")] }),
        ...[
          "Primary (Wheat Gold on dark) \u2014 use over dark backgrounds, hero images, and the site header before scroll",
          "Inverted (Dark on light) \u2014 use over light backgrounds, printed materials, and the header after scroll",
          "Monochrome White \u2014 use on dark solid backgrounds where the gold may not be readable",
          "Monochrome Black \u2014 use for single-color print applications (fax, stamps, etc.)",
        ].map(
          (item) =>
            new Paragraph({
              numbering: { reference: "bullets", level: 0 },
              spacing: { after: 60 },
              children: [new TextRun({ text: item, size: 22 })],
            })
        ),

        new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("Logo Clear Space")] }),
        new Paragraph({
          spacing: { after: 200 },
          children: [new TextRun("Maintain a minimum clear space equal to the height of the \"d\" in \"Floor'd\" on all sides of the logo. No other graphic elements, text, or imagery should intrude into this space.")],
        }),

        new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("Logo Don'ts")] }),
        ...[
          "Do not rotate, skew, or distort the logo",
          "Do not change the logo colors outside of the approved versions",
          "Do not place the logo on busy backgrounds without sufficient contrast",
          "Do not recreate or approximate the logo with other fonts",
          "Do not remove or rearrange any element of the logo",
        ].map(
          (item) =>
            new Paragraph({
              numbering: { reference: "bullets", level: 0 },
              spacing: { after: 60 },
              children: [new TextRun({ text: item, size: 22 })],
            })
        ),

        // ── PAGE BREAK ──
        new Paragraph({ children: [new PageBreak()] }),

        // ── COLOR PALETTE ──
        new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Color Palette")] }),
        new Paragraph({
          spacing: { after: 200 },
          children: [new TextRun("The Floor'd color system is derived from the logo's warm wheat gold (#ECD1A2). All accent, UI, and print colors are harmonized with this base tone.")],
        }),

        new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Primary Colors")] }),
        new Table({
          width: { size: 9360, type: WidthType.DXA },
          columnWidths: [3120, 3120, 3120],
          rows: [
            new TableRow({
              children: [
                new TableCell({
                  borders: noBorders, width: { size: 3120, type: WidthType.DXA },
                  shading: { fill: COLORS.gold, type: ShadingType.CLEAR },
                  margins: cellMargins,
                  children: [
                    new Paragraph({ spacing: { after: 0 }, children: [new TextRun({ text: " ", size: 40 })] }),
                    new Paragraph({ spacing: { after: 0 }, children: [new TextRun({ text: " ", size: 40 })] }),
                  ],
                }),
                new TableCell({
                  borders: noBorders, width: { size: 3120, type: WidthType.DXA },
                  shading: { fill: COLORS.primary, type: ShadingType.CLEAR },
                  margins: cellMargins,
                  children: [
                    new Paragraph({ spacing: { after: 0 }, children: [new TextRun({ text: " ", size: 40 })] }),
                    new Paragraph({ spacing: { after: 0 }, children: [new TextRun({ text: " ", size: 40 })] }),
                  ],
                }),
                new TableCell({
                  borders: noBorders, width: { size: 3120, type: WidthType.DXA },
                  shading: { fill: COLORS.goldDark, type: ShadingType.CLEAR },
                  margins: cellMargins,
                  children: [
                    new Paragraph({ spacing: { after: 0 }, children: [new TextRun({ text: " ", size: 40 })] }),
                    new Paragraph({ spacing: { after: 0 }, children: [new TextRun({ text: " ", size: 40 })] }),
                  ],
                }),
              ],
            }),
            new TableRow({
              children: [
                colorSwatch(COLORS.gold, "Wheat Gold (Logo)", "HSL(38, 66%, 78%)", 3120),
                colorSwatch(COLORS.primary, "Brand Primary", "HSL(36, 58%, 48%)", 3120),
                colorSwatch(COLORS.goldDark, "Gold Dark", "HSL(34, 60%, 40%)", 3120),
              ],
            }),
          ],
        }),

        new Paragraph({ spacing: { before: 300 }, heading: HeadingLevel.HEADING_2, children: [new TextRun("Neutral Colors")] }),
        new Table({
          width: { size: 9360, type: WidthType.DXA },
          columnWidths: [2340, 2340, 2340, 2340],
          rows: [
            new TableRow({
              children: [
                new TableCell({
                  borders: noBorders, width: { size: 2340, type: WidthType.DXA },
                  shading: { fill: COLORS.charcoal, type: ShadingType.CLEAR },
                  margins: cellMargins,
                  children: [new Paragraph({ spacing: { after: 0 }, children: [new TextRun({ text: " ", size: 36 })] })],
                }),
                new TableCell({
                  borders: noBorders, width: { size: 2340, type: WidthType.DXA },
                  shading: { fill: COLORS.warmGray, type: ShadingType.CLEAR },
                  margins: cellMargins,
                  children: [new Paragraph({ spacing: { after: 0 }, children: [new TextRun({ text: " ", size: 36 })] })],
                }),
                new TableCell({
                  borders: noBorders, width: { size: 2340, type: WidthType.DXA },
                  shading: { fill: COLORS.creamDark, type: ShadingType.CLEAR },
                  margins: cellMargins,
                  children: [new Paragraph({ spacing: { after: 0 }, children: [new TextRun({ text: " ", size: 36 })] })],
                }),
                new TableCell({
                  borders: noBorders, width: { size: 2340, type: WidthType.DXA },
                  shading: { fill: COLORS.cream, type: ShadingType.CLEAR },
                  margins: cellMargins,
                  children: [new Paragraph({ spacing: { after: 0 }, children: [new TextRun({ text: " ", size: 36 })] })],
                }),
              ],
            }),
            new TableRow({
              children: [
                colorSwatch(COLORS.charcoal, "Charcoal", "HSL(30, 10%, 15%)", 2340),
                colorSwatch(COLORS.warmGray, "Warm Gray", "HSL(30, 10%, 45%)", 2340),
                colorSwatch(COLORS.creamDark, "Cream Dark", "HSL(38, 28%, 93%)", 2340),
                colorSwatch(COLORS.cream, "Cream", "HSL(40, 40%, 97%)", 2340),
              ],
            }),
          ],
        }),

        new Paragraph({ spacing: { before: 300, after: 200 }, heading: HeadingLevel.HEADING_2, children: [new TextRun("Color Usage Guidelines")] }),
        ...[
          "Wheat Gold (#ECD1A2) is the signature brand color from the logo \u2014 use it for logo rendering, decorative accents, and dividers",
          "Brand Primary (#B58B3D) is the functional accent color \u2014 use it for buttons, links, badges, and interactive UI elements",
          "Charcoal (#2A2520) is the primary text color and dark background color \u2014 use it for body text, headings, and the footer",
          "Cream (#F8F5F0) is the warm background color \u2014 use it for page backgrounds, section alternation, and cards",
          "Never use the gold tones for body text \u2014 they lack sufficient contrast on light backgrounds",
        ].map(
          (item) =>
            new Paragraph({
              numbering: { reference: "bullets", level: 0 },
              spacing: { after: 60 },
              children: [new TextRun({ text: item, size: 22 })],
            })
        ),

        // ── PAGE BREAK ──
        new Paragraph({ children: [new PageBreak()] }),

        // ── TYPOGRAPHY ──
        new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Typography")] }),
        new Paragraph({
          spacing: { after: 200 },
          children: [new TextRun("Floor'd uses a two-font system that balances elegance with readability.")],
        }),

        new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Heading Font: Playfair Display")] }),
        new Paragraph({
          spacing: { after: 80 },
          children: [new TextRun({ text: "The quick brown fox jumps over the lazy dog", font: "Playfair Display", size: 32, italics: false })],
        }),
        new Paragraph({
          spacing: { after: 120 },
          children: [new TextRun({ text: "Used for: Page headings, section titles, hero text, and decorative typographic elements. Weights: Regular (400), Medium (500), Semibold (600), Bold (700).", size: 20, color: COLORS.warmGray })],
        }),

        new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Body Font: Lato")] }),
        new Paragraph({
          spacing: { after: 80 },
          children: [new TextRun({ text: "The quick brown fox jumps over the lazy dog", font: "Arial", size: 24 })],
        }),
        new Paragraph({
          spacing: { after: 120 },
          children: [new TextRun({ text: "Used for: Body text, navigation, form labels, buttons, metadata, and UI elements. Weights: Light (300), Regular (400), Medium (500), Semibold (600), Bold (700).", size: 20, color: COLORS.warmGray })],
        }),

        new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Type Scale (Web)")] }),
        new Table({
          width: { size: 9360, type: WidthType.DXA },
          columnWidths: [2800, 2000, 2560, 2000],
          rows: [
            new TableRow({
              children: ["Element", "Size", "Font", "Weight"].map((h) =>
                new TableCell({
                  borders,
                  width: { size: h === "Element" ? 2800 : h === "Font" ? 2560 : 2000, type: WidthType.DXA },
                  shading: { fill: COLORS.charcoal, type: ShadingType.CLEAR },
                  margins: cellMargins,
                  children: [new Paragraph({ children: [new TextRun({ text: h, bold: true, size: 20, color: COLORS.white, font: "Arial" })] })],
                })
              ),
            }),
            ...([
              ["Hero Heading", "3.5-4rem", "Playfair Display", "Bold"],
              ["Section Heading (H2)", "2-2.5rem", "Playfair Display", "Semibold"],
              ["Subsection (H3)", "1.25-1.5rem", "Playfair Display", "Semibold"],
              ["Body Text", "1rem (16px)", "Lato", "Regular"],
              ["Small / Captions", "0.875rem", "Lato", "Regular"],
              ["Nav / Buttons", "0.875rem", "Lato", "Medium"],
              ["Section Label", "0.75rem", "Lato", "Semibold"],
            ]).map(
              (row) =>
                new TableRow({
                  children: row.map((cell, i) =>
                    new TableCell({
                      borders,
                      width: { size: i === 0 ? 2800 : i === 2 ? 2560 : 2000, type: WidthType.DXA },
                      margins: cellMargins,
                      children: [new Paragraph({ children: [new TextRun({ text: cell, size: 20, font: "Arial" })] })],
                    })
                  ),
                })
            ),
          ],
        }),

        // ── PAGE BREAK ──
        new Paragraph({ children: [new PageBreak()] }),

        // ── VOICE & TONE ──
        new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Voice & Tone")] }),

        new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Writing Style")] }),
        new Paragraph({
          spacing: { after: 200 },
          children: [new TextRun("Floor'd writes like a knowledgeable neighbor who happens to be an expert in flooring. We keep it real, speak plainly, and always prioritize being helpful over being impressive.")],
        }),

        new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("Do")] }),
        ...[
          "Use everyday language: \"here's the deal\" not \"herein we present\"",
          "Be honest about trade-offs: \"the downside is...\" builds trust",
          "Include real price ranges: \"$2-6/sq ft\" not \"competitively priced\"",
          "Address the reader directly: \"your home\" and \"you'll love\"",
          "Use contractions: \"we're\" not \"we are\", \"it's\" not \"it is\"",
        ].map(
          (item) =>
            new Paragraph({
              numbering: { reference: "bullets", level: 0 },
              spacing: { after: 60 },
              children: [new TextRun({ text: item, size: 22 })],
            })
        ),

        new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("Don't")] }),
        ...[
          "Don't use corporate jargon: avoid \"leverage\", \"synergy\", \"solutions\"",
          "Don't be condescending about budget: never imply cheap = bad",
          "Don't use pressure tactics: no \"limited time\" or \"act now\"",
          "Don't badmouth competitors by name",
          "Don't use overly formal language: this isn't a law firm",
        ].map(
          (item) =>
            new Paragraph({
              numbering: { reference: "bullets", level: 0 },
              spacing: { after: 60 },
              children: [new TextRun({ text: item, size: 22 })],
            })
        ),

        new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Sample Phrases")] }),
        new Table({
          width: { size: 9360, type: WidthType.DXA },
          columnWidths: [4680, 4680],
          rows: [
            new TableRow({
              children: ["Instead of...", "Say..."].map((h) =>
                new TableCell({
                  borders,
                  width: { size: 4680, type: WidthType.DXA },
                  shading: { fill: COLORS.charcoal, type: ShadingType.CLEAR },
                  margins: cellMargins,
                  children: [new Paragraph({ children: [new TextRun({ text: h, bold: true, size: 20, color: COLORS.white })] })],
                })
              ),
            }),
            ...([
              ["We offer premium flooring solutions", "We carry floors you'll actually love"],
              ["Contact us for a consultation", "Come hang out in our showroom"],
              ["Budget-friendly options available", "Great floors starting at $2/sq ft"],
              ["Professional installation services", "Our crew handles the install"],
              ["Serving the greater metro area", "We're your neighborhood flooring store"],
            ]).map(
              (row) =>
                new TableRow({
                  children: row.map((cell) =>
                    new TableCell({
                      borders,
                      width: { size: 4680, type: WidthType.DXA },
                      margins: cellMargins,
                      children: [new Paragraph({ children: [new TextRun({ text: cell, size: 20 })] })],
                    })
                  ),
                })
            ),
          ],
        }),

        // ── PAGE BREAK ──
        new Paragraph({ children: [new PageBreak()] }),

        // ── DIGITAL PRESENCE ──
        new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Digital Presence")] }),

        new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Website")] }),
        new Paragraph({
          spacing: { after: 60 },
          children: [
            new TextRun({ text: "Domain: ", bold: true }),
            new TextRun("floordflooringandfinishes.com"),
          ],
        }),
        new Paragraph({
          spacing: { after: 60 },
          children: [
            new TextRun({ text: "Stack: ", bold: true }),
            new TextRun("Vite + React + TypeScript + Tailwind CSS + shadcn/ui"),
          ],
        }),
        new Paragraph({
          spacing: { after: 200 },
          children: [
            new TextRun({ text: "Design System: ", bold: true }),
            new TextRun("CSS custom properties mapped to the brand palette, responsive mobile-first layout, scroll-aware header with logo brightness toggle"),
          ],
        }),

        new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("SEO Keywords")] }),
        ...[
          "flooring Little Rock AR",
          "flooring store Arkansas",
          "hardwood floors Little Rock",
          "luxury vinyl plank Little Rock",
          "tile flooring Little Rock AR",
          "flooring Central Arkansas",
          "best flooring for pets Arkansas",
          "flooring cost guide Arkansas",
        ].map(
          (item) =>
            new Paragraph({
              numbering: { reference: "bullets", level: 0 },
              spacing: { after: 40 },
              children: [new TextRun({ text: item, size: 22 })],
            })
        ),

        new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Social Media")] }),
        new Paragraph({
          spacing: { after: 200 },
          children: [new TextRun("Social profiles should use the wheat gold logo on a charcoal background as the profile image. Cover photos should feature warm, inviting showroom or installed-floor photography with the Floor'd wordmark overlaid.")],
        }),

        // ── FOOTER ──
        new Paragraph({
          alignment: AlignmentType.CENTER,
          border: { top: { style: BorderStyle.SINGLE, size: 2, color: COLORS.gold, space: 1 } },
          spacing: { before: 600 },
          children: [new TextRun({ text: "Floor'd Flooring + Finishes \u2014 Brand Identity Kit", size: 18, color: COLORS.warmGray, italics: true })],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [new TextRun({ text: "Prepared by Nu Elements Media \u2022 info@nuelementsmedia.com", size: 18, color: COLORS.warmGray, italics: true })],
        }),
      ],
    },
  ],
});

Packer.toBuffer(doc).then((buffer) => {
  const outPath = process.argv[2] || "Floord_Brand_Kit.docx";
  fs.writeFileSync(outPath, buffer);
  console.log(`Brand kit written to ${outPath}`);
});
