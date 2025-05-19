import { TextField } from '@mui/material';
import './inputExam.css'

export default function InputExam(){
    return(
        // className => CSS 에서 class 뜻한다.
        <div className="center">
            <input onFocus={()=>console.log("onFocus")}  
                   onBlur={()=>console.log("onBlur")}  
            /><br /><br />     
            {/*  TextField 이벤트 처리는 onchange*/}
            <TextField id="outlined-basic" label="Outlined" variant="outlined" 
                onChange={(e) => console.log(e.target.value)}/>
            <TextField id="filled-basic" label="Filled" variant="filled" 
                onKeyUp={(e) => console.log(e.target.value + "," + e.key)}
            />
            <TextField id="standard-basic" label="Standard" variant="standard" />      
        </div>

        
    );
}