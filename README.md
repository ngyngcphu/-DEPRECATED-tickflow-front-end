<a name="readme-top"></a>

<!-- TABLE OF CONTENTS -->
<ol>
  <li>
    <a href="#about-the-project">About The Project</a>
    <ul>
      <li><a href="#built-with">Built with</a></li>
      <li><a href="#built-with">Deploy with</a></li>
    </ul>
  </li>
  <li>
    <a href="#getting-started">Getting Started</a>
    <ul>
      <li><a href="#prerequisites">Prerequisites</a></li>
      <li><a href="#installation-with-yarn">Installation with yarn</a></li>
      <li><a href="#installation-with-docker">Installation with docker</a></li>
      <li><a href="#project-structure">Project structure</a></li>
    </ul>
  </li>
  <li><a href="#roadmap">Roadmap</a></li>
</ol>

<!-- ABOUT THE PROJECT -->

# About The Project

## Built with

- ReactJS
- Redux-Toolkit
- TailwindCSS
- Flowbite-React
- ViteJS

## Deploy with

- Docker
- Nginx

<!-- GETTING STARTED -->

# Getting Started

## Prerequisites

- `node` v18.15.0
- `yarn` v1.22.19

or if you installed [Docker Engine](https://docs.docker.com/engine/install/):

- `docker` v23.0.1
- `docker compose` v2.16.0

**NOTE**: Fill in `.env` file (use template from `.env.example`) before installing.

## Installation with yarn

1. Install dependencies

```sh
yarn install
```

2. Start project:

```sh
yarn dev
```

## Installation with docker

1. Pull image:

```sh

```

2. Run container:

```sh

```

## Project structure

```py
📦mock-server                   # include mock-api and simple logic
┣
📦src
 ┣ 📂assets                     # All assets such as jpg, svg, icon ... goes here
 ┣ 📂components                 # Reusable components across the web page
 ┣ 📂constants                  # Contants and routes name
 ┣ 📂interfaces                 # Interfaces of class, function ...
 ┣ 📂pages                      # Screen components
 ┣ 📂services                   # Action to call api from server
 ┣ 📂states                     # Global states
 ┣ 📂types                      # Types for variables, objects ...
 ┣ 📂utils                      # connect to URL server
 ┣ 📜App.tsx                    # App component
 ┗ 📜main.tsx                   # Program entry
 ┗ 📜index.css                  # config tailwindcss
```

## Project configurations

## Roadmap

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/TickLabVN/TickFlow-FE?style=for-the-badge
[contributors-url]: https://github.com/TickLabVN/TickFlow-FE/graphs/contributors
[stars-shield]: https://img.shields.io/github/stars/TickLabVN/TickFlow-FE?style=for-the-badge
[stars-url]: https://github.com/TickLabVN/TickFlow-FE/stargazers
[issues-shield]: https://img.shields.io/github/issues/TickLabVN/TickFlow-FE?style=for-the-badge
[issues-url]: https://github.com/TickLabVN/TickFlow-FE/issues
