export const isPresentInFavourites = (favourites, resturant) =>{
    for(let item of favourites){
        if(resturant.id == item.id){
            return true
        }
    }
    return false;
}