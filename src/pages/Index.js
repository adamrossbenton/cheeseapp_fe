import { useState } from "react"
import {Link} from "react-router-dom"

const Index = props => {
    const [newForm, setNewForm] = useState({
        name: "",
        image: "",
        countryOfOrigin: "",
    })
    
    const handleChange = event => {
        setNewForm({
            ...newForm,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault()
        props.createCheese(newForm)
        setNewForm({
            name: "",
            image: "",
            countryOfOrigin: ""
        })
    }

    const loaded = () => {
        console.log(props.cheese)
        return props.cheese.map((queso) => (
            <div key={queso._id} className="queso">
                <Link to={`/cheese/${queso._id}`}><h1>{queso.name}</h1></Link>
                <img src={queso.image} alt={queso.name}/>
                <h3>I'm from {queso.countryOfOrigin}!</h3>
            </div>
        ))
    }

    const loading = () => (
        <h1>Loading...</h1>
    )
    
    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={newForm.name}
                    name="name"
                    placeholder="name"
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    value={newForm.image}
                    name="image"
                    placeholder="image URL"
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    value={newForm.countryOfOrigin}
                    name="countryOfOrigin"
                    placeholder=" Country of Origin"
                    onChange={handleChange}
                />
                <input type="submit" value="CHEESE ME, SEYMOUR!" />
            </form>
            {props.cheese ? loaded() : loading()}
        </section>
    )
}

export default Index