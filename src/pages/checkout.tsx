import { Button } from "@nextui-org/react";
import CheckoutCard from "../compoents/checkout_card";

export default function Checkout() {
  return (
    <section className="flex flex-col gap-8 items-center">
        <CheckoutCard />
        <CheckoutCard />
        <CheckoutCard />
        <Button className="w-full" size="lg" variant='flat' color='success'>Finalizar compra (R$ 450,60)</Button>
    </section>
  );
}
