# Suraj Pawar - Portfolio

Personal portfolio website showcasing projects and professional experience. Built with Jekyll and hosted on GitHub Pages.

## About

This portfolio highlights my work as a Software Engineer specializing in cloud-native development, distributed systems, and LLM-powered applications. Currently working at Splunk with expertise in Kubernetes, Golang, and AWS.

**Live Site:** [ssp4all.github.io](https://ssp4all.github.io)

## Tech Stack

- **Static Site Generator:** Jekyll
- **Theme:** Based on [Agency Bootstrap Theme](https://startbootstrap.com/template-overviews/agency/)
- **Hosting:** GitHub Pages
- **Languages:** HTML, CSS, JavaScript, Liquid

## Prerequisites

- Ruby (4.0+ recommended)
- Bundler
- Jekyll

## Installation

### macOS (using Homebrew)

```bash
# Install Ruby via Homebrew
brew install ruby

# Add Homebrew Ruby to your PATH (add to ~/.zshrc)
export PATH="/opt/homebrew/opt/ruby/bin:$PATH"

# Install dependencies
bundle install
```

### Alternative: Using chruby

```bash
brew install chruby ruby-install
ruby-install ruby
# Update .zshrc with ruby path
gem install jekyll bundler
```

## Running Locally

```bash
# Install dependencies
bundle install

# Start the development server
bundle exec jekyll serve
```

Visit [http://127.0.0.1:4000](http://127.0.0.1:4000) to view the site.

## Project Structure

```
.
├── _config.yml          # Site configuration
├── _data/               # Data files (profile, etc.)
├── _includes/           # Reusable components
├── _layouts/            # Page layouts
├── _posts/              # Project posts
├── _site/               # Generated site (do not edit)
├── assets/              # Static assets (images, CSS, JS)
└── img/                 # Portfolio images
```

## Adding a New Project

1. Create a new markdown file in `_posts/` with the format: `YYYY-MM-DD-project-name.markdown`
2. Add front matter with required fields:

```yaml
---
title: Project Title
subtitle: Short subtitle
layout: default
modal-id: [unique number]
date: YYYY-MM-DD
img: project-image.png
thumbnail: project-thumbnail.png
alt: Image description
project-date: Month Year
github: https://github.com/username/repo
category: Category Name
description: Project description text.
---
```

3. Add project images to `img/portfolio/`

## License

This project is open source and available under the MIT License.

## Contact

- **GitHub:** [@ssp4all](https://github.com/ssp4all)
- **LinkedIn:** [ssp4all](https://www.linkedin.com/in/ssp4all/)
- **Twitter:** [@ssp4all](https://twitter.com/ssp4all)
