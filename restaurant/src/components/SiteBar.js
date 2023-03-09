import React from 'react';
import NavItem from './NavItem';

function SiteBar() {
    const PAGES = [
        {
            id: "home",
            text: "Home",
            additionalClasses: "disabled"
        }, 
        {
            id: "menu",
            text: "Menu",
            additionalClasses: "active"
        }, 
        {
            id: "about",
            text: "About",
            additionalClasses: "disabled"
        }, 
        {
            id: "contact",
            text: "Contact",
            additionalClasses: "disabled"
        }, 
        {
            id: "online-order",
            text: "Order Now!",
            additionalClasses: "btn btn-primary"
        }
    ]
  return (
    <nav className="navbar navbar-expand-lg" id="site-nav">
        <div className="container-fluid">
            <button 
                className="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#site-nav-bar" 
                aria-controls="site-nav-bar" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="site-nav-bar">
                <ul className="navbar-nav nav-fill">
                    {PAGES.map((page, index) => {
                        return <NavItem 
                            key={index} 
                            view={page.id}
                            text={page.text}
                            additionalClasses={page.additionalClasses}
                        />
                    })}
                </ul>
            </div>
        </div>
    </nav>
  );
}

export default SiteBar;