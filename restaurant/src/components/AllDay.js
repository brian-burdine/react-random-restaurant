import MenuHeader from "./MenuHeader";
import MenuItem from "./MenuItem";

function AllDay ({menu}) {
    if (menu.length > 0) {
        return (
            <>
                <div className="row">
                    <MenuHeader text="Appetizers" />
                </div>
                <div className="row">
                    {menu.filter(recipe => recipe.category === "Appetizer")
                        .map(recipe => {
                            return (
                                <MenuItem
                                    key={recipe.id} 
                                    title={recipe.title} 
                                    price={recipe.price}
                                    description={recipe.description} 
                                    spice_level={recipe.spice_level}
                                />
                            )
                        })
                    }
                </div>
                <div className="row">
                    <MenuHeader text="Entrees" />
                </div>
                <div className="row">
                    {menu.filter(recipe => {
                        return (recipe.category === "Lunch") ||
                            (recipe.category === "Dinner")
                        })
                        .map(recipe => {
                            return (
                                <MenuItem
                                    key={recipe.id} 
                                    title={recipe.title} 
                                    price={recipe.price}
                                    description={recipe.description} 
                                    spice_level={recipe.spice_level}
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