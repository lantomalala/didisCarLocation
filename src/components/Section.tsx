interface SectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({
  title,
  subtitle,
  children,
  className = '',
}: SectionProps) {
  return (
    <section className={`py-20 md:py-28 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl text-luxury-dark-text mb-6">
            {title}
          </h2>
          {subtitle && (
            <p className="font-inter text-lg text-luxury-light-text leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
