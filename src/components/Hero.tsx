interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  cta?: {
    text: string;
    href: string;
  };
}

export default function Hero({
  title,
  subtitle,
  backgroundImage,
  cta,
}: HeroProps) {
  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-center bg-luxury-cream overflow-hidden"
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : {}
      }
    >
      {/* Overlay for text readability */}
      {backgroundImage && (
        <div className="absolute inset-0 bg-black/20" />
      )}

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
        <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl text-luxury-dark-text mb-6 leading-tight">
          {title}
        </h1>

        {subtitle && (
          <p className="font-inter text-lg md:text-xl text-luxury-light-text mb-12 leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}

        {cta && (
          <a
            href={cta.href}
            className="inline-block px-12 py-4 bg-luxury-gold text-white font-inter font-medium hover:bg-luxury-gold-dark transition-colors duration-300"
          >
            {cta.text}
          </a>
        )}
      </div>
    </section>
  );
}
