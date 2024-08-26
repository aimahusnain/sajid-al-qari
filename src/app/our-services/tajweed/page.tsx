import Image from 'next/image'
import Link from 'next/link'

const features = [
  "Proper pronunciation of Arabic letters",
  "Rules of elongation (Madd)",
  "Stopping and starting (Waqf and Ibtida)",
  "Emphasis on thick and thin letters",
  "Rules of noon sakinah and tanween",
  "Interactive recitation practice",
]

const syllabus = [
  { week: 1, topic: "Introduction to Tajweed" },
  { week: 2, topic: "Makhārij al-Ḥurūf (Articulation Points)" },
  { week: 3, topic: "Ṣifāt al-Ḥurūf (Characteristics of Letters)" },
  { week: 4, topic: "Rules of Noon Sakinah and Tanween" },
  { week: 5, topic: "Rules of Meem Sakinah" },
  { week: 6, topic: "Types of Madd (Elongation)" },
  { week: 7, topic: "Waqf (Stopping) and Ibtida (Starting)" },
  { week: 8, topic: "Practical Application and Recitation" },
]

export default function TajweedCoursePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br pt-24 from-[#095D41] via-[#288D74] to-blue-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center mb-16 animate-fade-in-down">
          <h1 className="text-5xl font-extrabold mb-4">Master Tajweed</h1>
          <p className="text-xl mb-8">Perfect your Quranic recitation with proper Tajweed</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-6">Elevate Your Recitation</h2>
            <p className="mb-4">
              Tajweed is the art of reciting the Quran with precision and beauty. Our course is designed to help you master the rules of Tajweed, enhancing your connection with the divine words.
            </p>
            <p className="mb-4">
              Through expert instruction and guided practice, you&apos;ll learn to recite with confidence, clarity, and melodious perfection.
            </p>
            <div className="mt-8">
              <Link href="/enroll-tajweed" className="bg-white text-[#1E40AF] font-bold py-3 px-6 rounded-full hover:bg-purple-100 transition duration-300">
                Begin Your Journey
              </Link>
            </div>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl animate-fade-in">
            <Image
              src="/tajweed-illustration.png"
              alt="Tajweed Illustration"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        <section className="mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold mb-8 text-center">Course Highlights</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white text-[#1E40AF] rounded-lg p-6 shadow-lg transform transition duration-500 hover:scale-105">
                <svg className="w-8 h-8 mb-4 text-[#2BA060]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
                <h3 className="text-xl font-semibold mb-2">{feature}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold mb-8 text-center">Course Outline</h2>
          <div className="bg-white text-[#1E40AF] rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {syllabus.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="bg-[#2BA060] text-white rounded-full w-10 h-10 flex items-center justify-center mr-4">
                    {item.week}
                  </div>
                  <p className="font-semibold">{item.topic}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Unique Approach</h2>
          <div className="bg-white text-[#1E40AF] rounded-lg shadow-lg p-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h3 className="text-2xl font-bold mb-4">Audio-Visual Learning</h3>
                <p>Immerse yourself in our rich multimedia lessons that combine audio, video, and interactive exercises.</p>
              </div>
              <div className="mb-6 md:mb-0 md:mr-8">
                <h3 className="text-2xl font-bold mb-4">One-on-One Coaching</h3>
                <p>Receive personalized feedback and guidance from certified Tajweed experts.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Gradual Progression</h3>
                <p>Advance at your own pace through our carefully structured curriculum.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Transform Your Recitation</h2>
          <p className="mb-8">Join our Tajweed course and unlock the beauty of Quranic recitation.</p>
          <Link href="/free-tajweed-assessment" className="bg-white text-[#2BA060] font-bold py-3 px-6 rounded-full hover:bg-purple-100 transition duration-300 mr-4">
            Free Tajweed Assessment
          </Link>
          <Link href="/tajweed-pricing" className="bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded-full hover:bg-white hover:text-purple-700 transition duration-300">
            View Course Options
          </Link>
        </div>
      </div>
    </main>
  )
}