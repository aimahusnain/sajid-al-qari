import Image from 'next/image'
import Link from 'next/link'

const hadithCollections = [
  "Sahih Al-Bukhari",
  "Sahih Muslim",
  "Sunan Abu Dawood",
  "Jami` at-Tirmidhi",
  "Sunan an-Nasa'i",
  "Sunan Ibn Majah",
]

export default function HadithCoursesPage() {
  return (
    <main className="min-h-screen pt-20 bg-gradient-to-br from-blue-50 to-yellow-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-4 text-blue-800 font-arabic">
            Explore the Wisdom of Hadith
          </h1>
          <p className="text-xl mb-8 text-yellow-700">
            Discover the teachings of Prophet Muhammad (peace be upon him) through comprehensive Hadith courses
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition duration-300">
            <h2 className="text-3xl font-bold mb-6 text-blue-700">Deepen Your Understanding</h2>
            <p className="mb-4 text-yellow-800">
              Our Hadith courses offer a unique opportunity to explore the sayings and actions of Prophet Muhammad (peace be upon him). Gain insights into Islamic principles, ethics, and daily practices that form the cornerstone of Muslim life.
            </p>
            <p className="mb-6 text-yellow-800">
              Learn from expert scholars who will guide you through the authentic collections of Hadith, providing context, explanation, and practical application.
            </p>
            <Link href="/contact" className="inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 transition duration-300">
              Start Your Hadith Journey
            </Link>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/services/Child learning Hadih.jfif"
              alt="Students studying Hadith"
              layout="fill"
              objectFit="cover"
              className="transform hover:scale-110 transition duration-500"
            />
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">Major Hadith Collections</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {hadithCollections.map((collection, index) => (
              <div key={index} className="bg-white text-yellow-800 rounded-lg p-6 shadow-lg transform hover:scale-105 transition duration-300">
                <svg className="w-8 h-8 mb-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
                <h3 className="text-xl font-semibold mb-2">{collection}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">Our Teaching Methodology</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-yellow-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-700">Authentic Sources</h3>
              <p className="text-yellow-800">Study from recognized and authenticated Hadith collections</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-700">Interactive Learning</h3>
              <p className="text-yellow-800">Engage in discussions, quizzes, and practical applications of Hadith</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-700">Contextual Understanding</h3>
              <p className="text-yellow-800">Learn the historical and cultural context of each Hadith</p>
            </div>
          </div>
        </section>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-blue-800">Embark on Your Hadith Learning Journey</h2>
          <p className="mb-8 text-yellow-700">Gain a deeper understanding of Islamic teachings and the Prophet&apos;s wisdom</p>
          <Link href="/contact" className="bg-blue-600 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 transition duration-300 mr-4">
            Contact
          </Link>
          <Link href="/pricing" className="bg-white text-blue-700 font-bold py-3 px-6 rounded-full hover:bg-yellow-100 transition duration-300 border border-blue-600">
            View Pricing
          </Link>
        </div>
      </div>
    </main>
  )
}