import React, { useEffect, useState } from 'react';
import getData from '../utilities/getData';
import MenuBar from './MenuBar';
import MenuHeader from './MenuHeader';
import MenuItem from './MenuItem';

function Menu() {
    const MENU_URL = "https://www.jsonkeeper.com/b/MDXW";
    const [menu, setMenu] = useState([]);
    const [menuView, setMenuView] = useState("all-day");

    useEffect(() => {
        getData(MENU_URL)
            .then((data) => {
                setMenu(data)
            })
    }, []);

    return (
        <div className='container' id="menu-page">
            <div className='row'>
                <MenuBar view={menuView} setView={setMenuView} />
            </div>
            <div className='row'>
            <p>{`Breakfast: ${menu.filter(recipe => recipe.category === "Breakfast").length}`}</p>
            <p>{`Lunch: ${menu.filter(recipe => recipe.category === "Lunch").length}`}</p>
            <p>{`Dinner: ${menu.filter(recipe => recipe.category === "Dinner").length}`}</p>
            <p>{`Drinks: ${menu.filter(recipe => recipe.category === "Drink").length}`}</p>
                <MenuHeader text="Appetizers" />
                <p>{`Count: ${menu.filter(recipe => recipe.category === "Appetizer").length}`}</p>
                {menu.filter(recipe => recipe.category === "Appetizer")
                    .map((recipe, index) => {
                        if (index < 7) {
                            return <MenuItem
                                key={recipe.id} 
                                title={recipe.title} 
                                price={recipe.price}
                                description={recipe.description} 
                                spice_level={recipe.spice_level}
                            />
                        } else {
                            return null;
                        }
                    })
                }
            </div>
        </div>
    )
}

export default Menu;

/*

    let cuisineList = [];
    for (let recipe of menu) {
        if (!cuisineList.includes(recipe.cuisine_type)) {
            cuisineList.push(recipe.cuisine_type);
        }
    }

            <p>{menu.length} items</p>
            <ul>
                {cuisineList.map((cuisineType, index) => {
                    return (
                        <li key={index}>
                            {`${cuisineType}: ${menu.filter(recipe => recipe.cuisine_type == cuisineType).length}`}
                        </li>
                    );
                })}
            </ul>
*/