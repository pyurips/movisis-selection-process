import { Avatar, Chip } from "@nextui-org/react";
import { BiSolidLike } from "react-icons/bi";

export default function ReaderRatingComment({
  reviwerName,
  personalRating,
  comment,
}: {
  reviwerName: string;
  personalRating: number;
  comment: string;
}) {
  return (
    <div className="flex flex-row gap-3">
      <Avatar name={reviwerName} />
      <div className="flex flex-1 flex-col">
        <div className="flex flex-row gap-3">
          <p className="text-stone-600">{reviwerName}</p>
          <Chip
            startContent={<BiSolidLike />}
            size="sm"
            color="success"
            variant="flat"
          >
            {personalRating}
          </Chip>
        </div>

        <p className="text-sm text-neutral-500">{comment}</p>
      </div>
    </div>
  );
}
