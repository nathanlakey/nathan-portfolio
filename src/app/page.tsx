import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Work from '@/components/Work'
import Services from '@/components/Services'
import Process from '@/components/Process'
import FAQ from '@/components/FAQ'
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
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  )
}
