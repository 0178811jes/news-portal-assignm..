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
            // cardbox.classList.add('col-md-4');
            cardbox.innerHTML= `
                <p> ${card.title}</p>
            `;
            cardDiv.appendChild(cardbox);
        })
    }
   
}






loadNews();