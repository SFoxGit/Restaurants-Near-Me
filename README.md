# Restaurants-Near-Me
When you or you partner have no idea what to eat- this project let's you roll the dice on your local feasts!

## Project Design
The project has been designed to generate infromation from two API's- a restaurant API, *Documenu API Documentation*  and a recipie API, *The Meal DB*.  On the first page of the website the user chooses between two options **Staying In** or **Going Out**.  When the user chooses the **Going Out** function they will be required to enter their zipcode into the designated search bar.  The webstie then 'fetches' the information for a randomized local restaurant based on the zipcode entry.  The user is then presenter with the 'fetched' information which includes:  
- restaurant name
- address
- menu items- located in the modal, including: the menu item name, list of ingridients and the menu item price.  

Directions to the local restaurant will be sourced to the user's default map application.

If the user chooses **Going** the website will take them to a 'comment/rating' page.  This page will allow the user to write comments and rate their visit using a 5-star rating system.  This information can be saved to local storage and accessed for reference or edits at the users will.  If the user chooses **Not Going** the website will generate an alternate retaurant based on the initial zipcode entry.

When the user chooses the **Staying In** option the website will 'fetch' the called information from the recipes API.  The API will pull:
- recipe name
- picture of the recipe
- recipe instructions

The user has the option to save the recipe as well as any comments to local storage for future use.  There is a **Get New Recipie** button avaialble on the page that will generate an alternate recipe if it is clicked.

The website utilizes a navigation bar to help the user maneuver from the HOME page to the saved COMMENTS for their dining/cooking experience.

## Functionality

Home Screen
![](assets\images\homePage.PNG)

Search Results
![](assets\images\RestResult.PNG)

Link for Directions to randomized restaurant
![](assets\images\GoogleMap.PNG)

Restuarant Menu
![](assetsimages\RestMenu.PNG)

Recipe Image
![](assets\images\RecipeImage.PNG)

Recipe Modal
![](assets\images\RecipeModal.PNG)

The comment section for the Restaurant page and the Recipe page
![](assets\images\commentRest.PNG)
![](assets\images\commentsRec.PNG)




## Deployed Application

* The URL of the functional, [deployed](https://scashmore.github.io/Restaurants-Near-Me/) application.

* The URL of the GitHub [repository](https://github.com/scashmore/Restaurants-Near-Me)

## Credit
Taylor Weeks: https://github.com/tweeks07

Shawn Fox: https://github.com/SFoxGit

Uriel Rosario: https://github.com/urielrosario

Susan Ashmore: https://github.com/scashmore
