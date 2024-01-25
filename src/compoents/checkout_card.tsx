import { Button, Input } from "@nextui-org/react";
import { IoTrash } from "react-icons/io5";

export default function CheckoutCard() {
  return (
    <div className="flex flex-row gap-3 w-full">
      <img
        className="h-[200px] object-contain bg-stone-100 p-3 rounded-xl"
        src="https://cdn.discordapp.com/attachments/1183164572761338047/1198814616101331004/61jgm6ooXzL._SL1000_.jpg?ex=65c0461d&is=65add11d&hm=d39244db8027c3435194daffb1b1d38c8168bc820ccb6f8196097517001e9666&"
        alt=""
      />

      <div className="max-h-[300px] flex flex-1 flex-col justify-between">
        <div className="flex flex-col gap-3">
          <p className="text-xl text-stone-900 font-semibold">
            Harry Potter e a pedra filosofal
          </p>
          <p className="text-lg text-stone-500 font-semibold">J.K Rowling</p>
        </div>

        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row gap-3 items-center">
            <Input type="number" value={"1"} />
            <div className="flex flex-row gap-1">
              <p className="text-stone-500 w-max font-semibold">R$</p>
              <p className="text-stone-700 w-max font-semibold">198,99</p>
            </div>
          </div>

          <Button startContent={<IoTrash />} variant="light" color="primary">
            Remover
          </Button>
        </div>
      </div>
    </div>
  );
}
