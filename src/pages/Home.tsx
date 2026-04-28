import { useMemo, useState } from 'react';
import { mockCatalogData } from '../data';
import { ItemCard } from '../components/ItemCard';
import { Layout } from '../components/Layout';
import { ArrowDownAZ, ArrowUpZA, ListOrdered, Grid3X3 } from 'lucide-react';

export function Home() {
  const [sortOrder, setSortOrder] = useState<'default' | 'asc' | 'desc'>('default');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Extract unique categories
  const availableCategories = useMemo(() => {
    const cats = new Set(mockCatalogData.map(item => item.category));
    return ['All', ...Array.from(cats)].sort();
  }, []);

  // Filter and sort items
  const filteredItems = useMemo(() => {
    let data = mockCatalogData;
    if (selectedCategory !== 'All') {
      data = data.filter(item => item.category === selectedCategory);
    }

    let sortedData = [...data];
    if (sortOrder === 'asc') {
      sortedData.sort((a, b) => a.itemname.localeCompare(b.itemname));
    } else if (sortOrder === 'desc') {
      sortedData.sort((a, b) => b.itemname.localeCompare(a.itemname));
    }
    return sortedData;
  }, [sortOrder, selectedCategory]);

  return (
    <Layout>
      {/* Hero Section */}
      <div className="pt-24 pb-16 px-4 text-center max-w-5xl mx-auto">
        <h1 className="font-display text-6xl md:text-8xl font-extrabold tracking-tighter text-zinc-900 mb-6 leading-tight">
          The Collection.
        </h1>
        <p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto font-medium leading-relaxed">
          A meticulously curated selection of premium vehicles, striking technology, and high-performance machines.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-12">
        
        {/* Category Tabs as Pills */}
        <div className="flex justify-center">
          <div className="inline-flex bg-white p-2 rounded-[1.25rem] overflow-x-auto hide-scrollbar border border-zinc-200/80 shadow-sm max-w-full">
            {availableCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2.5 text-sm font-bold tracking-wide rounded-xl whitespace-nowrap transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat 
                    ? 'bg-zinc-900 text-white shadow-md scale-100' 
                    : 'text-zinc-500 hover:text-zinc-800 hover:bg-zinc-100'
                }`}
              >
                {cat === 'All' ? 'Explore All' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Controls Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 py-4 bg-white rounded-2xl px-6 border border-zinc-200/80 shadow-sm">
          <div className="flex items-center gap-2 text-zinc-500 text-sm font-bold uppercase tracking-wider">
            <Grid3X3 size={16} />
            <span>Showing {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'}</span>
          </div>

          {/* Sorting Controls */}
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold text-zinc-500 uppercase tracking-wider hidden sm:block">Order</span>
            <div className="bg-zinc-100 p-1 rounded-xl flex gap-1 border border-zinc-200/50">
              <button 
                onClick={() => setSortOrder('default')}
                className={`px-3 py-1.5 cursor-pointer text-sm font-semibold rounded-lg flex items-center gap-1.5 transition-all duration-300 ${sortOrder === 'default' ? 'bg-white text-zinc-900 shadow-sm ring-1 ring-zinc-200/50' : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200/50'}`}
              >
                <ListOrdered size={16} />
                <span className="hidden sm:inline">Natural</span>
              </button>
              <button 
                onClick={() => setSortOrder('asc')}
                className={`px-3 py-1.5 cursor-pointer text-sm font-semibold rounded-lg flex items-center gap-1.5 transition-all duration-300 ${sortOrder === 'asc' ? 'bg-white text-zinc-900 shadow-sm ring-1 ring-zinc-200/50' : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200/50'}`}
              >
                <ArrowDownAZ size={16} />
                <span className="hidden sm:inline">A to Z</span>
              </button>
              <button 
                onClick={() => setSortOrder('desc')}
                className={`px-3 py-1.5 cursor-pointer text-sm font-semibold rounded-lg flex items-center gap-1.5 transition-all duration-300 ${sortOrder === 'desc' ? 'bg-white text-zinc-900 shadow-sm ring-1 ring-zinc-200/50' : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200/50'}`}
              >
                <ArrowUpZA size={16} />
                <span className="hidden sm:inline">Z to A</span>
              </button>
            </div>
          </div>
        </div>

        {/* Grid Display */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredItems.map(item => (
              <ItemCard key={item.id || item.itemname} item={item} />
            ))}
          </div>
        ) : (
          <div className="py-32 text-center bg-white rounded-3xl border border-zinc-200/60 shadow-sm my-8">
            <h3 className="font-display text-2xl font-bold text-zinc-900 mb-3 tracking-tight">No match found</h3>
            <p className="text-zinc-500 font-medium">There are no items matching the selected criteria. Try exploring all items.</p>
          </div>
        )}

      </div>
    </Layout>
  );
}
