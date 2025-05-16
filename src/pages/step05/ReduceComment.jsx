
export default function ReduceComment() {
  const comments = [
        {name:"홍길동", comment:"방가 방가", isAdmin:true},
        {name:"임꺽정", comment:"하이~~~", isAdmin:false},
        {name:"장길산", comment:"헬로~~~",isAdmin:false},
        {name:"일지매", comment:"안녕하세요",isAdmin:false}    
   ];
   // reduce()는 배열의 각 요소를 순회하며 누적값를 계산하는 메서드 입니다.
   // 1회차 : k = {..., isAdmin:true},  / acc.total = 0 + 1 / adminCount = 0 + 1
   // 2회차 : k = {..., isAdmin:false}, / acc.total = 1 + 1 / isAdmin이 false이므로 변화 없음
   // 3회차 : k = {..., isAdmin:true},  / acc.total = 2 + 1 / adminCount = 1 + 1
   // 2회차 : k = {..., isAdmin:true},  / acc.total = 3 + 1 / adminCount = 2 + 1
   const admin = comments.reduce((acc, k)=>{
        // acc.total = acc.total + 1; 
        acc.total += 1 ; // 순회 횟수 누적
        // 관리자 일때만 누적
        if(k.isAdmin){
            acc.adminCount += 1;  
        }
        return acc ;
       },
       {total: 0, adminCount: 0}
    );
    return(
        <>
          <h2>관리자 댓글 통계</h2>
          <p>전체 댓글 수 : {admin.total}</p>
          <p>관리자 댓글 수 : {admin.adminCount} </p>
        </>
    )
};