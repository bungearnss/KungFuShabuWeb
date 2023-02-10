'use client'
import '../../assets/styles/main.scss'
import SectionHome from '@/app/components/home'
import SectionMenus from './components/menus/menus'
import SectionContact from './components/contact/contact'
import SectionFindUs from './components/findUs/findUs'

export default function Home() {
  return (
    <main>
      <section className='section home' id='home'>
        <SectionHome />
      </section>
      <section className='section findUs' id='findUs'>
        <SectionFindUs />
      </section>
      <section className='section menus' id='menus'>
        <SectionMenus />
      </section>
      <section className='section contact' id='contact'>
        <SectionContact />
      </section>
    </main>
  )
}
