import { useParams } from 'react-router-dom';

export default function EbookPerId() {
  const { id } = useParams();

  return (
    <section className="flex flex-col gap-10">
      <section className="flex flex-col gap-3"></section>

      <section className="flex flex-col gap-3"></section>
    </section>
  );
}
