import * as axios from 'axios'


export const axiosInstance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: { 'API-KEY': '5eca3a1a-0a34-4a6f-b3b9-250a86e59b17' }
})


export const usersAPI = {

    getUsers(page, pageSize) {
        return axiosInstance.get(`users?page=${page}&count=${pageSize}`).then(response => response.data)
    }
}

export const profileAPI = {

    getUser(userId) {
        return axiosInstance.get(`profile/${userId}`).then(response => response.data)
    },

    getStatus(userId) {
        return axiosInstance.get(`profile/status/${userId}`).then(response => response.data)
    },

    putStatus(status) {
        return axiosInstance.put(`profile/status`, {status: status}).then(response => response.data)
    },

    putUserPhoto(photoFile) {
        const formData = new FormData()
        formData.append('image', photoFile)
        return axiosInstance.put(`profile/photo`, formData        
        ).then(response => response.data)        
    },

    putProfilePersonalData(fullName, aboutMe, lookingForAJob=null, lookingForAJobDescription) {
        return axiosInstance.put(`profile`, {fullName: fullName, aboutMe: aboutMe, 
            lookingForAJob: lookingForAJob, lookingForAJobDescription: lookingForAJobDescription } ).then(response => response.data)
    }
}

export const followAPI = {
    postUser(id) {
        return axiosInstance.post(`follow/${id}`, {}).then(response => response.data)
    },

    deleteUser(id) {
        return axiosInstance.delete(`follow/${id}`).then(response => response.data)
    }
}

export const authAPI = {

    getAuthMe() {
        return axiosInstance.get(`auth/me`).then(response => response.data)
    },  

    login(email, password, rememberMe=null) {
        return axiosInstance.post(`auth/login`, {email, password, rememberMe} ).then(response => response.data)
    },
    
    logout() {
        return axiosInstance.delete(`auth/login`).then(response => response.data)
    }    
}

export const dialogsAPI = {

    putStartDialog(userId) {
        return axiosInstance.put(`dialogs/${userId}`, {}).then(response => response.data)
    },

    getUsersDialogs() {
        return axiosInstance.get(`dialogs`).then(response => response.data)
    },

    // getUsersDialogs(page, pageSize) {
    //     return axiosInstance.get(`dialogs?page=${page}&count=${pageSize}`).then(response => response.data)
    // },
    
    // getReturnMessageNewestThanDate(userId, date) {
    //     return axiosInstance.get(`dialogs/${userId}/messages/new?newerThen=${date}`).then(response => response.data)
    // },

    // putSendMessageToYourFriend(userId, body) {
    //     return axiosInstance.put(`dialogs/${userId}`, {body}).then(response => response.data)
    // },

    // deleteUser(id) {
    //     return axiosInstance.delete(`follow/${id}`).then(response => response.data)
    // }
}

           