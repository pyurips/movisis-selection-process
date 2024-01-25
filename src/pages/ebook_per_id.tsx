import { Button, Chip, Input } from "@nextui-org/react";
import { useParams } from "react-router-dom";
import { IoIosSend } from "react-icons/io";
import ReaderRatingComment from "../compoents/reader_rating_comment";
import { ScrollShadow } from "@nextui-org/react";
import { BiSolidLike } from "react-icons/bi";
import { IoMdCart } from "react-icons/io";
import { useEffect } from "react";
import booksList from "../utils/books_list";
import { useContext } from "react";
import { mainContext } from "../utils/main_context";

export default function EbookPerId() {
  const { id } = useParams();
  const context = useContext(mainContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="flex flex-col gap-10">
      <section className="flex flex-row">
        <img
          className="h-[500px] object-contain bg-stone-100 p-3 rounded-xl"
          src={booksList.find((e) => e.id === id)?.coverUrl}
          alt=""
        />
        <div className="flex flex-1 max-h-[500px] flex-col gap-3 p-5">
          <div className="flex flex-row items-center justify-between">
            <p className="flex flex-1 text-xl text-stone-900 font-semibold">
              {booksList.find((e) => e.id === id)?.bookName}
            </p>
            <Button
              startContent={<IoMdCart size={20} />}
              color="primary"
              variant="light"
              isDisabled={context?.cart.some((e) => e.id === id)}
              onPress={() => {
                if (!id) return;
                if (context) return context.addToCart({ id, quantity: 1 });
              }}
            >
              {context?.cart.some((e) => e.id === id)
                ? "No carrinho"
                : "Adicionar ao carrinho"}
            </Button>
          </div>

          <p className="text-lg text-stone-500 font-semibold">
            {booksList.find((e) => e.id === id)?.author}
          </p>
          <p className="text-xs text-stone-500 font-semibold">
            {`Publicado em ${new Date(
              booksList.find((e) => e.id === id)?.publicationDate || ""
            ).toLocaleDateString("pt-BR")}`}
          </p>

          <ScrollShadow hideScrollBar className="flex flex-1">
            <p className="text-sm text-neutral-600 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              saepe quod, ea, molestias quas iusto dicta ipsam suscipit
              consequuntur nam ratione, repudiandae accusantium repellendus
              laudantium! Eligendi nam suscipit aut quo.
            </p>
          </ScrollShadow>

          <div className="flex flex-row items-center justify-evenly">
            <Chip
              startContent={<BiSolidLike />}
              size="lg"
              radius="sm"
              color="success"
              variant="flat"
              className="p-5"
            >
              {booksList.find((e) => e.id === id)?.rating}
            </Chip>
            <p className="text-md text-stone-600 font-semibold">{`${
              booksList.find((e) => e.id === id)?.pageCount
            } páginas`}</p>
            <p className="text-md text-stone-600 font-semibold">Português</p>
            <p className="text-md text-stone-900 font-semibold">
              {booksList.find((e) => e.id === id)?.price}
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <p className="text-xl text-stone-900 font-semibold">
          {`${
            booksList.find((e) => e.id === id)?.reviews.length
          } avaliaçõe(s) dos leitore(s)`}
        </p>
        <div className="flex flex-row gap-2 items-center">
          <Input placeholder="Adicione sua avaliação" variant="underlined" />
          <Button isIconOnly color="primary" variant="flat">
            <IoIosSend size={25} />
          </Button>
        </div>

        <div className="flex flex-col gap-6">
          {booksList
            .find((e) => e.id === id)
            ?.reviews.map((e) => (
              <ReaderRatingComment
                reviwerName={e.reviewerName}
                personalRating={e.rating}
                comment={e.comment}
              />
            ))}
        </div>
      </section>
    </section>
  );
}
