import {useState} from "react"

const Show = props => {
    const id = props.match.params.id
    const cheese = props.cheese
    const queso = cheese.find(q => q._id === id)

    const [editForm, setEditForm] = useState(queso)

    const handleChange = event => {
        setEditForm({...editForm, [event.target.name]: event.target.value})
    }

    const handleSubmit = event => {
        event.preventDefault()
        props.updateCheese(editForm, queso._id)
        props.history.push("/")
    }

    const removeQueso = () => {
        props.deleteCheese(queso._id)
        props.history.push("/")
    }

    return (
        <div className="queso">
            <h2>{queso.name} - {queso.countryOfOrigin}</h2>
            <img src={queso.image} alt={queso.name}/><br />
            <button id="delete" onClick={removeQueso}>DELETE</button><br />
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={editForm.name}
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={editForm.countryOfOrigin}
                    name="countryOfOrigin"
                    placeholder="Country of Origin"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={editForm.image}
                    name="image"
                    placeholder="Image URL"
                    onChange={handleChange}
                />
                <input type="submit" value="UPDATE"></input>
            </form>
        </div>
    )
}

export default Show