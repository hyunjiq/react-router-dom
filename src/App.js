import { Link, Routes, Route } from "react-router-dom";

import About from './componant/About';
import Board from './componant/Board';
import Entry from "./componant/Entry";

function App() {
  return (
    <div className="App">
      <div>
        <a href="/">로고</a>
        <Link to="/about">회사소개</Link>
        <Link to="/board">공지사항</Link>        
      </div>
      <Routes>
        <Route path='/' element={ <Entry></Entry> }></Route>
        <Route path='/about' element={ <About></About> }></Route>
        <Route path='/board' element={ <Board></Board> }></Route>
      </Routes>
      {/*Routes 바깥에 쓴 컴포넌트는 항상 노출*/}
      <aside>나는 퀵</aside>
      <footer>나는 하단</footer>
    </div>
  );
}

export default App;
