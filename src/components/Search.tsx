import { TextInput } from 'flowbite-react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

export function Search() {
  return (
    <form action='#' method='GET' onSubmit={(event) => event.preventDefault()}>
      <div className='relative mt-1 lg:w-64 xl:w-96'>
        <TextInput id='search' name='search' placeholder='Search' rightIcon={MagnifyingGlassIcon} />
      </div>
    </form>
  );
}
