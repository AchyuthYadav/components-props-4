import Article from "./Article";
import allArticles from "../data/allArticles";
function Articles(){
    return (
        <section className="articles" id="articles">
            <ul>
              {allArticles.map((article)=>(
                <Article key={article.publishedAt} {...article} />
              ))}
                
            </ul>
        </section>
    );
}

export default Articles;