import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import Hero from "../../components/Hero";

function Home() {
  return (
    <>
        <Header/>
        <main className="min-h-screen bg-white">
            <Hero/>
        </main>
        <Footer/>
    </>
  )
}

export default Home;