const img1 = "https://image.tmdb.org/t/p/w500//7ZO9yoEU2fAHKhmJWfAc2QIPWJg.jpg"
const img2 = "https://image.tmdb.org/t/p/w500//p1F51Lvj3sMopG948F5HsBbl43C.jpg"
const img3 = "https://image.tmdb.org/t/p/w500//7bhvI1tM7JBmqP8HSevIsebSBbh.jpg"
const img4 = "https://image.tmdb.org/t/p/w500//nmGWzTLMXy9x7mKd8NKPLmHtWGa.jpg"

const movie = [
    {
        title: "Prey",
        description: "When danger threatens her camp, the fierce and highly skilled Comanche warrior Naru sets out to protect her people. But the prey she stalks turns out to be a highly evolved alien predator with a technically advanced arsenal.",
        img: img1,
        color: "black",
        path: "/product/Prey"
    },
    {
        title: "Thor: Love and thunder",
        description: "After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now inexplicably wields Mjolnir as the Mighty Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.",
        img: img2,
        path: "/product/Thor: Love and thunder",
        color: "pink"
    },
    {
        title: "Jurassic World Dominion",
        description: "Four years after Isla Nublar was destroyed, dinosaurs now live—and hunt—alongside humans all over the world. This fragile balance will reshape the future and determine, once and for all, whether human beings are to remain the apex predators on a planet they now share with history’s most fearsome creatures.",
        img: img3,
        path: "/product/Jurassic World Dominion",
        color: "orange"
    },
    {
        title: "Minions: The Rise of Gru",
        description: "A fanboy of a supervillain supergroup known as the Vicious 6, Gru hatches a plan to become evil enough to join them, with the backup of his followers, the Minions.",
        img: img4,
        path: "/product/Minions: The Rise of Gru",
        color: "orange"
    }
]

    const getAllMovies = () => movie
    const getMovies = (count) => {
        const max = movie.length - count
        const min = 0
        const start = Math.floor(Math.random() * (max - min) + min)
        return movie.slice(start, start + count)
    }

    const movieData = {
        getAllMovies,
        getMovies
    }
export default movieData