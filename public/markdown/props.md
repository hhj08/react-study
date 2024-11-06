## props 란?
- 여러 속성을 담은 객체를 컴포넌트의 인자로 전달하는 것으로, 부모 요소에서 자식 요소로 밖에 데이터를 전달할 수 밖에 없다.
- 전달된 props는 값을 변경할 수 없으며, 같은 props가 들어오면 항상 같은 요소를 반환해야 한다.

### 예제 코드
```javascript
// ParentComponent.jsx
function ParentComponent() {
    const text = `ChildComponent에게 전달`
    return (
        <ChildComponent text={text}/>
        // ChildComponent에게 전달할 객체를 하나의 속성으로 정의하고 전달
    );
}

// ChildComponent.jsx
function ChildComponent(props) {  // 컴포넌트 함수에 props를 인자로 받아온다.
    return (                      // 혹은 구조 분해 활용하여 받아올 수도 있다. 
        <div>{props.text}</div>
    );
}

```