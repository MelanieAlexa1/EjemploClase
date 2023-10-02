import React from "react"
import Card from "./Card"
import image1 from "../assets/Ajolote.jpg"
import image2 from "../assets/Ajolote2.jpg"
import image3 from "../assets/Ajolote3.jpg"

const cards = [
    {
        id: 1,
        title: 'Ajolote',
        image: image1,
        console: "Ajolote"
    },
    {
        id: 2,
        title: 'Ajolote2',
        image: image2,
        console: "Ajolote2"
    },
    {
        id: 3,
        title: 'Ajolote3',
        image: image3,
        console: "Ajolote3"
    }
]

export default function Cards (){
    console.log()
    return(
        <div className='container d-flex justify-content-center align-items-center h-100'>
            <div className='row'>
                {
                    cards.map(c=> (
                        <div className="col-md-4" key={cards.id}>
                            <Card
                                key={c.id}
                                id={c.id}
                                title={c.title}
                                image={c.image}
                                consola={c.consola}
                            />
                        </div>
                    ))
                    }
            </div>
        </div>
    );
}
