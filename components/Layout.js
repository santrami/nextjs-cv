import Navigation from './Navigation'

const Layout = ({children}) => (
        <div>
            <Navigation />
            <main className='container py-4'>
                {children}
            </main>
        </div>
    )

export default Layout;