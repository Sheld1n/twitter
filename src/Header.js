import React from 'react'

export default function Header() {
    return (
        <header>
            <img class='logo' src="img/logo.png" width="150" />
            <nav>
                <div>
                    <img src="img/home.png" width="30" />
                    <a href="/">Home</a>
                </div>
                <div>
                    <img src="img/search.png" width="30" />
                    <a href="#">Explore</a>
                </div>
                <div>
                    <img src="img/friends.png" width="30" />
                    <a href="/friends">Friends</a>
                </div>
                <div>
                    <img src="img/profileicon.png" width="30" />
                    <a href="/profile">Profile</a>
                </div>
            </nav>
        </header>
    )
}
