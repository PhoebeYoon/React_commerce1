###### 🌵 React_Tutorial_Part1


<img width="450" alt="스크린샷 2023-03-15 오후 4 47 52" src="https://user-images.githubusercontent.com/48478079/225241714-df2467c4-94a5-417a-bfaf-1a39543fef5e.png">.  
이렇게 만들어보겠습니다.   

:file_folder:src :file_folder:Navbar.js 생성한 후  'sfc' 탭키 그러면 기본태그가 쭈욱 나옵니다.   
이것은 초반에 설치했던 'simple react snippets' 라는 패키지가 해 주는 것입니다 

[ Navbar.js ]

``` javascript 
const Navbar = () => {
  return ( 
    <nav className="navbar">
      <h1>The Nobody's Blog</h1>
      <div className="links">
        <a href="/"> Home</a> | 
        <a href="/create"> New Blog</a>
      </div>
    </nav>
   );
}
export default Navbar;

```    
[ Home.js ]
``` javascript 
const Home = () => {
  return ( 
    <div className="home">
      <h2>Home </h2>
    </div>
   );
}
 
export default Home;
```   
[ App.js ]

``` javascript
import './App.css';
import Navbar from './Navbar';
import Home from './Home'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
        <Home />
      </div>
    </div>
  );
}
export default App;

```    
결과화면은 ,    
<img width="275" alt="스크린샷 2023-03-15 오후 5 10 26" src="https://user-images.githubusercontent.com/48478079/225246875-983bbf7b-5844-4897-9a9a-c8ffd3660580.png">




