import { Button } from '@nextui-org/react';

export default function HomeMainPost() {
  return (
    <div className="relative overflow-hidden rounded-2xl">
      <img
        src="https://cdn.discordapp.com/attachments/1183164572761338047/1198796979627634768/desktop-wallpaper-cute-harry-potter-landscape-transformed.webp?ex=65c035b0&is=65adc0b0&hm=fa52cf0a947191e08f7ec6e31a1a510b8044dae6d5ce8804e7235f12286bbe88&"
        className="w-full h-[500px] object-cover object-top"
      />

      <div
        style={{
          background:
            'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 50%)',
        }}
        className="absolute top-0 w-full h-full p-5 flex items-end"
      >
        <div className="flex flex-row gap-5 items-center">
          <Button color="success" variant="bordered">
            <p>Adquirir agora</p>
          </Button>
          <p className="flex flex-1 text-stone-300">
            Em 'Harry Potter e as Relíquias da Morte', Harry enfrenta seu
            destino final, desvendando mistérios e lutando contra as forças das
            trevas em uma conclusão épica e emocionante da série.
          </p>
        </div>
      </div>
    </div>
  );
}
