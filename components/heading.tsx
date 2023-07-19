import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface HeadingProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor?: string;
  bgColor?: string;
}

const Heading = ({
  title,
  description,
  icon: Icon,
  iconColor,
  bgColor
}: HeadingProps) => {
  return (
    <article className="mb-8 flex items-center gap-x-3 px-4 lg:px-8">
      <figure className={cn('w-fit rounded-md p-2', bgColor)}>
        <Icon className={cn('h-10 w-10', iconColor)} />
      </figure>
      <article>
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="text-sm text-muted-foreground">{description}</p>
      </article>
    </article>
  );
};

export default Heading;
