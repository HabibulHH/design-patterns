# My TypeScript Project

This project is a TypeScript application that demonstrates the use of a simple logging mechanism.

## Project Structure

```
my-typescript-project
├── src
│   ├── app.ts          # Entry point of the application
│   └── types
│       └── index.ts    # Custom types and interfaces
├── package.json         # npm configuration file
├── tsconfig.json        # TypeScript configuration file
└── README.md            # Project documentation
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd my-typescript-project
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Compile the TypeScript files:
   ```
   npx tsc
   ```

5. Run the application:
   ```
   node dist/app.js
   ```

## Usage

The application logs messages using the `Logger` class defined in the project. You can modify the `app.ts` file to log different messages as needed.