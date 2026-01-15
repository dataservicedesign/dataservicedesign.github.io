# Data and Service Design - Politecnico Milano

A Next.js-based course website for the **Data and Service Design** course at Politecnico Milano School of Design, Master in Product Service System Design.

## 🎯 Overview

This website serves as the digital syllabus and resource hub for the Data and Service Design course, featuring:

- 📅 **Seminars**: Guest lecture series with industry experts and researchers
- 📓 **Journal**: Course updates and announcements
- 📚 **Publications**: Relevant academic papers and readings (BibTeX integration)
- 🎓 **Teaching**: Course information and materials

## 🚀 Getting Started

### Prerequisites

- Node.js (latest LTS version recommended)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Run the development server
npm run dev
```

Open [http://localhost:3000/syllabus](http://localhost:3000/syllabus) in your browser to view the website.

### Building for Production

```bash
# Build the application
npm run build

# Start the production server
npm run start
```

### Static Export

```bash
# Build and export as static site
npm run deploy
```

This will create a static export in the `out/` directory.

## 📁 Project Structure

```
syllabus/
├── components/          # React components
│   ├── nav.js          # Navigation component
│   ├── footer.js       # Footer component
│   ├── layout.js       # Page layout wrapper
│   ├── Teaching.js     # Teaching section
│   ├── project.js      # Project display
│   ├── bib.js          # Bibliography component
│   └── ...
├── pages/              # Next.js pages
│   ├── index.js        # Homepage
│   ├── journal/        # Journal entries
│   └── seminars/       # Seminar pages
├── content/            # Course content data
│   ├── bib.json        # Bibliography database
│   ├── projectList.js  # Projects list
│   ├── pubList.js      # Publications list
│   └── teachingList.js # Teaching materials
├── seminars/           # Seminar markdown files
├── journal/            # Journal markdown entries
├── lib/                # Utility functions
│   ├── projectPost.js  # Project data handling
│   └── coursePost.js   # Course data handling
├── public/             # Static assets
└── styles/             # CSS modules
```

## 🛠️ Technologies

- **[Next.js](https://nextjs.org/)** - React framework with static site generation
- **[React](https://react.dev/)** - UI library
- **[Citation.js](https://citation.js.org/)** - Citation parsing and formatting
- **[BibTeX](https://www.npmjs.com/package/bibtex)** - Bibliography management
- **[gray-matter](https://github.com/jonschlinkert/gray-matter)** - Front matter parsing
- **[remark](https://remark.js.org/)** - Markdown processing
- **[D3.js](https://d3js.org/)** - Data visualization
- **[react-medium-image-zoom](https://github.com/rpearce/react-medium-image-zoom)** - Image zoom functionality

## 📝 Adding Content

### Adding a Seminar

Create a new markdown file in the `seminars/` directory:

```markdown
---
id: "speaker-name"
image: "seminars/speaker-image.png"
name: "Speaker Name"
date: "YYYY-MM-DD"
affiliation: "Institution"
abstract: "Seminar description..."
title: "Seminar Title"
---

Speaker biography and additional information...
```

Place the speaker's image in `public/seminars/`.

### Adding a Journal Entry

Create a markdown file in the `journal/` directory with the format `YYYY-MM-DD.md`:

```markdown
---
date: "YYYY-MM-DD"
title: "Entry Title"
---

Journal entry content...
```

### Managing Publications

Edit `content/bib.json` or add BibTeX entries to maintain the publications list.

## 🌐 Deployment

The site is configured with a base path of `/syllabus` for deployment to GitHub Pages or similar static hosting services.

To deploy:

```bash
npm run deploy
```

This generates a static export ready for hosting.

## 📄 License

This project is for educational purposes at Politecnico Milano.

## 👤 Author

Maintained by the Data and Service Design course team at Politecnico Milano School of Design.
