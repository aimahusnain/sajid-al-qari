import Image from 'next/image'
import Link from 'next/link'

const features = [
  "Personalized memorization plans",
  "Tajweed integration",
  "Daily recitation practice",
  "Memorization techniques",
  "Regular revision sessions",
  "Progress tracking and analytics",
]

const syllabus = [
  { phase: 1, topic: "Foundation and Assessment" },
  { phase: 2, topic: "Short Surahs (Juz' 30)" },
  { phase: 3, topic: "Medium-length Surahs" },
  { phase: 4, topic: "Longer Surahs" },
  { phase: 5, topic: "Full Juz' Memorization" },
  { phase: 6, topic: "Multi-Juz' Integration" },
  { phase: 7, topic: "Complete Quran Review" },
  { phase: 8, topic: "Certification and Continued Practice" },
]

export default function QuranMemorizationPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br pt-24 from-blue-900 via-blue-800 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center mb-16 animate-fade-in-down">
          <h1 className="text-5xl font-extrabold mb-4">Quran Memorization (Hifz)</h1>
          <p className="text-xl mb-8 text-yellow-300">Embark on a transformative journey to preserve the words of Allah in your heart</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-6 text-yellow-300">Become a Hafiz</h2>
            <p className="mb-4">
              Our Quran Memorization (Hifz) program is designed to guide you through the noble pursuit of committing the entire Quran to memory. With expert instruction and a supportive community, you&apos;ll develop the skills and discipline needed for this sacred journey.
            </p>
            <p className="mb-4">
              Whether you&apos;re just starting or looking to complete your memorization, our structured approach caters to all levels and learning paces.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="bg-yellow-400 text-blue-900 font-bold py-3 px-6 rounded-full hover:bg-yellow-300 transition duration-300">
                Start Your Hifz Journey
              </Link>
            </div>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl animate-fade-in">
            <Image
              src="/services/Child reading quran front of lamp.jfif"
              alt="Quran Memorization Illustration"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        <section className="mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold mb-8 text-center text-yellow-300">Program Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
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
          <h2 className="text-3xl font-bold mb-8 text-center text-yellow-300">Hifz Journey</h2>
          <div className="bg-blue-800 text-yellow-300 rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {syllabus.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="bg-yellow-400 text-blue-900 rounded-full w-10 h-10 flex items-center justify-center mr-4">
                    {item.phase}
                  </div>
                  <p className="font-semibold">{item.topic}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold mb-8 text-center text-yellow-300">Our Comprehensive Approach</h2>
          <div className="bg-blue-800 text-yellow-300 rounded-lg shadow-lg p-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h3 className="text-2xl font-bold mb-4">Personalized Guidance</h3>
                <p>Work one-on-one with experienced Huffaz who tailor the program to your needs and pace.</p>
              </div>
              <div className="mb-6 md:mb-0 md:mr-8">
                <h3 className="text-2xl font-bold mb-4">Innovative Techniques</h3>
                <p>Learn proven memorization methods that enhance retention and understanding.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Community Support</h3>
                <p>Join a global community of learners for motivation, support, and shared experiences.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center animate-fade-in">
          <h2 className="text-3xl font-bold mb-4 text-yellow-300">Ready to Preserve the Quran in Your Heart?</h2>
          <p className="mb-8">Join our Hifz program and embark on this blessed journey of Quran memorization.</p>
          <Link href="https://wa.me/00923328918029" className="bg-yellow-400 text-blue-900 font-bold py-3 px-6 rounded-full hover:bg-yellow-300 transition duration-300 mr-4">
            Contact on Whatsapp
          </Link>
        </div>
      </div>
    </main>
  )
}