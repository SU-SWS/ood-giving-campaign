import { revalidatePath } from 'next/cache';

export const dynamic = 'force-dynamic';

// NextJs app directory revalidate api route
export async function GET() {
  const data = revalidatePath('/');
  return Response.json('ok');
}