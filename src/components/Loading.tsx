import { TbLoader2 } from 'react-icons/tb'

const Loading = () => {
    return (
        <div className='w-screen h-screen grid place-items-center bg-white'>
            <TbLoader2 className='text-primary animate-spin' size={60} />
        </div>
    )
}

export default Loading
