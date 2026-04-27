# Complete React Content Replacement Map

This document outlines all hardcoded textual strings and asset URLs scattered across the template components. It provides a blueprint for what a client should prepare to systematically transition this template into their own brand.

---

## 1. Global / Reusable Components

These components are typically imported into multiple pages. Their hardcoded text will replicate wherever they are used.

| Exact Text Currently Used | Replacement Label Needed | File Target |
| :--- | :--- | :--- |
| `"©2024 Mandro Designs"` | **Copyright String** | `src/components/Footer.jsx` |
| `"Go Back To Top"` | **Scroll Top Label** | `src/components/Footer.jsx` |
| `"Connect yourself into cyberpunk universe."` | **Contact CTA Eyebrow** | `src/components/ContactCta.jsx` |
| `"Let's work together"` | **Contact CTA Title** | `src/components/ContactCta.jsx` |
| `"Based in Los Angeles, I am an innovative designer..."` | **Contact CTA Paragraph** | `src/components/ContactCta.jsx` |
| `"Cyberpunk portrait"` / Image URL | **Contact CTA Portrait** | `src/components/ContactCta.jsx` |
| `"Cyberpunk Navigation"` / `"Close"` | **Mobile Menu Header** | `src/components/Navbar.jsx` |
| `"49th St. Los Angeles..."` | **Nav Menu Address** | `src/components/Navbar.jsx` |

> [!NOTE] 
> The project utilizes highly modular reusable UI components like `<SectionTitle />`, `<PageHero />`, `<MediaFrame />`, and `<NotchedButton />`. These components accept standard React string props (like `title="xyz"` or `eyebrow="abc"`), which is why so much text lives inside the page layout files directly!

---

## 2. Home Page Setup
Target: `src/pages/HomePage.jsx`

### Hero Section
| Exact Text Used | Client Replacement Label |
| :--- | :--- |
| `"AVAILABLE FOR FREELANCE"` | **Availability Status** |
| `"GUETABERTO DAVIDSON"` | **Core Brand Name** |
| `"BASED IN LA, CALIFORNIA"` | **Location Tagloop** |
| `"///DIGITAL DESIGNER + FRAMER DEVELOPER"` | **Skill Tags / Secondary Role** |
| `https://framer.../Dqh3FA7...png` | **Hero Cutout Image URL** |

### About & Intro Section
| Exact Text Used | Client Replacement Label |
| :--- | :--- |
| `"ABOUT KD6"` | **About Eyebrow** |
| `"I am a future digital designer."` | **Manifesto Title** |
| `"Challenges & Approach"` | **Right-Column Eyebrow** |
| `"I weave together bold strategy..."` | **Right-Column Intro Paragraph** |

### Featured Cases Section
| Exact Text Used | Client Replacement Label |
| :--- | :--- |
| `"FEATURED CASES"` | **Cases Eyebrow** |
| `"Featured cases"` | **Cases Main Title** |
| `"My creative spirit comes alive..."` | **Cases Introduction Paragraph** |
| `"View Portfolio*"` | **Navigation Button Text** |

### Process & Services
| Exact Text Used | Client Replacement Label |
| :--- | :--- |
| `"WELCOME TO THE WORK PROCESS"` | **Process Section Eyebrow** |
| `"A sharp production loop..."` | **Process Section Title** |
| `"Explore More*"` | **Process Section Button** |
| `"my services"` | **Services Eyebrow** |
| `"Creative modules made for immersive..."` | **Services Title** |
| `"Providing bespoke design services..."` | **Services Paragraph** |

### Standalone Manifestos & Cinematic Breaks
| Exact Text Used | Client Replacement Label |
| :--- | :--- |
| `"I weave together bold strategy..."` | **Manifesto Copy Block** |
| `"I am evolutionarily wired to sleek wonder."` | **Manifesto Big Headline** |
| `https://framer.../Ivx27ux...png` | **Cinematic Banner Image 1** |
| `https://framer.../dhgiGPK...png` | **Cinematic Banner Image 2** |

### Identity / Voice Grid
| Exact Text Used | Client Replacement Label |
| :--- | :--- |
| `"VOICE OF DA-VID"` | **Voice Module Eyebrow** |
| `"For brands. For agencies."` | **Voice Module Title** |
| `"_D4V1D*M00R3_5H / r9H4DnOj6LVw2C"` | **Cyberpunk Hacker Text** |
| `https://framer.../P8WIsZW...png` | **Studio Atmosphere Image** |

### Accolades & Pricing
| Exact Text Used | Client Replacement Label |
| :--- | :--- |
| `"AWARDS"` / `"Recognition earned through detail..."` | **Awards Section Headers** |
| `"Trusted By International Brands"` | **Testimonials Headers** |
| `"BIG OR SMALL?"` / `"I have a plan."` | **Pricing Headers** |
| `"Frequently Asked Questions"` | **FAQ Headers** |

---

## 3. About Page
Target: `src/pages/AboutPage.jsx`

| Target Element | Exact Text | Replacement Label |
| :--- | :--- | :--- |
| **Hero Title** | `"DAVIDSON"` | **Brand Name Secondary** |
| **Hero Eyebrow** | `"MORE ABOUT"` | **Page Eyebrow** |
| **Hero Paragraph** | `"Unleash your creativity. Showcase..."` | **About Page Intro Copy** |
| **Banner 1** | Image URL starting w `W1...`| **First Atmosphere Banner** |
| **Approach Block** | `"About KD6"` / `"My approach and strategy..."` | **Methodology Text** |
| **Experience/Stack** | `"EXPERIENCE"` / `"ALL MY STACK"` ... | **Timeline Block Titles** |
| **Manifesto 1** | `"Awe makes\nthings happen."` | **Big Bold Statement 1** |
| **Banner 2/3** | Image URLs starting `4H...` and `kM...` | **Portrait / Studio Banners** |
| **Capabilities** | `"CAPABILITIES"` / `"hardwares"` | **Feature Block Headers** |
| **Manifesto 2** | `"Mind inspires\nboundless imagination."` | **Big Bold Statement 2** |

---

## 4. Contact Page
Target: `src/pages/ContactPage.jsx`

### Page Setup & Form
| Target Element | Exact Text | Replacement Label |
| :--- | :--- | :--- |
| **Page Header** | `"Reach out and let's create something..."` | **Contact Headline** |
| **Sub Navigation**| `"Reach out and let's create... Let's achieve..."` | **Contact Intro Statement** |
| **Form Banner** | Image URL starting w `63qP...` | **Sideways Portrait Banner** |
| **Form Inputs** | `"Name"` / `"E-mail"` / `"Message"` / `"Send Email"` | **Form Accessibility Labels** |

### Footer Details Grid
There are multiple explicitly hardcoded physical details here that bypass standard config maps.
| Target Detail | Exact Text | Target Label |
| :--- | :--- | :--- |
| **Street** | `"49th St. Los Angeles, California(CA), 90011"`| **Physical Branch Address** |
| **Nation** | `"United States"` | **Country Label** |
| **Phone 1** | `"USA   +1 13945 88734"` | **Primary Global Hotline** |
| **Phone 2** | `"AUS   +1 14945 78297"` | **Secondary Global Hotline** |
| **Email Links** | `"guetabertodavid@..."` | **Mailto Target 1** |

---

## 5. Work Archive
Target: `src/pages/WorkPage.jsx`

| Target Element | Exact Text | Replacement Label |
| :--- | :--- | :--- |
| **Hero Eyebrow** | `"(2021 - 2024)"` | **Active Years Identifier** |
| **Hero Title** | `"Selected works"` | **Archive Title Label** |
| **Hero Subtitle** | `"My creative spirit comes alive in the..."` | **Archive Description text** |

> [!NOTE] 
> The individual projects/cases inside the lists shown on this page are fetched automatically from `src/data/siteData.js` (`projects` array), meaning only the page wrappers contain statically hardcoded elements.

---

## Content Replacement Architecture

To replace the content, the developer will need to locate the matching string references in each specified `.jsx` react element structure, and substitute them heavily with variables pointing to an external JSON configuration file or CMS integration structure. 

Many core sections (like the testimonials themselves or the list of awards) have already been systematically isolated to `siteData.js`, so the focus of the client's replacement strategy should heavily lean on tackling the page-level components `HomePage.jsx` and `AboutPage.jsx` where paragraph manifestos and static UI labels largely remain.
