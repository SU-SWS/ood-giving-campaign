import { revalidatePath } from 'next/cache';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const key = request.nextUrl.searchParams.get('key');

  if (key !== process.env.STORYBLOK_ACCESS_TOKEN) {
    return new Response('Unauthorized', { status: 401 });
  }

  revalidatePath('/', 'layout');
  return Response.json({ revalidated: true, now: Date.now() });
}
