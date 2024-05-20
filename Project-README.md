# QA Wolf Take Home Test

## Overview

Welcome to my QA Wolf Take Home Test project! This README provides a detailed overview of the project, an Astro framework application designed to create website layouts and components. The project leverages various modern web technologies and tools, including MDX for content templates, TailwindCSS for styling, and Playwright for web scraping and testing.

## Table of Contents

- [Project Description](#project-description)
- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Dev Dependencies](#dev-dependencies)
- [Project Structure](#project-structure)
- [Functionality](#functionality)
- [Technology Choices](#technology-choices)
- [Testing](#testing)
- [Contact](#contact)

## Project Description

This project is an Astro framework application with the following components:

- **Landing Page**: Features a button to initiate a Playwright script via HTMX.
- **Article History Page**: Displays historical articles.
- **About the Project Page**: Describes the project's purpose and structure.
- **About Me Page**: Provides information about me.

### Technologies Used

- **Astro**: For building website layouts and components.
- **MDX**: For creating content templates.
- **TailwindCSS**: For styling the application.
- **HTMX**: For handling dynamic HTTP requests.
- **Playwright**: For web scraping and testing.
- **AstroDB**: For storing scraped data.
- **ElysiaJS**: For setting up the server to interact with the database.
- **Hyperscript**: For client-side interactions and transitions.

## Installation

To set up the project, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/jonathancdays/qa-wolf-take-home.git
   cd qa-wolf-take-home
   ```

2. **Install dependencies**:
   ```bash
   bun install
   ```

## Usage

To start the development server, run:

```bash
bun run dev
```

To build the project for production, run:

```bash
bun run build
```

To preview the production build, run:

```bash
bun run preview
```

## Scripts

The `package.json` includes several scripts to streamline development and production processes:

- **dev**: Starts the Astro development server.
- **start**: Alias for the `dev` script.
- **build**: Runs Astro's checks and builds the project.
- **preview**: Previews the built project.
- **astro**: Runs Astro CLI commands.

```json
{
  "scripts": {
    "dev": "astro dev",
    "start": "astro dev",
    "build": "astro check && astro build",
    "preview": "astro preview",
    "astro": "astro"
  }
}
```

## Dependencies

The project relies on the following dependencies:

| Package           | Version |
| ----------------- | ------- |
| @astrojs/check    | ^0.7.0  |
| @astrojs/db       | ^0.11.3 |
| @astrojs/mdx      | ^3.0.0  |
| @astrojs/rss      | ^4.0.6  |
| @astrojs/sitemap  | ^3.1.4  |
| @astrojs/tailwind | ^5.1.0  |
| astro             | ^4.8.4  |
| htmx.org          | ^1.9.12 |
| hyperscript.org   | ^0.9.12 |
| playwright        | ^1.44.0 |
| tailwindcss       | ^3.4.3  |
| typescript        | ^5.4.5  |

## Dev Dependencies

The project includes the following development dependencies:

| Package          | Version   |
| ---------------- | --------- |
| @playwright/test | ^1.44.0   |
| @types/node      | ^20.12.12 |

## Project Structure

The project is structured as follows:

```plaintext
qa-wolf-take-home/
├── public/
│   └── ...       # Static assets
├── src/
│   ├── components/
│   │   └── ...   # Astro components
│   ├── layouts/
│   │   └── ...   # Astro layouts
│   ├── pages/
│   │   └── ...   # Astro pages
│   ├── scripts/
│   │   └── ...   # Playwright and HTMX scripts
│   └── styles/
│       └── ...   # TailwindCSS styles
├── package.json
└── README.md
```

## Functionality

### Landing Page

- **Button Interaction**: A button on the landing page uses HTMX to trigger a Playwright script.
- **Data Scraping**: The Playwright script scrapes the top 10 articles and URLs from [Hacker News](https://news.ycombinator.com/news) and inserts them into AstroDB.

### Article History Page

- **Displays Articles**: Shows a list of previously scraped articles.

### About the Project Page

- **Project Details**: Provides an overview of the project’s purpose and technologies.

### About Me Page

- **Developer Information**: Includes information about me.

## Technology Choices

### Astro

**Positives**:

- **Component-Based Architecture**: Simplifies the creation and maintenance of reusable components.
- **Static Site Generation**: Provides excellent performance by generating static HTML.
- **Integration with Modern Tools**: Supports integrations with tools like MDX and TailwindCSS.

**Trade-offs**:

- **Learning Curve**: New framework may require a learning period.
- **Limited Ecosystem**: Smaller ecosystem compared to more established frameworks like React or Vue.

### TailwindCSS

**Positives**:

- **Utility-First Approach**: Provides low-level utility classes for rapid UI development.
- **Customizability**: Highly customizable with a configuration file, allowing for theme and design consistency.

**Trade-offs**:

- **Learning Curve**: Requires understanding of utility-first CSS methodology.
- **Verbose HTML**: Can lead to bloated HTML files with numerous classes.

### Playwright

**Positives**:

- **Cross-Browser Testing**: Supports multiple browsers, including Chromium, Firefox, and WebKit.
- **Powerful API**: Provides a rich API for automating and testing web applications.
- **End-to-End Testing**: Excellent for comprehensive end-to-end testing scenarios.

**Trade-offs**:

- **Resource Intensive**: Can be resource-intensive, especially when running tests in parallel.
- **Complexity**: Advanced features may introduce complexity in test management and execution.

## Testing

### Playwright Testing

I use Playwright for end-to-end testing of:

- **Astro components**: Ensuring the components render correctly.

To run the tests, use:

```bash
bun playwright test
```

## Contact

For any questions or issues, please contact me:

- **Name**: Jonathan Days
- **Email**: jonathancdays@gmail.com
- **GitHub**: [Jonathan Days](https://github.com/jonathancdays)

---

> "This has been a blast developing. Thank you for structuring your recruitement process in this manner,
> I feel as if this has been informative of QA Wolf operates, its values, and how it respects others' time." - Jonathan Days
