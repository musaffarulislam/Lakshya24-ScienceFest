import lakshyaLogo from '../../assets/lakshyaLogo.png'

const LeftNavbar = () => {
  return (
    <div className='text-neon-green flex items-center'>
        <img src={lakshyaLogo} alt='lakshya-logo' className='w-10 h-10' />
        <div className='text-2xl font-bold transition-all hidden sm:block'>
            LAKSHYA 24
        </div>
    </div>
  )
}

export default LeftNavbar