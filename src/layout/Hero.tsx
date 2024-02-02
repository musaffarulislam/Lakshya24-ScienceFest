import LeftHero from "../components/Hero/LeftHero"
import RightHero from "../components/Hero/RightHero"

const Hero = () => {
  return (
    <div className="flex items-center justify-center my-3">
        <div className="w-full flex flex-col-reverse md:flex-row justify-between items-center max-w-[1440px] p-4">
            <LeftHero />
            <RightHero />
        </div>
    </div>
  )
}

export default Hero