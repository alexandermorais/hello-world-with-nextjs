import { useRouter } from 'next/router'

function ProductDetail() {

    const router = useRouter()

    // router.query.productId corresponde a productId.js. Atender el nombre.
    const productId = router.query.productId

    return <h1>Detalle del producto. El ID del producto es {productId}.</h1>

}

export default ProductDetail