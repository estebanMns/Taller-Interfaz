import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased">
      <div className="max-w-screen-xl mx-auto px-6 py-10">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 grid grid-cols-12 gap-6">
            
            {/* Hero article card */}
            <div className="col-span-12 lg:col-span-9 bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
              <div className="flex gap-6 items-start">
                <img
                  src="https://images.unsplash.com/photo-1614743559948-d158e36ecb4f?fm=jpg&q=60&w=3000"
                  alt="Lamp"
                  className="w-80 h-70 object-cover rounded-xl"
                />
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold leading-snug text-slate-800">
                    Green plants are going to Extinct about 500 times faster than they should, Study finds
                  </h2>
                  <p className="mt-4 text-base text-slate-600 leading-relaxed">
                    If you are the sort of person who just can not keep a plant alive, you are not alone according to a new study published June 10 in the journal Nature.
                  </p>
                  <div className="mt-6 flex items-center gap-3 text-sm text-slate-500">
                    <img
                      src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=200"
                      className="w-7 h-7 rounded-full object-cover"
                      alt="Author"
                    />
                    <span className="font-medium">Alexander Parkinson</span>
                    <span className="text-slate-400">•</span>
                    <span>Jun 20, 2019</span>
                    <div className="ml-auto">
                      <div className="w-5 h-5 text-slate-400 hover:text-slate-600 cursor-pointer">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar categories */}
            <div className="col-span-12 lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 flex flex-col gap-3">
                <div className="text-sm font-semibold text-slate-700 mb-2">Categories</div>
                {[
                  { icon: '🌍', label: 'Global' },
                  { icon: '💼', label: 'Business' },
                  { icon: '🎬', label: 'Entertainment' },
                  { icon: '🔬', label: 'Science' },
                  { icon: '🏅', label: 'Sports' },
                  { icon: '❤️', label: 'Health' },
                ].map((cat) => (
                  <div key={cat.label} className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-slate-100 cursor-pointer">
                    <div className="w-5 h-5 text-slate-500">{cat.icon}</div>
                    <span className="text-sm text-slate-700">{cat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Coffee + Search + Short Film in one row */}
          <div className="col-span-12 grid grid-cols-12 gap-6">
            
            {/* Coffee article card */}
            <div className="col-span-12 sm:col-span-5 lg:col-span-4">
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden h-full flex flex-col">
                <img
                  src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200"
                  className="w-full h-48 object-cover"
                  alt="Coffee"
                />
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <h3 className="font-semibold text-base leading-snug text-slate-800">
                    How to make the perfect morning coffee, according to the Science
                  </h3>
                  <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
                    <img
                      src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=200"
                      className="w-6 h-6 rounded-full object-cover"
                      alt="Tara Gibson"
                    />
                    <span>Tara Gibson</span>
                    <span className="text-slate-400">•</span>
                    <span>Jul 13, 2019</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Search bar with filters */}
            <div className="col-span-12 sm:col-span-5 lg:col-span-5">
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 h-30 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="relative flex-1">
                      <input
                        placeholder="Search for articles"
                        className="w-full rounded-xl border border-slate-200 pl-10 pr-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200"
                      />
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <circle cx="11" cy="11" r="8" />
                          <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                      </div>
                    </div>
                    <div className="shrink-0 rounded-xl bg-indigo-600 text-white px-4 py-3 text-sm font-medium hover:bg-indigo-700 transition cursor-pointer">
                      Search
                    </div>
                  </div>

                  {/* Filter chips */}
                  <div className="mt-4 flex flex-wrap gap-2 text-sm">
                    <div className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 cursor-default">#Politics</div>
                    <div className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 cursor-default">#Science</div>
                    <div className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 cursor-default">#Movies</div>
                    <div className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 cursor-default">#Technology</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Short film card */}
            <div className="col-span-12 sm:col-span-3 lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-3 flex items-center gap-3 h-30">
                <img
                  src="https://images.unsplash.com/photo-1449247709967-d4461a6a6103?q=80&w=800"
                  className="w-28 h-20 object-cover rounded-xl"
                  alt="Short Film"
                />
                <div className="flex-1">
                  <p className="font-semibold leading-snug text-slate-800">An Inspiring Short Film</p>
                  <p className="text-xs text-slate-500 mt-1">80,989 views</p>
                </div>
              </div>
            </div>

          </div>

          <div className="col-span-12 grid grid-cols-12 gap-6">
            {/* Perfil del periodista */}
            <div className="col-span-12 lg:col-span-8">
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 flex items-center gap-6">
                <img
                  src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=600"
                  className="w-24 h-24 rounded-2xl object-cover"
                  alt="Alex Morrison"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-slate-800">Alex Morrison</h3>
                  <p className="text-sm text-slate-500">Senior Journalist</p>

                  <div className="mt-4 grid grid-cols-3 gap-3">
                    <div className="rounded-xl border border-slate-200 px-3 py-2 text-center">
                      <div className="text-xs text-slate-500">Articles</div>
                      <div className="text-lg font-semibold text-slate-800">34</div>
                    </div>
                    <div className="rounded-xl border border-slate-200 px-3 py-2 text-center">
                      <div className="text-xs text-slate-500">Followers</div>
                      <div className="text-lg font-semibold text-slate-800">980</div>
                    </div>
                    <div className="rounded-xl border border-slate-200 px-3 py-2 text-center">
                      <div className="text-xs text-slate-500">Rating</div>
                      <div className="text-lg font-semibold text-slate-800">8.9</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="rounded-xl border border-slate-200 px-4 py-2 text-sm text-center hover:bg-slate-50 cursor-pointer">
                    Chat
                  </div>
                  <div className="rounded-xl bg-indigo-600 text-white px-4 py-2 text-sm text-center hover:bg-indigo-700 cursor-pointer">
                    Follow
                  </div>
                </div>
              </div>
            </div>

            {/* Navegación temática */}
            <div className="col-span-12 lg:col-span-4">
                {/* Flechas de navegación */}
              <div className="flex justify-between">
                <button className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center hover:bg-slate-800">
                  <span className="text-lg text-slate-500">&lt;</span>
                </button>
                <button className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center hover:bg-slate-100">
                  <span className="text-lg text-slate-500">&gt;</span>
                </button>
              </div>

              {/* Chips temáticos */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 px-4 py-3 flex flex-wrap gap-3">
                <div className="px-4 py-1 rounded-full bg-slate-100 text-sm text-slate-700 hover:bg-slate-200 cursor-pointer">
                  Donald Trump
                </div>
                <div className="px-4 py-1 rounded-full bg-slate-100 text-sm text-slate-700 hover:bg-slate-200 cursor-pointer">
                  USA
                </div>
                <div className="px-4 py-1 rounded-full bg-slate-100 text-sm text-slate-700 hover:bg-slate-200 cursor-pointer">
                  Politics
                </div>
                <div className="px-4 py-1 rounded-full border border-blue-500 text-sm text-blue-600 font-medium cursor-pointer">
                  2020
                </div>
              </div>
            </div>
          </div>


          

        </div>
      </div>
    </div>
  );
}
