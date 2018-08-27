# Katz's Cat-a-base
### Lew Davidson

## Description
 * A single page mobile app that allows users to peruse Katz's collection of cats via specific filters.

## Setup Instructions
 * Open Terminal
 * $ cd Desktop
 * $ git clone https://github.com/lewdavidson/Katz.git
 * $ cd Katz
 * $ open index.html (not optimized for web, please scale to mobile size)

## MVP:

- [ x ] User can display full list of cats.
- [ x ] User can successfully filter full list of cats via a specific category.
- [ x ] App pulls in menu options from API.
- [ x ] App successfully pulls in details via category.
- [ x ] Content areas change seamlessly based on user interaction.

## Nice to haves (I would do if I had more time):
- Parse JSON data more effectively. Ideally I would find a way to only make one call, store the JSON objects locally (in an array) and map through that to search for and display my data.

- Allow the user to filter by more than one parameter at a time. I couldn't quite figure out how to do this. The API is structured to have limited parameters, so I was having to pull in all results and filter through the end points locally. I couldn't figure out a way to make a search for a specific key, and then search those results for another key.

- Eliminate duplicate options in dropdown menus. For the dropdowns, I pulled in values for each specific key, leading to duplicate values in my dropdowns. My best guess to solve this would be to push the JSON objects into and array first and create a mapped array to compare the values?

- The ability to 'adopt' one of the cats, ie remove the result from displaying in future queries. Again, this could have been solved potentially by storing results locally and assigning each object a unique ID, which then can be targeted individually and deleted.

- Responsive styles for tablet and computer sizes.

## UI/UX Design Focus

Since this app was to be used for mobile, I wanted to be sure that everything was large enough and easy to press with a finger or read on a small screen. I made sure to only display information or buttons to users only when they would be helpful or make sense.

Example:
- The 'More Filters' button is only available when the user is displaying all possible cats.
- The 'Show All' button is only available to the user when they are viewing a specific filtered result.

The dropdown menus were chosen because I feel that is what the user is familiar with and expects on mobile. It also allows the options to be larger and easier to scroll through.

## Tech Used

I tried to use as much vanilla JavaScript as possible, supplementing some jQuery for DOM manipulation. I used only CSS for the styling. For the cat data I used the [Cat Facts API](https://catfact.ninja/#!/Breeds/breed).
