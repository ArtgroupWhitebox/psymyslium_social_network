import classes from './News.module.css'
import NewsItem from './NewsItem/NewsItem'
import { updateNewsBodyCreator, addNewsCreator } from '../../redux/state'
console.log(classes)

const News = (props) => {

    let newsElements = props.newsPage.newsData.map(
        el => <NewsItem id={el.id} message={el.message} />
    );

    let newNewsBody = props.newNewsBody

    let onChangeNewsBody = (e) => {
        let newBody = e.target.value
        let action = updateNewsBodyCreator(newBody)
        props.dispatch(action)
    }

    let addNewsButton = () => {
        let action = addNewsCreator()
        props.dispatch(action)
    }
    
    
    return (

        <div className = { classes.news }>
            <div className={classes.newsItems}>
                <div>
                    <div><textarea onChange={ onChangeNewsBody } value={newNewsBody} placeholder='Сообщи новость' /></div>
                    <div><button onClick={ addNewsButton } >Add news</button></div>
                </div>
                <div>{newsElements}</div>
            </div>
        </div>
    );
}

export default News;