import axios, {AxiosInstance, AxiosResponse} from "axios";


export interface User {
    login: string
    id: number
    node_id: string
    avatar_url: string
    gravatar_id: string
    url: string
    html_url: string
    followers_url: string
    following_url: string
    gists_url: string
    starred_url: string
    subscriptions_url: string
    organizations_url: string
    repos_url: string
    events_url: string
    received_events_url: string
    type: string
    site_admin: boolean
    score: number
}

interface UserFilterSuccess {
    total_count: number
    incomplete_results: boolean
    items: User[] 
}

interface UserFilterSuccessResponse extends AxiosResponse {
    data: UserFilterSuccess
}

class GithubApi {
    baseUrl: string;
    instance: AxiosInstance;
    constructor () {
        this.baseUrl = "https://api.github.com"
        this.instance = axios.create({baseURL: this.baseUrl})
    }
    async filterUsers (text: string): Promise<UserFilterSuccessResponse> {
       return await this.instance.get(`/search/users?q=${text}`)
        
    }
}
const Api = new GithubApi()
export default Api