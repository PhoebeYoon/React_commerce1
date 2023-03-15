###### :cactus: React_Tutorial_Part1    

파일사이의 관계도를 잘 구분하는 것이 중요하다  

<img width="860" alt="스크린샷 2023-03-15 오후 12 09 57" src="https://user-images.githubusercontent.com/48478079/225195864-f7e62ad1-7d03-4850-9799-4037b54c95f6.png">

index.js파일에서는 이 어플리케이션의 출발(?) 이 되면서 react의 컴포넌트에 반응하고 DOM에 mounting (DOM에 삽입 ?) 해 주는 역할을 한다. 또힌 ReactDOM를 랜더링해주는 파일또한 index.js 이다

이제 이번 수업에서 불필요한 파일 (App.test.js , reportWebVitals.js) 를 삭제합니다
파일을 삭제했기때문에 index.js 파일을 열어서 
``` import reportWebVitals from './reportWebVitals'  과 아래쪽에 있는  reportWebVitals();``` 도 삭제해줍니다   


