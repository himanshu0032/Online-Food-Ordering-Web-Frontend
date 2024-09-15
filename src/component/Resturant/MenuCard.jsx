import { Accordion, AccordionDetails, AccordionSummary, Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { categoriseIngredients } from "../util/categoriseIngredients";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../State/Cart/Action";

const demo = [
  {
    category: "Nuts & Seeds",
    ingredient: ["Cashews"],
  },
  {
    category: "Protein",
    ingredient: ["Ground Beef", "Bacon Strips"],
  },
];
const MenuCard = ({item}) => {
    const HandleCheckBoxChange = (itemName) =>{
      console.log("value  is ", itemName)
      if(selectedIngredients.includes(itemName)){
        setSelectedIngredients(selectedIngredients.filter((item) => item!==itemName))
      }else{
        setSelectedIngredients([...selectedIngredients,itemName])
      }
   
    }
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const dispatch = useDispatch();

    const handleAddItemTocart = (e) =>{
      e.preventDefault()
      const reqData= {
        token: localStorage.getItem("jwt"),
        cartItem:{
            foodId: item.id,
            quantity: 1,
            ingredients: selectedIngredients
        }
      }
      dispatch(addItemToCart(reqData))
      console.log("req Data is ", reqData)
    }

   
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <div className="lg:flex items-center justify-between">
          <div className="lg:flex items-center lg:gap-5">
            <img
              className="w-[7rem] h-[7rem] object-cover"
              src={item.images[0]}
              alt=""
            />
            <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
              <p className="font-semibold text-xl">{item.name}</p>
              <p>₹{item.price}</p>
              <p className="text-gray-400">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <form onSubmit={handleAddItemTocart}>
        <div className="flex gap-5 flex-wrap">
            {Object.keys(categoriseIngredients(item.ingredientsItems)).map((category) => (
              <div>
                <p>{category}</p>
                <FormGroup>
                 {
                    categoriseIngredients(item.ingredientsItems)[category].map((item)=>
                        <FormControlLabel key={item.id}
                    control={<Checkbox onChange={()=> HandleCheckBoxChange(item.name)} />}
                    label={item.name}
                  />
                    )
                 }
                  
                </FormGroup>
              </div>
            ))}
          </div>
          <div className="pt-5">
          <Button  disabled={false} variant="contained" type="submit">
            {true?"Add to Cart": "out of Stock"}
          </Button>
          </div>
        </form>
      </AccordionDetails>
    </Accordion>
  );
};

export default MenuCard;
