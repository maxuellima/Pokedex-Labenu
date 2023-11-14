


export const goToPokedex = (navigate)=>{
    navigate("/pokedex")
}

export const goToListPokemon = (navigate)=>{
    navigate("/")
}

export const goToDetails = (navigate, pokemon) =>{
    navigate(`/details/${pokemon}`)

}

export const goBack = (navigate) =>{
    navigate(-1)
}