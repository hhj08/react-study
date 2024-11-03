import ChildComponent from './ChildComponent';

export default function ParentComponent() {

    return (
        <div>
            <h3>props 란?</h3>
            <p>
            여러 속성을 담은 객체를 컴포넌트의 인자로 전달하는 것으로, 부모 요소에서 자식 요소로 밖에 데이터를 전달할 수 밖에 없다 <br/>
            전달된 props는 값을 변경할 수 없으며, 같은 props가 들어오면 항상 같은 요소를 반환해야 한다. <br/>
            ex) 게시글 목록 컴포넌트에서 게시글 세부 페이지 컴포넌트로 props를 전달하면 항상 동일하게 게시글 세부 페이지 요소만 반환됨.
            </p>

            <ChildComponent data={"1234"} />
        </div>
    );
}