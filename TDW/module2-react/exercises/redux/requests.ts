import axios from 'axios';

const API_URL = "https://api.GitHub.com";

export const searchUsers = async (searchTerm: string, page: number) => {
    if (searchTerm != '') {
        const response = await axios.get(API_URL + `/search/users?q=${searchTerm}&page=${page}&per_page=20`)
        return { data: response.data.items, total: response.data.total_count }
    } else return null
}

export const getUser = async (login: string) => {
    try {
        const response = await axios.get(API_URL + `/users/${login}`)
        const repos = await axios.get(response.data.repos_url)
        return { response: response.data, repos: repos.data }
    } catch (error) {
        return null
    }
}