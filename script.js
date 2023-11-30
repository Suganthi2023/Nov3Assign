const apiKey = 'AIzaSyCVB8GRP_e_JQtiG3oZXPubDnwG_JVbO4A';
let title = 'Pride and Prejudice';
let book = {};

const fetchAPIData = async () => {
    try {
        const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${title}&key=${apiKey}`
        const response = await fetch (apiUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch Eroor', error);
    }
}

const printbook = async ()=> {
    data= await fetchAPIData();
    if (data.items && data.items.length >0){
    //    data.items.forEach((bookItem,index)=>{
    //        const volumeInfo = bookItem.volumeInfo;
    //        const title = volumeInfo.title;
    //        const authors = volumeInfo.authors?volumeInfo.authors.join(','):'Unknown Author';
    //        const publisher = volumeInfo.publisher || 'Unknown Publisher';

    //        console.log(`Book ${index+1}:`);
    //        console.log(`Title:${title}`);
    //        console.log(`Authors: ${authors}`);
    //        console.log(`Publisher: ${publisher}`);
    //        console.log('-------------------------')
    console.log(data.items);
     //   })
        
    } else {
        console.log('No books found');
    }
}
    

printbook();