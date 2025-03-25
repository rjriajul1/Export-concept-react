
export default function Singers ({singer}){
    
    if(singer.age < 50){
        return(
            <div className="singer">
                <h1>name: {singer.name}</h1>
                <h3>age: {singer["age"]} </h3>
            </div>
        )
    }
}