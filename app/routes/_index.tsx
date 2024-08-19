import { Chinesenovels } from "./data";
import ChainaBook from "./ChinaBook";

export default function Ebook() {
  return (
    <div className="bg-purple-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-purple-900">หนังสือนิยายแปลจีน</h2>
    
          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {Chinesenovels.map((callout) => (
              <div key={callout.Title} className="group relative">
                <ChainaBook Bestseller={callout.Bestseller} Recommended={callout.Recommended} />
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src={callout.Cover}
                    className="h-full w-full object-cover object-center"
                  />
                  
                </div>
                <h3 className="mt-6 text-xl text-fuchsia-900">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.Title}
                  </a>
                </h3>
                
                <p className="text-sm font-semibold text-violet-500">{callout.Description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
