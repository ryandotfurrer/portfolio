import { useState } from 'preact/hooks';

interface NavProps {
  // Add any props you need to pass to the navigation
  links: Array<{ href: string; text: string }>;
}

export default function Navigation({ links }: NavProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav class="relative">
      {/* Menu Button */}
      <button
        id="menu-button"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        class="inline-flex items-center justify-center rounded-md p-2 md:hidden"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class={`h-6 w-6 ${isOpen ? 'hidden' : 'block'}`}
          stroke="currentColor"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <svg
          class={`h-6 w-6 ${isOpen ? 'block' : 'hidden'}`}
          stroke="currentColor"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        class={`bg-background/95 border-border absolute top-full right-0 left-0 border-b backdrop-blur-sm transition-all duration-200 ease-in-out md:hidden ${
          isOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div class="space-y-1 px-4 pt-2 pb-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              class="hover:bg-accent hover:text-accent-foreground block rounded-md px-3 py-2 text-base transition-colors"
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>

      {/* Desktop Menu */}
      <div class="hidden md:flex md:space-x-4">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            class="hover:text-primary rounded-md px-3 py-2 text-base transition-colors"
          >
            {link.text}
          </a>
        ))}
      </div>
    </nav>
  );
}
