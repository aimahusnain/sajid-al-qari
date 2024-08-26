import Head from 'next/head'
import { FC } from 'react'

const Home: FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">

      <header className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-12 px-4 shadow-lg">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold mb-4 font-amiri">Islamic Education Center</h1>
          <p className="text-2xl font-raleway">Enlighten Your Path to Knowledge</p>
        </div>
      </header>

      <nav className="bg-white shadow-md py-4 sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <ul className="flex justify-center space-x-8 font-raleway">
            <li><a href="#offerings" className="text-gray-700 hover:text-blue-600 transition duration-300">Offerings</a></li>
            <li><a href="#features" className="text-gray-700 hover:text-blue-600 transition duration-300">Features</a></li>
            <li><a href="#enroll" className="text-gray-700 hover:text-blue-600 transition duration-300">Enroll</a></li>
          </ul>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-16">
        <section id="offerings" className="mb-24">
          <h2 className="text-5xl font-bold mb-12 text-center text-gray-800 font-amiri">Our Core Offerings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {offerings.map((offering, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
                <div className="bg-gradient-to-r from-blue-500 to-green-500 py-6">
                  <h3 className="text-3xl font-bold text-center text-white font-amiri">{offering.title}</h3>
                </div>
                <ul className="p-8 space-y-4">
                  {offering.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="h-6 w-6 text-green-500 mr-3 mt-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="font-raleway">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="features" className="mb-24">
          <h2 className="text-5xl font-bold mb-12 text-center text-gray-800 font-amiri">Program Features</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 text-center transform transition duration-500 hover:bg-blue-100 hover:shadow-xl">
                <p className="text-lg font-raleway">{feature}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="enroll" className="text-center bg-gradient-to-r from-blue-100 to-green-100 rounded-2xl p-16 shadow-xl">
          <h2 className="text-5xl font-bold mb-6 text-gray-800 font-amiri">Begin Your Journey Today</h2>
          <p className="text-2xl mb-10 text-gray-600 font-raleway">Take the first step towards a deeper understanding of Islam and enrich your life with knowledge</p>
          <button className="bg-gradient-to-r from-blue-600 to-green-600 text-white text-2xl font-bold py-4 px-10 rounded-full hover:from-blue-700 hover:to-green-700 transition duration-300 transform hover:scale-105 hover:shadow-lg font-raleway">
            Enroll Now
          </button>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12 mt-24">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xl font-raleway">&copy; 2024 Islamic Education Center. All rights reserved.</p>
          <p className="mt-4 text-lg font-raleway">Nurturing minds, inspiring souls, and building a brighter future.</p>
          <div className="mt-8 flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <span className="sr-only">Facebook</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <span className="sr-only">Instagram</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

const offerings = [
  {
    title: "Quran Studies",
    items: [
      "Noorani Qaida for beginners",
      "Quran reading with Tajweed",
      "Quran memorization (Hifz)",
      "Quran translation and Tafseer",
    ],
  },
  {
    title: "Arabic Language",
    items: [
      "Basic to advanced levels",
      "Arabic grammar",
      "Conversational Arabic",
      "Classical Arabic literature",
    ],
  },
  {
    title: "Islamic Studies",
    items: [
      "Fundamentals of Islam",
      "Hadith studies and research",
      "Daily life supplications",
      "Contemporary Islamic issues",
    ],
  },
  {
    title: "Prayer (Salah)",
    items: [
      "Complete Salah instruction",
      "Memorization of essential surahs",
      "Understanding spiritual aspects",
      "Maintaining regular prayers",
    ],
  },
  {
    title: "Islamic History",
    items: [
      "Life of Prophet Muhammad (PBUH)",
      "Early Islamic civilizations",
      "Golden Age of Islam",
      "Contemporary Islamic world",
    ],
  },
]

const features = [
  "Personalized one-on-one tutoring",
  "Female tutors available",
  "Customized class schedules",
  "40-minute daily classes",
  "5 days a week",
  "2 FREE trial classes",
  "Flexible timing",
  "Interactive online platform",
  "Certified instructors",
  "Regular progress reports",
  "Access to recorded lessons",
]

export default Home