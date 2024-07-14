'use client';
import BookForm from '@/components/BookForm';
import { useRouter } from 'next/navigation';

const AddNewBook = () => {
  const router = useRouter();

  const addBook = async (formData) => {
    const response = await fetch('http://localhost:8080/books', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      console.error('Failed to add game');
      return;
    }

    const book = await response.json();
    console.log(book);
    router.push('/books');
  };

  return (
    <div className='mt-24'>
      <h1 className='text-center text-xl m-4 bebas-neue-regular '>
        Add a new book
      </h1>
      <BookForm onSubmit={addBook} />
    </div>
  );
};

export default AddNewBook;
