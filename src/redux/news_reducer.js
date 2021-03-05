const ADD_NEWS = 'ADD-NEWS'
const UPDATE_NEWS_BODY = 'UPDATE-NEWS-BODY'

const newsReducer = (state, action) => {
    switch (action.type) {

        case ADD_NEWS:
            let newNewsText = {
                id: 3,
                message: state.newNewsBody
            }
            state.newsData.push(newNewsText)
            state.newNewsBody = ''
            return (state)

        case UPDATE_NEWS_BODY:
            state.newNewsBody = action.body
            return (state)

        default: return (state)
    }
}
export default newsReducer

export const addNewsCreator = () => ({ type: ADD_NEWS })

export const updateNewsBodyCreator = (newBody) =>
    ({ type: UPDATE_NEWS_BODY, body: newBody })