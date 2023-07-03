import Link from 'next/link'
import { useRouter } from 'next/router'

function Inicio() {

    const router = useRouter()

    const handleClick = () => {
        router.push('/product')
    }

    return (
        <div>
            <h1>Mi página de inicio</h1>

            <Link href='/blog'>
                Blog
            </Link>

            <hr>
            </hr>

            <Link href='/product'>
                Products
            </Link>

            <hr>
            </hr>

            <button onClick={handleClick}>
                Elija una orden
            </button>

            <hr>
            </hr>

            <Link href='/posts'>
                Posts
            </Link>

            <hr>
            </hr>

        </div>
    )
}

export default Inicio