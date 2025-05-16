export default function Event01(){
    // 사용자 정의 함수(이벤트 핸들러)
    function handleClick(){
        alert("버튼1 클릭"); 
    }
    return(
        <>
            {/* 자바스크립트 함수 호출 (이벤트 핸들러 호출) */}
            <button onClick={handleClick}>버튼1</button> <br />
            {/* 자바스크립트 함수 생성 */}
            <button onClick={function handleClick2(){alert("버튼2 클릭")}}>버튼2</button> <br />
            <button onClick={()=>{alert("버튼3 클릭")}}>버튼3</button> <br />
        </>
    )
}