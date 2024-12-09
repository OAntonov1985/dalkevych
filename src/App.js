import { Helmet } from 'react-helmet';
import Header from './components/Header/Header';

function App() {
    return (
        <>
            <Helmet>
                <title>Dalkevych-studio</title>
                <link rel="icon" href="./public/icons/logo-item.png" />
            </Helmet>
            <div className="container">
                <Header />
            </div>
        </>
    );
}

export default App;
