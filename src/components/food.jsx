export default function Food ({name,isAngry}){
    if(isAngry){ 
        return(
            <div className="singer">
                <h3>I need to eat now: {name}</h3>
            </div>
        )
    }
    return <h3>Ima not angry now: {name}</h3>
}