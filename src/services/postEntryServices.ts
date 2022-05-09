import { postEntry, nonSensitiveCommentPostOmt, NewPostEntry } from '../types';
import postData from './post.json'

const posts: Array<postEntry> = postData as Array<postEntry>

export const getPost = (): Array<postEntry> => posts

export const getPostWithoutComments = (): Array<nonSensitiveCommentPostOmt> => {
   return posts.map(({id, category, title}) => {
        return {
            id,
            category, 
            title
        }
    })
}

export const findById = (id: number): postEntry | undefined => {
    const post = posts.find(d => d.id == id)
    return post
}

export const findByIdNoComments = (id: number): nonSensitiveCommentPostOmt | undefined => {
    const post = posts.find(d => d.id == id)
    if(post != null) {
        const {body, ...postWithoutComments} = post
        return postWithoutComments
    }
}

export const addPost = (newPostEntry: NewPostEntry): postEntry => {
    const newPost = {
        id: Math.max(... posts.map(d => d.id)) + 1,
        ... newPostEntry
    }
    posts.push(newPost)
    return newPost
}