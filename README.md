###### 🌵 React_Tutorial_Part1


## 용어정리하고 갑니다        

1. npm install 이라고 하면 :file_folder:node_module 가 생성되면서 패키지가 설치됩니다.  ``` npm i ``` 는 ```  npm install ``` 를 줄인것입니다 
2. npm install 패키지 --save 를 붙이면 package.json 파일에 dependencies 라는 항목에 해당 패키지의 정보를 추가합니다.
3. npm install 패키지 --save-dev 를 하면  dependencies에 추가되는 것이 아니라 devDepenencies 항목으로 추가되며 이는 빌드시에 차이가 있습니다.
4. npm install 패키지 -g 에서 g는 global의 의미입니다. 전역적으로 설치하겠다는 의미입니다. 이 옵션을 빼고 설치하면 매 프로젝트마다 모듈을 설치하게 됩니다. -g 옵션이 좋을 수도 있지만 그렇지 않을 수도 있습니다. global로 설치하면 한번만 설치하니까 좋다고 생각할 수도 있지만 해당 모듈을 설치한 후에 업데이트되었는지 일일이 확인하고 다시 설치해줘야 하는 것도 문제가 되고  및 해당 모듈로 이미 만들어놓은 프로젝트가 업데이트된 모듈로 영향을 받을 수도 있습니다.  
5. npx : 자바스크립트 패키지 관리 모듈인 npm(Node Package Module) 5.2.0버전부터 추가되었으며 npm에서 제공하는 일종의 도구입니다. npx는 필요한 패키지를 임시로 설치해서 '실행' 하는 용도로 사용됩니다. 
6. npx로 설치하면 매번 최선버전의 모듈을 설치해 줍니다 그래서 'create-react-app'과 같은 boilerplate(보일러플레이트) 모듈에는 더 효과적이라 할 수 있습니다.

>boilerplate(보일러플레이트는 boilerplate code를 말하는 것으로 컴퓨터프로그래밍에서 변화가 거의 없거나 전혀 없는 여러곳에 반복되어 사용되는 코드의 섹션을 말합니다. 이 용어는 19세기 중반에 보일러에 제조정보를 넣은 강철판을 일컫는 용어였는데 이것이 인쇄분야에서 사용되면서 반복적으로 사용되는 텍스트를 의미하게 되었습니다 




## React에서 배열을 담은 JSON 파일과 객체를 담은 JSON 파일을 불러오는 방법에 대해서 알아봅시다.


데이터를 불러올 로컬 JSON 파일 / JS ES6의 map() 함수

### map() 형식 
```js
arr.map(function(element, index, array){  }, this);
```

### 실습순서 :
1. 터미널에서 npx create-react-app 프로젝트명
2. code .
3. 📁src 에 objectData.json  , arraryData.json 파일을 생성합니다.
4. App.js 안에 아래의 내용을 삽입합니다.
5. 브라우저의 개발자도구를 열어서 결과를 확인합니다 


[ objectData.json ] 
```
{
  "welcomeMessage": "Hello World!",
  "localAddress": "127.0.0.1",
  "isDevEnv": true
}
```

[ arraryData.json ]
``` 
[
  {
    "name": "Kevin",
    "age": "22",
    "country": "US"
  },
  {
    "name": "Kim",
    "age": "27",
    "country": "South Korea"
  },
  {
    "name": "Jeong",
    "age": "27",
    "country": "South Korea"
  },
  {
    "name": "Watson",
    "age": "30",
    "country": "UK"
  },
  {
    "name": "Carlos",
    "age": "50",
    "country": "Mexico"
  }
]
```


배열을 담은 JSON 파일의 데이터에 접근할 때는 map() 함수를 이용합니다.

[ App.js ]   
```javascript
import React from "react";

import arrayData from "./arrayData";
import objectData from "./objectData";

export default function App() {
  console.log("arrayData: ", typeof arrayData);
  console.log(arrayData);
  console.log("objectData: ", typeof objectData);
  console.log(objectData);

  const newArrayData = arrayData.map((item, index) => {
    return (
      <li key={index}>
        {item.name}({item.age}) from {item.country}
      </li>
    );
  });
  // end of newArrayDat
  return (
    <div className="App">
      <ul>{newArrayData}</ul>
      <h1>{objectData.welcomeMessage}</h1>
      <h2>you connected to {objectData.localAddress}</h2>
      {objectData.isDevEnv ? (
        <span>this is development environment</span>
      ) : null}
    </div>
  );
}

``` 

<img width="650" alt="스크린샷 2023-04-25 오전 10 52 51" src="https://user-images.githubusercontent.com/48478079/234155126-6806e871-c4b9-42b4-8fcc-db39ff0a0ff2.png">





- 객체를 담은 JSON 파일의 데이터에 접근할 때는 자바스크립트 객체와 똑같이 이용하면 됩니다.  
``` const {welcomeMessage, localAddress, isDevEnv} = objectData;     ```     

> Axios, Fetch, XMLHttpRequest는 서버로부터 데이터를 받기 위한 함수(라이브러리)입니다. 하지만 우리는 로컬에 있는 JSON 파일을 불러오고 싶은 것이기 때문에 위의 요소들은 요구사항과 맞지않습니다. 로컬이 아닌 서버로부터 JSON 파일을 받기 위해서는 Axios, Fetch, XMLHttpRequest를 이용해야 합니다.    

