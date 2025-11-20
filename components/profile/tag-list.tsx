interface TagListProps {
  title: string;
  items: string[];
  className?: string;
}

export function TagList({ title, items, className = '' }: TagListProps) {
  if (!items || items.length === 0) return null;

  return (
    <div className={`space-y-2 ${className}`}>
      <h2 className='mb-2 font-medium'>{title}</h2>
      <div className='flex flex-wrap gap-2'>
        {items.map((item: string, index: number) => (
          <div
            key={`${title}-${index}`}
            className='rounded-2xl border border-[#E3E3E3] bg-white px-4 py-2 text-sm text-[#070D27]'
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

