interface InfoCardProps {
  title: string;
  value: string | number;
  href?: string;
  className?: string;
}

export function InfoCard({
  title,
  value,
  href,
  className = ''
}: InfoCardProps) {
  const content = href ? (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className='truncate text-wrap break-words text-blue-600 hover:underline'
    >
      {value}
    </a>
  ) : (
    <p className='text-sm'>{value}</p>
  );

  return (
    <div className={`rounded-md border p-3 ${className}`}>
      <h4 className='mb-1 text-sm font-medium'>{title}</h4>
      {content}
    </div>
  );
}

