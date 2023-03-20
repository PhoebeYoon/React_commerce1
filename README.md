###### 🌵 React_Tutorial_Part1

## 404에러

지정된 경로가 아닌 다른 경로로 접속될 경우를 대비해서 내용을 추가해 보겠습니다. 
Route에서 '*'는 정의죄디 않은 경로접속시를 말합니다.

:file_folder:src :file_folder: NotFound.js 를 생성합니다. 
[ NotFound.js ]
``` javascript
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (  
    <div className="not-found">
      <h2>Sorry,</h2>
      <p>요청하신 페이지를 찾을 수 없습니다.</p>
      <Link to="/">홈으로 가기</Link>
    </div>
  );
}

export default NotFound;

```   

[App.js] 아래내용을 추가해 주세요.   
```javascript 
import NotFound from './NotFound';
<Route path="*"  element={ <NotFound /> } ></Route>   

```   

이것으로 React part1 수업을 마치겠습니다.  다음은 part2에서 뵙겠습니다. 
