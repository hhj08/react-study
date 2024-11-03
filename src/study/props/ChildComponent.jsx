export default function ChildComponent(props) {
    return (
        <div>
            <p>부모 컴포넌트로 부터 전달 받은 값 : {props.data}</p>
        </div>
    );
}