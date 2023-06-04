import Head from 'next/head'
import Header from '../../components/header/Header'
import First from '../../components/first/First'
import Brands from '../../components/brands/Brands'
import Collection from '../../components/collection/Collection'
import Novelties from '../../components/novelties/Novelties'
import Perfumes from '../../components/perfumes/Perfumes'
import Promotion from '../../components/promotion/Promotion'
import Last from '../../components/last/Last'
import Footer from '../../components/footer/Footer'
import DeliveryModal from '../../components/delivery-modal/DeliveryModal'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <First />
      <Brands />
      <Collection />
      <Novelties />
      <Perfumes />
      <Promotion />
      <Last />
      <Footer />
    </>
  )
}