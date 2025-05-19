import { Button } from "@mui/material";

export default function CountEx(){
    // 리엑트에서 화면이 변경(재 렌더링)하기 위해서는 상태값이 변경되었다고 
    // 리엑트에게 알려줘야 한다. (상태관리 => useState)
    
    console.log("hi")
    let count = 5 ;

    function increment(){
        // console.log(count);
        // return  count + 1; 카운트 값이 변경되지 않는다.
        count = count+1;
        
        // 카운트 값은 변경되지만 화면이 변경되지 않는다.
        // console.log(count);
        // return count
    }
    function decrement(){
        //console.log(count);
        // return  count - 1; 카운트 값이 변경되지 않는다.
        count = count-1;

        // 카운트 값은 변경되지만 화면이 변경되지 않는다.
        // console.log(count); //
        // return count ;
    }

    return(
        <>
             <h2>Count : {count} </h2>
            <Button variant="outlined" onClick={increment}> + </Button>
            <Button variant="outlined" onClick={decrement}> - </Button>
        </>
    );
}