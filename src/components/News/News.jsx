import classes from './News.module.css'
import NewsItem from './NewsItem/NewsItem'
console.log(classes)

const News = (props) => {

    let newsElements = props.newsData.map(
        el => <NewsItem id={el.id} key={el.id} message={el.message} />
    )

    let onChangeNewsBody = (event) => {
        let newBody = event.target.value
        props.updateNewsBody(newBody)
    }

    let addNewsButton = () => {
        props.addNews()
    }
        
    return (
        <div className = { classes.news }>
            <div className={classes.newsItems}>
                <div>
                    <div><textarea onChange={ onChangeNewsBody } value={ props.newNewsBody } placeholder='Сообщи новость' /></div>
                    <div><button onClick={ addNewsButton } >Add news</button></div>
                </div>
                <div>{newsElements}</div>
            </div>
        </div>
    )
}
export default News;