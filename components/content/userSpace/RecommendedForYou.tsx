import ContentList from "../ContentList";

export default function RecommendedForYou() {
  return (
    <ContentList
      title="Recommended for You"
      viewAllUrl="/recommended"
      swiperBreakpoints={{
        400: { slidesPerView: 2.3 },
        500: { slidesPerView: 3 },

        640: {
          slidesPerView: 4,
        },
        750: { slidesPerView: 4.5 },
        850: {
          slidesPerView: 5,
        },
        1024: {
          slidesPerView: 4.5,
        },
        1150: {
          slidesPerView: 5.5,
        },
        1280: {
          slidesPerView: 4,
        },

        1536: {
          slidesPerView: 4.7,
        },
      }}
    />
  );
}
