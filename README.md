###### :cactus: React_Tutorial_Part1

## React를 실습하기 위한 환경만들기
  1. node.js 설치
  - node.js 다운로드 ( https://nodejs.org/en/download/?utm_source=blog ) 사이트가기
  - Mac 또는 Windows 선택후 다운로드
  - 터미널창을 열고 ``` > node -v ``` v18.15.0 이런식으로 숫자가 나오면 설치가 된것입니다  
  2. 에디터 설치 
  - vs code 를 설치합니다.
  - 확장프로그램을 설치합니다   
  <img width="250" alt="스크린샷 2023-03-14 오후 11 29 45" src="https://user-images.githubusercontent.com/48478079/225034578-f586c00d-ccf9-42bd-a900-39a859fed80d.png"> <img width="230" alt="스크린샷 2023-03-14 오후 11 30 17" src="https://user-images.githubusercontent.com/48478079/225034602-97bf19da-7452-442e-b9ba-bbfa1bd3937b.png">   
  <img width="250" alt="스크린샷 2023-03-14 오후 11 28 52" src="https://user-images.githubusercontent.com/48478079/225034615-d4399db6-e5e1-4e84-827a-82ccc9b06c32.png">  
  - vs code > Settings > 검색어: emmet > 그리고 아래와 같이 key에 'javascript' ,Value에 'javascriptreact'를 삽입해줍니다. 이것은 우리가 react 컴포넌트를 사용할때 emmet를 사용하게 해줍니다  
<img width="297" alt="스크린샷 2023-03-14 오후 11 19 24" src="https://user-images.githubusercontent.com/48478079/225030354-7b123b08-90df-4840-9015-615d6866d5be.png">     

3. 글로벌 설치 
```
> npm install 모듈이름 -g
```    
이렇게 설치하면 매 프로젝트마다 모듈을 따로 설치하지않고 한번 설치하여 여러 프로젝트에서 같은 모듈을 공유합니다. 그런데 이렇게하면 모듈이 업데이트되면? 이 프로젝트와 저 프로젝트에서 같은 모듈을 모두 변경할때 문제가 없나? 싶기도 하고, 업데이트를 신경써서 따로 해줘야 하고 뭐 그런 것들이 생깁니다.
그래서 우리는  4번 설치방법으로 진행하도록 하겠습니다.  

🌹  보일러 플레이트(Boilerplate) : 컴퓨터 프로그래밍에서 여러군데 재사용되며, 반복적되는 코드를 의미합니다. 

4. npx 설치
  - npx 로 설치하면 위의 글로벌설치시에 있을 수 있는 모듈업데이트 문제를 간단히 해결할 수 있습니다
  - npx는 npm 5.2.0 버전이상부터 새로 추가된 도구로 패키지를 설치하여 '실행'하는 용도로 사용됩니다. 
  - 기본적으로 실행되어야 할 패키지가 경로에 있는지 확인하고 있다면 실행합니다. 패키지가 없다면 먼저 설치하고 실행합니다. 
  - 매번 최신버전의 파일만을 임시로 불러와 실행시키고 그후 그 파일은 없어지는 방식으로 모듈이 진행됩니다  
 
 터미널창에서  ``` npx create-react-app 프로젝트명 ``` 이렇게하시면 새로운 프로젝트가 생성되면서 프로젝트명의 폴더가 만들어집니다.    
 
 
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
📝 윈도우 사용자분중에서 설치에 에러가 생기신다면 터미널에서    
``` Set-ExecutionPolicy Unrestricted 엔터 -> 'y'  ```   
시도해 보시기 바랍니다 
  
  위의 과정을 거쳐서 나오는 화면은,  
  <img width="173" alt="스크린샷 2023-03-15 오전 11 26 42" src="https://user-images.githubusercontent.com/48478079/225188944-5d2f3464-7fc0-4b52-8b39-5821be724d56.png">

5. 설치된 내용 살펴보기 ( 중요한 폴더만 잠시 보겠습니다)      
📁node_modules   
📁public 📁 index.html   
📁src📁App.js , index.js   
어느 폴더에 무슨 파일이 있는지만 확인하세요  
그리고 index.html 파일을 열어서  ``` <div id="root"></div> ``` 눈여겨 보시고요.



  
## React로 앱생성 후 폴더구조 이해하기
<img width="233" alt="스크린샷 2023-05-05 오후 2 38 22" src="https://user-images.githubusercontent.com/48478079/236384386-9276cce2-edbe-471a-8e6d-a0f983a09b16.png">   
아래의 폴더명은 React의 관습(conventions) 에 따라 명명됩니다  

:file_folder: public  - 가상 DOM를 사용하는 리액트는 실제 DOM을 필요로 합니다. 즉 가상DOM이 들어갈 빈 껍데기 html이 필요한데 바로 이 빈껍데기 html이 존재하는 폴더가 public입니다.

:file_folder:src - 리액트를 이용한 개발이 실제적으로 이루어지는 폴더입니다. 우리가 만드는 대부분의 파일이 이곳에 저장됩니다.

:file_folder: componets - 렌더링되는 페이지 중에서 공통적으로 사용하는 컴포넌트를 여기서 넣습니다 

:file_folder: asset - 프로젝트에 사용할 이미지, 폰트, json 파일들은 이곳에 넣습니다   

manifest.json - 웹 앱 매니페스트는 JSON 텍스트 파일의 응용 프로그램에 대한 정보(예: 이름, 작성자, 아이콘 및 설명)를 제공합니다. 매니페스트의 목적은 웹 애플리케이션을 장치의 홈 스크린에 설치하여 사용자에게 더 빠른 액세스와 풍부한 경험을 제공하는 것입니다. manifest.json은 휴대폰에서 우리의 앱을 설명하는 데 주로 사용되는 json 파일입니다

<img width="650" alt="스크린샷 2023-05-05 오후 3 05 02" src="https://user-images.githubusercontent.com/48478079/236387388-d2d50ca4-9f42-4727-a25e-38e390e366cb.png">

## 컴포넌트 형식   
function 뒤에 컴포넌트 이름은 대문자로 시작  
export default 다음에 function 뒤에 온 똑같은 이름  
이 파일을 불러올때는 같은 이름으로 불러온다  


```
function Car() {
  return <h2>Hi, I am a Car!</h2>;
}

export default Car;

```
## 에러가 있을 때 보세요  

🌵 node.js 를 제거하고자 한다면 제어판 > 프로그램 삭제
🌵 설치시에 >npx create-react-app ???  로 설치시도 했는데,  npm ERR! code ENOENT 어쩌구 저쩌구 하면서  C:\User\admin\AppData\Roaming\npm 이라고 나오면 이것은 해당 경로에 npm 이라는 폴더가 없어서 에러를 발생시켰다는 의미이다. 이때는 ``` npm install -g create-react-app ``` 실행하고 \AppData\Roaming 를 확인해보면 npm 폴더가 생성되어 있다.   
🌵 윈도우의 AppData 폴더란?  사용자계정아래에 존재하며 각 사용자별 설정을 저장하는 폴더이다.   
  - 📁 Roaming : pc가 회사, 공공기간에서 제공하는 도메인에 접속되어 있을때 사용자 계정으로 로밍할 수 있는 데이터가 존재하게 되며 구글등의 계정에 연결하여 관련설정등을 받아와서 처리해야 하는 경우 이곳에 저장하며 북마크, 검색한 데이터가 pc에서 pc로 이동한다.
  - 📁 Local : 단일 컴퓨터의 특정한 데이터가 저장된다. 같은 계정으로 로그인할지라도 컴퓨터간에 공유되거나 동기화되지 않는 데이터등이 있다.
  - 📁 LocalLow : Local 폴더와 비슷하지만 제한된 보안설정으로 실행되는 "low intergrity" 응용프로그램을 위해 존재한다


