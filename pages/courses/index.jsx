import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiX } from 'react-icons/fi';
import Circles from '../../components/Circles';
import Bulb from '../../components/Bulb';
import CourseCard from '../../components/CourseCard';
import { courses } from '../../data/courses';
import { fadeIn } from '../../variants';

const Courses = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const categories = ['All', ...new Set(courses.map(c => c.category))];

    const filteredCourses = courses.filter(course => {
        const matchesCategory = activeCategory === 'All' || course.category === activeCategory;
        const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="h-full bg-primary/30 py-32 overflow-y-auto scrollbar-thin scrollbar-track-white/5 scrollbar-thumb-accent/20">
            <Circles />

            <div className="container mx-auto h-full flex flex-col items-center">
                {/* Hero Section */}
                <motion.div
                    variants={fadeIn("down", 0.2)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="text-center mb-12"
                >
                    <h2 className="h2">
                        Elevate Your <span className="text-accent">Potential</span>
                    </h2>
                    <p className="max-w-[600px] mx-auto text-white/60 mb-8 px-4">
                        Join elite learning programs designed to help you master high-demand skills in AI, Development, and Design.
                    </p>

                    {/* Search & Filter Bar */}
                    <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4 px-4">
                        <div className="flex-1 relative group">
                            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-accent" />
                            <input
                                type="text"
                                placeholder="Search for a course..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-white/10 border border-white/20 rounded-full py-3 pl-12 pr-6 text-white placeholder:text-white/40 focus:outline-none focus:border-accent transition-all"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Category Pills */}
                <motion.div
                    variants={fadeIn("up", 0.4)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="flex flex-wrap justify-center gap-2 mb-12 px-4"
                >
                    {categories.map((cat, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border ${activeCategory === cat
                                    ? 'bg-accent border-accent text-white shadow-lg shadow-accent/20'
                                    : 'bg-white/5 border-white/10 text-white/60 hover:border-accent/50 hover:text-white'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </motion.div>

                {/* Courses Grid */}
                <motion.div
                    variants={fadeIn("up", 0.6)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4 pb-20 w-full"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredCourses.map((course) => (
                            <CourseCard key={course.id} course={course} />
                        ))}
                    </AnimatePresence>

                    {filteredCourses.length === 0 && (
                        <div className="col-span-full text-center py-20">
                            <div className="text-white/40 mb-4">
                                <FiX className="w-12 h-12 mx-auto mb-4" />
                                <h3 className="text-xl font-bold italic">No matching courses found</h3>
                                <p>Try adjusting your search or filters.</p>
                            </div>
                            <button
                                onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                                className="text-accent underline font-bold"
                            >
                                Reset Filters
                            </button>
                        </div>
                    )}
                </motion.div>
            </div>

            <Bulb />
        </div>
    );
};

export default Courses;
