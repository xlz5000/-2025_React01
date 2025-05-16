import './inputExam.css'

export default function InputExam(){
    return(
        //className =>css에서 class를 뜻한다.
        <div className="class">
            <input onFocus={()=>console.log("onFocus")}  
                   onBlur={()=>console.log("onBlur")}  
            /><br /><br />            
        </div>
    );
}