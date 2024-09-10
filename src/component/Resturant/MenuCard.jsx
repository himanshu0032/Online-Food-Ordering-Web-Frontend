import { Accordion, AccordionDetails, AccordionSummary, Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
const MenuCard = () => {
    const HandleCheckBoxChange = (value) =>{
    console.log(value)
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
              src="https://cdn.pixabay.com/photo/2017/02/15/10/57/pizza-2068272_640.jpg"
              alt=""
            />
            <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
              <p className="font-semibold text-xl">Pizza</p>
              <p>₹499</p>
              <p className="text-gray-400">
                Nice food . Enjoy yummy food and put it in you dummy
              </p>
            </div>
          </div>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <form>
        <div className="flex gap-5 flex-wrap">
            {demo.map((item) => (
              <div>
                <p>{item.category}</p>
                <FormGroup>
                 {
                    item.ingredient.map((item)=>
                        <FormControlLabel
                    control={<Checkbox onChange={()=> HandleCheckBoxChange(item)} />}
                    label={item}
                  />
                    )
                 }
                  
                </FormGroup>
              </div>
            ))}
          </div>
          <div className="pt-5">
          <Button disabled={false} variant="contained" type="submit">
            {true?"Add to Cart": "out of Stock"}
          </Button>
          </div>
        </form>
      </AccordionDetails>
    </Accordion>
  );
};

export default MenuCard;
