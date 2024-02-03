import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ReactNode } from "react";
 
 const TiltCard = ({children} : {children: ReactNode}) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
  
    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);
  
    const rotateX = useTransform(
      mouseYSpring,
      [-0.5, 0.5],
      ["17.5deg", "-17.5deg"]
    );
    const rotateY = useTransform(
      mouseXSpring,
      [-0.5, 0.5],
      ["-17.5deg", "17.5deg"]
    );
  
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleMouseMove = (e: any) => {
      const rect = e.target.getBoundingClientRect();
  
      const width = rect.width;
      const height = rect.height;
  
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
  
      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;
  
      x.set(xPct);
      y.set(yPct);
    };
  
    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };
  
    return (
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateY,
          rotateX,
          transformStyle: "preserve-3d",
        }}
        className="relative aspect-[4/3] w-full rounded-xl bg-gradient-to-br bg-neon-green from-opasity-20 to-opasity-30"
      >
        <div
          style={{
            transform: "translateZ(75px)",
            transformStyle: "preserve-3d",
          }}
          className="absolute inset-2 grid place-content-center rounded-xl bg-white shadow-lg"
        >
          {/* <p
            style={{
              transform: "translateZ(50px)",
            }}
            className="text-center text-black text-2xl font-bold"
          >
            HOVER ME
          </p> */}
          {children}
        </div>
      </motion.div>
    );
  };

  export default TiltCard