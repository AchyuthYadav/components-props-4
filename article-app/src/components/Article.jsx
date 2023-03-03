function Article(props){
    return (
        <li>
            <figure>
                <img
                 src={props.urlToImage}
                 alt={props.title}
                />

                <figcaption>
                    <h3>{props.title}</h3>
                </figcaption>

            </figure>

            <p>
                {props.description}
            </p>

            <a href={props.url}>Read More</a>

        </li>
    );
}

export default  Article;