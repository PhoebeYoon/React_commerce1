###### 🌵 React_Tutorial_Part1

## React 란 
사용자 인터페이스를 만들기 위한 자바스크립트 라이브러리 입니다. React는 컴포넌트 기반입니다.   

- 스스로 상태를 관리하는 캡슐화된 컴포넌트를 만들고 그리고 이를 조합해서 복잡한 UI를 만들 수 있습니다. 컴포넌트는 작고 고립된 코드의 파편이라고 할 수 있으며 로직은 템플릿이 아닌 자바스크립트로 작성됩니다. 데이터가 변경될때 React는 컴포넌트를 효율적으로 업데이트하고 다시 랜더링합니다.  

- 개별 컴포넌트는 props라는 매개변수를 받아오고 render 함수를 통해 표시할 뷰 계층구조를 반환합니다.
render 함수는 화면에 보여주고자 하는 <b>내용</b>을 반환하는데 말하자면 <b>React 엘리먼트</b>를 반환합니다

- ReactDom.render()함수는 html 코드와 html 엘리먼트의 두가지 인수를 받습니다. 이 함수의 목적은 지정된 html 엘리먼트안에 html 코드를 표시하는 것입니다.   
- React.createElement(컴포넌트, props, ...) : 


따라서 다양한 형식의 데이터를 앱안에서 손쉽게 전달할 수 있고, DOM과는 별개로 상태를 관리할 수 있습니다.  
React는 Node서버에서 렌더링을 할 수도 있고 React native를 이용해서 모바일 앱도 만들 수 있습니다.   


📁public - index.html파일 있고, 가상 DOM을 위한 html파일입니다.   
📁src - index.js, App.js, App.css파일이 들어가 있습니다.   
  - [index.js]파일에는 'root' 엘리먼트를 읽어들이며 이것을 렌더링하는 과정이 들어가 있습니다.   
      그리고 index.js파일에서는     App.js를 포함하고 있습니다.  
  - [App.js] 에는 초기컴포넌트 내용이 들어가 있습니다. Router 설치하면 여기에 위치해야 합니다.    


📁asset  
📁components   
📁pages   


- React 컴포넌트는 render()라는 메서드를 구현하는데, 이것은 데이터를 입력받아 화면에 표시할 내용을 반환하는 역할을 합니다.


##  자바스크립트의 함수 복습 
node.js를 설치한 후에 터미널창에서 실행합니다.    
 
#### map()함수
[mapfunction.js]

```js
map함수는 (불러온값, 인덱스, 배열자기자신)의 인수를 갖습니다. 

let numbers=[1,2,3,4,5]
numbers.map((item)=>{
console.log(item*item
})
```   
터미널에서 ```> node mapfunction.js  엔터 ``` 실행결과를 확인합니다. 


#### forEach()
``` js
var arr = ['가','나','다','라'];
arr.forEach(function(item,index,arr2){ 
  console.log(item + index +arr2[index+1]); 
})

```  
터미널에서 ```> node mapfunction.js  엔터 ``` 실행결과를 확인합니다. 

#### 배열의 여러형태 
``` js
// 1.
let numbers=[1,2,3,4,5]
numbers.map((num)=>{
console.log(num * num)
})


// 2.
var arr = ['가','나','다','라'];
arr.forEach(function(item,index,arr2){ 
  console.log(item + index +arr2[index+1]); 
})

//3.
let data =['apple','kiwi', 'banana','orange'];
let x = data[0];
let z = data[2];
console.log(x,z);

let [a,b,c] = data;
console.log(a,b,c);

//4.
let obj = {
      name : 'apple',
      address : 'Korea',
      age : 500
      
    }

// console.log(name, age) 이렇게하면 에러발생

 let {name, age, address } = obj;
 console.log(address, name,age)
// let {urname, age, address } = obj; 변수명이 바뀌면 에러발생
// console.log(address, urname,age)

// 아래와 같이 사용할 수도 있다
let { name: myName, age: myAge} = obj;
console.log(myName, myAge);

```

위의 예제를 잘 보시면 우리가 이전에 배운 내용들에서 사용했던 표현들입니다. 자바스크립트의 표현식인것을 아시겠지요?

 
