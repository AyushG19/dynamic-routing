import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Layers } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col selection:bg-zinc-900 selection:text-white">
      <header className="sticky top-0 z-50 w-full border-b border-zinc-200/60 bg-white/80 backdrop-blur-xl transition-all h-20 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-zinc-900 p-2 rounded-xl text-white group-hover:scale-105 group-hover:rotate-3 transition-transform duration-300 shadow-sm">
              <Layers size={22} strokeWidth={2.5} />
            </div>
            <span className="font-display font-bold text-xl tracking-wide text-zinc-900">
              Dynamic<span className="text-zinc-400">Catalog</span>
            </span>
          </Link>
        </div>
      </header>
      <main className="flex-grow w-full">
        {children}
      </main>
      <footer className="bg-white border-t border-zinc-200/60 py-10 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Layers size={20} className="text-zinc-300" />
            <span className="font-display font-bold text-lg text-zinc-400">DynamicCatalog</span>
          </div>
          <div className="text-zinc-400 text-sm font-medium">
            &copy; {new Date().getFullYear()} Crafted with intention.
          </div>
        </div>
      </footer>
    </div>
  );
}
