import './inputExam.css'

export default function InputExam(){
    return(
        // className => CSS 에서 class 뜻한다.
        <div className="center">
            <input onFocus={()=>console.log("onFocus")}  
                   onBlur={()=>console.log("onBlur")}  
            /><br /><br />            
        </div>

        
    );
}