import { query } from "./strapi";

export function getCategoria () {
    return query('categorias').then(res => {
        console.log(res)
        return res
    })
}