//API Key for accessing Google Books API
//const apiKey = 'AIzaSyCVB8GRP_e_JQtiG3oZXPubDnwG_JVbO4A'; - Please uncomment this line when working with this code
//const query = 'Jane Austen'; // User's input ---Used during development
 // User's selection (either 'title' or 'author') ----Used during development

 //Function to search for books using the Google Books API. 
const searchBooks = async (query, searchType) => {
    try {
        let apiUrl;
        if (searchType === 'Book') {
//            apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}`; -- please uncomment this line when working with code
        } else if (searchType === 'Author') {
//            apiUrl = `https://www.googleapis.com/books/v1/volumes?q=inauthor:${query}&key=${apiKey}`; --Please uncomment this line when working with code
        }

        const response = await fetch(apiUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch Error', error);
    }
};

//Used this section during development 
//const printbook = async ()=> {
//    data= await searchBooks(query, searchType);
//    if (data.items && data.items.length >0){
//       data.items.forEach((bookItem,index)=>{
//            const volumeInfo = bookItem.volumeInfo;
//            const title = volumeInfo.title;
//            const authors = volumeInfo.authors?volumeInfo.authors.join(','):'Unknown Author';
//            const publisher = volumeInfo.publisher || 'Unknown Publisher';

//           console.log(`Book ${index+1}:`);
//            console.log(`Title:${title}`);
//           console.log(`Authors: ${authors}`);
//            console.log(`Publisher: ${publisher}`);
//            console.log('-------------------------')
    //console.log(data.items);
//    })
        
//    } else {
//        console.log('No books found');
//    }
//}
//printbook();
//Getting HTML Elements
const getbutton = document.getElementById('submit');
const bookdiv = document.getElementById('booklist');
const bookinfo = document.getElementById('bookinfo');

//Event Listener for the submit button which handles userinput,book search initiation and result display.
getbutton.addEventListener('click', async (e) =>{
    e.preventDefault();

    //Get the userinput and selection 
    const input = document.getElementById('inputname');
    const inputValue = input.value;
    const select= document.getElementById('selecttype');
    const search = select.value;
   // console.log(inputValue);
    input.value=''; //clear input field

    //Book search using Google Books API
    const data = await searchBooks(inputValue,search);
        //check if books were found
       if (data.items && data.items.length >0){
            //check if bookinfo element is not null
            if(bookinfo){
                //If any previous content in the display area, clear the display
                bookinfo.innerHTML = '';
                // Displaying each book information
                data.items.forEach((bookItem,index)=>{
                    const volumeInfo = bookItem.volumeInfo;
                    const title = volumeInfo.title;
                    const authors = volumeInfo.authors?volumeInfo.authors.join(','):'Unknown Author';
                    const publisher = volumeInfo.publisher || 'Unknown Publisher';
                    //Creating a div for each book
                    const bookElement = document.createElement('div');
                    bookElement.innerHTML = `
                    <p>Book ${index+1}</p>
                    <p>Title: ${title}</p>
                    <p>Authors: ${authors}</p>
                    <p>Publisher: ${publisher}</p>
                    <br>
                    `;
                    //Appending book information to the bookinfo element
                    bookinfo.appendChild(bookElement);
                //Used console logs during development
                // console.log(`Book ${index+1}:`);
              //  console.log(`Title:${title}`);
             //  console.log(`Authors: ${authors}`);
             // console.log(`Publisher: ${publisher}`);
            //  console.log('-------------------------')
                //console.log(book);         
                })
                //show the bookinfo in the display area
                if(bookdiv.style.display === 'none'){
                    bookdiv.style.display = 'block';
                } else {
                    console.log('No books found');
                }
            
            }else {
                console.log('bookinfo is null');
            }      

       }
})