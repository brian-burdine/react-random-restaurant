import React, { useEffect, useState } from 'react';
import getData from '../utilities/getData';
import AllDay from './AllDay';
import Breakfast from './Breakfast';
import Drinks from './Drinks';
import MenuBar from './MenuBar';

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
            {
                ((menuView === "breakfast") && 
                    <Breakfast 
                        menu={menu.filter(recipe => {
                            return recipe.category === "Breakfast";
                        })} 
                    />
                ) 
                || ((menuView === "all-day") && 
                    <AllDay 
                        menu={menu.filter(recipe => {
                            return (
                                recipe.category === "Appetizer" || 
                                recipe.category === "Lunch" || 
                                recipe.category === "Dinner"
                            );
                        })}
                    />
                ) 
                || ((menuView === "drinks") && 
                    <Drinks 
                        menu={menu.filter(recipe => {
                            return recipe.category === "Drink";
                        })}
                    />
                )
            }
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

            <p>{`Breakfast: ${menu.filter(recipe => recipe.category === "Breakfast").length}`}</p>
            <p>{`Lunch: ${menu.filter(recipe => recipe.category === "Lunch").length}`}</p>
            <p>{`Dinner: ${menu.filter(recipe => recipe.category === "Dinner").length}`}</p>
            <p>{`Drinks: ${menu.filter(recipe => recipe.category === "Drink").length}`}</p>
*/