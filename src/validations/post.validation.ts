import { NewPostEntry, category } from "../types";
import * as validationType from '../utils/utils'

const parseTitle = (tittleFromRequest: any): string => {
    if(!validationType.isString(tittleFromRequest)){
    throw new Error('incorrect or missing tittle')
    }
    return tittleFromRequest
}

const parseBody = (bodyFromRequest: any): string => {
    if(!validationType.isString(bodyFromRequest)){
    throw new Error('incorrect or missing body')
    }
    return bodyFromRequest
}

const parseCategory = (categoryFromRequest: any):category =>{
    if(!validationType.isString(categoryFromRequest) || !validationType.isCategory(categoryFromRequest)){
        throw new Error('incorrect or missing category')
    }
    return categoryFromRequest
}

const toNewPostEntry = (object: any):NewPostEntry => {

    const newPost: NewPostEntry = {
        category: parseCategory(object.category),
        title: parseTitle(object.title),
        body: parseBody(object.body)
    }

    return newPost
}

export default toNewPostEntry



