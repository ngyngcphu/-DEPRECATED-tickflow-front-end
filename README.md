<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

<br />
<div align="center">
  <a href="https://github.com/TickLabVN/TickFlow-FE">
    <img src="public/TickLab-logo.svg" alt="Logo" width="80" height="80">
  </a>

<h1 align="center">TickFlow</h1>

  <h2 align="center">
    TickLab manager support application
  </h2>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#project-structure">Project structure</a></li>
        <li><a href="#project-configurations">Project configurations</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#git-working-culture">Git working culture</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This is front-end project of Tickflow app. See [TickFlow-Proposal](https://www.overleaf.com/read/fyjqbftxjmhz) for more details about Tickflow.

### Built With

- ReactJS
- TailwindCSS
- Flowbite-React
- ViteJS
- Docker

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

- `node` v18.15.0
- `yarn` 1.22.19

### Installation

1. Install dependencies

```sh
yarn install
```

2. Start project:

```sh
yarn dev
```

### Project structure

```py
📦mock-server                   # A json-server contains json-data
┣
📦src
 ┣ 📂assets                     # All assets such as jpg, svg, icon ... goes here
 ┣ 📂components                 # Reusable components across the web page
 ┣ 📂interfaces                 # Interfaces of class, function ...
 ┣ 📂layout                     # Layout of project includes sidebar, navbar,...
 ┣ 📂pages                      # Screen components
 ┣ 📂services                   # action to call api from server
 ┣ 📂utils                      # connect to URL server
 ┣ 📜App.tsx                    # App component
 ┗ 📜main.tsx                   # Program entry
 ┗ 📜index.css                  # config tailwindcss
```

### Project configurations

We use [`eslint`](https://eslint.org/) to find and fix problem in code, such as:

- Unused variables
- Use `var` declaration
- Loosely comparation using `==`
- ...

You can run this command to test eslint script:

```bash
yarn lint
```

To maintain only one style coding across members, we use [`prettier`](https://prettier.io/). Try:

```bash
yarn format
```

You don't need to run these scripts regularly or before commiting code. They are run automatically before `git commit` command by setting as a precommit script.

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/TickLabVN/TickFlow-FE/issues) for a full list of proposed features (and known issues).

<!-- GIT-WORKING-CULTURE -->

## Git working culture

- For every updates, DO NOT push directly to `main` branch. Create a new branch, commit, publish branch and create a pull request (PR) instead.
- A branch should have prefix `feat/` for a feature update, prefix `hotfix/` for a hotfix, `improv/` for an improvement ...
- A PR should be small enough to review. To split a large PR, use [stacked PRs](https://blog.logrocket.com/using-stacked-pull-requests-in-github/).

<!-- CONTACT -->

## Contact

Nguyễn Ngọc Phú - [github](https://github.com/ngyngcphu)

Nguyễn Thanh Hiền - [github](https://github.com/amyranotamirror)

Project Link: [TickFlow-FE](https://github.com/TickLabVN/TickFlow-FE)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/TickLabVN/TickFlow-FE?style=for-the-badge
[contributors-url]: https://github.com/TickLabVN/TickFlow-FE/graphs/contributors
[stars-shield]: https://img.shields.io/github/stars/TickLabVN/TickFlow-FE?style=for-the-badge
[stars-url]: https://github.com/TickLabVN/TickFlow-FE/stargazers
[issues-shield]: https://img.shields.io/github/issues/TickLabVN/TickFlow-FE?style=for-the-badge
[issues-url]: https://github.com/TickLabVN/TickFlow-FE/issues
