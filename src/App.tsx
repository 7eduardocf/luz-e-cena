import Banner from "./components/banner"
import Footer from "./components/footer"
import Header from "./components/header"
import MovieSection from "./components/movieSection"
import Newsletter from "./components/newsletter"

function App() {

    return (
        <>
            <Header/>
            <Banner src="/Imagens/Banner Desktop.png" alt="Banner"/>
            <MovieSection/>
            <Banner src="/Imagens/Banner Combo Desktop.png" alt="Banner de combo"/>
            <Newsletter/>
            <Footer/>
        </>
    )
}

export default App
