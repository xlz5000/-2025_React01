export default function Avatar(props){
    const getImageUrl = "https://i.imgur.com/"
    return(


            <img
                src={getImageUrl + props.person.imageId + ".jpg"}
                alt={props.person.name}
                width={props.size}
                height={props.size}



            />

    )

};
/*export default function Avatar({size, person}){
    const getImageUrl = "https://i.imgur.com"
    return(


        <ul>

            <img
                src={getImageUrl + person.imageId + ".jpg"}
                alt={person.name}
                width={size}
                height={size}



            />

        </ul>
    )

};*/