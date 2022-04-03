import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import Library from './components/Library/Library';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

const App = () => {
  const [library, setLibrary] = useState(JSON.parse(localStorage.getItem('library')) || []);
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/library' element={<Library library={library} setLibrary={setLibrary} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;