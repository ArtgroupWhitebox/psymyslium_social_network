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

    switch (action.type) {

        case ADD_NEWS:
            let newNewsText = {
                id: 3,
                message: state.newNewsBody
            }
            return {
                ...state,
                newsData: [...state.newsData, newNewsText],
                newNewsBody: ''
            }

        case UPDATE_NEWS_BODY:
            return {
                ...state,
                newNewsBody: action.body
            }

        default: return (state)
    }
}
export default newsReducer

export const addNewsCreator = () => ({ type: ADD_NEWS })

export const updateNewsBodyCreator = (newBody) =>
    ({ type: UPDATE_NEWS_BODY, body: newBody })