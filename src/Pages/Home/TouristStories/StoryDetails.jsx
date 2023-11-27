import { useParams } from "react-router-dom";
import {
  FacebookIcon,
  FacebookShareButton,
  FacebookShareCount,
} from "react-share";
import useStories from "../../../Hook/useStories";

const StoryDetails = () => {
  const shareUrl = "http://facebook.com";
  const allStories = useStories();
  const { id } = useParams();
  const story = allStories?.find((stories) => stories._id === id);

  return (
    <div>
      <section key={story._id}>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                src={story?.image}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">{story?.title}</h2>

              <p className="mt-4 text-gray-600">{story?.description}</p>

              <h2 className="text-end">----{story?.customerName}</h2>
              <div className="Demo__some-network flex justify-start items-center">
                <h2>share---</h2>
                <FacebookShareButton
                  url={shareUrl}
                  className="Demo__some-network__share-button"
                >
                  <FacebookIcon size={32} round />
                </FacebookShareButton>

                <div>
                  <FacebookShareCount
                    url={shareUrl}
                    className="Demo__some-network__share-count"
                  >
                    {(count) => count}
                  </FacebookShareCount>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StoryDetails;
