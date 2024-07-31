import { useState, ChangeEvent, FormEvent } from 'react';
import { useParams } from 'react-router-dom';
import { IFormData } from '../types';
import BookForm from '../components/Form';

const initialBookData: IFormData = {
  title: '',
  description: '',
  thumbLink: '',
  author: '',
  fileLink: '',
  category: [],
};

const EditBook = () => {
  const { id } = useParams<{ id: string }>();
  const [book, setBook] = useState<IFormData>(initialBookData);
  //chnage the state here
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { id, value } = e.target;
    setBook((prev) => ({ ...prev, [id]: value }));
    //check here the id
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(book);
  };
  // make component for chage events
  return (
    <>
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Edit Book {id}</h1>
        <p className="text-gray-500">Edit existing book and their details</p>
      </div>
      <form onSubmit={handleSubmit}>
        <BookForm formData={book} handleChange={handleChange} />
        <hr />
        <div className="text-right mt-5">
          <button
            type="button"
            className="border bg-white py-1 px-4 rounded mr-2"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-700 text-white py-1 px-4 rounded"
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
};

export default EditBook;
