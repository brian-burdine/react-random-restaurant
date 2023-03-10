import NavItem from "./NavItem";

function MenuBar ({ view, setView }) {
    const MENU_TABS = [
        {
           id: "breakfast",
           text: "Breakfast" 
        }, 
        {
            id: "all-day",
            text: "All Day"
        }, 
        {
            id: "drinks",
            text: "Drinks"
        }
    ];

    return (
        <nav className="navbar navbar-expand-lg" id="menu-nav">
            <div className="container-fluid">
                <ul className="nav nav-tabs">
                    {MENU_TABS.map((tab, index) => {
                        return (
                            <NavItem 
                                key={index} 
                                view={tab.id}
                                text={tab.text}
                                additionalClasses={
                                    view === tab.id ? "active": ""
                                }
                                setView={setView}
                            />
                            )
                        })
                    }
                </ul>
            </div>
        </nav>
        
    );
}

export default MenuBar;