import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Work from '@/components/Work'
import Services from '@/components/Services'
import Process from '@/components/Process'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Work />
        <Services />
        <Process />
        <Contact />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  )
}
