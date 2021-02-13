import classes from './News.module.css'
import NewsItem from './NewsItem/NewsItem'
console.log(classes)

const News = (props) => {

    let newsElements = props.newsPage.newsData.map(
        el => <NewsItem id={el.id} message={el.message} />
    );

    return (

        <div className = { classes.news }>
            <div className={classes.newsItems}>
                {newsElements}
            </div>
        </div>
    );
}

export default News;