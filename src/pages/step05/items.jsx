export default function Items(props){
    return(
        <>
            <ul>
                <li>이름 : {props.name}</li>                
                <li>내용 : {props.comment}</li>                
            </ul>
        </>
    );
}