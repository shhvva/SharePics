 * # SharePics Project Documentation
 * 
 * This documentation provides a comprehensive guide to integrating Prisma into your project to fetch and display posts from the database. It includes steps for setting up authentication, fetching posts, and rendering them dynamically.
 * 
 * ## Prerequisites
 * 
 * - Node.js installed on your machine
 * - A PostgreSQL database
 * - Prisma CLI installed (`npm install @prisma/cli`)
 * - Next.js project setup
 * 
 * ## Steps to Implement
 * 
 * ### 1. Separate Authentication Logic
 * 
 * Move the authentication check to a utility function or middleware for better reusability.
 * 
 * - Create `auth.js` to handle authentication checks.
 * 
 * ### 2. Fetch Posts with Prisma
 * 
 * Use Prisma to fetch posts for the authenticated user in the `getServerSideProps` function.
 * 
 * - Modify the `Profile` component to fetch and display posts.
 * 
 * ### 3. Create API Routes for Posts
 * 
 * Add API endpoints to fetch and delete posts using Prisma.
 * 
 * - Create `pages/api/posts.js` to handle fetching posts.
 * - Create `pages/api/posts/[id].js` to handle deleting posts.
 * 
 * ### 4. Set Up Prisma Client
 * 
 * Ensure `lib/prisma.js` exists to initialize Prisma.
 * 
 * - Create `lib/prisma.js` to set up the Prisma client.
 * 
 * ### 5. Database and `.env`
 * 
 * Make sure your `.env` file has the database URL and run migrations.
 * 
 * - Add `DATABASE_URL` to your `.env` file.
 * - Run `npx prisma migrate dev` to apply migrations.
 * 
 * ## How to Run
 * 
 * 1. Clone the repository.
 * 2. Install dependencies using `npm install`.
 * 3. Set up your `.env` file with the correct `DATABASE_URL`.
 * 4. Run database migrations using `npx prisma migrate dev`.
 * 5. Start the development server using `npm run dev`.
 * 
 * ## Conclusion
 * 
 * This setup integrates Prisma seamlessly, fetching posts for the authenticated user and displaying them dynamically. If you encounter any issues or have questions, feel free to raise them in the project's issue tracker.
 * 
 * ## Issues and Contributions
 * 
 * If you find any mistakes or have suggestions for improvements, please raise an issue or submit a pull request. Contributions are welcome!
To improve your code by integrating Prisma and displaying posts from the database, you can take the following steps. This includes creating a separate utility for authentication, fetching posts with Prisma, and rendering them dynamically. Here’s how you can do it:
