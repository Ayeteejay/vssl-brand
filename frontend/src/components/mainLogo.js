"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const PORT = process.env.NEXT_PUBLIC_BACKEND;

export default function MainLogo({data}){
    return (
        <motion.div
        initial={{
          opacity: 0,
          y: -100,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1.25, type: "tween" }}
        className="min-w-[300px]"
      >
        <Image
          src={`${PORT}${data.src}`}
          alt={`${data.alt}`}
          width={500}
          height={500}
          priority={true}
          className="w-40 -translate-y-3 transition-all duration-300 md:w-[250px] md:-translate-y-6"
        />
      </motion.div>
    )
}