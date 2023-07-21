'use client';

import ReactMarkdown from 'react-markdown';

import BotAvatar from '@/components/bot-avatar';
import Empty from '@/components/empty';
import Loader from '@/components/loader';
import UserAvatar from '@/components/user-avatar';

import { cn } from '@/lib/utils';
import { codeStore } from '@/stores/codeStore';

const CodeContent = () => {
  const messages = codeStore((state) => state.messages);
  const isSubmitting = codeStore((state) => state.isLoading);

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
            <ReactMarkdown
              className="overflow-hidden text-sm leading-7"
              components={{
                pre: ({ node, ...props }) => (
                  <div className="my-2 w-full overflow-auto rounded-lg bg-black/10 p-2">
                    <pre {...props} />
                  </div>
                ),
                code: ({ node, ...props }) => (
                  <code className="rounded-lg bg-black/10 p-1" {...props} />
                )
              }}
            >
              {message.content || ''}
            </ReactMarkdown>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CodeContent;
