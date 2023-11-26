import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import { useEffect } from "react";
import useStories from "../../../Hook/useStories";

const TouristStories = () => {
  const stories = useStories();

  useEffect(() => {
    const keenSlider = new KeenSlider("#keen-slider", {
      loop: true,
      slides: {
        origin: "center",
        perView: 1.25,
        spacing: 16,
      },
      breakpoints: {
        "(min-width: 1024px)": {
          slides: {
            origin: "auto",
            perView: 1.5,
            spacing: 32,
          },
        },
      },
    });

    const keenSliderPrevious = document.getElementById("keen-slider-previous");
    const keenSliderNext = document.getElementById("keen-slider-next");

    keenSliderPrevious.addEventListener("click", () => keenSlider.prev());
    keenSliderNext.addEventListener("click", () => keenSlider.next());

    return () => {
      keenSlider.destroy();
    };
  }, []);

  return (
    <div className="lg:mt-48">
      <div className="text-center">
        <small className="text-base font-poppins font-medium text-[#5E6282] text-center">
          Diaries
        </small>
        <h1 className="text-5xl mt-4">Travel Stories</h1>
      </div>
      <section>
        <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
          <div className="max-w-7xl items-end justify-between sm:flex sm:pe-6 lg:pe-8">
            <h2 className="max-w-xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl capitalize">
              Read travel stories from our customers
            </h2>

            <div className="mt-8 flex gap-4 lg:mt-0">
              <button
                aria-label="Previous slide"
                id="keen-slider-previous"
                className="rounded-full border border-orange-600 p-3 text-orange-600 transition hover:bg-orange-600 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5 rtl:rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>

              <button
                aria-label="Next slide"
                id="keen-slider-next"
                className="rounded-full border border-orange-600 p-3 text-orange-600 transition hover:bg-orange-600 hover:text-white"
              >
                <svg
                  className="h-5 w-5 rtl:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="-mx-6 mt-8 lg:col-span-2 lg:mx-0">
            <div id="keen-slider" className="keen-slider">
              {stories.map((story) => (
                <div key={story._id} className="keen-slider__slide">
                  <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
                    <div>
                      <article className="flex bg-white transition hover:shadow-xl">
                        <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                          <time
                            dateTime="2022-10-10"
                            className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                          >
                            <span>{story.year}</span>
                            <span className="w-px flex-1 bg-gray-900/10"></span>
                            <span>{story.month}</span>
                          </time>
                        </div>

                        <div className="hidden sm:block sm:basis-56">
                          <img
                            alt="Guitar"
                            src={story.image}
                            className="aspect-square h-full w-full object-cover"
                          />
                        </div>

                        <div className="flex flex-1 flex-col justify-between">
                          <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                            <a href="#">
                              <h3 className="font-bold uppercase text-gray-900">
                                {story.title}
                              </h3>
                            </a>

                            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                              {story.description}
                            </p>
                          </div>

                          <div className="sm:flex sm:items-end sm:justify-end">
                            <a
                              href="#"
                              className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
                            >
                              Read More
                            </a>
                          </div>
                        </div>
                      </article>
                    </div>

                    <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                      &mdash; {story.customerName}
                    </footer>
                  </blockquote>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TouristStories;
