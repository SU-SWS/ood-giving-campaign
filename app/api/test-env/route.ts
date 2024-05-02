import * as dotenv from 'dotenv';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  console.log('Next Token:', process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN);
  dotenv.config({ path: 'vault.env' });
  console.log('Next Token AFTER:', process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN);
  return NextResponse.json({ message: 'Hello, World!' });
}
