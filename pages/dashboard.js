/**
 * Client-side fetching.
 * Es sin SWR.
 */

/**
 * State y effect hooks.
 */
import {useState, useEffect} from 'react'

function Dashboard() {

    // Variables de estado
    const [isLoading, setIsLoading] = useState(true)

    // Para el fetch y almacenar los datos (fetch y store)
    const [dashboardData, setDashboardData] = useState(null)

    // Usar el Effect Hook
    useEffect(() => {

        // Función para obtener los datos. API call.
        async function fetchDashboardData() {
            
            const response = await fetch('http://localhost:4000/dashboard')
            const data = await response.json()

            // Guardamos los datos
            setDashboardData(data)

            // Ahora el cargado debe ser falso porque ya se tienen los datos
            setIsLoading(false)

        }

        // Invocamos a la función de arriba
        fetchDashboardData()

        /**
         * Agregamos [], o sea un array vacío para llamar a la función fetchDashboardData 
         * cuando el componente se monte.
         */

    }, [])
    
    // Esto es el cargado
    if(isLoading) {
        return <h2>Loading...</h2>
    }

    // Retornar
    return(
        <div>
            <h2>Dashboard</h2>
            <h2>Posts - {dashboardData.posts}</h2>
            <h2>Likes - {dashboardData.likes}</h2>
            <h2>Followers - {dashboardData.followers}</h2>
            <h2>Following - {dashboardData.following}</h2>
        </div>
    )

}

export default Dashboard