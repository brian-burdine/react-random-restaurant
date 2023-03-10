import makeRandomList from "../utilities/makeRandomList";
import MenuHeader from "./MenuHeader";
import MenuItem from "./MenuItem";

function AllDay ({menu}) {
    document.title = "All Day Menu";
    if (menu.length > 0) {
        return (
            <>
                <div className="row">
                    <MenuHeader text="Appetizers" />
                </div>
                <div className="row">
                    {makeRandomList(menu.filter(recipe => {
                        return recipe.category === "Appetizer"}), 6)
                        .map(recipe => {
                            return (
                                <MenuItem
                                    key={recipe.id} 
                                    title={recipe.title} 
                                    price={recipe.price}
                                    description={recipe.description} 
                                    spicy_level={recipe.spicy_level}
                                />
                            )
                        })
                    }
                </div>
                <div className="row">
                    <MenuHeader text="Entrees" />
                </div>
                <div className="row">
                    {makeRandomList(menu.filter(recipe => {
                        return (recipe.category === "Lunch") ||
                            (recipe.category === "Dinner")
                        }), 12)
                        .map(recipe => {
                            return (
                                <MenuItem
                                    key={recipe.id} 
                                    title={recipe.title} 
                                    price={recipe.price}
                                    description={recipe.description} 
                                    spicy_level={recipe.spicy_level}
                                />
                            )
                        })
                    }
                </div>
            </>
        );
    } else {
        return <p>No menu items</p>
    }
}

export default AllDay;