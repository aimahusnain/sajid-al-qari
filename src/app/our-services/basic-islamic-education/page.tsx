import Image from 'next/image'
import Link from 'next/link'

const features = [
  "Fundamentals of Islamic beliefs (Aqeedah)",
  "Introduction to Quran and Hadith",
  "Basics of Islamic jurisprudence (Fiqh)",
  "Islamic history and prophetic biography (Seerah)",
  "Islamic ethics and character development",
  "Understanding Islamic worship practices",
]

const syllabus = [
  { unit: 1, topic: "Introduction to Islam and the Five Pillars" },
  { unit: 2, topic: "The Six Articles of Faith" },
  { unit: 3, topic: "Quranic Studies: Structure and Themes" },
  { unit: 4, topic: "Prophetic Traditions: Introduction to Hadith" },
  { unit: 5, topic: "Islamic History: From Prophet Muhammad to the Four Caliphs" },
  { unit: 6, topic: "Basics of Islamic Law and Jurisprudence" },
  { unit: 7, topic: "Islamic Ethics and Moral Values" },
  { unit: 8, topic: "Contemporary Islamic Issues and Challenges" },
]

export default function BasicIslamicEducationPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br pt-24 from-yellow-600 via-yellow-500 to-blue-400 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center mb-16 animate-fade-in-down">
          <h1 className="text-5xl font-extrabold mb-4">Basic Islamic Education</h1>
          <p className="text-xl mb-8">Build a strong foundation in Islamic knowledge and practice</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-6">Discover the Beauty of Islam</h2>
            <p className="mb-4">
              Our Basic Islamic Education course is designed to provide a comprehensive introduction to the core principles and practices of Islam. Whether you&apos;re new to the faith or seeking to deepen your understanding, this course offers a solid foundation in Islamic knowledge.
            </p>
            <p className="mb-4">
              Explore the rich tapestry of Islamic teachings, from foundational beliefs to practical worship, and gain insights into the historical and contemporary contexts of the faith.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="bg-blue-600 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 transition duration-300">
                Begin Your Islamic Journey
              </Link>
            </div>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl animate-fade-in">
            <Image
              src="/services/Child readig quran.jfif"
              alt="Islamic Education Illustration"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        <section className="mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold mb-8 text-center">Course Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-yellow-100 text-blue-800 rounded-lg p-6 shadow-lg transform transition duration-500 hover:scale-105">
                <svg className="w-8 h-8 mb-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
                <h3 className="text-xl font-semibold mb-2">{feature}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold mb-8 text-center">Course Curriculum</h2>
          <div className="bg-yellow-100 text-blue-800 rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {syllabus.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="bg-yellow-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4">
                    {item.unit}
                  </div>
                  <p className="font-semibold">{item.topic}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Educational Approach</h2>
          <div className="bg-yellow-100 text-blue-800 rounded-lg shadow-lg p-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h3 className="text-2xl font-bold mb-4">Holistic Learning</h3>
                <p>Integrate knowledge, practice, and spiritual development for a well-rounded Islamic education.</p>
              </div>
              <div className="mb-6 md:mb-0 md:mr-8">
                <h3 className="text-2xl font-bold mb-4">Engaging Content</h3>
                <p>Learn through a variety of methods including lectures, discussions, and multimedia resources.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Practical Application</h3>
                <p>Bridge theory with practice through real-world examples and guided implementation of Islamic teachings.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Embark on Your Islamic Learning Journey</h2>
          <p className="mb-8">Join our Basic Islamic Education course to build a strong foundation in faith and practice.</p>
          <Link href="/contact" className="bg-blue-600 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 transition duration-300 mr-4">
            Contact us
          </Link>
          <Link href="/pricing" className="bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded-full hover:bg-white hover:text-yellow-600 transition duration-300">
            View Pricing
          </Link>
        </div>
      </div>
    </main>
  )
}