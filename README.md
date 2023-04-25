###### 🌵 React_Tutorial_Part1


React에서 배열을 담은 JSON 파일과 객체를 담은 JSON 파일을 불러오는 방법에 대해서 알아봅시다.


Axios, Fetch, XMLHttpRequest를 필요로하지 않습니다.
JSON.parse 함수를 필요로하지 않습니다.
데이터를 불러올 로컬 JSON 파일
JS ES6의 map() 함수


<img width="339" alt="스크린샷 2023-03-17 오후 1 51 38" src="https://user-images.githubusercontent.com/48478079/225815597-cc04eda6-e485-4978-949c-55b60a115a9e.png">


import를 하게 되면 자동으로 JSON.parse 함수가 적용된 것 처럼 동작합니다.
즉, arrayData와 objectData는 각각 object 타입을 가지며 불러온 값을 가지게 됩니다.   

<img width="672" alt="스크린샷 2023-03-17 오후 1 52 20" src="https://user-images.githubusercontent.com/48478079/225815678-a3c9e5a7-8432-416d-8005-d6d4647ba9cb.png">

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

