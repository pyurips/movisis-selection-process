import { Card, CardBody, CardFooter, Image, Chip } from '@nextui-org/react';
import { BiSolidLike } from 'react-icons/bi';

export default function EbookCard() {
  return (
    <Card
      shadow="sm"
      //key={index}
      isPressable
      onPress={() => console.log('item pressed')}
      className="min-w-[200px] w-[200px]"
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

        <div className="flex flex-row items-center justify-between p-2">
          <p className=" text-stone-700 font-bold text-sm">Nome do livro</p>
          <Chip startContent={<BiSolidLike />} size="sm" color="success" variant='flat'>
            80%
          </Chip>
        </div>
      </CardBody>
      <CardFooter className="text-small justify-between">
        <p className="font-bold text-stone-500">Autor</p>
        <p className="text-stone-800">{'R$ 29,00'}</p>
      </CardFooter>
    </Card>
  );
}
