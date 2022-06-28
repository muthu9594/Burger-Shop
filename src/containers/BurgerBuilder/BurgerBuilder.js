import React,{Component} from  'react';

import Auxx from '../../hoc/Auxx';
import Burger from '../../Burger/Burger';

class BurgerBuilder extends Component{

    state={
        ingredients:{
            salad:1,
            bacon:1,
            cheese:2,
            meat:2
        }
    }
    render(){
        return(
            <Auxx>
                <div> <Burger ingredients={this.state.ingredients} /> </div>
                <div>build controls</div>
            </Auxx>
        );
    }

}


export default BurgerBuilder;