import img_background from "../images/lead-bg.jpg"

export default function Top() {

    return (
    <div id="home-section">
    <div className="relative">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100"/>
        <div className="mt-9 max-w-7xl mx-auto sm:px-9 lg:px-9">
        <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
            <div className="absolute inset-0">
            <img
                className="h-full w-full"
                src={img_background}
                alt="People working on laptops"
            />
            <div className="absolute inset-0 bg-green-600 mix-blend-multiply" />
            </div>
            <div className="relative px-4 py-16 sm:px-12 sm:py-24 lg:py-32 lg:px-8">
            <h1 className="text-center text-4xl font-extrabold rounded-md tracking-tight sm:text-5xl lg:text-6xl">
                <span className="block text-white uppercase">Jacob Kyed</span>
                <span className="block text-green-200 uppercase">Andreassen</span>
            </h1>
            <p className="mt-6 max-w-lg mx-auto text-center text-xl text-green-200 sm:max-w-3xl">
                Computer Science Student
            </p>
            <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                <a
                    href="#about-me-section"
                    className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-green-700 bg-white hover:bg-green-50 sm:px-8"
                >
                    About Me
                </a>
                <a
                    href="#contact-me-section"
                    className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
                >
                    Contact Me
                </a>
                <p className="p-12"></p>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>
    )
}