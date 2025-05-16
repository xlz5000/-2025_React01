export default function IfExam01(){
//   React falsy(폴지) 값
//   Boolean(false);      // false
//   Boolean(0);          // false
//   Boolean(-0);         // false
//   Boolean("");         // false (빈 문자열)
//   Boolean(null);       // false
//   Boolean(undefined);  // false
//   Boolean(NaN);        // false
   const isLoggedIn = false ;
   let result ;
   if (isLoggedIn) {
      result = <p>XXX님 환영합니다.</p>
   } else {
      result = <p>로그인 해주세요</p>
   }
    return(
        <>
         <h2>조건 렌더링(if문)</h2>
         {result}
        </>
    )
}