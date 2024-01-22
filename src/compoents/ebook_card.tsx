import { Card, CardBody, CardFooter, Image } from '@nextui-org/react';

export default function EbookCard() {
  return (
    <Card
      shadow="sm"
      //key={index}
      isPressable
      onPress={() => console.log('item pressed')}
      className="min-w-[200px]"
    >
      <CardBody className="overflow-visible p-0">
        <Image
          shadow="sm"
          radius="lg"
          width="100%"
          //alt={item.title}
          className="w-full object-cover h-[300px]"
          src={
            'https://cdn.discordapp.com/attachments/1183164572761338047/1198814616101331004/61jgm6ooXzL._SL1000_.jpg?ex=65c0461d&is=65add11d&hm=d39244db8027c3435194daffb1b1d38c8168bc820ccb6f8196097517001e9666&'
          }
        />

        <p className='p-2 text-stone-700 font-bold text-sm'>Nome do livro</p>
      </CardBody>
      <CardFooter className="text-small justify-between">
        <p className='font-bold text-stone-500'>Autor</p>
        <p className="text-stone-800">{'R$ 29,00'}</p>
      </CardFooter>
    </Card>
  );
}
