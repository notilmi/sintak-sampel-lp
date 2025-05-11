import Link from "next/link"
import Image from "next/image"
import {
  Calendar,
  Clock,
  Code,
  CodeXml,
  ExternalLink,
  Github,
  Instagram,
  Layers,
  Layout,
  Linkedin,
  MapPin,
  MessageSquare,
  Rocket,
  Users,
  Zap,
} from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto max-w-7xl flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <Rocket className="h-6 w-6 text-rose-600" />
            <span className="text-lg font-bold">SINTAK</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-rose-600 transition-colors">
              Tentang
            </Link>
            <Link href="#materials" className="text-sm font-medium hover:text-rose-600 transition-colors">
              Materi
            </Link>
            <Link href="#speakers" className="text-sm font-medium hover:text-rose-600 transition-colors">
              Pemateri
            </Link>
            <Link href="#schedule" className="text-sm font-medium hover:text-rose-600 transition-colors">
              Jadwal
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:text-rose-600 transition-colors">
              FAQ
            </Link>
          </nav>
          <Link
            href="#register"
            className="inline-flex h-10 items-center justify-center rounded-md bg-rose-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 transition-colors"
          >
            Daftar Sekarang
          </Link>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                    🚀 Tingkatkan Skill Web Development-mu dengan SINTAK: Kelas Terbuka React & Next.js!
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Ikuti kelas terbuka interaktif dari HMJ Manajemen Informatika dan Google Developer Groups on Campus
                    POLSRI untuk mempelajari langkah-langkah praktis membuat aplikasi landing page modern menggunakan
                    React dan Next.js.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#register"
                    className="inline-flex h-12 items-center justify-center rounded-md bg-rose-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 transition-colors"
                  >
                    Daftar Sekarang!
                  </Link>
                  <Link
                    href="#about"
                    className="inline-flex h-12 items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 transition-colors"
                  >
                    Pelajari Lebih Lanjut
                  </Link>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="h-4 w-4" />
                  <span>Sabtu, 15 Juni 2025</span>
                  <Clock className="ml-2 h-4 w-4" />
                  <span>09:00 - 16:00 WIB</span>
                  <MapPin className="ml-2 h-4 w-4" />
                  <span>Kampus POLSRI</span>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  width={400}
                  height={400}
                  alt="SINTAK Event Illustration"
                  className="rounded-lg object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Mengenal Lebih Dekat SINTAK
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl">
                  SINTAK adalah kelas terbuka yang diselenggarakan oleh HMJ Manajemen Informatika dan Google Developer
                  Groups on Campus POLSRI untuk memperkenalkan mahasiswa pada pengembangan web modern menggunakan React
                  dan Next.js dengan bantuan AI.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="rounded-lg border border-gray-200 p-6 shadow-sm">
                <div className="flex flex-col items-center space-y-2 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-100">
                    <Zap className="h-6 w-6 text-rose-600" />
                  </div>
                  <h3 className="text-xl font-bold">Pembelajaran Praktis</h3>
                  <p className="text-sm text-gray-500">
                    Dapatkan pengalaman hands-on membangun landing page dengan teknologi modern React dan Next.js.
                  </p>
                </div>
              </div>
              <div className="rounded-lg border border-gray-200 p-6 shadow-sm">
                <div className="flex flex-col items-center space-y-2 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-100">
                    <Users className="h-6 w-6 text-rose-600" />
                  </div>
                  <h3 className="text-xl font-bold">Networking</h3>
                  <p className="text-sm text-gray-500">
                    Perluas jaringan dengan sesama mahasiswa dan komunitas developer di POLSRI.
                  </p>
                </div>
              </div>
              <div className="rounded-lg border border-gray-200 p-6 shadow-sm">
                <div className="flex flex-col items-center space-y-2 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-100">
                    <Rocket className="h-6 w-6 text-rose-600" />
                  </div>
                  <h3 className="text-xl font-bold">Tingkatkan Portofolio</h3>
                  <p className="text-sm text-gray-500">
                    Tambahkan skill React dan Next.js ke dalam portofolio untuk meningkatkan peluang karir.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Materials Section */}
        <section id="materials" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Materi yang Akan Dibahas
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl">
                  Kurikulum yang dirancang untuk membantu kamu memahami dasar-dasar React dan Next.js serta cara membuat
                  landing page yang menarik.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <div className="flex flex-col space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-100">
                    <Layout className="h-5 w-5 text-rose-600" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">Pengenalan Konsep Landing Page yang Efektif</h3>
                    <p className="text-sm text-gray-500">
                      Pelajari prinsip-prinsip desain dan struktur landing page yang dapat menarik perhatian pengunjung.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-100">
                    <Code className="h-5 w-5 text-rose-600" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">Dasar-Dasar React: Komponen, Props, dan State</h3>
                    <p className="text-sm text-gray-500">
                      Memahami konsep fundamental React untuk membangun UI yang interaktif dan dinamis.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-100">
                    <CodeXml className="h-5 w-5 text-rose-600" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">Mengenal Next.js: Framework untuk Aplikasi React</h3>
                    <p className="text-sm text-gray-500">
                      Eksplorasi keunggulan Next.js dalam pengembangan aplikasi React yang lebih baik dan teroptimasi.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-100">
                    <Layers className="h-5 w-5 text-rose-600" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">Struktur Folder dan Konfigurasi Dasar Next.js</h3>
                    <p className="text-sm text-gray-500">
                      Memahami struktur proyek Next.js dan cara mengkonfigurasi aplikasi untuk kebutuhan spesifik.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-100">
                    <Github className="h-5 w-5 text-rose-600" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">Styling Landing Page dengan Tailwind CSS</h3>
                    <p className="text-sm text-gray-500">
                      Belajar cara mendesain UI yang menarik dan responsif menggunakan Tailwind CSS.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-100">
                    <MessageSquare className="h-5 w-5 text-rose-600" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">Integrasi AI dalam Pengembangan Web</h3>
                    <p className="text-sm text-gray-500">
                      Pelajari cara memanfaatkan AI untuk mempercepat dan meningkatkan kualitas pengembangan web.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Speakers Section */}
        <section id="speakers" className="w-full py-12 md:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Kenalan dengan Pemateri Kece Kita!
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl">
                  Para pemateri berpengalaman dari HMJ MI dan GDG POLSRI yang akan membimbing kamu selama kegiatan.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border border-gray-200 p-6 shadow-sm">
                <div className="flex flex-col items-center space-y-4 text-center">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    width={100}
                    height={100}
                    alt="Speaker 1"
                    className="rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-bold">Ahmad Fauzi</h3>
                    <p className="text-sm text-gray-500">Ketua HMJ MI POLSRI</p>
                    <p className="mt-2 text-sm">
                      Berpengalaman dalam pengembangan web dan mobile apps menggunakan React dan React Native.
                    </p>
                    <div className="mt-4 flex justify-center gap-2">
                      <Link href="#" className="text-gray-400 hover:text-rose-600 transition-colors">
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </Link>
                      <Link href="#" className="text-gray-400 hover:text-rose-600 transition-colors">
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border border-gray-200 p-6 shadow-sm">
                <div className="flex flex-col items-center space-y-4 text-center">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    width={100}
                    height={100}
                    alt="Speaker 2"
                    className="rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-bold">Siti Nurhaliza</h3>
                    <p className="text-sm text-gray-500">Core Team GDG POLSRI</p>
                    <p className="mt-2 text-sm">
                      Frontend developer dengan keahlian dalam Next.js dan pengalaman membangun berbagai landing page.
                    </p>
                    <div className="mt-4 flex justify-center gap-2">
                      <Link href="#" className="text-gray-400 hover:text-rose-600 transition-colors">
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </Link>
                      <Link href="#" className="text-gray-400 hover:text-rose-600 transition-colors">
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border border-gray-200 p-6 shadow-sm">
                <div className="flex flex-col items-center space-y-4 text-center">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    width={100}
                    height={100}
                    alt="Speaker 3"
                    className="rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-bold">Budi Santoso</h3>
                    <p className="text-sm text-gray-500">Anggota HMJ MI Bidang Pengembangan Skill</p>
                    <p className="mt-2 text-sm">
                      Full-stack developer dengan fokus pada pengembangan aplikasi web menggunakan React dan Next.js.
                    </p>
                    <div className="mt-4 flex justify-center gap-2">
                      <Link href="#" className="text-gray-400 hover:text-rose-600 transition-colors">
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </Link>
                      <Link href="#" className="text-gray-400 hover:text-rose-600 transition-colors">
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Schedule Section */}
        <section id="schedule" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Rundown Acara</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl">Jadwal kegiatan SINTAK dari awal hingga akhir.</p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl py-12">
              <div className="space-y-8">
                <div className="flex flex-col space-y-2 rounded-lg border border-gray-200 p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="font-semibold">08:30 - 09:00</div>
                    <div className="text-sm text-gray-500">30 menit</div>
                  </div>
                  <div className="text-lg font-bold">Registrasi Peserta</div>
                  <div className="text-sm text-gray-500">Peserta melakukan registrasi dan menerima kit acara.</div>
                </div>
                <div className="flex flex-col space-y-2 rounded-lg border border-gray-200 p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="font-semibold">09:00 - 09:30</div>
                    <div className="text-sm text-gray-500">30 menit</div>
                  </div>
                  <div className="text-lg font-bold">Pembukaan dan Sambutan</div>
                  <div className="text-sm text-gray-500">Sambutan dari perwakilan HMJ MI dan GDG POLSRI.</div>
                </div>
                <div className="flex flex-col space-y-2 rounded-lg border border-gray-200 p-4 shadow-sm bg-rose-50">
                  <div className="flex items-center justify-between">
                    <div className="font-semibold">09:30 - 11:30</div>
                    <div className="text-sm text-gray-500">2 jam</div>
                  </div>
                  <div className="text-lg font-bold">Sesi 1: Pengenalan Landing Page dan React</div>
                  <div className="text-sm text-gray-500">Pengenalan konsep landing page dan dasar-dasar React.</div>
                </div>
                <div className="flex flex-col space-y-2 rounded-lg border border-gray-200 p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="font-semibold">11:30 - 12:30</div>
                    <div className="text-sm text-gray-500">1 jam</div>
                  </div>
                  <div className="text-lg font-bold">ISHOMA</div>
                  <div className="text-sm text-gray-500">Istirahat, Sholat, dan Makan siang.</div>
                </div>
                <div className="flex flex-col space-y-2 rounded-lg border border-gray-200 p-4 shadow-sm bg-rose-50">
                  <div className="flex items-center justify-between">
                    <div className="font-semibold">12:30 - 14:30</div>
                    <div className="text-sm text-gray-500">2 jam</div>
                  </div>
                  <div className="text-lg font-bold">Sesi 2: Membangun dengan Next.js</div>
                  <div className="text-sm text-gray-500">Pengenalan Next.js dan praktik membangun landing page.</div>
                </div>
                <div className="flex flex-col space-y-2 rounded-lg border border-gray-200 p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="font-semibold">14:30 - 15:30</div>
                    <div className="text-sm text-gray-500">1 jam</div>
                  </div>
                  <div className="text-lg font-bold">Sesi Tanya Jawab</div>
                  <div className="text-sm text-gray-500">Sesi interaktif untuk menjawab pertanyaan peserta.</div>
                </div>
                <div className="flex flex-col space-y-2 rounded-lg border border-gray-200 p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="font-semibold">15:30 - 16:00</div>
                    <div className="text-sm text-gray-500">30 menit</div>
                  </div>
                  <div className="text-lg font-bold">Penutup dan Sesi Foto Bersama</div>
                  <div className="text-sm text-gray-500">
                    Penutupan acara dan sesi foto bersama seluruh peserta dan pemateri.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sponsors Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Didukung Oleh</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl">
                  Partner dan sponsor yang mendukung kegiatan SINTAK.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-3">
              <div className="flex items-center justify-center p-6 rounded-lg border border-gray-200 shadow-sm">
                <Image
                  src="/placeholder.svg?height=80&width=200"
                  width={200}
                  height={80}
                  alt="Sponsor 1"
                  className="object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-6 rounded-lg border border-gray-200 shadow-sm">
                <Image
                  src="/placeholder.svg?height=80&width=200"
                  width={200}
                  height={80}
                  alt="Sponsor 2"
                  className="object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-6 rounded-lg border border-gray-200 shadow-sm">
                <Image
                  src="/placeholder.svg?height=80&width=200"
                  width={200}
                  height={80}
                  alt="Sponsor 3"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Pertanyaan yang Sering Ditanyakan
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl">
                  Jawaban untuk pertanyaan umum tentang kegiatan SINTAK.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl py-12">
              <div className="space-y-4">
                <div className="rounded-lg border border-gray-200 shadow-sm">
                  <button className="flex w-full items-center justify-between px-4 py-3 text-left font-medium">
                    <span>Apakah kegiatan ini berbayar?</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-gray-500"
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </button>
                  <div className="px-4 pb-3">
                    <p className="text-sm text-gray-500">
                      Tidak, kegiatan SINTAK ini sepenuhnya gratis untuk seluruh mahasiswa POLSRI.
                    </p>
                  </div>
                </div>
                <div className="rounded-lg border border-gray-200 shadow-sm">
                  <button className="flex w-full items-center justify-between px-4 py-3 text-left font-medium">
                    <span>Siapa saja yang boleh mengikuti kegiatan ini?</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-gray-500"
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </button>
                  <div className="px-4 pb-3">
                    <p className="text-sm text-gray-500">
                      Kegiatan ini terbuka untuk seluruh mahasiswa POLSRI dari semua jurusan yang tertarik dengan
                      pengembangan web.
                    </p>
                  </div>
                </div>
                <div className="rounded-lg border border-gray-200 shadow-sm">
                  <button className="flex w-full items-center justify-between px-4 py-3 text-left font-medium">
                    <span>Apakah ada persyaratan khusus untuk mengikuti?</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-gray-500"
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </button>
                  <div className="px-4 pb-3">
                    <p className="text-sm text-gray-500">
                      Tidak ada persyaratan khusus, namun akan lebih baik jika peserta memiliki pengetahuan dasar HTML,
                      CSS, dan JavaScript.
                    </p>
                  </div>
                </div>
                <div className="rounded-lg border border-gray-200 shadow-sm">
                  <button className="flex w-full items-center justify-between px-4 py-3 text-left font-medium">
                    <span>Apakah saya perlu membawa laptop?</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-gray-500"
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </button>
                  <div className="px-4 pb-3">
                    <p className="text-sm text-gray-500">
                      Ya, peserta diharapkan membawa laptop untuk mengikuti sesi praktik langsung.
                    </p>
                  </div>
                </div>
                <div className="rounded-lg border border-gray-200 shadow-sm">
                  <button className="flex w-full items-center justify-between px-4 py-3 text-left font-medium">
                    <span>Bagaimana jika saya memiliki pertanyaan setelah acara selesai?</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-gray-500"
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </button>
                  <div className="px-4 pb-3">
                    <p className="text-sm text-gray-500">
                      Kamu dapat menghubungi panitia melalui email atau media sosial HMJ MI dan GDG POLSRI yang akan
                      dibagikan saat acara.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Registration Section */}
        <section id="register" className="w-full py-12 md:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl grid items-center gap-6 px-4 sm:px-6 lg:px-8 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Jangan Sampai Ketinggalan!</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl">
                Segera daftarkan dirimu untuk mengikuti SINTAK dan tingkatkan skill web development-mu dengan React dan
                Next.js.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                <Link
                  href="https://forms.gle/example"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-rose-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 transition-colors"
                >
                  Daftar Sekarang!
                </Link>
                <Link
                  href="#about"
                  className="inline-flex h-12 items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 transition-colors"
                >
                  Pelajari Lebih Lanjut
                </Link>
              </div>
              <div className="mt-4 text-sm text-gray-500">
                <p>
                  Pendaftaran ditutup pada: <strong>10 Juni 2025, 23:59 WIB</strong>
                </p>
                <p className="mt-2">Kuota terbatas hanya untuk 50 peserta!</p>
              </div>
            </div>
            <div className="flex flex-col space-y-4 rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
              <h3 className="text-xl font-bold">Informasi Kontak</h3>
              <div className="grid gap-2">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-rose-600" />
                  <span className="text-sm">Panitia SINTAK 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Instagram className="h-4 w-4 text-rose-600" />
                  <Link href="#" className="text-sm hover:underline">
                    @hmj_mi_polsri
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <Instagram className="h-4 w-4 text-rose-600" />
                  <Link href="#" className="text-sm hover:underline">
                    @gdg_polsri
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <ExternalLink className="h-4 w-4 text-rose-600" />
                  <Link href="#" className="text-sm hover:underline">
                    Website HMJ MI POLSRI
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-white py-6">
        <div className="mx-auto max-w-7xl flex flex-col items-center justify-between gap-4 px-4 md:flex-row sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <Rocket className="h-6 w-6 text-rose-600" />
            <span className="text-lg font-bold">SINTAK</span>
          </div>
          <p className="text-center text-sm text-gray-500 md:text-left">
            &copy; {new Date().getFullYear()} Himpunan Mahasiswa Jurusan Manajemen Informatika POLSRI & Google Developer
            Groups on Campus POLSRI. All Rights Reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-gray-400 hover:text-rose-600 transition-colors">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-rose-600 transition-colors">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-rose-600 transition-colors">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

