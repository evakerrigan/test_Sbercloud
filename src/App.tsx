import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Create } from './pages/Create/Create';
import { Main } from './pages/Main/Main';

function App() {

  return (
    <div className="app">
      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Main />} />
          <Route path="/create" element={<Create />} />

        </Routes>

      </BrowserRouter>


    </div>
  )
}

export default App
