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

배열을 담은 JSON 파일의 데이터에 접근할 때는 map() 함수를 이용합니다.

[ App.js ]   
```javascript
import React from "react";
import "./styles.css";

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

  return (
    <div className="App">
      <ul className="container">{newArrayData}</ul>
      <h1>{objectData.welcomeMessage}</h1>
      <h2>you connected to {objectData.localAddress}</h2>
      {objectData.isDevEnv ? (
        <span>this is development environment</span>
      ) : null}
    </div>
  );
}

``` 

객체를 담은 JSON 파일의 데이터에 접근할 때는 자바스크립트 객체와 똑같이 이용하면 됩니다.  
``` const {welcomeMessage, localAddress, isDevEnv} = objectData;     ```
