import { fakeMovies } from "@/lib/constants/ui/temporary.db";
import Link from "next/link";
import { TbArrowRight } from "react-icons/tb";
import ContentCard from "./ContentCard";

type ContentListPropsType = { title: string; viewAllUrl?: string };

export default function ContentList({
  title,
  viewAllUrl,
}: ContentListPropsType) {
  return (
    <section className="flex flex-col gap-3">
      <div className="flex justify-between gap-2">
        <h2 className="font-semibold text-2xl">{title}</h2>
        {viewAllUrl && (
          <Link
            href={viewAllUrl}
            className="flex items-center gap-1 transition-all duration-300 hover:gap-3 hover:text-primary-50"
          >
            View All <TbArrowRight size={20} className="text-primary-50" />
          </Link>
        )}
      </div>
      <div className="flex gap-4 overflow-hidden">
        {fakeMovies?.slice(0, 4).map((movie) => (
          <ContentCard key={movie?.id} content={movie} listTitle={title} />
        ))}
      </div>
    </section>
  );
}
