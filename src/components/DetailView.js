import React from 'react'
import {useParams} from 'react-router-dom'

const DetailView = ({articles}) => {
    const {id} = useParams();

    const article = articles.filter(
        (article) => id === article.id
      );
      console.log(articles)
    
      return article.length === 1 && (
        <div className="full-article">
          title={article[0].title}
          level={article[0].level}
          body={article[0].body}
          {/* url={article[0].url} */}
          publishedDate={article[0].published_date}
        </div>
      );
    };
    
    export default DetailView;
    