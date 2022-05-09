import { category } from "../types";

export const isString = (string: string) :boolean => {
    return  typeof string === 'string'
}

export const isCategory = (param: any): boolean =>{
    return Object.values(category).includes(param)
}


