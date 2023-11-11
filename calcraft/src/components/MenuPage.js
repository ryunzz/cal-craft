import React from 'react';
import '../index.css'


//useState
const MenuPage = () => {
  let coffee_names = ['Crispy Bacon', 'Hardboiled Cage Free Egg', 'Natural Bridges Tofu Scramble', 'Organic Gluten Free Oatmeal', 'Shredded Hash Browns', 'Texas French Toast', 'Cage Free Scrambled Eggs', 'Steamed Rice', 'New England Clam Chowder', 'Vegan Tortilla Soup', 'Authentic Spanish Rice', 'Charro Beans', 'Chicken Enchilada Casserole', 'Corn Tortillas', 'Roasted Green Beansin Garlic Oil', 'Halal Chicken Patty', 'Hamburger Bun', 'Vegan Malibu Burger Patty', 'Cheese Pizza', 'Veggie Supreme Pizza', 'Allergen Free Halal Chicken Thigh', 'Steamed Rice', 'Tofuwith Kosher Salt', 'Vegan Oatmeal Raisin Cookie', 'LemonLoaf', 'Available Upon Request Gluten Free Rotini Pasta', 'Bar Pasta', 'Cheesy Garlic Bread Sticks', 'Condiments', 'Housemade Creamy Alfredo Sauce', 'Italian Roasted Squashand Carrots', 'Italian Roasted Tofu', 'Marinara Sauce'];
  let carbs_array = [];
  let coffee_array = [];
  let cards = [];
  let carb_total = 5;
  let selected = [];

  for (let i = 0; i < coffee_names.length; i++){ // creating objects dynamically
    coffee_array[i] = {
      id: i,
      name: coffee_names[i],
      carbs: Math.floor(Math.random()*300 + 3),
      class: "grid-item",
      border: "thick solid grey"
    };
  }
  const LinkCard = (props) => {
    return (
      <div className='linkCard' id={props.id}>
        <a style={linkCardStyles}>
          <h3 onClick={myfunction(props)} className="linkCardHeader">{props.title}</h3>
          <p className="linkCardBody">{props.carbs} Carbs</p>
        </a>
      </div>  
    );
  }
  const saverfunc = (saveVal) => {
    return(saveVal);
  }
  var saver = 0;
  const myfunction = (props) => {
    return function() {
      if (!(selected.includes(props.title))){
        selected.push(props.title);
        carb_total += props.carbs;
        saver = saverfunc(carb_total);
        console.log(props.title, props.id);
        console.log(carb_total);
        console.log("Insulin units to take is: "+ (carb_total/15).toFixed(2) + " if insulin to carbohydrate ratio is 15.")
      }
      else {
        selected.splice(selected.indexOf(props.title));
        carb_total -= props.carbs;
        saver = saverfunc(carb_total);
        console.log("Insulin units to take is: "+ (carb_total/15).toFixed(2) + " if insulin to carbohydrate ratio is 15.")
      }
    }
  };
  for (let i = 0; i < coffee_array.length; i++){
    cards.push(<LinkCard 
      className={"linkCard"}
      id={i}
      title={coffee_array[i].name}
      carbs={coffee_array[i].carbs}
      height={50}
      width={50}
    />);
  }

  const linkCardStyles = {
    textDecoration: 'none',
    color: 'inherit'
  };


  const LinkCardContainer = (props) => {
    return (
      <div className={props.className} id={props.id}>
          <div className='linkCardContainer' style={{height: `${props.containerHeight}rem`, gridTemplateColumns: `repeat(${props.gridWidth}), 1.5fr`}}>
            {props.card_list}
          </div>
      </div>
    );
  }
  cards[1] = <LinkCard 
  className={"stinkCard"}
  id={1}
  title={coffee_array[1].name}
  carbs={coffee_array[1].carbs}
  height={50}
  width={50}/>

  console.log(cards[1].props.title)
  console.log(cards[1].props.className);
  return (
      <div class="linkCardMain">
        <h1>UCSC Dining Hall Menu Items</h1>
          {/* Search Bar Goes here */}  
          
          <div id="temp">
            <LinkCardContainer
              gridWidth={4}
              card_list={cards}
            />
          </div>
        <div id="total_carbs"class="linkCard2">
          Check console tab for total carb value and insulin injestment amount.
        </div>
        <div className="content" dangerouslySetInnerHTML={{__html: saver}}></div>
      </div>
  );
};

export default MenuPage;

// ReactDOM.render(<JSXDemo />, document.getElementById('root'));