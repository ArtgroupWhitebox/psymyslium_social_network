import profileReducer, { addPostActionCreator, deletePostActionCreator, updatePostTextActionCreator } from "./profile_reducer"

let action = addPostActionCreator() 

const actionUpdate = updatePostTextActionCreator("test-post-update")

const state = {

    postsData: [
        { id: 1, message: 'Привет, как дела?', like: 7 },
        { id: 2, message: 'Я учу React', like: 12 },
        { id: 3, message: 'Мне нравится React', like: 22 }
    ],
    newPostText: "test-post"
}

let newState = profileReducer(state, action)
let updateState = profileReducer(state, actionUpdate) 

it( 'length of post should be incremented', () => {    

    expect(newState.postsData.length).toBe(4)
    expect(newState.postsData[2].message).toBe('Мне нравится React')
})

it( 'message of new post should be correct', () => {    

    expect(updateState.newPostText).toBe("test-post-update")
    expect(newState.postsData[3].message).toBe("test-post")
})

it( 'like of new post should be correct', () => {

    expect(newState.postsData[3].like).toBe(0)
    expect(newState.postsData[3].id).toBe(4)
})

it( 'afte deleted post, length of post should be incremented', () => {    
    let action = deletePostActionCreator(2)
    let newState = profileReducer(state, action) 
    expect(newState.postsData.length).toBe(2)
})

it( 'afte deleted post, length of post should not be if id incremented', () => {    
    let action = deletePostActionCreator(1000)
    let newState = profileReducer(state, action) 
    expect(newState.postsData.length).toBe(3)
})