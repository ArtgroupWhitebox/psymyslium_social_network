import { updateNewsBodyCreator, addNewsCreator } from '../../redux/news_reducer'
import News from './News'


const NewsContainer = (props) => {

    let updateNewsBody = (newBody) => {
        let action = updateNewsBodyCreator(newBody)
        props.store.dispatch(action)
    }

    let addNews = () => {
        let action = addNewsCreator()
        props.store.dispatch(action)
    }
        
    return (
        <News newNewsBody={props.store.getState().newsPage.newNewsBody}
            newsData={props.store.getState().newsPage.newsData} 
            updateNewsBody={updateNewsBody} addNews={addNews}          
        />
    )
}
export default NewsContainer;