import Navbar from './Navbar';
import Home from './Home'
import Create from './Create';
import { BrowserRouter, Routes, Route} from 'react-router-dom'; 

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/"  exact={true}  element={<Home /> } ></Route>
            <Route path="/create" exact={true}  element={<Create /> } ></Route>        
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
