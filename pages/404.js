import Layout from '../components/Layout'
import Link from 'next/link'
const custom404 = () => (
    <Layout>
        <div className="text-center">
            <h1>404</h1>
            <p>
                oops! esta página no existe
            </p>
            <Link href="/">
                <a className="btn btn-secondary">volver al inicio</a>
            </Link>
        </div>
    </Layout>
)

export default custom404;