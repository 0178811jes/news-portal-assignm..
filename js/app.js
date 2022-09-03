const loadNews = async() => {
    const url =`https://openapi.programming-hero.com/api/news/categories`
    const res = await fetch(url);
    const data = await res.json();
    displyNews(data.data.news_category);
}

const displyNews = users =>{
    const newsContainer = document.getElementById('news-container');
    users.forEach(news_category => {
        const newsDiv =document.createElement('div');
        newsDiv.classList.add('user')
        newsDiv.innerHTML =`
            <p onclick="categoryNews('${news_category.category_id}')">${news_category.category_name}</p>
            
        `;
        newsContainer.appendChild(newsDiv);
    })
    
        
}
const categoryNews = async(id) =>{
    const urlId =`https://openapi.programming-hero.com/api/news/category/${id}`
    const res = await fetch(urlId);
    const data = await res.json();
    cardDetail(data.data);
}
const cardDetail = cards=> {
    const cardDiv =document.getElementById('card-div');
    if(cards.length===0){
        alert ('not found');
    }
    else{
        cards.forEach(card => {
            console.log(card)
            const cardbox =document.createElement('div');
            cardbox.classList.add('col');
            cardbox.innerHTML= `
            <div class="card">
                <img src="${card.thumbnail_url
                }" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title"> ${card.title}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>    
            <div class="d-flex justify-content-around rounded-5">
                <img class="author-img" src="${card.image_url}"</img>
                <p>${card.author.name}</p>
                <p> views:${card.total_view}</p>
                <button type="button" class="btn btn-info h-50">Details</button>
                </div>

            </div>
            
            `;
            cardDiv.appendChild(cardbox);
        })
    }
   
}






loadNews();