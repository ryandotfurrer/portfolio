import { useState } from 'preact/hooks';

interface NavProps {
  links: Array<{ href: string; text: string }>;
}

export default function Navigation({ links }: NavProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav class="items-between relative flex justify-between">
      <a
        href="/"
        className="text-foreground font-serif text-2xl font-semibold"
      >{`<RF />`}</a>
      {/* Menu Button */}
      <button
        id="menu-button"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        class="cursor-pointer text-sm md:hidden"
      >
        <p class="">
          <span class="sr-only">Open main menu</span>menu
        </p>
      </button>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        class={`border-border bg-background absolute top-full right-0 left-0 border-b text-right transition-all ease-in-out md:hidden ${
          isOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div class="space-y-4 py-8">
          {links.map((link) => (
            <a key={link.href} href={link.href} class="block">
              {link.text.toLowerCase()}
            </a>
          ))}
          <a
            href="/contact"
            class="ring-offset-background focus-visible:ring-ring bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-10 cursor-pointer items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-semibold whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
          >
            contact
          </a>
        </div>
      </div>

      {/* Desktop Menu */}
      <div class="hidden text-sm md:flex md:items-center md:space-x-4">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            class="hover:text-primary text-sm transition-colors"
          >
            {link.text.toLowerCase()}
          </a>
        ))}
      </div>
      <a
        href="/contact"
        class="ring-offset-background focus-visible:ring-ring bg-primary text-primary-foreground hover:bg-primary/90 md:self-en hidden h-9 cursor-pointer items-center justify-center gap-2 rounded-md px-3 py-2 text-sm font-semibold whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:inline-flex [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
      >
        contact
      </a>
    </nav>
  );
}
