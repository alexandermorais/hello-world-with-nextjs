/** 
 * Pre-rendering + Client-side Fetching (CSR).
*/

import { useState } from 'react'

function EventList({ eventList }) {


    /**
     * Inicio de la parte de CSR.
     */
    const [events, setEvents] = useState(eventList)

    const fetchSportsEvents = async () => {
        const response = await fetch('http://localhost:4000/events?category=sports')
        const data = await response.json()
        setEvents(data)
    }
    /**
     * Fin de la parte de CSR.
     */

    return(
        <>

            <button onClick={fetchSportsEvents}>Sports Events</button>

            <h1>List of events</h1>

            {events.map((event) => {
                return(

                    <div key={event.id}>

                        <h2>
                            {event.id} {event.title} {event.date} | {event.category}
                        </h2>
                        <p>
                            {event.description}
                        </p>
                        <hr>
                        </hr>

                    </div>
                    
                )
            })}

        </>
    )

}

export async function getServerSideProps() {

    const response = await fetch('http://localhost:4000/events')
    const data = await response.json()

    return {
        props: {
            eventList: data,
        },
    }

}

export default EventList