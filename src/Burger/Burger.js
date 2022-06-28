import React from "react";

import classes from './Burger.css'
import BurgerIngrident from "./BurgerIngredient/BurgerIngrident";



const Burger = (props)=>{
    const transformedIngredients = Object.keys(props.ingredients)
    .map( igKey=>{
         console.log(props.ingredients);
         console.log(igKey);
            return [...Array(props.ingredients[igKey])].map((_,i)=>{
                console.log(props.ingredients[igKey]);
                return <BurgerIngrident key={igKey + i} type={igKey} />
               
            });
    });
    return(
        <div className={classes.Burger}>
            <BurgerIngrident type="bread-top" />
            {transformedIngredients}
            <BurgerIngrident type="bread-bottom" />
        </div>
    );
}

export default Burger;