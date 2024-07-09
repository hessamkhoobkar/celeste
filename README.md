
# Stride

Take control of your finances with **Celeste**, the all-in-one budget and expense tracking application designed to simplify your money management. Whether you're saving for a dream vacation, paying off debt, or just want to stay on top of your daily spending, Celeste offers a suite of powerful tools to help you achieve your financial goals.

## Key Features: 

- **Comprehensive Budgeting**: Set up monthly budgets tailored to your needs. Track your spending against these budgets in real time to ensure you stay within your limits.
- **Expense Tracking**: Log your expenses effortlessly with our intuitive interface. Categorize your spending and add notes for a detailed financial record.
- **Customizable Categories**: Organize your finances your way with customizable categories. Create and edit categories to suit your unique spending habits and preferences.
- **User-Friendly Interface**: Celeste is designed to be easy to use, with a clean and intuitive interface that makes managing your finances a breeze.

## Technologies Used

- **Frontend**: [Next.js](https://nuxtjs.org/) - A progressive framework based on React.js.
- **Backend**: [Supabase](https://supabase.io/) - A powerful open-source Firebase alternative.
- **Styling**: 
  - [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework.
  - [Radix](https://www.radix-ui.com/) - Primitives for building high-quality, accessible design systems and web apps.
  - [shadcn](https://shadcn.dev/) - A component library for Tailwind CSS.
- **Form Validation**: [Zod](https://yep.dev/) - A lightweight validation library.

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed
- Supabase account and project set up

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/hessamkhoobkar/celeste
    ```

2. Navigate to the project directory:

    ```sh
    cd stride
    ```

3. Install dependencies:

    ```sh
    pnpm install
    ```

4. Set up environment variables:

    Create a `.env` file in the root directory and add your Supabase credentials:

    ```sh
    SUPABASE_URL=your-supabase-url
    SUPABASE_KEY=your-supabase-key
    ```

### Running the Application

1. Start the development server:

    ```sh
    pnpm dev
    ```

2. Open your browser and navigate to:

    ```
    http://localhost:3000
    ```

### Building for Production

1. Build the application:

    ```sh
    pnpm build
    ```

2. Start the production server:

    ```sh
    pnpm preview
    ```

## Contributing

Contributions are welcome! Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Thank you for using Stride! We hope it enhances your team's productivity and collaboration.
