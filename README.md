# React_Tutorial_Part1

## React를 실습하기 위한 환경만들기
  1. node.js 설치
  - node.js 다운로드 ( https://nodejs.org/en/download/?utm_source=blog ) 사이트가기
  - Mac 또는 Windows 선택후 다운로드
  - 터미널창을 열고 ``` > node -v ``` v18.15.0 이런식으로 숫자가 나오면 설치가 된것입니다  
  2. 에디터 설치 
  - vs code 를 설치합니다.
  - 확장프로그램을 설치합니다   
  <img width="250" alt="스크린샷 2023-03-14 오후 11 29 45" src="https://user-images.githubusercontent.com/48478079/225034578-f586c00d-ccf9-42bd-a900-39a859fed80d.png"> <img width="230" alt="스크린샷 2023-03-14 오후 11 30 17" src="https://user-images.githubusercontent.com/48478079/225034602-97bf19da-7452-442e-b9ba-bbfa1bd3937b.png">   
  <img width="250" alt="스크린샷 2023-03-14 오후 11 28 52" src="https://user-images.githubusercontent.com/48478079/225034615-d4399db6-e5e1-4e84-827a-82ccc9b06c32.png"> <img width="250" alt="스크린샷 2023-03-14 오후 11 29 10" src="https://user-images.githubusercontent.com/48478079/225034630-811c2d41-cc3d-49a2-8d25-f4f4556ba929.png">    
  - vs code > Settings > 검색어: emmet > 그리고 아래와 같이 key에 'javascript' ,Value에 'javascriptreact'를 삽입해줍니다. 이것은 우리가 react 컴포넌트를 사용할때 emmet를 사용하게 해줍니다  
<img width="297" alt="스크린샷 2023-03-14 오후 11 19 24" src="https://user-images.githubusercontent.com/48478079/225030354-7b123b08-90df-4840-9015-615d6866d5be.png">    
3. 글로벌 설치 

```
> npm install 모듈이름 -g
```    
이렇게 설치하면 매 프로젝트마다 모듈을 따로 설치하지않고 한번 설치하여 여러 프로젝트에서 같은 모듈을 공유합니다. 그런데 이렇게하면 모듈이 업데이트되면? 이 프로젝트와 저 프로젝트에서 같은 모듈을 모두 변경할때 문제가 없나? 싶기도 하고, 업데이트를 신경써서 따로 해줘야 하고 뭐 그런 것들이 생깁니다.

🌹  보일러 플레이트(Boilerplate) : 컴퓨터 프로그래밍에서 여러군데 재사용되며, 반복적되는 코드를 의미합니다. 

4. npx 설치
  - npx 로 설치하면 위의 글로벌설치시에 있을 수 있는 모듈업데이트 문제를 간단히 해결할 수 있습니다
  - npx는 npm 5.2.0 버전이상부터 새로 추가된 도구로 패키지를 설치하여 '실행'하는 용도로 사용됩니다. 
  - 기본적으로 실행되어야 할 패키지가 경로에 있는지 확인하고 있다면 실행합니다. 패키지가 없다면 먼저 설치하고 실행합니다. 
  - 매번 최신버전의 파일만을 임시로 불러와 실행시키고 그후 그 파일은 없어지는 방식으로 모듈이 진행됩니다  
 
 Mac,  
  ```
  > sudo npx create-react-app mini-blog
  > cd mini-blog
  > code .
  ```   
 Windows,  
  ```
  > npx create-react-app mini-blog
  > cd mini-blog
  > code .
  ```    
  위의 과정을 거쳐서 나오는 화면은,  
  <img width="173" alt="스크린샷 2023-03-15 오전 11 26 42" src="https://user-images.githubusercontent.com/48478079/225188944-5d2f3464-7fc0-4b52-8b39-5821be724d56.png">

5. 설치된 내용 살펴보기 
📁node_modules
📁public 📁 index.html   
📁src📁App.js , index.js  
  
  
  
  
