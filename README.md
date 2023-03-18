###### 🌵 React_Tutorial_Part1


Clean-up함수란,
useEffect()에서 parameter로 넣은 함수의 return 함수이다.

Component의 unmount이전 / update직전에 어떠한 작업을 수행하고 싶다면 Clean-up함수를 반환해 주어야 한다.

unmount 될 때
useEffect(func, [])

특정값 update 직전
useEffect(func, [특정값])

clean-up함수를 사용하게되면, 작동 순서는 re-render -> 이전 effect clean-up -> effect

useEffect 라는 Hook 을 사용하여 컴포넌트가 마운트 됐을 때 (처음 나타났을 때), 언마운트 됐을 때 (사라질 때), 그리고 업데이트 될 때 (특정 props가 바뀔 때) 특정 작업을 처리하는 방법에 대해서 알아보겠습니다.

그리고, useEffect 에서는 함수를 반환 할 수 있는데 이를 cleanup 함수라고 부릅니다. cleanup 함수는 useEffect 에 대한 뒷정리를 해준다고 이해하시면 되는데요, deps 가 비어있는 경우에는 컴포넌트가 사라질 때 cleanup 함수가 호출됩니다.
