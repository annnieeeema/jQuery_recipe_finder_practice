console.log($); 
// dummy API data =====
const apiData = [
	{
		title: 'Ice Cold Lemonade',
		image: 'https://i.imgur.com/Fm0svI5.jpg',
		ingredients: [
			'1 1/2 cups fresh squeezed lemon juice',
			'1 3/4 cups white sugar',
			'8 cups water',
		],
		instructions: [
			'Add the sugar and 1 cup of water to a small saucepan',
			'Warm the sugar and water over medium-hight heat, stirring constantly until the sugar has fully dissolved',
			'Allow the sugar water to cool to room temperature',
			'Cover and refridgerate until chilled',
			'Remove seeds from lemon juice',
			'Optional: Remove pulp from lemon juice for a smoother texture',
			'In a large pitcher, mix the chilled sugar water, the lemon juice, and the remaining 7 cups of water together',
			'Serve over ice',
		],
	},
	{
		title: 'Cozy Hot Chocolate',
		image: 'https://i.imgur.com/DVGYBHH.jpg',
		ingredients: [
			'1 cup unsweetened almond milk',
			'1 tbsp unsweetened cocoa powder',
			'1 1/2 tbsp dairy-free semisweet chocolate chips',
			'1 tbsp raw sugar',
			'Optional: 1/8 tsp peppermint extract',
			'Optional: Coconut whipped cream for topping',
		],
		instructions: [
			'Warm the almond milk in a small saucepan over medium heat',
			'Whisk in cocoa powder, chocolate chips, and raw sugar',
			'Continue stirring constantly until the chocolate has melted and everything is fully combined',
			'Optional: add the peppermint extract and top with whipped cream',
			'Serve immidately',
		],
	},
	{
		title: 'Green Juice',
		image: 'https://i.imgur.com/S5eplMY.jpg',
		ingredients: [
			'1 bunch kale',
			'1 large lemon, peeled and quartered',
			'1 inch ginger, peeled',
			'1 large cucumber, cut into strips',
			'2 large granny smith apples',
			'4 whole celery stalks',
		],
		instructions: [
			'Wash the vegetables throughly and prep them for juicing',
			'Juce the kale, then the lemon, then the ginger, then the cucumber, then the apples, followed by the celery',
			'Optional: Strain through a sieve to remove the pulp for a smoother texture',
			'Serve immidately',
		],
	},
]
//Should be able to click a button and get a random recipe


//cached elements ======
const $getRecipeBtn = $('#getRecipeBtn')
// console.log($getRecipeBtn)
const $mainContent = $('main')

//create a function to get the API data and randomly select it
//get API data  ==== this is where we could get the api data using AJAX (using dummy api data in this case)
const getRecipe = () => {
// console.log('get recipe is working') ==> can use to check if everything is linked up 
console.log(apiData)
//use randomIndex to randomly select one from apiData 
const randomIndex = Math.floor(Math.random()* apiData.length)
const recipe = apiData[randomIndex]
// console.log(recipe)
displayRecipe(recipe)
//running a fuction inside another function. 
}

//creating a function just to display the recipe on the website
const displayRecipe = (recipe) => {
	// console.log(recipe)

	//using .empty() to remove all child element (nodes) from the mainContent
	$mainContent.empty()

	//display recipe image
	const $img = $('<img>')
	$img.attr('src', recipe.image)
	$img. attr('alt', recipe.title)
	$mainContent.append($img)


	// create div to hold recipe info 
	const $recipeInfo = $('<div>')
	$recipeInfo.addClass('recipeInfo')
	$mainContent.append($recipeInfo)


	//displau recipe title
	const $recipeTitle = $('<h2>')
	$recipeTitle.text(recipe.title)
	$recipeInfo.append($recipeTitle)
		//appended into the recipe Info div


	//display heading for ingredients list
	const $ingredientsHeading = $('<h3>')
	$ingredientsHeading.text('Ingredients')
	$recipeInfo.append($ingredientsHeading)


	//display list of ingredients 
	const $ingredientsList = $('<ul>')
	$recipeInfo.append($ingredientsList)
	
	
	//disply each ingredient as a list item 
	// Array.forEach((element) =>{})
	recipe.ingredients.forEach((ingredient) => {
	console.log(ingredient)

	const $li = $('<li>')
	$li.text(ingredient)
	$ingredientsList.append($li)
	//appended on the ul constant
	})

	//display heading for instructions
	const $instructionsHeading = $('<h3>')
	$instructionsHeading.text('Instructions')
	$recipeInfo.append($instructionsHeading)

	//display list of instructions


}



//event listener =======
$getRecipeBtn.on('click', getRecipe)
	//function getRecipe was created to generate the recipe (in place of function word usually there)
