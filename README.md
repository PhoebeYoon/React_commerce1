###### 🌵 React_Tutorial_Part1

## 폼을 완성해보자   

내용을 입력한 후에 submit를 하기 전에 아래 내용을 실습해봅시다. 
``` 
 const handleSubmit= (e)=>{  
    e.preventDefault();
    console.log('보내기')
  }

 <form action="" onSubmit={handleSubmit}>
```    
e.preventDefault()은 button을 클릭하면 폼이 리플레시되어서 사라지는 것을 방지하기 위해 넣었습니다.  
이제 이 내용이 db.json에 추가되어야 합니다. 
