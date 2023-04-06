import { useState, createContext } from "react";
import { Button } from "flowbite-react";
import { TableCellsIcon, PlusIcon } from "@heroicons/react/24/outline";

export const TabContext = createContext("");

export function TableView() {
  const tabs: Array<string> = ["All Projects", "Proposal", "In progress"];
  const [type, setType] = useState<string>(tabs[0]);

  return (
    <TabContext.Provider value={type}>
      <div className='flex flex-wrap gap-2'>
        {tabs.map((tab) => (
          <Button
            key={tab}
            className='dark:text-white'
            color='gray'
            style={type === tab ? { backgroundColor: "#19A69C" } : {}}
            onClick={() => setType(tab)}
          >
            <TableCellsIcon className='mr-3 w-4' />
            {tab}
          </Button>
        ))}
        <Button color='gray'>
          <PlusIcon className='mr-3 w-4' />
          Add View
        </Button>
      </div>
    </TabContext.Provider>
  );
}
