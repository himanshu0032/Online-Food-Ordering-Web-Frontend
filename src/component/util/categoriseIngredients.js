export const categoriseIngredients = (ingredients = []) => {
    if (!Array.isArray(ingredients)) {
        console.error('Expected ingredients to be an array, but got:', ingredients);
        return {};
    }
    return ingredients.reduce((acc, ingredient) => {
        const {category} = ingredient;
        if(!acc[category.name]){
            acc[category.name]=[];
        }
        acc[category.name].push(ingredient);
        return acc;
    },{})
};
