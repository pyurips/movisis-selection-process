import { Button, Chip, Input } from '@nextui-org/react';
import { useParams } from 'react-router-dom';
import { IoIosSend } from 'react-icons/io';
import ReaderRatingComment from '../compoents/reader_rating_comment';
import { ScrollShadow } from '@nextui-org/react';
import { BiSolidLike } from 'react-icons/bi';
import { IoMdCart } from 'react-icons/io';
import { useEffect } from 'react';

export default function EbookPerId() {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="flex flex-col gap-10">
      <section className="flex flex-row">
        <img
          className="w-[350px] h-[500px] object-contain bg-stone-100 p-3 rounded-xl"
          src="https://cdn.discordapp.com/attachments/1183164572761338047/1198814616101331004/61jgm6ooXzL._SL1000_.jpg?ex=65c0461d&is=65add11d&hm=d39244db8027c3435194daffb1b1d38c8168bc820ccb6f8196097517001e9666&"
          alt=""
        />
        <div className="flex flex-1 max-h-[500px] flex-col gap-3 p-5">
          <div className="flex flex-row items-center justify-between">
            <p className="flex flex-1 text-xl text-stone-900 font-semibold">
              Harry Potter e a pedra filosofal
            </p>
            <Button startContent={<IoMdCart size={20} />} color="primary" variant='light'>
              Adicionar ao carrinho
            </Button>
          </div>

          <p className="text-lg text-stone-500 font-semibold">J.K Rowling</p>
          <p className="text-xs text-stone-500 font-semibold">
            Publicado em 22 Jan 2024
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
              80%
            </Chip>
            <p className="text-md text-stone-600 font-semibold">450 páginas</p>
            <p className="text-md text-stone-600 font-semibold">Português</p>
            <p className="text-md text-stone-900 font-semibold">R$ 29,99</p>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <p className="text-xl text-stone-900 font-semibold">
          12 avaliações dos leitores
        </p>
        <div className="flex flex-row gap-2 items-center">
          <Input placeholder="Adicione sua avaliação" variant="underlined" />
          <Button isIconOnly color="primary" variant="flat">
            <IoIosSend size={25} />
          </Button>
        </div>

        <div className="flex flex-col gap-6">
          <ReaderRatingComment />
          <ReaderRatingComment />
          <ReaderRatingComment />
          <ReaderRatingComment />
        </div>
      </section>
    </section>
  );
}
