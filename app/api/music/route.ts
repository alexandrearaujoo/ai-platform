import { NextResponse } from 'next/server';

import { checkApiLimit, increaseApiLimit } from '@/lib/apiLimit';
import { replicate } from '@/lib/replicate';
import { checkSubscription } from '@/lib/subscription';
import { auth } from '@clerk/nextjs';
import console from 'console';

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const { prompt } = await req.json();

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    if (!prompt) {
      return new NextResponse('Missing prompt', { status: 400 });
    }

    const [freeTrial, isPro] = await Promise.all([
      checkApiLimit(),
      checkSubscription()
    ]);

    if (!freeTrial && !isPro) {
      return new NextResponse('Free trial has expired.', { status: 403 });
    }

    const res = await replicate.run(
      'riffusion/riffusion:8cf61ea6c56afd61d8f5b9ffd14d7c216c0a93844ce2d82ac1c9ecc9c7f24e05',
      {
        input: {
          prompt_a: prompt
        }
      }
    );

    if (!isPro) await increaseApiLimit();

    return NextResponse.json(res);
  } catch (error) {
    console.log('[MUSIC_ERROR]', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
