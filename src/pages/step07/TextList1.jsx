export default function TextList1(){
    const people = [
        'Creola Katherine Johnson: mathematician',
        'Mario José Molina-Pasquel Henríquez: chemist',
        'Mohammad Abdus Salam: physicist',
        'Percy Lavon Julian: chemist',
        'Subrahmanyan Chandrasekhar: astrophysicist'
        ];
    const result =  people.map((k, i)=>{
        return <li key={i}> {k} </li> 
    })

    return(
        <ul>
            {result}
        </ul>
        
    )
}