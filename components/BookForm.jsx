'use client';
import { useForm } from 'react-hook-form';

const BookForm = ({ onsubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitHandler = (data) => {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('author', data.author);
    formData.append('genre', data.genre);
    formData.append('yearPublished', data.yearPublished);
    formData.append('physicalDigital', data.physicalDigital);
    formData.append('publisher', data.publisher);
    formData.append('completed', data.completed ? 'true' : 'false');
    formData.append('rating', data.rating);
    formData.append('image', data.image[0]);

    onSubmit(formData);
  };
  return (
    <form
      className='max-w-xl mx-auto mt-4 p-4 border rounded shadow-lg'
      onSubmit={handleSubmit(onSubmitHandler)}
      encType='multipart/form-data'
    >
      <div className='mb-4'>
        <label
          className='block text-gray-700 text-sm font-bold mb-2'
          htmlFor='title'
        >
          Title
        </label>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          type='text'
          id='title'
          {...register('title', { required: true })}
        />
        {errors.title && (
          <p className='text-red-500 text-xs italic'>Title is required</p>
        )}
      </div>
      <div className='mb-4'>
        <label
          className='block text-gray-700 text-sm font-bold mb-2'
          htmlFor='author'
        >
          Author
        </label>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          type='text'
          id='author'
          {...register('genre', { required: true })}
        />
      </div>
      <div className='mb-4'>
        <label
          className='block text-gray-700 text-sm font-bold mb-2'
          htmlFor='genre'
        >
          Genre
        </label>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          type='text'
          id='genre'
          {...register('genre', { required: true })}
        />
        {errors.genre && (
          <p className='text-red-500 text-xs italic'>Genre is required</p>
        )}
      </div>
      <div className='mb-4'>
        <label
          className='block text-gray-700 text-sm font-bold mb-2'
          htmlFor='publisher'
        >
          Publisher
        </label>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          type='text'
          id='publisher'
          {...register('publisher', { required: true })}
        />
        {errors.publisher && (
          <p className='text-red-500 text-xs italic'>Publisher is required</p>
        )}
      </div>
      <div className='flex gap-4'>
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='yearPublished'
          >
            Year Published
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            type='number'
            id='yearPublished'
            {...register('yearPublished', {
              required: true,
              min: 1800,
              max: new Date().getFullYear(),
            })}
          />
          {errors.yearPublished && (
            <p className='text-red-500 text-xs italic'>
              Year Published must be between 1800 and {new Date().getFullYear()}
            </p>
          )}
        </div>
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='physicalDigital'
          >
            Physical/Digital
          </label>
          <select
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='physicalDigital'
            {...register('physicalDigital', { required: true })}
          >
            <option value=''>Select one</option>
            <option value='physical'>Physical</option>
            <option value='digital'>Digital</option>
          </select>
          {errors.physicalDigital && (
            <p className='text-red-500 text-xs italic'>
              Please select Physical or Digital
            </p>
          )}
        </div>
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='rating'
          >
            Rating
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            type='number'
            id='rating'
            {...register('rating', { required: true, min: 0, max: 10 })}
          />
          {errors.rating && (
            <p className='text-red-500 text-xs italic'>
              Rating must be between 0 and 10
            </p>
          )}
        </div>
        <div>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='completed'
          >
            Finished
          </label>
          <input
            className='ml-6 leading-tight mt-2'
            type='checkbox'
            id='completed'
            {...register('completed')}
          />
        </div>
      </div>

      <div className='mb-4'>
        <label
          className='block text-gray-700 text-sm font-bold mb-2'
          htmlFor='image'
        >
          Image
        </label>
        <input
          className='shadow appearance-none border rounded w-auto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          type='file'
          id='image'
          {...register('image', { required: true })}
        />
        {errors.image && (
          <p className='text-red-500 text-xs italic'>Image is required</p>
        )}
      </div>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline '
        type='submit'
      >
        Add Book
      </button>
    </form>
  );
};

export default BookForm;
