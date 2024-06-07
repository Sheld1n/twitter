import Profile from "./Profile";

let data = {
    PostPage: {
        posts: [
            {
                id: 1,
                user: 'JalimsVlog',
                text: 'Kinda hard day today, but it costs itself 💪',
                image: 'img/post_img.png'
            },
            {
                id: 2,
                user: 'EmeleyParis',
                text: 'Today I ate bagette at the street and it was kinda tasty',
                image: 'https://static.independent.co.uk/2023/10/10/17/newFile.jpg'
            },
            {
                id: 3,
                user: 'TaylerDerden',
                text: 'My selfie today',
                image: 'https://sun9-35.userapi.com/impf/c857320/v857320306/2d9f2/nOGhqV6JM0A.jpg?size=828x557&quality=96&sign=98f6061cfd445013c7f730dda873f1d1&type=album'
            }
        ]
    },

    ProfilePage: {
        profile: 
            {
                image: 'http://localhost:3000/img/profile.png',
                name: 'JalimsVlogs',
                username: '@jalims_stories&vlogs',
                about: 'Hi! 😀 This is my account with vlogs, yall can always check my stories and like it for fun 🤯'
            }
    },

    FriendsPage: {
        friends: [
            {
                id: 1,
                image: 'http://localhost:3000/img/profile.png',
                name: 'JalimsVlog',
                message: 'Hey, wanna meat today at the bar at 8 PM?',
                time: '12:13 • 12 May, 2024'
            },
            {
                id: 2,
                image: 'https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg',
                name: 'MarcoJoker',
                message: 'You have got 1 million dollars!!!',
                time: '0:00 • 1 April, 2024'
            },
            {
                id: 3,
                image: 'https://hackspirit.com/wp-content/uploads/2021/06/Copy-of-Rustic-Female-Teen-Magazine-Cover.jpg',
                name: 'Adriana',
                message: 'That was amazing concert yesterday',
                time: '14:12 • 28 June, 2023'
            }
        ]
    }
}

export default data;