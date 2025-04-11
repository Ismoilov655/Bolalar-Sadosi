import { useEffect, useRef, useState } from "react";
import { useData } from "../DataContext";
import { useLocation } from "react-router";
import { FaYoutube } from "react-icons/fa";

import prev from "../img/prev.svg";
import next from "../img/next.svg";

const InputSelekt = () => {
    const { malumot, setLanguage } = useData();
    const [language, setLanguageState] = useState("default");
    const location = useLocation();
    const page = location.pathname.replace("/", "") || "ertaklar";
    const data = malumot[page] || {};

    const [query, setQuery] = useState("");
    const [filteredData, setFilteredData] = useState({});
    const [selectedItem, setSelectedItem] = useState(null);

    const scrollRefs = useRef({});
    const langRef = useRef();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const scroll = (direction, category) => {
        const scrollContainer = scrollRefs.current[category];
        if (scrollContainer) {
            scrollContainer.scrollLeft += direction === "left" ? -300 : 300;
        }
    };

    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === "Escape") {
                setSelectedItem(null);
            }
        };
        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, []);

    useEffect(() => {
        let selectedLanguage = language;

        if (language === "default") {
            selectedLanguage = "all";
        }

        const filteredResults = Object.keys(data).reduce((acc, category) => {
            const filteredItems = data[category].filter((item) =>
                ((selectedLanguage === "all" || item.language === selectedLanguage)) &&
                item.title.toLowerCase().includes(query.toLowerCase())
            );
            acc[category] = filteredItems.length > 0 ? filteredItems : null; 
            return acc;
        }, {});

        setFilteredData(filteredResults);
    }, [query, data, language]);

    return (
        <>
            <section>
                <div className='w-full max-w-7xl mx-auto px-5 mb-10 md:mb-16'>
                    <form onSubmit={(e) => e.preventDefault()} className='flex items-center justify-end sm:justify-between'>
                        <input
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className='hidden sm:block w-3/5 text-base bg-transparent border-b border-br-darkBlue focus:outline-none mr-10 md:text-lg md:w-1/2'
                            type="text"
                        />

                        <select
                            value={language || "default"}
                            onChange={(e) => {
                                const newLang = e.target.value;
                                setLanguageState(newLang);
                                setLanguage(newLang);
                                langRef.current.textContent = newLang;
                            }}
                            className='p-1 rounded-sm border-2 border-dotted border-br-green focus:outline-none sm:p-2 md:w-36'
                        >
                            <option value="default" disabled>Tilni tanlang</option>
                            <option value="all">Barchasi</option>
                            <option value="uz">O'zbekcha</option>
                            <option value="eng">Inglizcha</option>
                            <option value="ru">Ruscha</option>
                        </select>
                        <span ref={langRef} className="hidden">{language}</span>
                    </form>
                </div>
            </section>

            {Object.keys(filteredData).map((category) => (
                <section key={category} className="w-full max-w-7xl mx-auto px-5 mb-8 md:mb-10">
                    <div className="flex justify-between items-center mb-5">
                        <h2 className="text-xl text-red-800 decoration-blue-800 underline underline-offset-8 md:text-2xl">
                            {category}
                        </h2>

                        <div className="md:hidden sm:flex space-x-4">
                            <button onClick={() => scroll("left", category)} className="focus:outline-none">
                                <img src={prev} alt="Prev" />
                            </button>
                            <button onClick={() => scroll("right", category)} className="focus:outline-none">
                                <img src={next} alt="Next" />
                            </button>
                        </div>
                    </div>

                    {filteredData[category] ? (
                        <div
                            ref={(el) => (scrollRefs.current[category] = el)}
                            className="w-full flex md:grid md:grid-cols-2 lg:grid-cols-3 scroll-smooth overflow-x-scroll gap-4 overflow-hidden whitespace-nowrap"
                        >
                            {filteredData[category]?.map((item) => (
                                <div
                                    onClick={() => {
                                        setSelectedItem(item);
                                        scrollToTop();
                                    }}
                                    key={item.id}
                                    className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg relative group pb-3 rounded-xl transition-all duration-300 cursor-pointer border-2 shadow-md bg-white flex-shrink-0"
                                >
                                    <a className="w-full inline-flex flex-col justify-center items-center" target="_blank">
                                        <picture className="w-full h-full rounded-t-xl bg-slate-200 relative">
                                            <source srcSet={item.image} />
                                            <img
                                                className="w-full min-h-[180px] md:max-h-56 rounded-t-xl"
                                                src={item.image}
                                                alt={item.title}
                                            />
                                            <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl">
                                                <FaYoutube className="text-6xl text-red-600 group-hover:text-red-400 transition-all duration-500" />
                                            </button>
                                        </picture>
                                    </a>
                                    <h3 className="text-lg text-center text-black font-semibold mt-1">
                                        {item.title}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-center text-2xl text-red-600 font-bold">Mavjud emas</p>
                    )}
                </section>
            ))}

            {selectedItem && (
                <div className="bg-black/50 w-screen h-screen fixed top-0 left-0 z-40" onClick={() => setSelectedItem(null)}>
                    <div className="w-full h-[250px] md:h-[600px] bg-white rounded-lg z-20 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:max-w-5xl"
                        onClick={(e) => e.stopPropagation()} >
                        <iframe className="w-full h-full" src={selectedItem.videoUrl} title={selectedItem.title} allowFullScreen ></iframe>
                        <button className="absolute -top-10 right-1 z-50 cursor-pointer text-gray-300 text-xl md:text-3xl font-extrabold" onClick={() => setSelectedItem(null)}> X </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default InputSelekt;
