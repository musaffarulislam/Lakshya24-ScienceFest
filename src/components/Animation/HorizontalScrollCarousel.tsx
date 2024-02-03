import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react"
// import collageImage1 from "../../assets/collage/1.jpg"
import collageImage2 from "../../assets/collage/2.jpg"
import collageImage3 from "../../assets/collage/3.jpeg"
import collageImage4 from "../../assets/collage/4.jpeg"
import collageImage5 from "../../assets/collage/5.jpeg"
import collageImage6 from "../../assets/collage/6.jpeg"
import collageImage7 from "../../assets/collage/7.jpg"
import collageImage8 from "../../assets/collage/8.jpg"
// import collageImage9 from "../../assets/collage/9.jpg"

const cards = [collageImage2, collageImage3, collageImage4, collageImage5, collageImage6, collageImage7, collageImage8]
const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
    });
  
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-50%"]);
  
    return (

      <section ref={targetRef} className="relative h-[125vh] ">
        <div className="sticky top-40 flex items-center overflow-hidden">
            <div className="mt-24">
            <motion.div style={{ x }} className="flex gap-4 md:gap-8">
                {cards.map((card, index) => {
                return <Card card={card} key={index} />;
                })}
            </motion.div>
            </div>
        </div>
      </section>
    );
  };
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Card = ({ card }: any) => {
    return (
      <div
        className="group relative h-[150px] w-[150px] sm:h-[200px] sm:w-[200px] md:h-[300px] md:w-[300px] lg:h-[400px] lg:w-[400px] overflow-hidden rounded-md sm:rounded-lg  bg-neutral-200"
      >
        <div
          style={{
            backgroundImage: `url(${card})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
        ></div>
      </div>
    );
  };

export default HorizontalScrollCarousel