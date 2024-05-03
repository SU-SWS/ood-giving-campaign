import { revalidatePath } from 'next/cache';
import { NextRequest } from 'next/server';

/**
 * Only use this if you set the dynamicParams to true on the page.tsx file.
 *
 * If you don't set dynamicParams to true, and you invalidate the content
 * by hitting this endpoint, you will cause the 404 page to show up for
 * every route. If the page gets invalidated from cache, has a lifetime of
 * infinity, and the dynamicParams is set to false, the page will never
 * be revalidated/rendered by the on-demand builder.
 */
export async function GET(request: NextRequest) {
  const key = request.nextUrl.searchParams.get('key');

  if (key !== process.env.STORYBLOK_ACCESS_TOKEN) {
    return new Response('Unauthorized', { status: 401 });
  }

  revalidatePath('/', 'layout');
  return Response.json({ revalidated: true, now: Date.now() });
}
