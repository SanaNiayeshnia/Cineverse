"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import Image from "next/image";
import AppButton from "../layout/AppButton";
import { TbArrowRight } from "react-icons/tb";
const fakeSlides = [
  {
    id: "1",
    title: "Game of Thrones",
    genres: ["Action", "Adventure", "Drama"],
    imdb: "9.1",
    description:
      "It's the story of the intricate and bloody battles of several noble families in the fictional land of Westeros. These families, including the Starks, the Lannisters, and the Targaryens, fight for control of the Iron Throne, the symbol of power in the Seven Kingdoms.",
    image: "/assets/images/test.png",
  },
  {
    id: "2",
    title: "The Lord of the Rings: The Return of the King",
    genres: ["Adventure", "Drama", "Fantasy"],
    imdb: "9.0",
    description:
      "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    image: "/assets/images/test2.png",
  },
  {
    id: "3",
    title: "Interstellar",
    genres: ["Adventure", "Drama", "Sci-Fi"],
    imdb: "8.7",
    description:
      "When Earth becomes uninhabitable in the future, a farmer and former NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft along with a team of researchers to find a new planet for humans.",
    image: "/assets/images/test3.png",
  },
  {
    id: "4",
    title: "The Dark Knight",
    genres: ["Action", "Crime", "Drama", "something"],
    imdb: "9.0",
    description:
      "When a menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    image: "/assets/images/test4.png",
  },
];

export default function HomeSlider() {
  return (
    <section>
      <Carousel
        opts={{ loop: true, align: "center" }}
        plugins={[Autoplay({ delay: 5000, stopOnInteraction: true }), Fade()]}
        className="w-full max-w-full"
      >
        <CarouselContent>
          {fakeSlides?.map((slide) => (
            <CarouselItem key={slide?.id}>
              <div className="relative h-100">
                <div className="absolute inset-0 bg-linear-to-t from-gray-950 via-gray-950/70 to-transparent from-1% via-30% z-2 p-4 flex items-end">
                  <div className="space-y-3">
                    <h2 className="font-semibold text-3xl">{slide?.title}</h2>
                    <div className="flex items-center gap-4">
                      <p className="flex items-center gap-2">
                        <span className="bg-primary-50 rounded-xs text-xs text-black font-medium px-1 py-0.5">
                          IMDB
                        </span>
                        {slide?.imdb}
                      </p>
                      <p className="flex items-center divide-x-2 divide-primary-50">
                        {slide?.genres?.slice(0, 3).map((genre, index) => (
                          <span key={index} className="px-2">
                            {genre}
                          </span>
                        ))}
                      </p>
                      <AppButton kind="primary" href={`/details/${slide?.id}`}>
                        More Details <TbArrowRight />
                      </AppButton>
                    </div>
                  </div>
                </div>
                <Image
                  src={slide?.image}
                  alt={slide?.title}
                  fill
                  className="object-cover object-center rounded-xl"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-4 right-4 z-3 flex gap-3 items-center">
          <CarouselPrevious className="static! bg-primary-50! text-gray-950 cursor-pointer hover:scale-125 active:scale-95 transition-all duration-300 hover:text-gray-950! shadow [&_svg]:font-medium" />
          <CarouselNext className="static! bg-primary-50! text-gray-950 cursor-pointer hover:scale-125 active:scale-95 transition-all duration-300 hover:text-gray-950! shadow [&_svg]:font-medium" />
        </div>
      </Carousel>
    </section>
  );
}
