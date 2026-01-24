# Project Overview

This is a personal portfolio website for Tristan Nkoghe. It showcases their work and qualifications as a Social Scientist, PhD Candidate, UX Researcher, and Photographer.

The website is a static site built with **HTML**, **CSS**, and **JavaScript**. The design is clean and modern, featuring a dark theme, custom fonts, and a responsive layout.

## Key Files

*   `index.html`: The main entry point of the website. It contains the structure of the home page, including the header, hero section, and project showcases.
*   `style.css`: This file contains all the styling for the website. It defines the color palette, typography, layout, and animations.
*   `script.js`: This file is intended for interactive features. It is currently empty.
*   `/img`: This directory contains all the images used in the portfolio.
*   `/fonts`: This directory contains the custom fonts used on the website.
*   `/icons`: This directory contains SVG icons for links (GitHub, mail).

# Building and Running

This is a static website, so there is no build process. To run the website, you can:

1.  **Open the `index.html` file directly in your web browser.**

2.  **Use a simple local web server.** For example, using Python:
    ```bash
    python -m http.server
    ```
    Then, open your web browser and navigate to `http://localhost:8000`.

# Development Conventions

*   The project uses custom fonts, which are included in the `/fonts` directory.
*   Styling is organized in the `style.css` file with clear separation of concerns.
*   The project uses CSS variables for managing the color palette and fonts.
*   The JavaScript file (`script.js`) is currently empty, suggesting that any new interactive functionality should be added there.
