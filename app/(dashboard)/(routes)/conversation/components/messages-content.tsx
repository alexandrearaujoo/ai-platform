'use client';

import BotAvatar from '@/components/bot-avatar';
import Empty from '@/components/empty';
import Loader from '@/components/loader';
import UserAvatar from '@/components/user-avatar';

import { cn } from '@/lib/utils';
import { messageStore } from '@/stores/messageStore';

const MessagesContent = () => {
  const messages = messageStore((state) => state.messages);
  const isSubmitting = messageStore((state) => state.isLoading);

  return (
    <>
      {isSubmitting && (
        <div className="flex w-full items-center justify-center rounded-lg bg-muted p-8">
          <Loader />
        </div>
      )}
      {messages.length === 0 && !isSubmitting && (
        <Empty label="Nenhuma conversa iniciada." />
      )}
      <ul className="flex flex-col-reverse gap-y-4">
        {messages.map((message) => (
          <li
            key={message.content}
            className={cn(
              'flex w-full items-start gap-x-8 rounded-lg p-8',
              message.role === 'user'
                ? 'border border-black/10 bg-white'
                : 'bg-muted'
            )}
          >
            {message.role === 'user' ? <UserAvatar /> : <BotAvatar />}
            <p className="text-sm">{message.content}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MessagesContent;
