import Image from "next/image";
import { Hero, SearchBar, CustomFilter } from "@/components";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="max-width mt-12 padding-x padding-y" id="discover">
        <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
        <p>Explore the cars you might like</p>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter />
            <CustomFilter />
          </div>
        </div>
      </div>
    </main>
  );
}
