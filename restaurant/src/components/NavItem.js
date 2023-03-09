function NavItem (props) {
    const {view, text, additionalClasses, setView} = props;

    function handleClick (event) {
        if (setView) {
            setView(event.target.id);
        }
    }

    return (
        <li className="nav-item">
            <button 
                className={`nav-link ${additionalClasses}`}
                id={view} 
                onClick={handleClick}
            >
                {text}
            </button>
        </li>
    );
}

export default NavItem;