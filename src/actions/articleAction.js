import {baseURL} from './../App'
import { actionType } from './actionType'

export const fetchArticle = () => {
    return (dispatch) => {
        fetch(`${baseURL}v1/api/articles`)
        .then(res => res.json())
        .then(result => 
            dispatch({
                type: actionType.fetch_article,
                payload: result.DATA
            })
        )
        .catch(error => console.log(error))
    }
}