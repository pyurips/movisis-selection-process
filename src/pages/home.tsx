import HomeMainPost from "../compoents/home_main_post";

export default function Home() {
  return (
    <section className="flex flex-col gap-10">
      <HomeMainPost />

      <section className="flex flex-col gap-3">
        <p>Mais vendidos</p>
        <div className="w-full h-[500px] bg-[black] rounded-2xl">asd</div>
      </section>
    </section>
  );
}
