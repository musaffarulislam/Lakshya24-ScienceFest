import LeftNavbar from '../components/Navbar/LeftNavbar'
import RightNavbar from '../components/Navbar/RightNavbar'

const Navbar = () => {
  return (
    <div className='flex w-full z-10 flex-col items-center justify-center bg-primary_dark fixed top-0'>
        <div className='w-full rounded-md flex justify-between items-center max-w-[1440px]  p-4'>
            <LeftNavbar />
            <RightNavbar />
        </div>
    </div>
  )
}

export default Navbar