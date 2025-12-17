# Academic Website - Art Deco / Swiss Design

An elegant academic website combining al-folio's structure with a distinctive art deco and Swiss design aesthetic.

## 🎨 Design Philosophy

This design merges two powerful aesthetic traditions:

**Art Deco (1920s Modernism)**
- Geometric precision and symmetry
- Luxurious gold accents (#D4AF37)
- Bold, elegant typography (Playfair Display)
- Decorative corner elements
- Strong borders and frames

**Swiss Design (International Typographic Style)**
- Clean grid systems and mathematical spacing (golden ratio: 1.618)
- Precise hierarchy and alignment
- Refined sans-serif typography (Raleway)
- Emphasis on readability and function
- Asymmetric balance

**Result**: Professional academic credibility meets memorable visual sophistication.

## ✨ Key Features

- **Distinctive Typography**: Playfair Display (serif), Raleway (sans-serif), Courier Prime (monospace)
- **Sophisticated Color Palette**: Navy (#1a2332), Gold (#D4AF37), Cream (#F5F1E8)
- **Geometric Ornaments**: Corner decorations, framed photo, section dividers
- **Golden Ratio Spacing**: Mathematical precision in layout (1.618 ratio)
- **Layered Elements**: Offset borders, shadow effects, stacked frames
- **Smooth Animations**: Fade-ins, parallax scrolling, hover states
- **Full al-folio Structure**: About, Research, Publications, Teaching, CV, Contact

## 🚀 Deployment to GitHub Pages

### Quick Start

1. **Create Repository**
   - Go to GitHub and create new repository
   - Name it: `your-username.github.io`
   - Make it Public

2. **Upload Files**
   - Upload these 3 files to repository root:
     - `index.html`
     - `style.css`
     - `script.js`

3. **Enable GitHub Pages**
   - Settings → Pages
   - Source: "Deploy from a branch"
   - Branch: "main" and "/ (root)"
   - Save

4. **Live in 1-2 minutes** at `https://your-username.github.io`

## 📝 Customization Guide

### Update Your Information

**Navigation & Hero** (index.html, lines 25-70)
- Brand initial and name
- Position and affiliation
- Hero description
- Contact links

**Profile Photo**
Replace the placeholder:
1. Add your photo as `profile.jpg` to repository
2. In index.html, line 45, replace:
```html
<div class="photo-placeholder">
    <span class="initials">JL</span>
</div>
```
With:
```html
<img src="profile.jpg" alt="Your Name" style="width: 100%; height: 100%; object-fit: cover;">
```

**About Section** (lines 96-145)
- Your bio and background
- Research interests list
- Education history

**Research Projects** (lines 156-215)
- Update 4 research project cards
- Project titles, descriptions, status, dates

**Publications** (lines 227-305)
- Add your publications by year
- Title, authors, venue, links

**Teaching** (lines 317-375)
- Course codes, titles, descriptions
- Syllabi links

**CV Section** (lines 388-465)
- Academic appointments
- Honors & awards
- Service roles

**Contact** (lines 477-520)
- Email, office, office hours
- Academic profile links

### Customize Colors

Edit CSS variables in `style.css` (lines 1-12):

```css
:root {
    --gold: #D4AF37;        /* Main accent - try #B8860B, #CD7F32 */
    --navy: #1a2332;        /* Dark color - try #0f172a, #1e293b */
    --cream: #F5F1E8;       /* Background - try #FFF8E7, #FAF9F6 */
}
```

**Alternative Color Schemes:**

**Classic Academic**
```css
--gold: #8B4513;    /* Brown */
--navy: #1a1a1a;    /* Charcoal */
--cream: #F8F6F0;   /* Off-white */
```

**Modern Blue**
```css
--gold: #3b82f6;    /* Blue accent */
--navy: #1e3a8a;    /* Deep blue */
--cream: #f0f9ff;   /* Light blue tint */
```

**Elegant Green**
```css
--gold: #059669;    /* Emerald */
--navy: #064e3b;    /* Forest green */
--cream: #f0fdf4;   /* Mint tint */
```

**University Branding**
Use your institution's colors for `--gold` and `--navy`

### Adjust Typography

Change fonts in `style.css` variables (lines 8-10):

```css
--serif: 'Playfair Display', serif;   /* Headings */
--sans: 'Raleway', sans-serif;        /* Body text */
--mono: 'Courier Prime', monospace;   /* Code/accents */
```

**Alternative Font Combinations:**

**Traditional Academic**
```css
--serif: 'Garamond', serif;
--sans: 'Helvetica Neue', sans-serif;
```

**Modern Professional**
```css
--serif: 'Lora', serif;
--sans: 'Source Sans Pro', sans-serif;
```

**Contemporary Bold**
```css
--serif: 'Cormorant Garamond', serif;
--sans: 'Montserrat', sans-serif;
```

Remember to update Google Fonts link in HTML if changing fonts.

### Modify Corner Decorations

In `style.css` (lines 32-62), adjust:
- `width` and `height`: Size of corner frames
- `border`: Thickness (try `4px` for bolder, `2px` for subtle)
- Comment out to remove: Add `display: none;` to `.corner-decoration`

### Change Section Ornaments

In `style.css` (lines 383-405), customize the decorative underlines:
- `width`: Length of line
- `height`: Thickness
- Remove diamonds: Delete `::before` and `::after` rules

## 🎯 Design Details

### Golden Ratio Usage
The layout uses φ (1.618) for spacing harmony:
- Line height: 1.618
- Section padding multiples: 1rem, 1.618rem, 2.618rem
- Typography scale based on φ ratios

### Border & Frame Philosophy
Multiple overlapping borders create depth:
- Main element: 2-3px solid border
- Offset shadow: Lighter border or gold accent
- Creates architectural feel without being heavy

### Typography Hierarchy
```
Hero Title:      4rem (64px) - Playfair Display
Section Titles:  3.5rem (56px) - Playfair Display
Project Titles:  1.6rem (25.6px) - Playfair Display
Body Text:       1.05rem (16.8px) - Raleway
Small Text:      0.85rem (13.6px) - Raleway
Accents:         Courier Prime (monospace)
```

## 📱 Responsive Design

Breakpoints:
- **1200px**: Adjusted hero layout
- **900px**: Single-column layouts, stacked navigation
- **600px**: Mobile-optimized spacing, hidden corners

## 🔧 Advanced Customization

### Add CV PDF

1. Upload `cv.pdf` to repository
2. Update link on line 405:
```html
<a href="cv.pdf" class="cv-download-button">
```

### Add Research Project Images

In each `.research-project` div, add before title:
```html
<img src="project-image.jpg" alt="Project" style="width: 100%; height: 200px; object-fit: cover; margin-bottom: 1.5rem;">
```

### Embed Google Scholar Publications

Use BibBase or similar:
```html
<script src="https://bibbase.org/show?bib=YOUR_GOOGLE_SCHOLAR_URL&jsonp=1"></script>
```

## 🌐 Custom Domain

To use your own domain:

1. Create `CNAME` file with your domain:
```
www.yourname.com
```

2. DNS settings at your registrar:
   - CNAME: `www` → `your-username.github.io`

3. GitHub Settings → Pages → Custom domain
4. Enable "Enforce HTTPS"

## ⚡ Performance

- Minimal dependencies (only Google Fonts)
- CSS-only animations
- Optimized images recommended:
  - Profile photo: 600x800px, ~100KB
  - Project images: 800x400px, ~150KB each
- Lazy loading for images (add `loading="lazy"`)

## 🆘 Troubleshooting

**Fonts not loading?**
- Check internet connection
- Google Fonts may be slow initially
- Fallback fonts will display

**Layout broken on mobile?**
- Clear browser cache
- Test with Chrome DevTools mobile view
- Check CSS media queries

**Colors look wrong?**
- Verify hex codes in `:root` variables
- Some monitors display colors differently
- Test on multiple devices

## 💡 Tips for Academic Use

- **Keep it updated**: Regular CV and publication updates
- **High-quality photo**: Professional headshot works best
- **Active research**: Highlight ongoing projects prominently
- **Link everything**: PDFs, code repos, data sets
- **Student access**: Make syllabi and materials easy to find
- **Professional tone**: Balance distinctive design with credibility

## 📧 Design Notes

This design intentionally stands out from typical academic websites while maintaining professional credibility. The art deco elements (gold, geometric ornaments, decorative frames) add personality and memorability. The Swiss design principles (grid system, precise spacing, clear hierarchy) ensure readability and function.

Perfect for:
- Faculty who want to be memorable
- Interdisciplinary scholars
- Quantitative social scientists
- Methodologists and statisticians
- Anyone tired of bland academic sites

**The design says**: "I value precision, elegance, and attention to detail" - exactly what you want to communicate as a scholar.

---

Made with attention to golden ratio, typographic hierarchy, and architectural precision.