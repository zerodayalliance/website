import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

function isAuthorized(request: NextRequest): boolean {
  const secret =
    request.headers.get("x-revalidate-secret") ||
    request.headers.get("authorization")?.replace(/^Bearer\s+/i, "") ||
    request.nextUrl.searchParams.get("secret");

  const expectedSecret = process.env.REVALIDATE_SECRET;
  return Boolean(expectedSecret && secret === expectedSecret);
}

export async function POST(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json(
      { message: "Invalid or missing revalidation secret token" },
      { status: 401 }
    );
  }

  const searchPath = request.nextUrl.searchParams.get("path");
  const revalidatedPaths: string[] = [];

  if (searchPath) {
    revalidatePath(searchPath);
    revalidatedPaths.push(searchPath);
  } else {
    let contentType = "";
    try {
      const body = await request.json();
      contentType = body?.sys?.contentType?.sys?.id?.toLowerCase() || "";
    } catch {}

    if (contentType.includes("event")) {
      revalidatePath("/events");
      revalidatedPaths.push("/events");
    } else if (contentType.includes("team") || contentType.includes("member")) {
      revalidatePath("/teams");
      revalidatedPaths.push("/teams");
    } else {
      revalidatePath("/teams");
      revalidatePath("/events");
      revalidatedPaths.push("/teams", "/events");
    }
  }

  return NextResponse.json({
    revalidated: true,
    paths: revalidatedPaths,
    date: new Date().toISOString(),
  });
}

export async function GET(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json(
      { message: "Invalid or missing revalidation secret token" },
      { status: 401 }
    );
  }

  const path = request.nextUrl.searchParams.get("path");
  const revalidatedPaths = path ? [path] : ["/teams", "/events"];

  for (const p of revalidatedPaths) {
    revalidatePath(p);
  }

  return NextResponse.json({
    revalidated: true,
    paths: revalidatedPaths,
    date: new Date().toISOString(),
  });
}
