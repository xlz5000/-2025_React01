export default function Comment(props){

    return(
        <>

                <h2>Map 예제제</h2>
                <ul>

                    <li>이름:{props.name}</li>
                    <li>내용:{props.comment}</li>
                </ul>
        
        </>
    )

};