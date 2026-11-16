import { useState, useEffect } from 'react';
import { IMAGES, NAV_ITEMS } from '../data/catalog';
import { ArtisanImage } from './ArtisanImage';

export function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 140;
      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV_ITEMS[i].id);
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(NAV_ITEMS[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileOpen(false);
    setActiveSection(id);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface/92 backdrop-blur-md shadow-[0_16px_36px_-8px_rgba(92,44,22,0.07),0_4px_12px_-2px_rgba(92,44,22,0.04)]">
      <div className="h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between gap-4">
        {/* Brand */}
        <a
          href="#home"
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 text-left shrink-0 focus-visible:outline-2 focus-visible:outline-primary rounded"
        >
          <ArtisanImage
            src={IMAGES.logo}
            alt="Hương Quế Xứ Lạng Logo"
            className="h-12 w-12 rounded-full object-contain shrink-0"
          />
          <span className="font-serif text-[20px] font-semibold text-primary leading-[1.08] tracking-tight whitespace-nowrap">
            Hương Quế
            <br />
            Xứ Lạng
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-3.5" aria-label="Điều hướng chính">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`text-[13.5px] whitespace-nowrap shrink-0 py-1.5 transition-colors border-b-2 ${
                  isActive
                    ? 'text-primary font-semibold border-primary-container'
                    : 'text-on-surface-variant font-medium border-transparent hover:text-primary'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2.5 shrink-0">
          <a
            href="tel:0968614056"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-surface-container-high text-primary hover:bg-surface-variant transition-colors whitespace-nowrap shrink-0"
          >
            <span className="material-symbols-outlined text-[18px] text-secondary">phone_in_talk</span>
            <span className="text-[12.5px] font-semibold tabular-nums">0968 614 056</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Đóng menu' : 'Mở menu'}
            aria-expanded={mobileOpen}
            className="xl:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg bg-surface-container text-primary hover:bg-surface-container-high transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[22px]">
              {mobileOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Drawer Menu */}
      {mobileOpen && (
        <div className="xl:hidden bg-surface-container-low border-t border-outline-variant/40 px-4 py-4 shadow-lg">
          <nav className="grid grid-cols-2 sm:grid-cols-3 gap-2" aria-label="Điều hướng di động">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'bg-primary-fixed/60 text-primary font-semibold'
                    : 'text-on-surface-variant hover:bg-surface-container'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
