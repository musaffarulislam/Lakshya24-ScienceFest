import AboutUsContent from "../components/AboutUs/AboutUsContent"
import Heading from "../components/AboutUs/Heading"

const AboutUs = () => {
  return (
    <div className="flex items-center justify-center my-12">
        <div className="w-full max-w-[1440px]  p-4">
            <Heading />
            <AboutUsContent />
        </div>
    </div>
  )
}

export default AboutUs