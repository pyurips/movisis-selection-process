import EbookCard from "../compoents/ebook_card";
import HomeMainPost from "../compoents/home_main_post";
import { ScrollShadow } from "@nextui-org/react";
import HomeFilter from "../compoents/home_filter";
import booksList from "../utils/books_list";

export default function Home() {
  return (
    <section className="flex flex-col gap-10">
      <HomeMainPost />

      <section className="flex flex-col gap-3">
        <div className="flex flex-row gap-2 items-end">
          <p className="text-xl text-stone-900 font-semibold">Mais vendidos</p>
          <p className="text-sm text-stone-500 font-medium">
            Explore os e-books mais vendidos e relevantes
          </p>
        </div>

        <ScrollShadow
          orientation="horizontal"
          className="flex flex-row gap-5 w-full py-3"
          hideScrollBar={true}
        >
          {booksList.slice(0, 5).map((e) => (
            <EbookCard
              id={e.id}
              author={
                e.author.length >= 15 ? e.author.slice(0, 15) + "..." : e.author
              }
              coverUrl={e.coverUrl}
              rating={e.rating}
              price={e.price}
              bookName={
                e.bookName.length >= 15
                  ? e.bookName.slice(0, 15) + "..."
                  : e.bookName
              }
            />
          ))}
        </ScrollShadow>
      </section>

      <section className="flex flex-col gap-3">
        <div className="flex flex-row gap-2 items-end">
          <p className="text-xl text-stone-900 font-semibold">
            Suas preferências
          </p>
          <p className="text-sm text-stone-500 font-medium">
            Navegue e descubra de acordo com seus gostos
          </p>
        </div>
        <HomeFilter />

        <div className="grid grid-cols-4 gap-3">
          {booksList.map((e) => (
            <EbookCard
              id={e.id}
              author={
                e.author.length >= 15 ? e.author.slice(0, 15) + "..." : e.author
              }
              coverUrl={e.coverUrl}
              rating={e.rating}
              price={e.price}
              bookName={
                e.bookName.length >= 15
                  ? e.bookName.slice(0, 15) + "..."
                  : e.bookName
              }
            />
          ))}
        </div>
      </section>
    </section>
  );
}
