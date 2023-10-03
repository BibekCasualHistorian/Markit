import React, { useState } from 'react';
import LocalNewsData from '../Components/LocalNewsData';
import "../CSS/News.css";
import Navbar from '../Components/Navbar';

function New() {
    
    const categories = [
        'Company News',
        'Corporate',
        'Current Affairs',
        'Economy',
        'Federal Economy',
        'HydroPower',
        'Insurance',
        'International',
        'IT/Auto',
        'Market Analysis',
        'Monetary Policy',
        'Opinion & Analysis',
        'Stock Market',
        'Technical Analysis',
      ];
      
    const [selectedCategory, setSelectedCategory] = useState('All');

    const [sortBy, setSortBy] = useState('latest'); // 'latest' or 'oldest'
    const [newsData, setNewsData] = useState(LocalNewsData);


    // function filterNewsByCategory() {
    //     if (selectedCategory === 'All') {
    //       return LocalNewsData; // Return all news articles
    //     }
    //     return LocalNewsData.filter(article => article.category === selectedCategory);
    //   }

    function sortNewsByTime(order) {
  const sortedNews = [...newsData].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    if (order === 'latest') {
      return dateB - dateA;
    } else {
      return dateA - dateB;
    }
  });
  setNewsData(sortedNews);
}

function filterNewsByCategoryAndSort() {

    // const apiKey = `c_jwq8iZirtnZpPgymiGqAGFOASz7vZE`

    // const [data, setData] = React.useState([])

    // React.useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await fetchData("https://api.polygon.io/v2/reference/news", {
    //             method: "GET"
    //         })
    //         const data = await response.json()
    //         console.log("response", response)
    //     }
    //     fetchData()
    // },[])

    let filteredNews = newsData;
    if (selectedCategory !== 'All') {
      filteredNews = filteredNews.filter(article => article.category === selectedCategory);
    }
    return filteredNews;
  }
  
      
    return (
        <div className="bg-gradient-to-b from-[#42275a] to-[#734b6d] h-screen overflow-x-hidden news">
            <Navbar/>
            <h1>News</h1>
            
            <div className="news-grid">
                {filterNewsByCategoryAndSort().map((article, index) => (
                    <div key={index} className="news-item">
                    <h2>{article.title}</h2>
                    <p id='description'>{article.description}</p>
                    <p id='publish'>Published: {article.date}</p>
                    <a href={article.url} target="_blank" rel="noopener noreferrer">
                        Read more
                    </a>
                    </div>
                ))}
            </div>


            <div className="category-buttons">

                <div className="sort-buttons">
                    <h5>Sort By</h5>
                <button
                    className={sortBy === 'latest' ? 'active' : ''}
                    onClick={() => {
                    sortNewsByTime('latest');
                    setSortBy('latest');
                    }}
                >
                    Latest
                </button>
                <button
                    className={sortBy === 'oldest' ? 'active' : ''}
                    onClick={() => {
                    sortNewsByTime('oldest');
                    setSortBy('oldest');
                    }}
                >
                    Oldest
                </button>
                </div>
                
                <h5>Categories</h5>
                {categories.map((category, index) => (
                    <button
                        key={index}
                        className={selectedCategory === category ? 'active' : ''}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}

            </div>

        </div>
    );
}

export default New;
