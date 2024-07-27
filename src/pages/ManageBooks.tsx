import { IoClose, IoFilter } from 'react-icons/io5';
import BookTable from '../components/BookTable';
import { CiSearch } from 'react-icons/ci';

const ManageBooks = () => {
  return (
    <div className="flex-1 min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Manage Books</h1>
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
          + Add Book
        </button>
      </div>
      <div className="filteration-wrapper flex justify-between mb-8">
        <div className="flex gap-2">
          <span
            className="flex items-center gap-2 bg-white rounded-md py-1 px-2"
            style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }}
          >
            Fiction
            <IoClose />
          </span>
          <span
            className="flex items-center gap-2 bg-white rounded-md py-1 px-2"
            style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }}
          >
            <IoFilter /> More Filters
          </span>
        </div>
        <div className="relative">
          <CiSearch className="absolute top-2 left-1" />
          <input
            type="text"
            className="py-1 px-4 pl-6 rounded-md"
            placeholder="Search"
            style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }}
          />
        </div>
      </div>
      <BookTable />
    </div>
  );
};

export default ManageBooks;
