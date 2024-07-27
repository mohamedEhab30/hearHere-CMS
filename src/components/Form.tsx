import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { FormInput } from '../data';
import { IFormData } from '../types';

interface IProps {
  formData: IFormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const initialCategories = [
  'Fiction',
  'Thriller',
  'Adventure',
  'Romance',
  'Horror',
  'Comedy',
];
const colors = ['#e2a88f', '#808080'];

const BookForm = ({ handleChange, formData }: IProps) => {
  const [categories, setCategories] = useState(initialCategories);

  const categoryColors: { [key: string]: string } = categories.reduce(
    (acc: { [key: string]: string }, category, index) => {
      acc[category] = colors[index % colors.length];
      return acc;
    },
    {}
  );

  const removeCategory = (categoryToRemove: string) => {
    setCategories(
      categories.filter((category) => category !== categoryToRemove)
    );
  };

  const renderFormInputs = FormInput.map((input) => (
    <div className="flex justify-between items-center mb-8 pl-5" key={input.id}>
      <label htmlFor={input.id}>
        {input.label}
        <span className="text-red-600">*</span>
      </label>
      <input
        className="w-[800px] rounded-[5px] border py-2 px-10 items-center outline-none mb-4 pl-10"
        type="text"
        placeholder={input.placeholder}
        id={input.id}
        value={formData[input.id]}
        onChange={handleChange}
      />
    </div>
  ));

  return (
    <>
      {renderFormInputs}
      <div className="flex justify-between items-center mb-8 pl-5 ">
        <label htmlFor="">
          Categories<span className="text-red-600">*</span>
        </label>
        <div className="w-[500px] rounded-[5px] py-1 flex gap-2">
          {categories.map((category) => (
            <span
              key={category}
              className="rounded-[25px] px-2 cursor-pointer text-[12px] flex items-center gap-1"
              style={{
                backgroundColor: categoryColors[category],
                color: '#FFF',
              }}
            >
              {category} <IoClose onClick={() => removeCategory(category)} />
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default BookForm;
