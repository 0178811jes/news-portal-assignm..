const loadNews = async() => {
    const url =`https://openapi.programming-hero.com/api/news/categories`
    const res = await fetch(url);
    const data = await res.json();
    displyNews(data.data.news_category);
}

const displyNews = users =>{
    const newsContainer = document.getElementById('news-container');
    users.forEach(news_category => {
        console.log(news_category)
        const newsDiv =document.createElement('div');
        newsDiv.classList.add('user')
        newsDiv.innerHTML =`
            <p>${news_category.category_name}</p>
            
        `;
        newsContainer.appendChild(newsDiv);
    })
    
        
}

// document.getElementById('news-container').addEventListener('click', function(){
//     const inputField = document.getElementById('cetegory-field');
//     const inputSearch = inputField.value;
//     inputField.value = '';
//     console.log(inputSearch)
// })



const cetegoryId = async() => {
    const urlId =`https://openapi.programming-hero.com/api/news/category/01`
    const res = await fetch(urlId);
    const data = await res.json();
    console.log(data)
}
cetegoryId();

// loadNews();