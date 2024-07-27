import { useState } from 'react';
import BookForm from '../components/Form';
import { IFormData } from '../types';

const AddBook = () => {
  const [formData, setFormData] = useState<IFormData>({
    title: '',
    description: '',
    thumbLink: '',
    author: '',
    fileLink: '',
    category: [],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Add Book</h1>
        <p className="text-gray-500">Add new book and their details</p>
      </div>
      <form action="" onSubmit={handleSubmit}>
        <BookForm formData={formData} handleChange={handleChange} />
        <hr />
        <div className="text-right mt-5">
          <button className="border bg-white py-1 px-4 rounded mr-2">
            Cancle
          </button>
          <button className="bg-orange-500 hover:bg-orange-700 text-white py-1 px-4 rounded">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
