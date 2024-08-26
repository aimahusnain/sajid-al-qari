// app/courses/quran-reading-recitation/page.tsx
import Image from 'next/image'
import Link from 'next/link'

const courseFeatures = [
  "Proper pronunciation (Makharij)",
  "Tajweed rules application",
  "Rhythm and melody in recitation",
  "Understanding of Quranic verses",
  "Memorization techniques",
  "Regular practice sessions",
]

const courseLevels = [
  { level: "Beginner", description: "Learn proper pronunciation and basic recitation" },
  { level: "Intermediate", description: "Focus on Tajweed rules and fluent reading" },
  { level: "Advanced", description: "Master melodious recitation and deeper understanding" },
]

export default function QuranReadingRecitationPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br pt-24 from-blue-900 via-blue-800 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center mb-16 animate-fade-in-down">
          <h1 className="text-5xl font-extrabold mb-4">Quran Reading & Recitation Course</h1>
          <p className="text-xl mb-8 text-yellow-300">Perfect your Quranic recitation and deepen your connection with Allah&apos;s words</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-6 text-yellow-300">About the Course</h2>
            <p className="mb-4">
              Our Quran Reading & Recitation course is designed to help you read the Quran with accuracy, fluency, and beauty. Whether you&apos;re a beginner or looking to improve your recitation, this course caters to all levels.
            </p>
            <p className="mb-4">
              Under the guidance of expert Qaris, you&apos;ll learn proper pronunciation, Tajweed rules, and the art of melodious recitation. Our interactive online classes ensure personalized attention and continuous improvement.
            </p>
            <div className="mt-8">
              <Link href="/pricing" className="bg-yellow-400 text-blue-900 font-bold py-3 px-6 rounded-full hover:bg-yellow-300 transition duration-300">
                Enroll Now
              </Link>
            </div>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl animate-fade-in">
            <Image
              src="/quran-recitation-illustration.jpg"
              alt="Quran Recitation Illustration"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        <section className="mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold mb-8 text-center text-yellow-300">Course Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {courseFeatures.map((feature, index) => (
              <div key={index} className="bg-blue-800 text-yellow-300 rounded-lg p-6 shadow-lg transform transition duration-500 hover:scale-105">
                <svg className="w-8 h-8 mb-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <h3 className="text-xl font-semibold mb-2">{feature}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold mb-8 text-center text-yellow-300">Course Levels</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courseLevels.map((level, index) => (
              <div key={index} className="bg-blue-800 text-yellow-300 rounded-lg shadow-lg p-8 transform transition duration-500 hover:scale-105">
                <h3 className="text-2xl font-bold mb-4">{level.level}</h3>
                <p>{level.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold mb-8 text-center text-yellow-300">Our Teaching Approach</h2>
          <div className="bg-blue-800 text-yellow-300 rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Personalized Instruction</h3>
                <p>Our experienced Qaris provide individualized attention, ensuring you progress at your own pace and address your specific challenges.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Interactive Learning</h3>
                <p>Engage in live online sessions with real-time feedback, group discussions, and practical recitation exercises.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Comprehensive Curriculum</h3>
                <p>Cover all aspects of Quranic recitation, from basic pronunciation to advanced Tajweed rules and melodious recitation.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Regular Assessment</h3>
                <p>Track your progress with periodic evaluations and receive detailed feedback to help you continuously improve.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold mb-8 text-center text-yellow-300">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-800 text-yellow-300 rounded-lg shadow-lg p-6">
              <p className="italic mb-4">&quot;This course transformed my Quran recitation. The teachers are patient and knowledgeable, and the interactive sessions are incredibly helpful.&quot;</p>
              <p className="font-semibold">- Sarah, Intermediate Level Student</p>
            </div>
            <div className="bg-blue-800 text-yellow-300 rounded-lg shadow-lg p-6">
              <p className="italic mb-4">&quot;I started as a complete beginner, and now I can read the Quran with proper Tajweed. The step-by-step approach and regular practice sessions made all the difference.&quot;</p>
              <p className="font-semibold">- Ahmed, Beginner Level Graduate</p>
            </div>
          </div>
        </section>

        <div className="text-center animate-fade-in">
          <h2 className="text-3xl font-bold mb-4 text-yellow-300">Ready to Enhance Your Quranic Recitation?</h2>
          <p className="mb-8">Join our Quran Reading & Recitation course and embark on a journey to perfect your recitation.</p>
          <Link href="/contact" className="bg-yellow-400 text-blue-900 font-bold py-3 px-6 rounded-full hover:bg-yellow-300 transition duration-300 mr-4">
            Book a Free Trial
          </Link>
          <Link href="/pricing" className="bg-transparent border-2 border-yellow-400 text-yellow-400 font-bold py-3 px-6 rounded-full hover:bg-yellow-400 hover:text-blue-900 transition duration-300">
            View Pricing
          </Link>
        </div>
      </div>
    </main>
  )
}