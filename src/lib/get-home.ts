import { query } from "./strapi";

export function getHome () {
    return query('home').then(res => {
        console.log(res)
        return res
    })
}