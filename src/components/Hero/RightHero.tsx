import astronaut from '../../assets/astronaut.png'

const RightHero = () => {
  return (
    <div className="w-full mt-24 md:mt-40">
        <div className='flex w-full justify-center items-center animate-bounce ease-in-out' style={{ animationDuration: '2s' }}>
          <img src={astronaut} alt="astronaut" className="w-5/6 transform " />
        </div>
    </div>
  )
}

export default RightHero