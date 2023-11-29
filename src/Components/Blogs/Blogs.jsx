const Blogs = () => {
  return (
    <div>
      <section className=" text-gray-800">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          <a
            rel="noopener noreferrer"
            href="#"
            className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-gray-50"
          >
            <img
              src="https://source.unsplash.com/random/480x360"
              alt=""
              className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500"
            />
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                Explore Beautiful Destinations
              </h3>
              <span className="text-xs text-gray-600">February 19, 2021</span>
              <p>
                Discover amazing places around the world. Immerse yourself in
                the beauty of nature and the richness of different cultures.
              </p>
            </div>
          </a>
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <a
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-50"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 bg-gray-500"
                src="https://source.unsplash.com/random/480x360?1"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  Dive into Local Cultures
                </h3>
                <span className="text-xs text-gray-600">January 21, 2021</span>
                <p>
                  Experience the richness of local traditions and immerse
                  yourself in cultural activities that will leave you with
                  lasting memories.
                </p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-50"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 bg-gray-500"
                src="https://source.unsplash.com/random/480x360?2"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  Adventures Await You
                </h3>
                <span className="text-xs text-gray-600">January 22, 2021</span>
                <p>
                  Embark on thrilling adventures and create stories filled with
                  excitement. There's a world of adventure waiting just for you.
                </p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-50"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 bg-gray-500"
                src="https://source.unsplash.com/random/480x360?3"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  Captivating Views
                </h3>
                <span className="text-xs text-gray-600">January 23, 2021</span>
                <p>
                  Witness breathtaking landscapes and scenic views that will
                  leave you in awe. Nature has its way of painting the most
                  beautiful pictures.
                </p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-50 hidden sm:block"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 bg-gray-500"
                src="https://source.unsplash.com/random/480x360?4"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  Mountain Adventures
                </h3>
                <span className="text-xs text-gray-600">January 24, 2021</span>
                <p>
                  Conquer the peaks and experience the thrill of mountain
                  adventures. Challenge yourself and enjoy the stunning views
                  from the top.
                </p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-50 hidden sm:block"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 bg-gray-500"
                src="https://source.unsplash.com/random/480x360?5"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  Relax on Tropical Beaches
                </h3>
                <span className="text-xs text-gray-600">January 25, 2021</span>
                <p>
                  Unwind on the sandy shores of tropical paradises. Let the
                  waves serenade you and the sunsets paint the sky in warm hues.
                </p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-50 hidden sm:block"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 bg-gray-500"
                src="https://source.unsplash.com/random/480x360?6"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  Cityscape Wonders
                </h3>
                <span className="text-xs text-gray-600">January 26, 2021</span>
                <p>
                  Explore the hustle and bustle of vibrant cities. Discover
                  architectural wonders and immerse yourself in the urban charm.
                </p>
              </div>
            </a>
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              className="px-6 py-3 text-sm rounded-md hover:underline bg-gray-50 text-gray-600"
            >
              Load more posts...
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
