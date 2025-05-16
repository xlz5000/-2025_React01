export default function TextList2(){
    const people = [{
            id: 0,
            name: 'Creola Katherine Johnson',
            profession: 'mathematician',
        }, {
            id: 1,
            name: 'Mario José Molina-Pasquel Henríquez',
            profession: 'chemist',
        }, {
            id: 2,
            name: 'Mohammad Abdus Salam',
            profession: 'physicist',
        }, {
            id: 3,
            name: 'Percy Lavon Julian',
            profession: 'chemist',
        }, {
            id: 4,
            name: 'Subrahmanyan Chandrasekhar',
            profession: 'astrophysicist',
        }];

        /* 전체보기
        const result = people.map((k)=>{
            return <li key={k.id}> {k.name}({k.profession}) </li>
        });
        */
        
        // filter 를 사용해서 profession: 'chemist' 인 사람의 이름 출력
        // const chemist = people.filter((k)=>{
        //    return k.profession === 'chemist'
        // });
        
        // filter는 반드시 map로 마무리 하자 
        // const result = chemist.map((k)=>{
        //    return <li key={k.id}> {k.name}({k.profession}) </li>
        // });

        // 위 코딩 filter와 map 하나로 합친 것 
        const result =  people
        .filter(k => k.profession === 'chemist')
        .map((k)=>{
            return <li key={k.id}> {k.name}({k.profession}) </li>
        });

    return(
        <ul>
            {result}
        </ul>
    );
}