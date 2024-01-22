import EbookCard from '../compoents/ebook_card';
import HomeMainPost from '../compoents/home_main_post';
import { ScrollShadow } from '@nextui-org/react';
import HomeFilter from '../compoents/home_filter';

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
          className="flex flex-row gap-5 w-full"
          hideScrollBar={true}
        >
          <EbookCard />
          <EbookCard />
          <EbookCard />
          <EbookCard />
          <EbookCard />
          <EbookCard />
          <EbookCard />
        </ScrollShadow>
      </section>

      <section className="flex flex-col gap-3">
        <HomeFilter />
      </section>
    </section>
  );
}
