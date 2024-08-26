import Image from 'next/image'
import Link from 'next/link'

const tafsirBenefits = [
  "Deeper understanding of Quranic verses",
  "Historical context of revelations",
  "Linguistic analysis of Quranic Arabic",
  "Exploration of various scholarly interpretations",
  "Application of Quranic teachings in daily life",
  "Strengthening of faith through knowledge",
]

export default function QuranTafsirPage() {
  return (
    <main className="min-h-screen pt-20 bg-gradient-to-br from-yellow-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-4 text-blue-800 font-arabic">
            Quran Tafsir: Unveiling Divine Wisdom
          </h1>
          <p className="text-xl mb-8 text-yellow-700">
            Explore the depths of Quranic meaning through comprehensive Tafsir studies
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition duration-300">
            <h2 className="text-3xl font-bold mb-6 text-blue-700">Illuminate Your Understanding</h2>
            <p className="mb-4 text-yellow-800">
              Our Quran Tafsir course offers an in-depth journey into the meanings, context, and significance of Quranic verses. Guided by expert scholars, you&apos;ll gain profound insights into the divine message and its relevance to our lives.
            </p>
            <p className="mb-6 text-yellow-800">
              Discover the beauty of Quranic exegesis and enrich your spiritual connection with Allah&apos;s words.
            </p>
            <Link href="/contact" className="inline-block bg-yellow-600 text-white font-bold py-3 px-6 rounded-full hover:bg-yellow-700 transition duration-300">
              Begin Your Tafsir Journey
            </Link>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/services/_dbb75f2c-e8fb-4d39-aabf-bd320d6c84bf.jfif"
              alt="Quran Tafsir Study"
              layout="fill"
              objectFit="cover"
              className="transform hover:scale-110 transition duration-500"
            />
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">Benefits of Tafsir Study</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {tafsirBenefits.map((benefit, index) => (
              <div key={index} className="bg-white text-yellow-800 rounded-lg p-6 shadow-lg transform hover:scale-105 transition duration-300">
                <svg className="w-8 h-8 mb-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <h3 className="text-xl font-semibold mb-2">{benefit}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">Our Tafsir Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-yellow-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-700">Comprehensive Analysis</h3>
              <p className="text-yellow-800">In-depth examination of verses from multiple perspectives</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-700">Historical Context</h3>
              <p className="text-yellow-800">Understand the circumstances of revelation and their significance</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-700">Contemporary Relevance</h3>
              <p className="text-yellow-800">Apply Quranic teachings to modern-day challenges and situations</p>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-blue-700 text-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Featured Tafsir Scholars</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {['Ibn Kathir', 'Al-Tabari', 'Al-Qurtubi'].map((scholar, index) => (
              <div key={index} className="text-center">
                <div className="bg-yellow-100 text-blue-800 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
                  {scholar.split(' ').map(word => word[0]).join('')}
                </div>
                <h3 className="text-xl font-bold mb-2">{scholar}</h3>
                <p className="text-yellow-200">Renowned for insightful and comprehensive Quranic interpretations</p>
              </div>
            ))}
          </div>
        </section>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-blue-800">Embark on Your Tafsir Journey</h2>
          <p className="mb-8 text-yellow-700">Deepen your connection with the Quran through expert guidance and profound insights</p>
          <Link href="/contact" className="bg-yellow-600 text-white font-bold py-3 px-6 rounded-full hover:bg-yellow-700 transition duration-300 mr-4">
            Contact us
          </Link>
          <Link href="/pricing" className="bg-white text-blue-700 font-bold py-3 px-6 rounded-full hover:bg-yellow-100 transition duration-300 border border-blue-600">
            View Pricing
          </Link>
        </div>
      </div>
    </main>
  )
}