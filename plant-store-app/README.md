# Online Plant Store Shopping Cart Application

## Overview
This project is an online plant store shopping cart application built with React and TypeScript. It allows users to browse a variety of plants, add them to their shopping cart, and manage their cart items.

## Features
- **Landing Page**: A welcoming entry point with a button to navigate to the product listing.
- **Navigation Bar**: Provides links to the home page, product listing, and shopping cart, along with a cart item count.
- **Product Listing**: Displays a list of plants with images, names, descriptions, prices, and an "Add to Cart" button.
- **Shopping Cart Functionality**: Users can view items in their cart, increase or decrease quantities, remove items, and see the total cost.

## Project Structure
```
plant-store-app
├── src
│   ├── components
│   │   ├── Cart.tsx
│   │   ├── LandingPage.tsx
│   │   ├── Navbar.tsx
│   │   └── ProductList.tsx
│   ├── pages
│   │   ├── Home.tsx
│   │   └── Products.tsx
│   ├── types
│   │   └── index.ts
│   ├── App.tsx
│   └── index.tsx
├── public
│   └── index.html
├── package.json
├── tsconfig.json
└── README.md
```

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd plant-store-app
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm start
   ```

## Technologies Used
- React
- TypeScript
- CSS (for styling)

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.