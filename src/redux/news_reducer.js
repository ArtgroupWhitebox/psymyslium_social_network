const ADD_NEWS = 'ADD-NEWS'
const UPDATE_NEWS_BODY = 'UPDATE-NEWS-BODY'

let initialState = {
    newsData: [
        { id: 1, message: 'Сегодня я освоила state и props' },
        { id: 2, message: 'В феврале вышел фильм "Северное сияние" ' },
    ],

    newNewsBody: ''
}

const newsReducer = (state=initialState, action) => {

    let stateCopy = {...state}
    stateCopy.newsData=[...state.newsData]

    switch (action.type) {

        case ADD_NEWS:
            let newNewsText = {
                id: 3,
                message: stateCopy.newNewsBody
            }
            stateCopy.newsData.push(newNewsText)
            stateCopy.newNewsBody = ''
            return (stateCopy)

        case UPDATE_NEWS_BODY:
            stateCopy.newNewsBody = action.body
            return (stateCopy)

        default: return (stateCopy)
    }
}
export default newsReducer

export const addNewsCreator = () => ({ type: ADD_NEWS })

export const updateNewsBodyCreator = (newBody) =>
    ({ type: UPDATE_NEWS_BODY, body: newBody })