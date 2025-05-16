// props: 인자, 매개변수, 파라미터


// 태그 안에서 인자 호출: <li>${} </li>
// 태그 안에서 인자 호출: <li>{`문자열 ${}`} </li>

/*
function Item02(props){

    return(

            <ul>
                <li>과목: {props.title}</li>
                <li>{`과목: ${props.title}`}</li>
                <li>내용: {props.content}</li>

            </ ul>
    );


};

*/

// 주의사항: 인자의 이름은 같아야 한다
function Item02({title, content}){

    return(

            <ul>
                <li>과목: {title}</li>
                <li>{`과목: ${title}`}</li>
                <li>내용: {content}</li>

            </ ul>
    );


};

export default Item02;