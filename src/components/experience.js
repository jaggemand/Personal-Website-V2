const posts = [
    {
      title: 'Warehouse Clerk',
      href: '#',
      category: { name: 'FedEx' },
      description:
        'What I did was scanning, sorting of packages and driving with a pallet truck and forklift. I also sat at something called problem packages. When sitting at problem packages you needed a possession of overview, accountability, sense of order and a high stress threshold and especially a large degree of independence. When I operated a pallet truck and forklift I transported and lifted pallets, that could be performed in a fully safe manner.',
      date: 'Employment: June 2019 - July 2021',
      imageUrl:
        'https://www.iru.org/sites/default/files/styles/desktop_2x_736x460/public/2021-03/FedEx%20Express.png?h=f2467a05&itok=RxNrDZMy',
      },
    {
      title: 'Board Member',
      href: '#',
      category: { name: 'POLIS Sportsclub' },
      description:
        'Currently doing basic board member tasks. Participating in meetings and setting a vision for the club and executing these visions.',
      date: 'Employment: September 2021 - Now',
      imageUrl:
        'data:image/png;base64,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',
    },
  ]
  
  export default function EXPERIENCE() {
    return (
      <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8" id="experience-section">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Experience</h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              This is some of the working experience I have had so far and what my job required me to do.
            </p>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {posts.map((post) => (
              <div key={post.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-green-600">
                      <a href="/" className="hover:bold">
                        {post.category.name}
                      </a>
                    </p>
                    <a href="/" className="block mt-2">
                      <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                      <p className="mt-3 text-base text-gray-500">{post.description}</p>
                    </a>
                  </div>
                  <div className=" p-3 text-sm text-gray-500">
                      <time dateTime>{post.date}</time>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }  