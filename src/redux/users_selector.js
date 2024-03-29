export const getUsers = (state) => {
    return state.usersPage.usersData
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}

export const getPageSize = (state) => {
    return state.usersPage.pageSize
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}

export const getIsPreloading = (state) => {
    return state.usersPage.isPreloading
}

export const getIsDisabled = (state) => {
    return state.usersPage.isDisabled
}

export const getPageKey = (state) => {
    return state.usersPage.pageKey
}

export const getPhotoLarge = (state) => {
    return state.userPhotoAndName.photoLarge
}

export const getPhotoSmall = (state) => {
    return state.userPhotoAndName.photoSmall
}

export const getName = (state) => {
    return state.userPhotoAndName.name
}

export const getIsScan = (state) => {
    return state.usersPage.isScan
}

export const getIsFriends = (state) => {
    return state.usersPage.isFriends
}

export const getTurnByName = (state) => {
    return state.usersPage.turnByName
}

export const getIsFollowed = (state) => {
    return state.usersPage.isFollowed
}


