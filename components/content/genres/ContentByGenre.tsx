"use client";
import { useState } from "react";
import ContentList from "../ContentList";

export default function ContentByGenre() {
  const [genre, setGenre] = useState("Action");
  return (
    <ContentList
      title="Genres"
      viewAllUrl="/genres"
      activeGenre={genre}
      setGenre={setGenre}
      genreList={[
        "Action",
        "Comedy",
        "Drama",
        "Fantasy",
        "Horror",
        "Romance",
        "Sci-Fi",
        "Thriller",
        "Mystery",
        "Crime",
        "Animation",
      ]}
    />
  );
}
