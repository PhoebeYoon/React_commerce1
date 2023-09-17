###### 🌵 React_Tutorial_Part1
ithubusercontent.com/48478079/226273705-08cf250d-7e7f-4656-8ea6-19d30f84e7aa.png">

### Error -13
```
npm ERR! code EACCES
npm ERR! syscall unlink
npm ERR! path /Users/kyeonghayun/.npm/_cacache/index-v5/00/1c/3852e9de8342c89aa7665f32cf46d69374a39eaec366e29f7d48a1b03c95
npm ERR! errno -13
...
```
뭐 이런 에러가 났다. 멀쩡하게 실행되던 것인데 다른 프로젝트를 생성하고 react를 시도했더니
에러가 났다. 여러 솔루션을 봤지만  

``` sudo chown -R $USER /usr/local/ ``` 터미널에서 실행해서 sudo를 사용하지 않도록 했더니  
``` chown: /usr/local/: Operation not permitted 메시지가 나온다 ```
그 후에  
``` npx create-react-app ./ ``` 를 했더니 제대로 npm이 설치된다
