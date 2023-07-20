import { NextResponse } from 'next/server';

import { config, openai } from '@/lib/openai';
import { auth } from '@clerk/nextjs';

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const { prompt, amount = 1, resolution = '512x512' } = await req.json();

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    if (!config.apiKey) {
      return new NextResponse('OpenAI API Key not configured', { status: 500 });
    }

    if (!prompt || !amount || !resolution) {
      return new NextResponse('Missing prompt', { status: 400 });
    }

    const {
      data: { data }
    } = await openai.createImage({
      prompt,
      n: parseInt(amount, 10),
      size: resolution
    });

    return NextResponse.json(data);
  } catch (error) {
    console.log('[IMAGE_ERROR]', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
