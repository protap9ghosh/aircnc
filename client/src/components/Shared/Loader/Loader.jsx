import { FadeLoader  } from 'react-spinners'

const Loader = () => {
   return (
      <div
         className='h-[70vh] flex flex-col justify-center items-center'>
         <FadeLoader size={100} color="#F43F5E" />
      </div>

   )
}

export default Loader
