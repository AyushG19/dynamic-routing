import { Link } from 'react-router-dom';
import { CatalogItem } from '../types';
import { ArrowRight } from 'lucide-react';

interface ItemCardProps {
  item: CatalogItem;
}

export function ItemCard({ item }: ItemCardProps) {
  return (
    <Link 
      to={`/item/${item.id || encodeURIComponent(item.itemname)}`} 
      className="group relative flex flex-col bg-white rounded-[1.5rem] overflow-hidden border border-zinc-200/60 shadow-sm hover:shadow-2xl hover:shadow-zinc-200/50 hover:-translate-y-1.5 transition-all duration-500 will-change-transform"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100">
        <img 
          src={item.image} 
          alt={item.itemname}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full text-zinc-900 shadow-sm">
          {item.category}
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="font-display text-2xl font-bold text-zinc-900 mb-5 tracking-tight line-clamp-1">
          {item.itemname}
        </h3>
        
        <div className="flex-grow">
          <ul className="space-y-3 mb-6">
            {item.itemprops.slice(0, 2).map((prop, idx) => (
              <li key={idx} className="text-sm flex justify-between items-end border-b border-zinc-100 pb-2">
                <span className="text-zinc-500 font-medium">{prop.label || (prop as any).name}</span>
                <span className="font-semibold text-zinc-900 text-right truncate max-w-[60%]">{prop.value}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mt-auto flex items-center justify-between text-zinc-900 font-semibold group-hover:text-blue-600 transition-colors">
          <span className="font-display tracking-wide uppercase text-xs">View specifics</span>
          <div className="bg-zinc-50 group-hover:bg-blue-50 p-2 rounded-full transition-colors border border-zinc-200/40">
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:-rotate-45" />
          </div>
        </div>
      </div>
    </Link>
  );
}
