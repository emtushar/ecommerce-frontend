# E-Commerce React Application

A modern e-commerce application built with React, Redux Toolkit, and React Router DOM, using Vite as the build tool.

Project Live Link:
https://ecommerce-frontend-seven-phi.vercel.app/

## Technologies Used

- React 18
- Vite
- React Router DOM
- Redux Toolkit
- React Redux
- TailwindCSS

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (version 16.0 or higher)
- npm or yarn package manager

## Setup Instructions

1. Clone the repository:

```bash
git clone 'https://github.com/emtushar/ecommerce-frontend'
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

4. Build for production:

```bash
npm run build
# or
yarn build
```

# Project Structure

```
src/
├── components/           # Reusable UI components
│
│   ├── Header.jsx
│   ├──  Filter.jsx
│   ├── ProductCard.jsx
│   ├── ProductContainer.jsx
│   ├── ProductDetailCard.jsx
│   ├── ProductDetailPage.jsx
│   ├── ShoppingCart.jsx          # Shopping cart components
│   ├──CheckoutProcess.jsx
│   └── SearchPage.jsx       # Search-related components
│
├── hooks/              # Custom React hooks
│   ├── useFetchProductDetails.jsx
│   ├── useFetchProductList.jsx
│   └── useFetchSearchResults.jsx
│
├── store/             # Redux store configuration
│   ├── store.js       # Store setup and configuration
│   └── slices/        # Redux slices
│       ├── appSlice.js
│       ├── cartSlice.js
│       └── orderSlice.js
│
├── helpers/             # Helper functions and utilities
│   └── helper.js
│
├── index.css         # Global styles and theme configuration
├── App.jsx           # Root application component
└── main.jsx         # Application entry point
```

## Routing Structure

The application uses React Router DOM for navigation with the following routes:

- `/` - Home page with product listing
- `/product/:id` - Individual product details
- `/cart` - Shopping cart view
- `/checkout` - Checkout process
- `/search/:category` - Search results by category

## State Management

The application uses Redux Toolkit for state management. The store configuration can be found in `store/store.js`.

## Styling

The project uses TailwindCSS for styling. Tailwind configurations can be found in:

- `tailwind.config.js`
- `postcss.config.js`

## Upcoming Features

### 1. User Authentication

- User registration and login system
- Social media authentication integration
- Password reset functionality
- JWT token-based authentication
- Protected routes for authenticated users
- User profile management

### 2. Wishlist Products

- Add/remove products to wishlist
- Persistent wishlist across sessions
- Share wishlist with others
- Move items from wishlist to cart
- Wishlist management in user profile
- Email notifications for price changes

### 3. Admin Panel

- Dashboard with sales analytics
- Order management system
- Customer management
- Inventory tracking
- Sales reports and analytics
- User role management
- Activity logs

### 4. Product Management

- Create new products
  - Add product details
  - Upload multiple product images
  - Set pricing and inventory
  - Configure product variants
- Update existing products
  - Edit product information
  - Update stock levels
  - Modify pricing
  - Manage product categories
- Delete products
  - Soft delete functionality
  - Archive products
  - Bulk delete options
- Additional Features
  - Product categories management
  - Bulk product import/export
  - SEO optimization tools
  - Product review moderation

## Available Scripts

- `dev` - Starts the development server
- `build` - Creates a production build
- `preview` - Serves the production build locally
- `lint` - Runs ESLint for code quality checks

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details
