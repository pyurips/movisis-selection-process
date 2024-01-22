import { useParams } from 'react-router-dom';

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
        
      </section>
    </section>
  );
}
