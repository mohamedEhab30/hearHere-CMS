import { RiDeleteBinLine } from 'react-icons/ri';
import { Book } from '../types';
import { FiEdit2 } from 'react-icons/fi';
import Checkbox from './ui/Checkbox';
import { Link } from 'react-router-dom';
interface BookRowProps {
  book: Book;
  isGrey: boolean;
}
// change the color
const BookRow = ({ book, isGrey }: BookRowProps) => {
  return (
    <tr className={`border-b ${isGrey ? 'bg-[#f9f9f9]' : ''}`}>
      <td className="py-2 px-4">
        <div className="flex items-center gap-1">
          <Checkbox />
          {book.id}
        </div>
      </td>
      <td className="py-2 px-4">{book.title}</td>
      <td className="py-2 px-4">
        <span className="underline">{book.author}</span>
      </td>
      <td className="py-2 px-4">
        <img
          src={book.thumbnail}
          alt={book.title}
          className="w-12 h-12 object-cover"
        />
      </td>
      <td className="py-2 px-4">
        {book.categories.map((category, index) => (
          <span
            key={index}
            className="bg-gray-200 text-gray-700 py-1 px-2 rounded-full text-xs mr-1"
          >
            {category}
          </span>
        ))}
      </td>
      <td className="py-2 px-4">
        <Link
          className="text-[#ddd] hover:text-blue-500 mr-4 inline-block"
          to={'/edit-book/5'}
        >
          <FiEdit2 />
        </Link>
        <button className="text-[#ddd] hover:text-red-500">
          <RiDeleteBinLine />
        </button>
      </td>
    </tr>
  );
};
export default BookRow;
