import img_me from "../images/me-image.jpg"

export default function EDUCATION() {

  return (
    <div id="education-section">
      <div className="py-16 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
          <div className="text-base max-w-prose mx-auto lg:max-w-none">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Education</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              What education do I have?
            </p>
          </div>
          <div className="relative z-10 text-base max-w-prose mx-auto lg:max-w-5xl lg:mx-0 lg:pr-72">
            <p className="text-lg text-gray-500">
              Highschool - Kolding Gymnasium
            </p>
            <div className="space-x-56 flex justify-start text-gray-500">
              <div>Mathmatics & Socialstudies</div>
              <div>August 2017 - June 2020</div>
            </div>
          </div>
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
            <div className="relative z-10">
              <div className="prose prose-green text-gray-500 mx-auto lg:max-w-none">
                <p>
                  This is was my highschool where I had mathmatics and socialstudies as my main subjects.
                  I attended other subjects, which are the ones listed below.
                </p>
                <h5><strong>Other subjetcs:</strong></h5>
                <ul>
                  <li>Danish</li>
                  <li>History</li>
                  <li>Spanish</li>
                  <li>English</li>
                  <li>Physics</li>
                  <li>PE - Physical Education</li>
                  <li>Biology</li>
                  <li>Chemistry</li>
                  <li>Media Studies</li>
                  <li>Classical Civilisation</li>
                  <li>Religion</li>
                </ul>
                <div className="relative z-10 text-base max-w-prose mx-auto lg:max-w-5xl lg:mx-0">
                  <p className="text-lg text-gray-500">
                    University - Aalborg Universitet
                  </p>
                  <div className="space-x-56 flex justify-start text-gray-500">
                    <div>Bachelor in Computer Science</div>
                    <div>August 2021 - June 2024</div>
                  </div>
                </div>
                <div className="pt-6">
                  <div><strong>Courses:</strong></div>
                </div>
                <p>
                  1. Semester
                </p>
                <ul>
                  <li>Imperative programming</li>
                  <li>The theoretical basis of Computer Science</li>
                  <li>Problem-based learning</li>
                </ul>
                <p>
                  2. Semester
                </p>
                <ul>
                  <li>Probability theory and Linear algebra</li>
                  <li>Internet works and Web programming</li>
                  <li>Algorithms and Data structures</li>
                </ul>
                <div className="pt-6">
                  <div><strong>Projects:</strong></div>
                </div>
                <ul>
                  <li>P0-Project - (Green Computing)</li>
                  <li>P1-Project - (Intelligent Garbage Sorting)</li>
                  <li>P2-Project - (API Linking)</li>
                </ul>
              </div>
            </div>
            <div className="mt-12 relative text-base max-w-prose mx-auto lg:mt-0 lg:max-w-none">
              <svg
                className="absolute top-0 right-0 -mt-20 -mr-20 lg:top-auto lg:right-auto lg:bottom-1/2 lg:left-1/2 lg:mt-0 lg:mr-0 xl:top-0 xl:right-0 xl:-mt-20 xl:-mr-20"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="bedc54bc-7371-44a2-a2bc-dc68d819ae60"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width={404} height={384} fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)" />
              </svg>
              <blockquote className="relative bg-gray-800 rounded-lg shadow-lg">
                <div className="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">
                  <img
                    src="https://i.imgur.com/hctCc5i.png"
                    alt="HydroHoster"
                    className="h-8"
                  />
                  <div className="relative text-lg text-white font-medium mt-8">
                    <svg
                      className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-700"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="relative">
                      Success and growth comes with the right determination and by paying attention to details, but don't forget
                      to make sure to greatly appreciate and value your hard work and success in life.
                    </p>
                  </div>
                </div>
                <cite className="relative flex items-center sm:items-start bg-green-600 rounded-b-lg not-italic py-5 px-6 sm:py-5 sm:pl-12 sm:pr-10 sm:mt-10">
                  <div className="relative rounded-full border-2 border-white sm:absolute sm:top-0 sm:transform sm:-translate-y-1/2">
                    <img
                      className="w-13 h-13 md:w-20 md:h-20 rounded-full"
                      src={img_me}
                      alt="This is me"
                    />
                  </div>
                  <span className="relative ml-4 text-green-300 font-semibold leading-6 sm:ml-24 sm:pl-1">
                    <p className="text-white font-semibold sm:inline">Jacob Kyed Andreassen</p>{' '}
                    <p className="sm:inline">Student</p>
                  </span>
                </cite>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}