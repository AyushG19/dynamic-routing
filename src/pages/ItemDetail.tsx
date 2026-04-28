import { useParams, Link } from "react-router-dom";
import { mockCatalogData } from "../data";
import { Layout } from "../components/Layout";
import { ArrowLeft, Tag } from "lucide-react";

export function ItemDetail() {
  const { id } = useParams<{ id: string }>();
  const item = mockCatalogData.find((i) => i.itemname === id);

  if (!item) {
    return (
      <Layout>
        <div className="max-w-3xl mx-auto px-4 py-24 text-center">
          <h2 className="font-display text-4xl font-bold text-zinc-900 mb-4 tracking-tight">
            Item not found
          </h2>
          <p className="text-zinc-500 mb-8 text-lg font-medium">
            The item you are looking for does not exist or has been removed.
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-zinc-900 text-white font-semibold rounded-xl hover:bg-zinc-800 hover:scale-105 transition-all duration-300 shadow-sm"
          >
            <ArrowLeft size={18} className="mr-2" /> Back to Collection
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <Link
          to="/"
          className="group inline-flex items-center text-sm font-bold text-zinc-500 hover:text-zinc-900 transition-colors mb-10 uppercase tracking-widest"
        >
          <ArrowLeft
            size={16}
            className="mr-2 transition-transform group-hover:-translate-x-1"
          />
          Back to Collection
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-start">
          {/* Image Section */}
          <div className="lg:col-span-7 bg-zinc-100 rounded-[2rem] overflow-hidden lg:sticky top-28 border border-zinc-200/50 shadow-sm">
            <div className="aspect-[4/3] sm:aspect-square lg:aspect-[4/3] relative w-full group">
              <img
                src={item.image}
                alt={item.itemname}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:col-span-5 flex flex-col pt-4 lg:pt-8">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest bg-zinc-100 text-zinc-900 border border-zinc-200/50 shadow-sm">
                <Tag size={13} className="mr-2 text-zinc-500" />
                {item.category}
              </span>
            </div>

            <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-extrabold text-zinc-900 tracking-tighter mb-12 leading-[1.1]">
              {item.itemname}
            </h1>

            <div className="flex-grow">
              <h3 className="text-sm font-display font-bold uppercase tracking-[0.2em] text-zinc-400 mb-6">
                Technical Specifications
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 text-left">
                {item.itemprops.map((prop, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col bg-white p-6 rounded-2xl border border-zinc-200/60 hover:border-zinc-300 hover:shadow-sm transition-all duration-300 group"
                  >
                    <dt className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1.5 group-hover:text-zinc-600 transition-colors">
                      {prop.label || (prop as any).name}
                    </dt>
                    <dd className="font-display text-2xl font-bold text-zinc-900 tracking-tight">
                      {prop.value}
                    </dd>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
