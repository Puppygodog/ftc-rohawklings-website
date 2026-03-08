import { Instagram, Youtube, Mail } from "lucide-react";

interface SocialLinksProps {
  variant?: 'default' | 'footer';
  className?: string;
}

const SocialLinks = ({ variant = 'default', className = '' }: SocialLinksProps) => {
  const links = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/rohawklings/',
      icon: Instagram,
      color: 'hover:text-pink-500',
      bgColor: 'hover:bg-pink-500/10',
    },
    {
      name: 'YouTube',
      url: 'https://m.youtube.com/@rohawklings/',
      icon: Youtube,
      color: 'hover:text-red-500',
      bgColor: 'hover:bg-red-500/10',
    },
    {
      name: 'Email',
      url: 'mailto:contact@ftchawks.org',
      icon: Mail,
      color: 'hover:text-primary',
      bgColor: 'hover:bg-primary/10',
    },
  ];

  if (variant === 'footer') {
    return (
      <div className={`flex items-center gap-4 ${className}`}>
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.name}
              href={link.url}
              target={link.url.startsWith('http') ? '_blank' : undefined}
              rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="h-10 w-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-gold transition-colors group"
              aria-label={link.name}
            >
              <Icon size={20} className="text-primary-foreground group-hover:text-foreground transition-colors" />
            </a>
          );
        })}
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.name}
            href={link.url}
            target={link.url.startsWith('http') ? '_blank' : undefined}
            rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
            className={`h-11 w-11 rounded-xl border border-border/60 flex items-center justify-center transition-all duration-300 ${link.bgColor} ${link.color} bg-card hover:shadow-card`}
            aria-label={link.name}
          >
            <Icon size={20} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
