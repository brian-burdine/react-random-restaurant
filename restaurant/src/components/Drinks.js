import MenuHeader from "./MenuHeader";
import MenuItem from "./MenuItem";

function Drinks ({menu}) {
    if (menu.length > 0) {
        return (
            <>
                <div className="row">
                    <MenuHeader text="Drinks" />
                </div>
                <div className="row">
                    {menu.map(recipe => {
                        return (
                            <MenuItem
                                key={recipe.id} 
                                title={recipe.title} 
                                price={recipe.price}
                                description={recipe.description} 
                                spice_level={recipe.spice_level}
                            />
                        )
                    })}
                </div>
            </>
        );
    } else {
        return <p>No menu items</p>
    }
}

export default Drinks;