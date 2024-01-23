import { Avatar, Chip } from '@nextui-org/react';
import { BiSolidLike } from 'react-icons/bi';

export default function ReaderRatingComment() {
  return (
    <div className="flex flex-row gap-3">
      <Avatar name="Junior" />
      <div className="flex flex-1 flex-col">
        <div className="flex flex-row gap-3">
          <p className="text-stone-600">Júlio da Silva</p>
          <Chip
            startContent={<BiSolidLike />}
            size="sm"
            color="success"
            variant="flat"
          >
            80%
          </Chip>
        </div>

        <p className="text-sm text-neutral-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus facere
          ullam suscipit maxime odio voluptatum assumenda nemo aliquam. Ab ex
          odit inventore, officiis error tempora sed! Praesentium veniam itaque
          quas?
        </p>
      </div>
    </div>
  );
}
