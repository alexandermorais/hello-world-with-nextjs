import useSWR from 'swr'

/**
 * En la práctica, es común que se tenga una función fetcher.
 */
const fetcher = async() => {

    const response = await fetch('http://localhost:4000/dashboard')
    const data = await response.json()

    // Retornar
    return data

}

function DashboardSWR() {
    
    // Esto es el SWR
    const {data, error} = useSWR('dashboard', fetcher)

    // Algunos estados que pueden ocurrir
    if(error) return "Un error ha ocurrido."
    if(!data) return "No hay datos."

    // Retornar
    return(
        <div>
            <h2>Dashboard</h2>
            <h2>Posts - {data.posts}</h2>
            <h2>Likes - {data.likes}</h2>
            <h2>Followers - {data.followers}</h2>
            <h2>Following - {data.following}</h2>
        </div>
    )

}

export default DashboardSWR