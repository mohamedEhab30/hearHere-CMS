import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ManageBooks from './pages/ManageBooks';
import AddBook from './pages/AddBook';
import EditBook from './pages/EditBook';

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-grow p-6">
          <Routes>
            <Route path="/manage-books" element={<ManageBooks />} />
            <Route path="/add-book" element={<AddBook />} />
            <Route path="/edit-book/:id" element={<EditBook />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
