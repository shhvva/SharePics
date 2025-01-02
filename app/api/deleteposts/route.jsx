// app/api/posts/route.js
import { NextResponse } from "next/server";
import prisma from "../../lib/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function POST(request) {
  try {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    
    if (!user) {
      return NextResponse.json(
        { message: "User not signed in" },
        { status: 401 }
      );
    }

    const { id } = await request.json();

    // Validate input
    if (!id || !user.id) {
      return NextResponse.json(
        { message: "Post ID is required" },
        { status: 400 }
      );
    }

    // Delete post with user association
    const post = await prisma.post.delete({
      where: {
        id: id,
        userId: user.id,
      },
    });
    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    console.error("Failed to create post:", error);
    return NextResponse.json(
      { message: "Failed to create post", error: error.message },
      { status: 500 }
    );
  }
}
