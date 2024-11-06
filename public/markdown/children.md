## children 이란?
- props 기본 속성 중 하나로, jsx 코드를 자식 컴포넌트에게 전달하는 역할을 주로 한다.
- 쉽게 말하자면 내부의 요소는 다르지만, 공통적으로 사용되는 UI를 쉽게 적용하기 위한 wrapper 컴포넌트로 활용할 때 사용한다.

### 예제 코드
```javascript
function Card({children}) {
    const cardStyle = {
        border: '1px solid #ccc',
        borderRadius: '10px',
        padding: '16px',
        margin: '16px',
        backgroundColor: '#EAEAEA'
    }
    
    return (
        <div style={cardStyle}>
            {children}
        </div>
    );
}

function CardView() {
    return (
        <Card>
            <p>이 영역은 CardComponent의 children으로 전달됩니다.</p>
        </Card>
    );
}
```