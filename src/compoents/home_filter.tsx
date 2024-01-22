import { Select, SelectItem } from '@nextui-org/react';
import bookCategories from '../utils/book_categories';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from '@nextui-org/react';
import filterTypes from '../utils/filter_types';
import { useState } from 'react';

export default function HomeFilter() {
  const [selectedFilter, setSelectedFilter] = useState(['Mais populares']);

  return (
    <div className="flex flex-row gap-2 items-center">
      <Select label="Selecionar por categoria">
        {bookCategories.map((category) => (
          <SelectItem key={category} value={category}>
            {category}
          </SelectItem>
        ))}
      </Select>

      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered" className="capitalize">
            {selectedFilter[0]}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Single selection example"
          variant="flat"
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={selectedFilter}
          onSelectionChange={(e: any) => setSelectedFilter([e.currentKey])}
        >
          {filterTypes.map((e) => (
            <DropdownItem key={e}>{e}</DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
