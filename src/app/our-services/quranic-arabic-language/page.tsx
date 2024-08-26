import Image from 'next/image'
import Link from 'next/link'

const features = [
  "Master Quranic Arabic pronunciation",
  "Understand Quranic vocabulary and grammar",
  "Learn Tajweed rules for proper recitation",
  "Explore the linguistic miracles of the Quran",
  "Practice with interactive exercises",
  "Gain insights into Quranic interpretation",
]

export default function QuranicArabicPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br pt-20 from-yellow-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-4 text-yellow-600 font-arabic">
            Quranic Arabic Language
          </h1>
          <p className="text-xl mb-8 text-blue-700">
            Unlock the beauty and wisdom of the Holy Quran through its original language
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition duration-300">
            <h2 className="text-3xl font-bold mb-6 text-yellow-600">Embark on a Spiritual Journey</h2>
            <p className="mb-4 text-blue-800">
              Our Quranic Arabic course is designed to deepen your connection with the Holy Quran by mastering its original language. Whether you&apos;re a beginner or looking to enhance your existing knowledge, this course offers a comprehensive path to understanding the linguistic miracles of the Quran.
            </p>
            <p className="mb-6 text-blue-800">
              Learn to read, understand, and appreciate the Quran in its purest form, unlocking layers of meaning and spiritual insight.
            </p>
            <Link href="/contact" className="inline-block bg-yellow-600 text-white font-bold py-3 px-6 rounded-full hover:bg-yellow-700 transition duration-300">
              Begin Your Quranic Journey
            </Link>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/services/Learning Arabic Language.jfif"
              alt="Quranic Arabic Calligraphy"
              layout="fill"
              objectFit="cover"
              className="transform hover:scale-110 transition duration-500"
            />
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-yellow-600">Course Highlights</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white text-blue-800 rounded-lg p-6 shadow-lg transform hover:scale-105 transition duration-300">
                <svg className="w-8 h-8 mb-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
                </svg>
                <h3 className="text-xl font-semibold mb-2">{feature}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-yellow-600">Our Teaching Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-yellow-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-600">Structured Curriculum</h3>
              <p className="text-blue-800">Carefully designed lessons to progressively build your Quranic Arabic skills</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-600">Expert Instructors</h3>
              <p className="text-blue-800">Learn from qualified scholars with deep knowledge of Quranic Arabic</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-600">Interactive Learning</h3>
              <p className="text-blue-800">Engage with practical exercises and real Quranic verses to reinforce your learning</p>
            </div>
          </div>
        </section>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-yellow-600">Begin Your Quranic Arabic Journey Today</h2>
          <p className="mb-8 text-blue-700">Unlock the linguistic treasures of the Holy Quran and deepen your understanding of Islam</p>
          <Link href="/contact" className="bg-yellow-600 text-white font-bold py-3 px-6 rounded-full hover:bg-yellow-700 transition duration-300 mr-4">
            Contact Us
          </Link>
          <Link href="/pricing" className="bg-white text-blue-700 font-bold py-3 px-6 rounded-full hover:bg-yellow-100 transition duration-300 border border-yellow-600">
            Pricing
          </Link>
        </div>
      </div>
    </main>
  )
}