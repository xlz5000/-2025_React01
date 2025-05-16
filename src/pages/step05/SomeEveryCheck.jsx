

export default function SomeEveryCheck() {
  const comments = [
        {name:"홍길동", comment:"방가 방가", isAdmin:true},
        {name:"임꺽정", comment:"하이~~~", isAdmin:true},
        {name:"장길산", comment:"헬로~~~",isAdmin:true},
        {name:"일지매", comment:"안녕하세요",isAdmin:true}    
   ];

    // some() : 배열에 하나라도 조건을 만족하는 요소가 있으면 true (OR 과 같음)
    // every() : 배열에 모든 요소를 만족하면 true (AND 과 같음)
    // 보통 삼항 연산자와 같아 사용
    const result1 = comments.some(k => k.isAdmin);
    const result2 = comments.every(k => k.isAdmin);
    return(
        <>
          <h2>관리자 댓글</h2>
          <p>관리자 댓글 있냐? {result1 ? "있음" : "없음"}  </p>
          <p>모두 관리자가 쓴 댓글이냐 ? {result2 ? "전부 관리자" : "일부만 관리자"}  </p>
        </>
    )
};