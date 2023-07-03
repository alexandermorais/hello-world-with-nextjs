import { useRouter } from 'next/router'

function Doc() {

    const router = useRouter()

    const { params = [] } = router.query

    if (params.length === 2) {
        return (
            <h1>
                Viendo docs desde dos parámetros: {params[0]} y {params[1]}.
            </h1>
        )
    }
    else
    {
        if(params.length === 1)
        {
            return <h1>Viendo docs desde un solo parámetro: {params[0]}.</h1>
        }
    }

    return <h1>Docs</h1>

}

export default Doc