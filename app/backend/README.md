# Sai Swami Computers Backend

This is the production-ready backend for **Sai Swami Computers**, built with Node.js, Express, MongoDB Atlas, and Cloudinary. 
It strictly follows MVC architecture and is designed for seamless deployment on Render.

## Features
- JWT Authentication (Admin only, stored in MongoDB)
- CRUD operations for Products and Services
- Manage Company Information
- Image Uploads strictly handled via Cloudinary
- High Security (Helmet, CORS, Express Rate Limit, bcrypt)
- Global Error Handling
- Designed for easy integration with Vercel frontend

## Folder Structure

```
backend/
├── config/
│     ├── db.js
│     └── cloudinary.js
├── controllers/
│     ├── authController.js
│     ├── companyController.js
│     ├── productController.js
│     └── serviceController.js
├── middleware/
│     ├── authMiddleware.js
│     ├── errorMiddleware.js
│     └── uploadMiddleware.js
├── models/
│     ├── Admin.js
│     ├── Company.js
│     ├── Product.js
│     └── Service.js
├── routes/
│     ├── authRoutes.js
│     ├── companyRoutes.js
│     ├── productRoutes.js
│     └── serviceRoutes.js
├── utils/
├── uploads/
├── app.js
├── server.js
├── package.json
├── .env.example
└── README.md
```

## Environment Variables

Create a `.env` file in the root directory based on `.env.example`:

```env
PORT=5000
NODE_ENV=development
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRE=7d
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
FRONTEND_URL=https://your-vercel-app.vercel.app
```

## Setup & Installation

1. Install Dependencies:
   ```bash
   npm install
   ```

2. Run the application:
   ```bash
   npm run dev    # For development
   npm start      # For production (used by Render)
   ```

*Note: On first startup, if no Admin exists in the database, a default admin (`admin` / `admin123`) is automatically created!*

## API Endpoints

### Health Checks
- `GET /` - Returns success message
- `GET /health` - Returns `{ "status": "OK" }`

### Authentication (Admin)
- `POST /admin/login` - Login admin, returns JWT token

### Products
- `GET /products` (Public) - Get all products
- `GET /products/:id` (Public) - Get single product
- `POST /products` (Protected) - Add new product (Supports `image` upload)
- `PUT /products/:id` (Protected) - Update product
- `DELETE /products/:id` (Protected) - Delete product

### Services
- `GET /services` (Public) - Get all services
- `POST /services` (Protected) - Add new service (Supports `image` upload)
- `PUT /services/:id` (Protected) - Update service
- `DELETE /services/:id` (Protected) - Delete service

### Company
- `GET /company` (Public) - Get company details
- `PUT /company` (Protected) - Update company details (Supports `logo` and `banner` updates via `image` field and `uploadType` in body)

## Authentication (JWT)
Protected routes expect the JWT token in the `Authorization` header:
`Authorization: Bearer <your_token_here>`

## Deployment Instructions (Render)
1. Push this backend repository to GitHub.
2. In Render, create a new "Web Service" and connect your GitHub repo.
3. Use the following settings:
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
4. Add all the Environment Variables from your `.env` file into the Render dashboard.
5. Deploy.

Once deployed, copy your Render URL and update your frontend to fetch from this API. Later, when you purchase your GoDaddy domain, just update the DNS settings; no code changes will be required.
