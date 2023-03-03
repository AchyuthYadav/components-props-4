import Articles from './Articles';
import Fotter from './Fotter';
import Header from './Header';
import Hero from './Hero';



function App(){
    return (
        <>
            <Header/>
                <main className='wrapper'>          
                <Hero />
                <Articles />
            </main>
            <Fotter />
        </>
    );
}

export default App;