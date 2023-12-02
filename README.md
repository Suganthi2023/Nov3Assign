# Nov3Assign By Suganthi R

# BookFinder Web
This web application is created using the Google Books API. The application is designed to give list of books based on user's selection.

# Design
The user has two options - Book name or Author name. The user can select their choice using the dropdown menu.Based on the selection, the books will be 
displayed with title, author and publisher details.
If the user selects Book option, types the book name in the input field and submits the request using submit button.The books corresponding to the typed
book name are displayed in the display area. 
If the user selects Author option, types the author name, the app gives the list of books written by the author in the display area.

When the user types in the next selection, the contents already in the display area gets cleared and the new searched content is displayed. 

# Functionality
Whenever the submit button is clicked, the eventlistener is triggered and the function inside the eventlistener is executed which uses the async await call back function to do the process of searching the Google Books API and displaying the same for the user. 