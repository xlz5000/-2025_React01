// export default function First(props){
//     return(
//         <div>
//             여기는 First 페이지 입니다.
//             <hr />
//             {props.msg}
//         </div>
//     )
// }

// =========================================

//  function First(props){
//     return(
//         <div>
//             여기는 First 페이지 입니다.
//             <hr />
//             {props.msg}
//         </div>
//     )
// }
// export default First

const First = (props) => {
  return (
    <div>
      여기는 First 페이지 입니다.
      <hr />
      {props.msg}
    </div>
  );
};
export default First;
