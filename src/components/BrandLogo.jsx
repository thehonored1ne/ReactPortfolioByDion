const BrandIcon = ({ logoSrc, linkHref }) => {

    return (
        <a 
            href={linkHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block w-24 h-24 overflow-hidden border-2  cursor-pointer border-white  rounded-sm border-b-black border-r-black hover:border-black hover:border-b-white hover:border-r-white"
        >

            <img 
                src={logoSrc} 
                alt="Brand Logo" 
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
            />


            <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">

                <svg 
                    className="w-8 h-8 text-white transform translate-y-2 transition-transform duration-300 group-hover:translate-y-0" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>

            </div>
        </a>
    );
};

export default BrandIcon