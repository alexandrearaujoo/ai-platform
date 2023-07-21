import { NextResponse } from 'next/server';

import { checkApiLimit, increaseApiLimit } from '@/lib/apiLimit';
import { config, openai } from '@/lib/openai';
import { auth } from '@clerk/nextjs';

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const { messages } = await req.json();

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    if (!config.apiKey) {
      return new NextResponse('OpenAI API Key not configured', { status: 500 });
    }

    if (!messages) {
      return new NextResponse('Missing prompt', { status: 400 });
    }

    const freeTrial = await checkApiLimit();

    if (!freeTrial) {
      return new NextResponse('Free trial has expired.', { status: 403 });
    }

    const {
      data: { choices }
    } = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages
    });

    await increaseApiLimit();

    return NextResponse.json(choices[0].message);
  } catch (error) {
    console.log('[CONVERSATION_ERROR]', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
