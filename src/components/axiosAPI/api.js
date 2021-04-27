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
    }
    
}

           