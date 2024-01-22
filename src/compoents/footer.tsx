import { Link } from "@nextui-org/react";

export default function Footer() {
  return (
    <footer className="flex flex-row justify-between py-10">
      <section className="flex flex-col gap-3 items-start">
        <p className="text-sm text-stone-500">
          © 2023 Readify. Todos direitos reservados.
        </p>
        <Link size="sm" href="#">Política de Privacidade</Link>
        <Link size="sm" href="#">Termos de Uso</Link>
      </section>

      <section></section>
    </footer>
  );
}
