import { Link, Routes, Route } from "react-router-dom";

import About from './componant/About';
import Board from './componant/Board';

function App() {
  return (
    <div className="App">
      <div>
        <Link to="/about">회사소개</Link>
        <Link to="/board">공지사항</Link>
      </div>
      <Routes>
        <Route path='/about' element={ <About></About> }>공지사항</Route>
        <Route path='/board' element={ <Board></Board> }>회사소개</Route>
      </Routes>
      
    </div>
  );
}

export default App;
