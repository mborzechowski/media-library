"use client";
import { useForm } from "react-hook-form";

const GameForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitHandler = (data) => {
    data.yearPublished = parseInt(data.yearPublished, 10);
    data.rating = parseFloat(data.rating);

    console.log(data);
    onSubmit(data);
  };

  return (
    <form
      className="max-w-xl mx-auto mt-4 p-4 border rounded shadow-lg"
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="title"
        >
          Title
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          id="title"
          {...register("title", { required: true })}
        />
        {errors.title && (
          <p className="text-red-500 text-xs italic">Title is required</p>
        )}
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="genre"
        >
          Genre
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          id="genre"
          {...register("genre", { required: true })}
        />
        {errors.genre && (
          <p className="text-red-500 text-xs italic">Genre is required</p>
        )}
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="theme"
        >
          Theme
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          id="theme"
          {...register("genre", { required: false })}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="platform"
        >
          Platform
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          id="platform"
          {...register("platform", { required: true })}
        />
        {errors.platform && (
          <p className="text-red-500 text-xs italic">Platform is required</p>
        )}
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="yearPublished"
        >
          Year Published
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="number"
          id="yearPublished"
          {...register("yearPublished", {
            required: true,
            min: 1900,
            max: new Date().getFullYear(),
          })}
        />
        {errors.yearPublished && (
          <p className="text-red-500 text-xs italic">
            Year Published must be between 1900 and {new Date().getFullYear()}
          </p>
        )}
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="physicalDigital"
        >
          Physical/Digital
        </label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="physicalDigital"
          {...register("physicalDigital", { required: true })}
        >
          <option value="">Select one</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>
        {errors.physicalDigital && (
          <p className="text-red-500 text-xs italic">
            Please select Physical or Digital
          </p>
        )}
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="publisher"
        >
          Publisher
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          id="publisher"
          {...register("publisher", { required: true })}
        />
        {errors.publisher && (
          <p className="text-red-500 text-xs italic">Publisher is required</p>
        )}
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="developer"
        >
          Developer
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          id="developer"
          {...register("developer", { required: true })}
        />
        {errors.developer && (
          <p className="text-red-500 text-xs italic">Developer is required</p>
        )}
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="completed"
        >
          Completed
        </label>
        <input
          className="mr-2 leading-tight"
          type="checkbox"
          id="completed"
          {...register("completed")}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="rating"
        >
          Rating
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="number"
          id="rating"
          {...register("rating", { required: true, min: 0, max: 10 })}
        />
        {errors.rating && (
          <p className="text-red-500 text-xs italic">
            Rating must be between 0 and 10
          </p>
        )}
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="images"
        >
          Images
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          id="images"
          {...register("images")}
        />
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Add Game
      </button>
    </form>
  );
};

export default GameForm;
