import BookRow from './BookRow';
import Checkbox from './ui/Checkbox';
const BookTable = () => {
  const books = [
    {
      id: 232,
      title: 'Allegiant',
      author: 'Veronica Roth',
      thumbnail: '/img/jude.jpg',
      categories: ['Fiction', 'Dystopia'],
    },
    {
      id: 231,
      title: 'Insurgent',
      author: 'Veronica Roth',
      thumbnail: '/img/jude.jpg',
      categories: ['Fiction', 'Dystopia'],
    },
    {
      id: 230,
      title: 'Divergent',
      author: 'Veronica Roth',
      thumbnail: '/img/jude.jpg',
      categories: ['Fiction', 'Dystopia'],
    },
    {
      id: 229,
      title: 'The Help',
      author: 'Kathryn Stockett',
      thumbnail: 'path/to/thumbnail4.jpg',
      categories: ['Fiction', 'History'],
    },
    {
      id: 228,
      title: 'Life of PI',
      author: 'Yann Martel',
      thumbnail: 'path/to/thumbnail5.jpg',
      categories: ['Fiction', 'Adventure'],
    },
    {
      id: 227,
      title: 'Little Women',
      author: 'Louisa May Alcott',
      thumbnail: 'path/to/thumbnail6.jpg',
      categories: ['Fiction', 'Romance'],
    },
    {
      id: 226,
      title: 'We Were Liars',
      author: 'E. Lockhart',
      thumbnail: 'path/to/thumbnail7.jpg',
      categories: ['Fiction', 'Thriller'],
    },
  ];

  return (
    <div
      className="flex-1 overflow-x-auto bg-white rounded-lg min-h-screen"
      style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }}
    >
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="">
          <tr>
            <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <div className="flex items-center gap-1">
                <Checkbox />
                ID
              </div>
            </th>
            <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Title
            </th>
            <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Author
            </th>
            <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Thumbnail
            </th>
            <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Categories
            </th>
            <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {books.map((book, index) => (
            <BookRow key={book.id} book={book} isGrey={index % 2 == 0} />
          ))}
        </tbody>
      </table>
      <div className="px-4 py-3 border-t border-gray-200 sm:px-6">
        <div className="flex items-center justify-between">
          <div className="buttons">
            <button
              className="bg-white rounded-md py-1 px-2 mr-2"
              style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }}
            >
              Previous
            </button>
            <button
              className="bg-white rounded-md py-1 px-2"
              style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }}
            >
              Next
            </button>
          </div>
          <div className="pagination">
            <p className="text-[14px]">Page 1 of 10</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookTable;
