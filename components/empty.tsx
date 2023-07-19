import Image from 'next/image';

interface EmptyProps {
  label: string;
}

const Empty = ({ label }: EmptyProps) => {
  return (
    <div className="flex h-full flex-col items-center justify-center p-20">
      <figure className="relative h-72 w-72">
        <Image fill alt="Empty" src="/empty.png" />
      </figure>
      <p className="text-center text-sm text-muted-foreground">{label}</p>
    </div>
  );
};

export default Empty;
