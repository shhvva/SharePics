// app/api/posts/route.js
import { NextResponse } from "next/server";
import prisma from "../../lib/prisma";

export async function GET(request) {
  try {
    const post = await prisma.post.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.error("Failed to create post:", error);
    return NextResponse.json(
      { message: "Failed to create post", error: error.message },
      { status: 500 }
    );
  }
}
