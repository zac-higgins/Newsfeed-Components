/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/


function createMenu(array){
  //making DOM elements
  const menu = document.createElement('div');
  const menuList = document.createElement('ul');
 
  //appending the children to parents
  menu.appendChild(menuList);
  
  //adding classes to the elements
  menu.classList.add('menu');

  //iterating over the array to create the list items for the menu
  array.forEach((element) => {
    const menuListItem = document.createElement('li');
    menuList.appendChild(menuListItem);
    menuListItem.textContent = element;
  });

  //setting up the menu button to open and close on click
  const menuButton = document.querySelector('.menu-button');
  menuButton.addEventListener('click', () => {
    menu.classList.toggle('menu--open');
  })
  
  return menu;
}

//appending the menu to the header so that it actually apears
const header = document.querySelector('.header');
header.appendChild(createMenu(menuItems));