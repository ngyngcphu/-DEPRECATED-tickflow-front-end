import { Button } from "flowbite-react";
import { TableCellsIcon, PlusIcon } from "@heroicons/react/24/outline";

export function TableView() {
  return (
    <div className='flex flex-wrap gap-2'>
      <Button style={{ backgroundColor: "#19A69C" }}>
        <TableCellsIcon className='mr-3 w-4' />
        All Projects
      </Button>
      <Button color='gray'>
        <TableCellsIcon className='mr-3 w-4' />
        Proposal
      </Button>
      <Button color='gray'>
        <TableCellsIcon className='mr-3 w-4' />
        Inprogress
      </Button>
      <Button color='gray'>
        <PlusIcon className='mr-3 w-4' />
        Add View
      </Button>
    </div>
  );
}
