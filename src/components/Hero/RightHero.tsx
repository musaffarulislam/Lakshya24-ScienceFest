import astronaut from '../../assets/astronaut.png'

const RightHero = () => {
  return (
    <div className="w-full flex  justify-center items-center mt-44 animate-bounce ease-in-out" style={{ animationDuration: '2s' }}>
        <img src={astronaut} alt="astronaut" className="w-3/4 transform -scale-x-100 rotate-45 " />
    </div>
  )
}

export default RightHero