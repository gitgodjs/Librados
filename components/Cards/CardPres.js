"use client";
import { Star } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";

export const CardPres = () => {
    const [width, setWidth] = useState(0);
    const controls = useAnimation();

    const cards = [
        {
            bgImage: 'https://i.pinimg.com/236x/e4/32/87/e43287edf1fbaecc3c6bf85447a16c72.jpg',
            name: 'Rosalia',
            imageUser: 'https://i.pinimg.com/564x/7c/dc/9a/7cdc9aaad8727b92169751cfd00faee8.jpg',
            text: 'Es la mejor comida que probé en mi vida',
            bottom: '70%',
            right: '-18%',
        },
        {
            bgImage: 'https://i.pinimg.com/236x/99/0d/da/990ddab9704b2b7397042082712e44c1.jpg',
            name: 'El Doctor',
            imageUser: 'https://i.pinimg.com/564x/01/82/6b/01826b2b85173e15ce59c2d8df760126.jpg',
            text: 'Una delicia de barrio que llena tu panza',
            bottom: '10%',
            right: '16%',
        },
        {
            bgImage: 'https://i.pinimg.com/564x/42/51/99/425199dae07c0e4d3fa6611f6a27543b.jpg',
            name: 'Anuel',
            imageUser: 'https://i.pinimg.com/564x/d8/a8/0d/d8a80da9e40d0c6303b19cecfbd9da7a.jpg',
            text: 'Brrr comida cabrona para las diablitas',
            bottom: '50%',
            right: '-19%',
        },
        {
            bgImage: 'https://i.pinimg.com/564x/49/ca/a7/49caa7ac7267c599506ffac16e89b457.jpg',
            name: 'Yovngchimi',
            imageUser: 'https://i.pinimg.com/736x/f9/b1/a9/f9b1a96ccb96d2c37c802435999b1dcb.jpg',
            text: 'To los diablos de llorens con el estómago explotao',
            bottom: '60%',
            right: '-5%',
        },
    ];

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setWidth(window.innerWidth);
        }
    }, []);

    useEffect(() => {
        if (width > 0) {
            controls.start({
                x: [-width, 0],
                transition: {
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 20,
                        ease: "linear",
                    },
                },
            });
        }
    }, [controls, width]);

    return (
        <div className='overflow-hidden relative w-full h-64'>
            <motion.div 
                className="flex"
                animate={controls}
                style={{ width: `${width * 2}px` }}
            >
                {[...cards, ...cards].map((card, index) => (
                    <div 
                        key={index} 
                        style={{ backgroundImage: `url(${card.bgImage})` }} 
                        className="bg-no-repeat bg-cover rounded-lg w-56 h-64 flex-shrink-0 mx-4"
                    >
                        <div className="absolute bg-[#ffffff] shadow-lg shadow-current w-fit h-fit rounded-md p-2" style={{ bottom: card.bottom, right: card.right }}>
                            <div className='flex items-center justify-between'>
                                <div className={`relative bg-no-repeat bg-center rounded-full bg-cover w-9 h-9`} style={{ backgroundImage: `url(${card.imageUser})` }}></div>
                                <h2 className='m-1 font-bold'>@{card.name}</h2>
                                <div className='flex p-2 gap-1 text-orange-300'>
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className='w-4' fill="orange" />
                                    ))} 
                                </div>
                            </div>
                            <div className="max-w-56 p-2"> 
                                <p className='text-base'>{card.text}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};
