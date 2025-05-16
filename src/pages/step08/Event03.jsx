import { Button } from "@mui/material";

// 머티리얼 디자인 : 구글이 안드로이드 스마트폰에 적용하면서 널리 퍼지기 시작했다.
// MUI UI 주소 : https://mui.com/material-ui/
// Get started 
// npm install @mui/material @emotion/react @emotion/styled 복사
// 자습서 : https://mui.com/material-ui/getting-started/templates/



// 선언식
export default function Event03(){
    function handleClick(){
        console.log("event1");
    }
    return(
        <>
            <Button variant="text" onClick={handleClick}>버튼</Button>
            <Button variant="contained" onClick={()=>{ console.log("event2");}}>버튼</Button>
            <Button variant="outlined">버튼</Button>
        </>
    );
}