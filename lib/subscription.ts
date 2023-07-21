import { prisma } from './prisma';

import { auth } from '@clerk/nextjs';

const DAY_IN_MS = 86_400_000;

export const checkSubscription = async () => {
  const { userId } = auth();

  if (!userId) return false;

  const userSubscription = await prisma.userSubscription.findUnique({
    where: { userId },
    select: {
      stripeSubscriptionId: true,
      stripeCurrentPeriodEnd: true,
      stripeCustomerId: true,
      stripePriceId: true
    }
  });

  if (!userSubscription) return false;

  const isValid =
    userSubscription.stripePriceId &&
    (userSubscription.stripeCurrentPeriodEnd?.getTime() as number) + DAY_IN_MS >
      Date.now();

  return !!isValid;
};
