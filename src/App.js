import logo from './logo.svg';
import './App.css';
import AddStudent from './components/AddStudent';
import SearchStudent from './components/SearchStudent';
import DeleteStudent from './components/DeleteStudent';
import ViewStudent from './components/ViewStudent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path=''element={<AddStudent />}/>
    <Route path='search'  element={<SearchStudent/>}/>
    <Route path='view'  element={<ViewStudent/>}/>
    <Route path='add'  element={<AddStudent/>}/>
    <Route path='delete'  element={<DeleteStudent/>}/>
   </Routes>
   
   
   </BrowserRouter>
  );
}

export default App;
