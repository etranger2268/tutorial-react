import { useState } from 'react';

export default function Square() {
  const [value, setValue] = useState(null);

  const handleClick = () => setValue('X');

  return (
    <button
      type="button"
      onClick={handleClick}
      className="bg-white border float-left text-2xl font-bold leading-8.5 h-8.5 mr-[-1]px mt-[-1]px p-0 text-center w-8.5"
    >
      {value}
    </button>
  );
}
