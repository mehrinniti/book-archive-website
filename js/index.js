
const errorDiv = document.getElementById("error");

//  Search field
const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    //  clear data
    searchField.value = '';
    //  Search input text condition
    if (searchText === '') {
        errorDiv.innerText = "Search field cannot be empty.";
        return;
    }
    else {
        //  load data
        const url = `https://openlibrary.org/search.json?q=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.docs))
    }
}

//  Search results
const displaySearchResult = books => {
    // console.log(books)

    const searchResult = document.getElementById('search-result');
    // clear 
    searchResult.innerHTML = '';
    //  total result
    searchResult.innerHTML = ` <h3 class="text-success row justify-content-center mt-4 ">${books.length} results found</h3>`;

    // Error Handing
    if (books.length === 0) {
        errorDiv.innerText = "NO Result Found";
        searchResult.innerHTML = '';
    } else {
        errorDiv.innerText = "";
    }

    //  Book details
    books.forEach((book) => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
             <div class="card h-100 ">
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

        // console.log(book)
    });

}


