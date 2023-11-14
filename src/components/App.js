import Navbar from './Navbar';
import Home from './Home';
import { Routes,Route } from 'react-router-dom';
import '../styles/App.css';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
