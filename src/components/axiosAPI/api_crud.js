import * as axios from 'axios'

export const axiosInstance = axios.create({
    baseURL: `https://retoolapi.dev/WqEfVb/`,
    withCredentials: true
})

export const axiosInstanceFile = axios.create({
    baseURL: `https://api.imgbb.com/1/upload?key=32762fc7c7a9dd1770aa57ecdf2ef361`
})


export const postsAPI = {

    createPost(image, text) {
        return axiosInstance.post(`posts`, { "file": `${image}`, "post": `${text}` })
    },

    getPosts() {
        return axiosInstance.get(`posts`)
    },

    getPost(id) {
        return axiosInstance.get(`posts/${id}`)
    },

    putPost(id, image, text) {        
        return axiosInstance.put(`posts/${id}`, { "file": `${image}`, "post": `${text}` })
    },

    deletePost(id) {
        return axiosInstance.delete(`posts/${id}`)
    },

    uploadFile(file) {
        const formData = new FormData()
        formData.append("image", file)
        return axiosInstanceFile.post(``, formData )     
    },

}



           