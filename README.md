![thumbnail](https://github.com/user-attachments/assets/32ca8253-0623-4d7d-a475-41dff7fe3bf9)

# SharePics

SharePics is a modern web application that allows users to share pictures, create posts, and interact with other users' content. Built with Next.js and featuring robust authentication through Kinde.

## Features

- User authentication with Kinde
- Image sharing capabilities
- Create and delete posts
- Responsive design with Tailwind CSS
- PostgreSQL database with Prisma ORM
- Containerized database using Docker

## Video

[![Watch the video](![thumbnail](https://github.com/user-attachments/assets/b8fc651a-f5de-4351-a634-0537a5f2d59b))](https://youtu.be/bPl-KpdwBPE)

## Tech Stack

- **Web Framework**: Next.js
- **Authentication**: Kinde
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Styling**: Tailwind CSS
- **HTTP Client**: Axios
- **Containerization**: Docker

## Prerequisites

Before running this project, make sure you have:

- Node.js (v18 or higher)
- Docker Desktop
- A Kinde account and API credentials

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/sharepics.git
cd sharepics
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory with the following variables:
```plaintext
DATABASE_URL="postgresql://username:password@localhost:5432/sharepics"
KINDE_CLIENT_ID=your_kinde_client_id
KINDE_CLIENT_SECRET=your_kinde_client_secret
KINDE_ISSUER_URL=your_kinde_issuer_url
```

4. Start the PostgreSQL database using Docker:
```bash
docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -d postgres

```

5. Run Prisma migrations:
```bash
npx prisma migrate dev
```

6. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Acknowledgments

- Next.js documentation
- Kinde Authentication
- Prisma documentation
- Tailwind CSS documentation
