import LeftNavbar from '../components/Navbar/LeftNavbar'
import RightNavbar from '../components/Navbar/RightNavbar'

const Navbar = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-primary_dark sticky top-0'>
        <div className='w-full rounded-md flex justify-between items-center max-w-[1440px]  p-4'>
            <LeftNavbar />
            <RightNavbar />
        </div>
    </div>
  )
}

export default Navbar