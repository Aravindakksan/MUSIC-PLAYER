interface Config {
    genre: any[];
}
class music {
    genre;
    constructor(Config) {
        this.genre = Config.genre;
       }
}
let love = new music({
    genre: ["music\Adiye.mp3",
        "music\Ennodu Nee Irundhal.mp3",
        "music\Maruvaarthai Pesathey.mp3",
        "MUSIC PLAYER\music\Kannama.mp3"
    ]
})
let t19 = new music({
    genre: [
        "music\Ellu Vaya Pookalaye.mp3",
        "music\Adiye.mp3",
        "music\Yen Minukki.mp3",
        "music\Maruvaarthai Pesathey.mp3"
    ]
})
let t20 = new music({
    genre: ["music\Kolame.mp3",
        "music\Kutti Story.mp3",
        "music\Vaathi Coming.mp3",
        "music\Veyyon Silli.mp3",
    ]
})
