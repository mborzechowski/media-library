'use client';
import Link from 'next/link';

const ComicsLibrary = () => {
  return (
    <div className='pt-8 flex flex-col items-start gap-16'>
      <h1 className='text-3xl mt-4 ml-12 bebas-neue-regular'>Comics</h1>

      <div className='w-full max-w-screen-xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-10 gap-8 px-4 md:px-10 '>
        <div className='m-2 border bg-gradient-to-r from-blue-400 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 rounded-md w-24 h-24 flex items-center justify-center overflow-hidden text-white'>
          <Link
            href={`/comics/add-new`}
            className='w-24 h-24 flex items-center justify-center overflow-hidden'
          >
            ADD NEW
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ComicsLibrary;
