import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchComponent from './components/search';
import EventComponent from './components/events';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchComponent />} />
          <Route path=":artistName/events" element={<EventComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
