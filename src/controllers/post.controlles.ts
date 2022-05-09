import { Request, Response } from 'express';
import  toNewPostEntry from '../validations/post.validation'
import * as postEntry from '../services/postEntryServices'

export const findPost = (req: Request, res: Response) => {
    const post = postEntry.findById(+req.params.id)

    return (post != null)
        ? res.send(post)
        : res.sendStatus(404)
}

export const findPostWithoutComments = (req: Request, res: Response) => {
    const post = postEntry.findByIdNoComments(+req.params.id)

    return (post != null)
        ? res.send(post)
        : res.sendStatus(404)
}

export const getPost = (_req: Request, res: Response) => {
    res.send(postEntry.getPost())
}

export const getPostWithoutComments = (_req: Request, res: Response) => {
    res.send(postEntry.getPostWithoutComments())
}

export const addPost = (req: Request, res: Response) => {
    try {
        const newPostEntry = toNewPostEntry(req.body)

        const addedPostEntry = postEntry.addPost(newPostEntry)

        res.json(addedPostEntry)
    } catch (e: any) {
        res.status(400).send(e.message)
    }

}
