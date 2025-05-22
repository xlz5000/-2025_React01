import { Link } from "react-router-dom";

// export default function Third(props){
//     let list = props.data.map((k,i)=>{
//         return(
//             <div key={i}>
//                 <h4>
//                     <Link to={`/fourth/${i}/${k.title}`}> {k.title}</Link>
//                     {/* 이미지는 무조건 public에  */}
//                      <img src={`imgs/${k.img}`} alt={k.title} />
//                 </h4>
//             </div>
//         )
//     })
//     return(
//         <div>
//             여기는 Third 페이지 입니다.
//             <hr />
//             <div>{list}</div>
//         </div>
//     )
// }

// export default function Third(props){
//      return(
//         <div>
//             여기는 Third 페이지 입니다.
//             <hr />
//             { props.data.map((k,i) => (
//                 <div key={i}>
//                  <h4>
//                      <Link to={`/fourth/${i}/${k.title}`}> {k.title}</Link>
//                      {/* 이미지는 무조건 public에  */}
//                       <img src={`imgs/${k.img}`} alt={k.title} />
//                  </h4>
//              </div>
//               ))
//             }
//         </div>
//     )
// }

export default function Third(props) {
  return (
    <div>
      여기는 Third 페이지 입니다.
      <hr />
      {props.data.map((k, i) => {
        return (
          <div key={i}>
            <h4>
              <Link to={`/fourth/${i}/${k.title}`}> {k.title}</Link>
              {/* 이미지는 무조건 public에  */}
              <img src={`imgs/${k.img}`} alt={k.title} />
            </h4>
          </div>
        );
      })}
    </div>
  );
}
