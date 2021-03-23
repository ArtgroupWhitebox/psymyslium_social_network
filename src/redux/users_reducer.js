const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {

    usersData: [
        {
            id: 1, name: 'Max', avatar: <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_iwI0e3vUAZ1KlxOqz87mBTYP_Ik5se65AA&usqp=CAU' />,
            followed: true, status: 'На связи',
            location: { сity: { сityId: 25, cityName: 'Краснодар' } , country: { countryId: 7, countryName: 'Россия' } }
        },
        {
            id: 2, name: 'Lena', avatar: <img src='https://avatanplus.com/files/photos/original/56f061490ca961539afc055c.jpg' />,
            followed: true, status: 'На связи',
            location: { сity: { сityId: 25, cityName: 'Краснодар' }, country: { countryId: 7, countryName: 'Россия' } }
        },
        {
            id: 3, name: 'Sasha', avatar: <img src='https://avatarko.ru/img/kartinka/31/muzhchina_30867.jpg' />,
            followed: true, status: 'На связи',
            location: { сity: { сityId: 25, cityName: 'Краснодар' }, country: { countryId: 7, countryName: 'Россия' } }
        },
        {
            id: 4, name: 'Nastay', avatar: <img src='https://avatarko.ru/img/kartinka/28/fantastika_edinorog_27306.jpg' />,
            followed: false, status: 'На связи',
            location: { сity: { сityId: 25, cityName: 'Краснодар'}, country: { countryId: 7, countryName: 'Россия' } }
        }
    ]
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case FOLLOW:
            return {
                ...state,
                // usersData: [...state.usersData]
                usersData: state.usersData.map( user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false  }
                    }
                    return user
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                // usersData: [...state.usersData]
                usersData: state.usersData.map( user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true }
                    }
                    return user
                })
            }
    
        case SET_USERS:        
            return {
                ...state,
                usersData: [...state.usersData, ...action.users]
            }       
            
        default: return (state)
    }
}
export default usersReducer

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unFollowAC = (userId) => ({ type: UNFOLLOW, userId })

export const setUsersAC = (users) => ({ type: SET_USERS, users })