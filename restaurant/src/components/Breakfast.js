import MenuHeader from "./MenuHeader";
import MenuItem from "./MenuItem";

function Breakfast ({menu}) {
    if (menu.length > 0) {
        return (
            <>
                <div className="row">
                    <MenuHeader text="Breakfast" />
                </div>
                <div className="row">
                    {menu.map(recipe => {
                        return (
                            <MenuItem
                                key={recipe.id} 
                                title={recipe.title} 
                                price={recipe.price}
                                description={recipe.description} 
                                spicy_level={recipe.spicy_level}
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

export default Breakfast;