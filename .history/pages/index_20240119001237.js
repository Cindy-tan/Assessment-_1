import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Card from '@/components/Card'
import Footer from '@/components/Footer'
import MenuItem from '@/components/MenuItem'
import SideNavigation from '@/components/SideNavigation'



export default function Home() {

  return (
    <>
      <Head>
        <title>Assessment 1</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main}`}>
        
        <div>
        <SideNavigation/>
        </div>

        <div className={`${styles.header}`}>
        <Header/>


        <div className={`${styles.cardLeft}`}>
          <Card title='Experiences' description='Worked in families chinese restaurant for over 5 years and more.'/>
          <Card title='Education' description='Studied Digital Design and Development at BCIT.'/>
          <Card title='Projects' description='Created posters, edited images, videos, and used social media as tools for business growth.'/>
        </div>
        <div className={`${styles.cardRight}`}>
          <Card title='Volunteering' description='During term 1, fall 2023, I volunteered for D3 2nd year students event.'/>
          <Card title='Skills' description='Figma, Photoshop, '/>
          <Card title='Projects' description='Created posters, edited images, videos, and used social media as tools for business growth.'/>
        </div>
        </div>
        

      


    


      </main>        
      <Footer/>
    </>
  )
}
