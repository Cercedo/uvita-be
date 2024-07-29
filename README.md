# ☘️ uvita-be

Backend application designed to streamline and manage all aspects of a clinic's operational processes.

## 👀 About

### 🎯 Features

- **Development tools**: This application comes with pre-configured development tools  to help you write clean and maintainable code. These tools include Typescript, ESLint, Prettier, Nodemon, Husky, Lint-staged, Commitlint and Jest.

## 🚀 Getting Started

### ❗ Prerequisites

- [Node.js v20.15.1](https://nodejs.org/en)
- [nvm (optional)](https://github.com/nvm-sh/nvm)

### ⚙️ Installation

1. Clone the repository

    ```bash
    git clone https://github.com/Cercedo/uvita-be.git
    ```

2. Install the dependencies.

    ```bash
    npm install
    ```

3. Create and configure the `.env` file based on `.env.example`.

    ```bash
    cp .env.example .env
    ```

4. Set up the database.
   1. Create the DB using Docker container.

       ```bash
       make docker-up-dev-db
       ```

   2. Run the migrations.

       ```bash
       npm run migrate -- --name init
       ```

5. Start the development server.

    ```bash
    npm run dev
    ```

6. Navigate to <http://localhost:3000/api> in your browser.

Now, you're ready to start building your application!

## ⚠️ Licence

[MIT](LICENSE)

## 💎 Acknowledgments

This application was duplicated from [root-node-template](https://github.com/Cercedo/root-node-template).

Check out these resources to learn more about writing clean code:

- [Naming cheatsheet](https://github.com/kettanaito/naming-cheatsheet)
- [clean-code-javascript](https://github.com/ryanmcdermott/clean-code-javascript)
- [Hexagonal Architecture, there are always two sides to every story](https://medium.com/ssense-tech/hexagonal-architecture-there-are-always-two-sides-to-every-story-bc0780ed7d9c)
