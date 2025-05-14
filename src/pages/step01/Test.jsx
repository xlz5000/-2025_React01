function increment(){

let cnt = 5;

    
}



function NumberCount(props){

    let cnt = 5;
    let increment = () =>{
            cnt =  cnt + 1
            console.log("cnt : ", cnt);

    }
    return(
        <> 
         {/* html 처럼 보이는 JSX 안에서 JavaScript 코드나 변수를 사용하려면 {} 넣어야 한다,
                1. 변수 출력 2. 연산식 3. 조건문(삼항연산자), 4. 함수 호출*/}
            <button onClick={increment} // 보통 자바스크립트 함수가 들어간다.
            // 스타일 반드시 {{}} 사용 
            style={{margin:"0 20ox", fontSize:"20px"}}> + </button>
            <span>{cnt}</span>
            <button>-</button>

        </>
        
    );


}


export default NumberCount;