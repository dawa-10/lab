export default function Card({location,price,name,rating,image}){
    return (
        <div className="card">
            <img src= {image} alt="" width="160px" />
            <h3>{location}</h3>
            <p><b style ={{color:"grey"}}>{name}</b></p>
            {rating<4?
            (<p style = {{color:"red"}}>{rating} ★</p> ):
           ( <p style = {{color:"green"}}>{rating} ★</p>)
        }
            <p>${price}/night</p>

        </div>

    )
}