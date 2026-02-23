import React from 'react';
import { motion } from 'framer-motion';
import { FiStar, FiClock, FiBookOpen, FiShoppingCart } from 'react-icons/fi';
import Link from 'next/link';

const CourseCard = ({ course }) => {
    const {
        title,
        instructor,
        rating,
        price,
        oldPrice,
        image,
        duration,
        category,
        modules
    } = course;

    const discount = oldPrice ? Math.round(((oldPrice - price) / oldPrice) * 100) : 0;

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
            className="group h-full"
        >
            <div className="h-full flex flex-col p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl shadow-xl hover:shadow-accent/10 transition-all duration-500">
                {/* Image Container */}
                <div className="relative h-48 mb-4 rounded-2xl overflow-hidden block">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />

                    <div className="absolute top-3 left-3 flex flex-col gap-2">
                        <span className="px-3 py-1 bg-accent text-white text-[10px] font-bold uppercase tracking-wider rounded-full">
                            {category}
                        </span>
                        {discount > 0 && (
                            <span className="px-3 py-1 bg-white text-accent text-[10px] font-bold uppercase tracking-wider rounded-full animate-pulse">
                                {discount}% OFF
                            </span>
                        )}
                    </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-3">
                        <div className="text-xs text-white/60 font-medium">By {instructor}</div>
                        <div className="flex items-center gap-1 bg-white/10 px-2 py-0.5 rounded-full">
                            <FiStar className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                            <span className="text-xs font-bold text-white">{rating}</span>
                        </div>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-3 line-clamp-2 leading-tight group-hover:text-accent transition-colors duration-300">
                        {title}
                    </h3>

                    <div className="flex items-center gap-4 text-[11px] text-white/50 mb-4 font-bold uppercase">
                        <div className="flex items-center gap-1.5">
                            <FiClock className="w-3.5 h-3.5 text-accent" />
                            {duration}
                        </div>
                        <div className="flex items-center gap-1.5">
                            <FiBookOpen className="w-3.5 h-3.5 text-accent" />
                            {modules} Modules
                        </div>
                    </div>

                    {/* Price & Action */}
                    <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between">
                        <div className="flex flex-col">
                            {oldPrice && (
                                <span className="text-xs text-white/40 line-through font-bold">
                                    ₹{oldPrice}
                                </span>
                            )}
                            <div className="flex items-baseline gap-1">
                                <span className="text-xl font-bold text-accent">
                                    ₹{price}
                                </span>
                                <span className="text-[8px] text-white/30 font-bold uppercase">/ Lifetime</span>
                            </div>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-10 h-10 bg-accent text-white rounded-xl shadow-lg flex items-center justify-center hover:bg-accent/80 transition-colors"
                        >
                            <FiShoppingCart className="w-5 h-5" />
                        </motion.button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default CourseCard;
