###### :cactus: React_Tutorial_Part1


## What is React 
리액트는 자바스크립트 라이브러리의 하나로서 사용자 인터페이스를 만들기 위해 사용됩니다. 페이스북과 개별 개발자 및 기업들 공동체에 의해 유지보수되고 있습니다. 리액트는 Single Page Apps (SPA)를 쉽게 만들 수 있으며 UI 컴포넌트를 구축하기 위한 도구입니다.  
최초 출시일은 2013년 5월 29일 이며, 웹플랫폼, 자바스크립트언어를 사용합니다.  


### 리액트 수업을 위해서는 
- html, css, DOM, es6, Node.js , npm 에 대한 사전지식이 요구됩니다.
- 실습을 위해서는 먼저 node.js를 설치해야 합니다. Node.js는 크롬 V8 자바스크립트 엔진으로 빌드한 자바스크립트 런타임입니다.
- 리액트수업을 위해 node.js를 먼저 설치해야 하는 이유는 아래와 같습니다. 
-- 우리가 html,css,javascript를 이용해서 웹페이지를 만들고 웹브라우저(크롬)에서 만든 페이지를 열면 자바스크립트가 그냥 실행됩니다 뭐 따로 설치해야 하는 것도 없습니다. 이는 웹브라우저에는 자바스크립트의 해석하고 실행하는 엔진이 장착되어 있기때문입니다. 그런데 우리가 웹브라우저가 아닌 환경에서 자바스크립트로 만든 뭔가를 실행하려고 하면 문제가 발생합니다. 이때 Node.js가 필요합니다. 
Node.js는 웹브라우저 환경이 아닌 곳에서도 자바스크립트를 사용할 수 있게 해줍니다


- 그럼 npm은 대체 무슨 역할을 할까요 
npm은 node.js패키지 매니저 도구입니다. npm은 세계에서 가장 큰 소프트웨어 저장소입니다. 오픈소스 개발자들은 소프트웨어를 공유하기 위해 npm를 사용합니다. npm웹사이트 ( https://www.npmjs.com/)에 가시면 수많은 패키지들이 있습니다. 개발에 필요한 것을 찾아 설치하면 끝~ 입니다. 참고로, npm 은 따로 설치할 필요없이 node.js가 설치될때 함께 설치됩니다. 


## Thinking in React

React can change how you think about the designs you look at and the apps you build. When you build a user interface with React, you will first break it apart into pieces called components. Then, you will describe the different visual states for each of your components. Finally, you will connect your components together so that the data flows through them. In this tutorial, we’ll guide you through the thought process of building a searchable product data table with React.

###### (발췌 : https://react.dev/learn/thinking-in-react )


### DOM (Document Object Model)은 웹페이지를 이루는 태그들을 자바스크립트가 이용할 수 있게끔 트리구조로 만든 객체 
Document of Object Model의 약자입니다.  웹 페이지는 일종의 문서(document)로 DOM은 문서의 구조화된 표현(structured representation)을 제공하여 자바스크립트가 DOM 구조에 접근하여 구조를 변경하고, 스타일을 입히고 내용을 변경할 수 있는 수단을 제공합니다. DOM 은 nodes와 objects로 문서를 표현합니다     

 <img width="300" alt="스크린샷 2023-05-05 오후 2 12 03" src="https://user-images.githubusercontent.com/48478079/236382415-1efac404-fb21-4be0-a623-01efb4ff1273.png">

 
## 뷰(view)

자바스크립트기반 프레임워크들이 여러개 있지만 공통적으로 모델(Model)과 뷰(View)가 있습니다.
모델은 어플리케이션에서 사용하는 데이터를 관리하는 영역이고
뷰는 사용자에게 보이는 부분입니다.

사용자화면에 뷰를 보여주는 것을 <b>랜더링</b>이라 하는데 리액트 라이브러리가 뷰를 랜더링하는 것을 이해하려면 초기 랜더링과 리렌더링의 개념을 알아야 합니다. 어떤 것이든 맨처음 어떻게 보일지를 정하는 초기 렌더링이 필요합니다. 리액트에서는 이를 render함수가 합니다. 이 render함수는 뷰가 어떻게 생겼고 어떻게 작동하는지에 대한 정보를 지닌 객체입니다. 
렌더링작업이 끝나면 가지고 있는 정보를 이용하여 html마크업을 만들고 이를 우리가 보는 실제 페이지의 DOM요소안에 주입합니다.

<img width="450" alt="스크린샷 2023-03-14 오후 7 38 51" src="https://user-images.githubusercontent.com/48478079/224975283-6f66ee13-7f5c-4665-bd49-52cc81051539.png">
만약 리액트 라이브러리에서 업데이트가 진행되면 어떻게 할까요 리액트는 뷰를 업데이트할때 실제 '업데이트'를 한다기 보다는 '새로운 내용'을 '이전 내용'에 갈아끼우는 것입니다. 그리고 이 작업도 render() 함수가 맡아서 합니다. 아래 이미지를 참조하세요

<img width="450" alt="스크린샷 2023-03-14 오후 7 54 11" src="https://user-images.githubusercontent.com/48478079/224981238-c58ba515-f69f-4f34-9a01-8ec0fcbce9e8.png">   
(오른쪽 이미지의 '새로운 DOM 트리'는 virtual DOM입니다 )
리액트와 Virtual DOM은 업데이트 처리 간결성을 제공합니다


### 가상DOM (Virtual DOM)
DOM은 문서객체모델이라고 하는데  이것은 최종적으로 html문서를 파싱하여 '문서의 구성요소들을 객체로 구조화하여 나타낸것' 입니다. 
DOM은 html엘리먼트,속성, css스타일, 이벤트, 메소드 등을 제어하게 되는데 이때 DOM을 반복적으로 직접 조작하게 되면 브라우저는 렌더링을 자주하게 되고 
그 만큼 조작에 따른 렌더링의 비효율성과 복잡도가 증가하게 됩니다.
그래서 virtual DOM은 조작에 대한 렌더링의 비효율성을 개선하고 SPA(Single Page Application)의 특징으로 DOM 복잡도 증가에 따른 최적화 및 
유지보수를 더 쉽게 하기 위해 Virtual DOM이라는 DOM을 추상화한 가상의 객체를 사용하는 것입니다.  

<img width="500" alt="스크린샷 2023-05-05 오후 1 57 44" src="https://user-images.githubusercontent.com/48478079/236380539-863821b0-36ff-49f5-9c63-524b1ed9152d.png">  
변경내용을 DOM에 직접 수정하는게 아니라 중간단계로 Virtual DOM에 변경내역을 한번에 모으고 실제 DOM과 변경된 Virtual DOM의 차이를 판단한 후 구성요소의 변경된 부분만 찾아 변경한뒤 렌더링은 한번만 하는 것입니다. 




### 도움이 되는 사이트 
https://reactnative.dev/docs/tutorial.html

