import { Button, Input } from '@nextui-org/react';
import { useParams } from 'react-router-dom';
import { IoIosSend } from 'react-icons/io';
import ReaderRatingComment from '../compoents/reader_rating_comment';

export default function EbookPerId() {
  const { id } = useParams();

  return (
    <section className="flex flex-col gap-10">
      <section className="flex flex-row">
        <img
          className="w-[350px] h-[500px] object-contain bg-[red] rounded-xl"
          src=""
          alt=""
        />
        <div className="flex flex-1 bg-[black]"></div>
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
