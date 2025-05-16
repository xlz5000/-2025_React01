import { Button } from "@mui/material";

// 선언식
// export default function Btn({name}){
//     return(
//         <Button variant="contained" 
//             onClick={()=>{console.log(name)}} >{name}
//         </Button>
//     );
// }


// 표현식
// {} 사용시 반드시 return 명시, 보통 여러줄일때 사용
// const Btn = ({name}) => {
//     return <Button variant="contained" 
//              onClick={()=>{console.log(name)}} >{name+"!!"}
//       </Button>
// };

// () 사용시 return 생략, 보통 한줄에만 적합, 단순이 하나의 표현식를 반환할때때
// const Btn = ({name}) => (
//      <Button variant="contained" 
//              onClick={()=>{console.log(name)}} >{name +"&&"}
//       </Button>
// );

// onMouseEnter (자식 요소 포함 안됨됨)
// onMouseOver (자식요소 에도  반응)
// const Btn = ({name}) => (
//      <Button variant="contained" 
//            onMouseEnter={()=>{console.log(name, "onMouseEnter")}}
//            onMouseLeave={()=>{console.log(name, "onMouseLeave")}}  
//            onMouseOver={()=>{console.log(name, "onMouseOver")}}  
//            onMouseOut={()=>{console.log(name, "onMouseOut")}}  
             
//        >{name}
//       </Button>
// );

const handleEvent = (name, e) => (
  console.log(name, e)
);


// e : 이벤트객체를 뜻한다.
const Btn = ({name}) => (
    <Button variant="contained"
      onClick={(e)=> handleEvent(name, e)}>{name}</Button>
)

export default Btn ;