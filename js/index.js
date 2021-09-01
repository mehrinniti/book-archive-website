const errorMassage = document.getElementById('error-message').style.display = 'none';

const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    //  clear data
    searchField.value = '';
    const errorMassage = document.getElementById('error-message').style.display = 'none';
    //  load data
    const url = `http://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.docs))
        .catch(error => displayError(error))
}

//  aikhane problem ache
const displayError = error => {
    const errorMassage = document.getElementById('error-message').style.display = 'block';

}


const displaySearchResult = books => {
    console.log(books)

    const searchResult = document.getElementById('search-result');
    // clear 
    searchResult.innerHTML = '';
    books.forEach((book) => {
        const div = document.createElement('div');
        div.classList.add('col');
        /*        if (div.length <= 5) {
                   div.innerHTML = `
                   <div onclick="loadMealDetail('${book.key}')" class="card h-100">
                       <img width="200px" src="https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg" class="card-img-top" alt="...">
                       <div class="card-body">
                            <h5 class="card-title">${book.title}</h5>
                            <h6 class="card-title">Author : ${book.author_name}</h6>
                           <p class="card-text">First publish : ${book.first_publish_year}</p>
                           <p class="card-text">Publisher : ${book.publisher.slice(0, 10)}</p>
                       </div>
                   </div>
                   `
                   searchResult.appendChild(div);
               } */
        div.innerHTML = `
             <div onclick="loadBookDetail('${book.cover_i}')" class="card h-100">
                 <img width="200px" src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
                 <div class="card-body">
                      <h5 class="card-title">${book.title}</h5>
                      <h6 class="card-title">Author : ${book.author_name}</h6>
                     <p class="card-text">First publish : ${book.first_publish_year}</p>
                     <p class="card-text">Publisher : ${book.publisher.slice(0, 10)}</p>
                 </div>
             </div>
             `
        searchResult.appendChild(div);

        console.log(book)
    });

}

//  aijayga theke thik korte hobe
//  aikhane problem ache

const loadBookDetail = bookId => {
    // console.log(mealId)
    const url = `http://openlibrary.org/search.json?q=${bookId}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayBookDetail(data.docs))

}

const displayBookDetail = book => {
    const bookDetail = document.getElementById('book-detail');
    bookDetail.innerHTML = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
        <div onclick="loadBookDetail('${book.key}')" class="card h-100">
            <img width="200px" src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${book.title}</h5>
                <h6 class="card-title">Author : ${book.author_name}</h6>
                <p class="card-text">First publish : ${book.first_publish_year}</p>
                <p class="card-text">Publisher : ${book.publisher}</p>
            </div>
        </div>
    `
    bookDetail.appendChild(div);
}