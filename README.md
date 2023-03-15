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

