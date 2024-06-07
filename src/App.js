import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Profile from './Profile';
import Friends from './Friends';
import data from './data';


function App() {
    return (
        <BrowserRouter>
            <div className='App'>
                <div class='content'>
                    <Header></Header>
                    <Routes>
                        <Route path='/' element={<Main data={data.PostPage}></Main>}></Route>
                        <Route path='/profile' element={<Profile data={data.ProfilePage}></Profile>}></Route>
                        <Route path='/friends' element={<Friends data={data.FriendsPage}></Friends>}></Route>
                    </Routes>
                </div>
                <Footer></Footer>
            </div>
        </BrowserRouter>


    );
}

export default App;
