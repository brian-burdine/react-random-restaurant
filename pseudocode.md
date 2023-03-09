# React Random Restaurant

## Goals

- Render a single page in React that functions as a restaurant's menu page. The page needs to include:
  - The restaurant's name
  - Its location (348 E Main St, Lexington, KY)
  - Hours of Operation
  - A dynamically presented menu; recipe options are presented at https://www.jsonkeeper.com/b/MDXW
    - The JSON data needs to be fetched using Axios when the page is first rendered to populate the menu
  
- The page should be styled with Bootstrap
- React should be used to manage the state of the application

## Component Hierarchy

Based on the wireframe I've posted, I think the component hierarchy will look like this:
```
App
    SiteHeader
        SiteLogo
        SiteBar
            NavItem
    Menu
        MenuBar
            NavItem
        MenuHeader
        MenuItem
    Footer
```

## State and Variables
The application will track in React state, at a minimum:
- *menu*
  - An array of *recipe* objects, fetched from an API
  - Default value: an empty array
  - The *recipe* objects have the following properties:
    - *id*: an integer that identifies the recipe number
    - *title*: a string representing the name of the recipe
    - *cuisine_type*: a string that indicates what kind of cooking the recipe is
    - *category*: a string that indicates what kind of meal the recipe is, with the values:
      - "Breakfast"
      - "Appetizer"
      - "Lunch"
      - "Dinner"
      - "Drink"
    - *description*: a string with text that describes the contents of the recipe
    - *price*: a floating point number with two decimal values, representing the price of the recipe in dollars
    - *spicy_level*: an integer representing the spiciness of the recipe, on a sliding scale from 0 (not spicy) to 4? (very spicy)
- *menuView*
  - A string representing the current view of the menu, with the values:
    - "breakfast": just breakfast items
    - "all-day": (the default initial view) appetizers, lunch and dinner items
    - "drinks": just drink items
  - The view is tied to the *category* property of the *recipe*s in *menu*
  - The view is changed by selecting a tab from **MenuBar**

The wireframe suggests at least a couple more possible variables to track in state that might be implemented later:
- *pageView*
  - A string representing the current page displayed, changed by **SiteBar**
- *shoppingCart*
  - An object containing:
    - *items*: an array of *item* objects, with the following properties
      - *id*: the *id* of the chosen recipe
      - *count*: the number of the chosen recipe that has been added to the cart
    - *cartTotal*: a floating point number that is the sum of the price of all *items* in *shoppingCart*

## Components and Functions

The application is rendered by `index.js` using React, and attached to the 'root' `<div>` in `index.html`.
The application components are:

- **App**
  - The highest-level component, called in `index.js`
  - Calls **SiteHeader**, **Menu**, and **Footer**
  - In the future, might replace the **Menu** call with conditional rendering of **Menu** and other components based off of a *pageView* variable, passing *pageView* and *setPageView* to **SiteHeader** as a prop
- **SiteHeader**
  - Called by **App**
  - Calls **SiteLogo** and **SiteBar**
- **SiteLogo**
  - Called by **SiteHeader**
  - Returns a `<h1>` element with the restaurant's name, and possibly a more involved logo with a couple of fonts and a background image if time permits
- **SiteBar**
  - Called by **SiteHeader**
  - Returns a `<navbar>` element with **NavItem** links to the site's pages, dummied out. The "Menu" link is marked active
  - In the future the links might actually be buttons that use *setPageView* to change the state of *pageView* when clicked, and the button associated with the current *pageView* might be styled as active
- **NavItem**
  - Called by **SiteBar** and **MenuBar**
  - Receives a *view*, *additionalClasses*, *text* and a *setView* function from *props*
- **Menu**
  - Called by **App**
  - Creates *menu*, *setMenu*, *menuView*, and *setMenuView* in state
  - Calls **getData** in an effect to retrive menu items to place in *menu*
  - Returns:
    - **MenuBar**, passed *setMenuView* as a prop
    - One or more **MenuHeader** components, conditionally rendered based on *menuView*
    - Several **MenuItems** underneath each **MenuHeader**, rendered based on *menuView* and criteria associated with the header 
- **MenuBar**
  - Called by **Menu**
  - Receives *setView* as a prop
  - Returns a `<nav>` item that contains three **NavItem** children:
    - Breakfast
    - All Day
    - Drinks
- **MenuHeader**
  - Called by **Menu**
  - Receives *text* as a prop
  - Returns a `<h3>` element with a bottom border and *text* as the inner text
- **MenuItem**
  - Called by **Menu**
  - Receives *title*, *price*, *description*, and *spice_level* as props
  - Returns a `<div>` with a card style that shows:
    - *title* *price*
    - *description*
    - *spice_level* (if it's greater than 0)
    - a `<button>` with "Add to Cart" as inner text, to maybe add the item to a shopping cart if one is implemented 
- **Footer**
  - Called by **App**
  - Returns a `<div>` that contains:
    - The name of the restaurant
    - The address
    - Hours of operation
    - A design byline

Additionally, a utility function **getData** is defined to make the API call with Axios to retrieve the menu items.
- **getData**
  - Receives a url to fetch data from
  - Returns the data after the request was processed
## Procedure / Story