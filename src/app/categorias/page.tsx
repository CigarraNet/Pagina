import { getCategoria } from "@/lib/get-categorias"

export default async function page() {

  const categoriasInfo = await getCategoria()

    return (
    <div>page</div>
  )
}

