import Link from 'next/link';

import { Card } from '@/components/ui/card';

import { tools } from '@/constants/tools';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

const ToolsList = () => {
  return (
    <ul className="space-y-4 px-4 md:px-20 lg:px-32">
      {tools.map(({ id, bgColor, color, href, icon: Icon, label }) => (
        <li key={id}>
          <Link href={href}>
            <Card className="flex cursor-pointer items-center justify-between border-black/5 p-4 transition duration-200 hover:shadow-md">
              <div className="flex items-center gap-x-4">
                <figure
                  className={cn('w-fit rounded-md p-2')}
                  style={{ backgroundColor: bgColor }}
                >
                  <Icon className="h-8 w-8" style={{ color }} />
                </figure>
                <p className="font-semibold">{label}</p>
              </div>
              <ArrowRight className="h-5 w-5" />
            </Card>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ToolsList;
