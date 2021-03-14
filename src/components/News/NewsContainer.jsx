import { connect } from 'react-redux'
import { updateNewsBodyCreator, addNewsCreator } from '../../redux/news_reducer'
import News from './News'


const mapStateToProps = (state) => {
    return (
        {
            newNewsBody: state.newsPage.newNewsBody,
            newsData: state.newsPage.newsData 
        }
    )
}

const mapDispatchToProps = (dispatch) => {
    return (
        {
            updateNewsBody: (newBody) => {
                let action = updateNewsBodyCreator(newBody)
                dispatch(action)                
            },
            addNews: () => {
                let action = addNewsCreator()
                dispatch(action)
            }  
        }
    )
}

const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(News) 

export default NewsContainer;