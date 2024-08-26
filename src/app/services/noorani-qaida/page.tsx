import Image from 'next/image'
import Link from 'next/link'

const features = [
  "Introduction to Arabic alphabet",
  "Proper pronunciation of letters",
  "Combination of letters",
  "Basic Quranic words",
  "Short surahs and duas",
  "Interactive exercises",
]

const syllabus = [
  { week: 1, topic: "Introduction to Arabic letters" },
  { week: 2, topic: "Vowel sounds and diacritical marks" },
  { week: 3, topic: "Connecting letters" },
  { week: 4, topic: "Sukoon and shadda" },
  { week: 5, topic: "Tanween and madda" },
  { week: 6, topic: "Reading simple words" },
  { week: 7, topic: "Basic Quranic vocabulary" },
  { week: 8, topic: "Recitation of short surahs" },
]

export default function NooraniQaidaPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br pt-24 from-blue-800 via-blue-700 to-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center mb-16 animate-fade-in-down">
          <h1 className="text-5xl font-extrabold mb-4">Quran for Kids (Noorani Qaida)</h1>
          <p className="text-xl mb-8 text-yellow-300">Master the foundations of Quranic reading</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-6 text-yellow-300">About the Course</h2>
            <p className="mb-4">
              Noorani Qaida is the essential first step in your Quranic learning journey. This course is designed to build a strong foundation in Arabic reading, enabling you to approach the Quran with confidence.
            </p>
            <p className="mb-4">
              Through interactive lessons and expert guidance, you&apos;ll master the Arabic alphabet, learn proper pronunciation, and begin reading simple Quranic words and phrases.
            </p>
            <div className="mt-8">
              <Link href="/pricing" className="bg-yellow-400 text-blue-800 font-bold py-3 px-6 rounded-full hover:bg-yellow-300 transition duration-300">
                Enroll Now
              </Link>
            </div>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl animate-fade-in">
            <Image
              src="/services/Kid reading noorani-qaida image.jfif"
              alt="Noorani Qaida Illustration"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        <section className="mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold mb-8 text-center text-yellow-300">Course Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-blue-900 text-yellow-300 rounded-lg p-6 shadow-lg transform transition duration-500 hover:scale-105">
                <svg className="w-8 h-8 mb-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <h3 className="text-xl font-semibold mb-2">{feature}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold mb-8 text-center text-yellow-300">Course Syllabus</h2>
          <div className="bg-blue-900 text-yellow-300 rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {syllabus.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="bg-yellow-400 text-blue-800 rounded-full w-10 h-10 flex items-center justify-center mr-4">
                    {item.week}
                  </div>
                  <p className="font-semibold">{item.topic}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold mb-8 text-center text-yellow-300">Learning Approach</h2>
          <div className="bg-blue-900 text-yellow-300 rounded-lg shadow-lg p-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h3 className="text-2xl font-bold mb-4">Interactive Online Classes</h3>
                <p>Engage in live sessions with expert instructors who provide personalized guidance and feedback.</p>
              </div>
              <div className="mb-6 md:mb-0 md:mr-8">
                <h3 className="text-2xl font-bold mb-4">Progress Tracking</h3>
                <p>Monitor your advancement with regular assessments and detailed progress reports.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Flexible Schedule</h3>
                <p>Choose class times that fit your schedule, with options available 24/7.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center animate-fade-in">
          <h2 className="text-3xl font-bold mb-4 text-yellow-300">Ready to Start Your Journey?</h2>
          <p className="mb-8">Join our Noorani Qaida course and take the first step towards reading the Quran.</p>
          <Link href="/contact" className="bg-yellow-400 text-blue-800 font-bold py-3 px-6 rounded-full hover:bg-yellow-300 transition duration-300 mr-4">
            Book a Free Trial
          </Link>
          <Link href="/pricing" className="bg-transparent border-2 border-yellow-400 text-yellow-400 font-bold py-3 px-6 rounded-full hover:bg-yellow-400 hover:text-blue-800 transition duration-300">
            View Pricing
          </Link>
        </div>
      </div>
    </main>
  )
}