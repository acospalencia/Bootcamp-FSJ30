import { useContext, useEffect, useState } from "react";
import { CardCharacter } from "../../components/CardCharacter";
import { FavoritesContext } from "../../context/FavoritesContext";

export const ListCharacters = () => {

  const [listPjs, setListPjs] = useState([])

  //const valorContexto = useContext(FavoritesContext);
  //console.log(valorContexto);

  const {favorites, setFavorites} = useContext(FavoritesContext)


  const peticionApi = () => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(Response => Response.json())
      .then(data => {
        console.log(data)
        setListPjs(data.results)
      })
      .catch(error => console.error(error));
  }

  console.log(listPjs);

  useEffect(() => {
    peticionApi();

  }, []);

  return (
    <div className="row">
      {
        listPjs.map((character) => {
          return <section key={character.id} className="col-3"> 
            <CardCharacter 
            id= {character.id}
            name={character.name}
            image={character.image}
            status={character.status}
            listFavorites={favorites}
            changeFavorites={setFavorites}
            />
          </section>
        })
      }

    </div>
  )
}

