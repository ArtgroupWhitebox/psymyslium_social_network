import { updateNewsBodyCreator, addNewsCreator } from '../../redux/news_reducer'
import StoreContext from '../StoreContext'
import News from './News'


const NewsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let updateNewsBody = (newBody) => {
                        let action = updateNewsBodyCreator(newBody)
                        store.dispatch(action)
                    }

                    let addNews = () => {
                        let action = addNewsCreator()
                        store.dispatch(action)
                    }
                    return (
                        <News newNewsBody={store.getState().newsPage.newNewsBody}
                            newsData={store.getState().newsPage.newsData}
                            updateNewsBody={updateNewsBody} addNews={addNews}
                        />
                    )
                }
            }
        </StoreContext.Consumer>

    )
}
export default NewsContainer;