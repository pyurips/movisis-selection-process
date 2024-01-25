import { Card, CardBody, CardFooter, Image, Chip } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { BiSolidLike } from "react-icons/bi";

export default function EbookCard({
  id,
  coverUrl,
  rating,
  author,
  price,
  bookName,
}: {
  id: string;
  coverUrl: string;
  rating: number;
  author: string;
  price: number;
  bookName: string;
}) {
  const navigate = useNavigate();

  return (
    <Card
      shadow="sm"
      //key={index}
      isPressable
      onPress={() => navigate("/ebook/" + id)}
      className="min-w-[200px] w-[200px]"
    >
      <CardBody className="overflow-visible p-0">
        <Image
          shadow="sm"
          radius="lg"
          width="100%"
          //alt={item.title}
          className="w-full object-cover h-[300px]"
          src={coverUrl}
        />

        <div className="flex flex-row items-center justify-between p-2">
          <p className=" text-stone-700 font-bold text-sm">{bookName}</p>
          <Chip
            startContent={<BiSolidLike />}
            size="sm"
            color="success"
            variant="flat"
          >
            {rating}
          </Chip>
        </div>
      </CardBody>
      <CardFooter className="text-small justify-between">
        <p className="font-bold text-stone-500">{author}</p>
        <p className="text-stone-800">{`R$ ${price}`}</p>
      </CardFooter>
    </Card>
  );
}
