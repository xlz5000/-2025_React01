 import ItemList from "./Items"

export default function FilteredCommandList() {
  const comments = [
        {name:"홍길동", comment:"방가 방가", isAdmin:true},
        {name:"임꺽정", comment:"하이~~~", isAdmin:false},
        {name:"장길산", comment:"헬로~~~",isAdmin:true},
        {name:"일지매", comment:"안녕하세요",isAdmin:true}    
   ];
   // filter() - 조건에 맞는 항목만 추출 
   // 지금은 isAdmin이 true 인 것만 추출한다 
   const filtered = comments.filter(k=>k.isAdmin);
    return(
        <>
          <h2>관리자 리스트</h2>
          {filtered.map((k,i)=>{
            return(
                <ItemList key={i} name={k.name} comment={k.comment} />
            )
          })}
        </>
    )
};