import { prisma } from './prisma';

import { MAX_API_FREE_COUNT } from '@/constants/apiLimit';
import { auth } from '@clerk/nextjs';

export const increaseApiLimit = async () => {
  const { userId } = auth();

  if (!userId) {
    return;
  }

  const userApiLimit = await prisma.userApiLimit.findUnique({
    where: { userId }
  });

  if (userApiLimit) {
    await prisma.userApiLimit.update({
      where: { userId },
      data: {
        userId,
        count: userApiLimit.count + 1
      }
    });
    return;
  }

  await prisma.userApiLimit.create({
    data: {
      userId,
      count: 1
    }
  });
};

export const checkApiLimit = async () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  const userApiLimit = await prisma.userApiLimit.findUnique({
    where: { userId }
  });

  if (!userApiLimit || userApiLimit.count < MAX_API_FREE_COUNT) {
    return true;
  }

  return false;
};

export const getApiLimitCount = async () => {
  const { userId } = auth();

  if (!userId) return 0;

  const userApiLimit = await prisma.userApiLimit.findUnique({
    where: { userId }
  });

  if (!userApiLimit) return 0;

  return userApiLimit.count;
};
