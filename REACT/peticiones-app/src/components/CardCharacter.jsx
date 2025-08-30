

export const CardCharacter = ({ id, name, image, status, listFavorites, changeFavorites }) => {

    const handleAddtoFavorites = () => {
        console.log(id, name, image, status);

        changeFavorites((prevArray) => [...prevArray, { id, name, image, status }])

    }

    const handleDeleteToFavorites = () => {
        changeFavorites(listFavorites.filter((favoritePJ) => favoritePJ.id !== id));
    }

    const finCharacterInFavorites = () => {
        return listFavorites.find((favorite) => favorite.id === id)
    }

    //console.log(listFavorites);


    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{status}</p>

                {finCharacterInFavorites() ? <button className="btn btn-danger" onClick={handleDeleteToFavorites}>eliminar de favorito</button>
                    : <button className="btn btn-primary" onClick={handleAddtoFavorites}>añadir favorito</button>
                }

            </div>
        </div>
    )

}