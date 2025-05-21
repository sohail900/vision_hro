import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Loading from './components/Loading'
const Home = lazy(() => import('./page/Home'))
function App() {
    return (
        <div className='max-w-[1800px] mx-auto overflow-x-hidden'>
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </Suspense>
        </div>
    )
}

export default App
