###### :cactus: React_Tutorial_Part1    

파일사이의 관계도를 잘 구분하는 것이 중요하다  

<img width="860" alt="스크린샷 2023-03-15 오후 12 09 57" src="https://user-images.githubusercontent.com/48478079/225195864-f7e62ad1-7d03-4850-9799-4037b54c95f6.png">

index.js파일에서는 이 어플리케이션의 출발(?) 이 되면서 react의 컴포넌트에 반응하고 DOM에 mounting (DOM에 삽입 ?) 해 주는 역할을 한다. 또힌 ReactDOM를 랜더링해주는 파일또한 index.js 이다

이제 이번 수업에서 불필요한 파일 (App.test.js , reportWebVitals.js) 를 삭제합니다
파일을 삭제했기때문에 index.js 파일을 열어서 
``` import reportWebVitals from './reportWebVitals'  과 아래쪽에 있는  reportWebVitals();``` 도 삭제해줍니다   

```
파일내용 변경이 저장이 되질 않는경우 그리고 혹시 맥북에서 사용하신다면, 
해당 프로젝트가 있는 폴더를 클릭 후 '정보가져오기' 선택 > 팝업창 오른쪽맨아래에 있는 폴더아이콘 클릭 > 암호입력 
'사용자설정으로 연결함'함옥에서 '이름' 항목 아래쭈욱 시스템, staff, everyone등 이 있으면 
'권한'클릭해서 '읽기 및 쓰기' 로 변경하세요 
그리고 그 아래쪽에 동그라미에 점3개 있는 아이콘를 클릭해서 '하위 항목에 적용'를 꼭 해주셔야 합니다 
```   
다른 내용은 나중에 천천히 설명드리도록 하겠습니다. 이제 터미널에서 해당 프로젝트를 실행보도록 하겠습니다.   
터미널창에서 ```  npm run start  ``` 를 하면 되는데요 여기서 아래의 이미지를 잠깐 보도록 하겠습니다.  

<img width="400" alt="스크린샷 2023-03-15 오후 2 05 53" src="https://user-images.githubusercontent.com/48478079/225212880-0ee56f5d-a561-4730-9f2b-96d28667a052.png">  

왜 start를 사용하는지 이해되셨죠!  

우리의 어플리케이션이 웹브라우저로 실행되면 '개발자도구'를 엽니다. 그리고 vscode에는 App.js 파일을 열어주세요. 그리고 개발자도구의 엘리먼트탭과 App.js파일의 내용을 스스로 비교해보세요   
<img width="681" alt="스크린샷 2023-03-15 오후 2 14 19" src="https://user-images.githubusercontent.com/48478079/225213611-55b4afb7-2ec8-4dc4-be3f-6c6b274a7282.png">

여기까지 잘 따라오셨고 내용을 이해하셨다면 
App.js 파일의 내용에서 이미지와 내용을 좀 삭제해 보도록 하겠습니다.   

[App.js]
``` javascript
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       Learing React with me
      </header>
    </div>
  );
}
export default App;
```
변경한 후 브라우저로 결과를 확인하세요.   
이제 한가지만 더 실습하고 이번 수업은 여기서 '끝' 하겠습니다.   

해당 프로젝트폴더에서 :file_folder:node_modules 를 삭제해 봅니다.
그리고 ```  npm run start  ```  를 실행하면 실행되질 않습니다. 이유는 node_modules에는 어플리케이션에 필요한 각종 모듈이 들어있는데 이걸 삭제했으니 실행이 당연히 되질 않는것입니다.   

또 다른 사람의 레포지토리에서 다른 프로젝트를 다운로드 받아서 보면 node_modules폴더는 없습니다. 내용이 너무 많고 크기때문에 레포지토리에 올려놓질 않는것입니다. 그렇다면 어떻게해야 할까요?
터미널에서 ``` > npm install   ```   합니다. 그러면 node_modules폴더가 생성이 되는데 이때 package.json 파일안에 있는 ' "dependencies" ' 내용을 참조해서 설치됩니다. 

설치가 끝났다면  ```  npm run start  ```  하면 실행되는것을 확인할수 있습니다.

