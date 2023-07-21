import { NextResponse } from 'next/server';

import { checkApiLimit, increaseApiLimit } from '@/lib/apiLimit';
import { replicate } from '@/lib/replicate';
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

    const freeTrial = await checkApiLimit();

    if (!freeTrial) {
      return new NextResponse('Free trial has expired.', { status: 403 });
    }

    const res = await replicate.run(
      'anotherjesse/zeroscope-v2-xl:9f747673945c62801b13b84701c783929c0ee784e4748ec062204894dda1a351',
      {
        input: {
          prompt
        }
      }
    );

    await increaseApiLimit();

    return NextResponse.json(res);
  } catch (error) {
    console.log('[VIDEO_ERROR]', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
