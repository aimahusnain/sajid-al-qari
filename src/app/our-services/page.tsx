import Link from 'next/link'
import { FC } from 'react'

const Home: FC = () => {
  return (
    <div className="min-h-screen bg-yellow-50">

      <header className="bg-blue-600 text-white py-24 pt-36 px-4 shadow-lg">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold mb-4 font-amiri">Sajid Quran Academy</h1>
          <p className="text-2xl font-raleway">Enlighten Your Path to Knowledge</p>
        </div>
      </header>

      <nav className="bg-white shadow-md py-4 sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <ul className="flex justify-center space-x-8 font-raleway">
            <li><Link href="#offerings" className="text-gray-700 hover:text-yellow-500 transition duration-300">Offerings</Link></li>
            <li><Link href="#features" className="text-gray-700 hover:text-yellow-500 transition duration-300">Features</Link></li>
            <li><Link href="#enroll" className="text-gray-700 hover:text-yellow-500 transition duration-300">Enroll</Link></li>
          </ul>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-16">
        <section id="offerings" className="mb-24">
          <h2 className="text-5xl font-bold mb-12 text-center text-gray-800 font-amiri">Our Core Offerings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {offerings.map((offering, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
                <div className="bg-yellow-500 py-6">
                  <h3 className="text-3xl font-bold text-center text-white font-amiri">{offering.title}</h3>
                </div>
                <ul className="p-8 space-y-4">
                  {offering.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="h-6 w-6 text-blue-600 mr-3 mt-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
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
              <div key={index} className="bg-white rounded-xl shadow-md p-6 text-center transform transition duration-500 hover:bg-yellow-100 hover:shadow-xl">
                <p className="text-lg font-raleway">{feature}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="enroll" className="text-center bg-blue-100 rounded-2xl p-16 shadow-xl">
          <h2 className="text-5xl font-bold mb-6 text-gray-800 font-amiri">Begin Your Journey Today</h2>
          <p className="text-2xl mb-10 text-gray-600 font-raleway">Take the first step towards a deeper understanding of Islam and enrich your life with knowledge</p>
          <button className="bg-yellow-500 text-white text-2xl font-bold py-4 px-10 rounded-full hover:bg-yellow-600 transition duration-300 transform hover:scale-105 hover:shadow-lg font-raleway">
            Enroll Now
          </button>
        </section>
      </main>
    </div>
  )
}

export default Home


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
