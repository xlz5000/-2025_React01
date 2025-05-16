 import ItemList from "./Items"

export default function FilteredCommandList2() {
  const comments = [
        {name:"홍길동", comment:"방가 방가", isAdmin:true},
        {name:"임꺽정", comment:"하이~~~", isAdmin:false},
        {name:"장길산", comment:"헬로~~~",isAdmin:true},
        {name:"일지매", comment:"안녕하세요",isAdmin:false}    
   ];
     return(
        <>
          <h2>관리자 리스트2</h2>
          {comments
          .filter(k=>k.isAdmin)
          .map((k,i)=>{
            return(
                <ItemList key={i} name={k.name} comment={k.comment} />
            )
          })}
        </>
    )
};