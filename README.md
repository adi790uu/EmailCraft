# EmailCraft

## Project Description

The project, titled EmailCraft, is designed to generate email templates. This is a utility that likely helps users create structured and possibly customizable email formats, which can be useful for various applications such as marketing, newsletters, or automated communication systems.

## Table of Contents

- [Installation](#installation)
- [Contributing](#contributing)

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/[your_username]/EmailCraft.git
   cd your-repo
   ```

2. **Install dependencies:**

   Make sure you have [Node.js](https://nodejs.org/) installed. Then run:

   ```bash
   npm install
   ```

3. **Environment Variables:**

   Create a `.env` file in the root directory and
   add variables :

   `NEXT_PUBLIC_API_URL=/api/generate-template`
   `NEXT_OPENAI_API_KEY=<your openai key..>`

4. **Run the application:**

   For development:

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3000`.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/YourFeature`).
6. Open a pull request.
