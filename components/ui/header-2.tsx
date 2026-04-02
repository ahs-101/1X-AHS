'use client';
import React from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/components/ui/use-scroll';

export function Header() {
  const [open, setOpen] = React.useState(false);
  const scrolled = useScroll(10);

  const links = [
    { label: 'Neo', href: '#hero' },
    { label: 'AI', href: '#features' },
    { label: 'Stories', href: '#scroll-areas' },
    { label: 'Careers', href: 'https://www.1x.tech/careers' },
    { label: 'About', href: 'https://www.1x.tech/about' },
    { label: 'Shop', href: 'https://1x.shop' },
  ];

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 mx-auto w-full max-w-5xl border-b border-transparent md:rounded-md md:border md:transition-all md:ease-out',
        {
          'bg-black/95 supports-[backdrop-filter]:bg-black/60 border-white/10 backdrop-blur-lg md:top-4 md:max-w-4xl md:shadow':
            scrolled && !open,
          'bg-black/90': open,
        },
      )}
    >
      <nav
        className={cn(
          'flex h-14 w-full items-center justify-between px-4 md:h-12 md:transition-all md:ease-out',
          { 'md:px-2': scrolled },
        )}
      >
        <a href="#hero" className="flex items-center">
          <span className="text-white font-bold text-xl tracking-tight select-none">1X</span>
        </a>
        <div className="hidden items-center gap-2 md:flex">
          {links.map((link, i) => (
            <a key={i} className={buttonVariants({ variant: 'ghost' })} href={link.href}>
              {link.label}
            </a>
          ))}
          <Button
            asChild
            className="bg-white text-black hover:bg-white/90 rounded-full px-5 text-sm font-medium"
          >
            <a href="#pricing">Order</a>
          </Button>
        </div>
        <Button
          size="icon"
          variant="outline"
          onClick={() => setOpen(!open)}
          className="md:hidden border-white/20 text-white"
        >
          <MenuToggleIcon open={open} className="size-5" duration={300} />
        </Button>
      </nav>

      <div
        className={cn(
          'bg-black/90 fixed top-14 right-0 bottom-0 left-0 z-50 flex flex-col overflow-hidden border-y border-white/10 md:hidden',
          open ? 'block' : 'hidden',
        )}
      >
        <div
          data-slot={open ? 'open' : 'closed'}
          className={cn(
            'data-[slot=open]:animate-in data-[slot=open]:zoom-in-95 data-[slot=closed]:animate-out data-[slot=closed]:zoom-out-95 ease-out',
            'flex h-full w-full flex-col justify-between gap-y-2 p-4',
          )}
        >
          <div className="grid gap-y-2">
            {links.map((link) => (
              <a
                key={link.label}
                className={buttonVariants({ variant: 'ghost', className: 'justify-start text-white' })}
                href={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <Button asChild className="w-full bg-white text-black hover:bg-white/90">
              <a href="#pricing">Order — $200 Deposit</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

