export enum category { 
    Bad = 'bad',  
    Good = 'good',
    Regular = 'regular',
    Wrong = 'wrong'
}

export interface postEntry {
    id: number,
    category: category,
    title: string,
    body: string
};

export type nonSensitiveCommentPost = Pick<postEntry, 'id' |'category'| 'title' >
export type nonSensitiveCommentPostOmt = Omit<postEntry, 'body'>
export type NewPostEntry = Omit<postEntry, 'id'>