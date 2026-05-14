import type { Character } from "./marvel";

export const dummyCharacters: Character[] = [
    {
        id: 1009144,
        name: "A.I.M.",
        description: "A terrorist organization of brilliant scientists and technicians whose goal is world domination through advanced technology.",
        thumbnail: { path: "https://picsum.photos/200/300", extension: "jpg" },
        comics: { available: 42, collectionURI: "http://gateway.dummy.com/v1/characters/1009144/comics", items: [{ resourceURI: "http://gateway.dummy.com/v1/comics/101", name: "Iron Man (1968) #101" }, { resourceURI: "http://gateway.dummy.com/v1/comics/205", name: "Avengers (1963) #205" }] },
        series: { available: 18, collectionURI: "http://gateway.dummy.com/v1/characters/1009144/series", items: [{ resourceURI: "http://gateway.dummy.com/v1/series/1200", name: "Iron Man (1968 - 1996)" }] },
        stories: { available: 55, collectionURI: "http://gateway.dummy.com/v1/characters/1009144/stories", items: [{ resourceURI: "http://gateway.dummy.com/v1/stories/3001", name: "The Doomsday Algorithm", type: "story" }, { resourceURI: "http://gateway.dummy.com/v1/stories/3002", name: "Cover Variant #1", type: "cover" }] },
        events: { available: 2, collectionURI: "http://gateway.dummy.com/v1/characters/1009144/events", items: [{ resourceURI: "http://gateway.dummy.com/v1/events/50", name: "Acts of Vengeance" }] },
        urls: [{ type: "detail", url: "http://dummyapi.example.com/characters/1009144" }, { type: "wiki", url: "http://dummyapi.example.com/wiki/aim" }]
    },
    {
        id: 1009368,
        name: "Iron Man",
        description: "Genius billionaire Tony Stark builds a powered suit of armor to save his life and escape captivity, later using it to protect the world.",
        thumbnail: { path: "https://picsum.photos/200/300", extension: "jpg" },
        comics: { available: 2150, collectionURI: "http://gateway.dummy.com/v1/characters/1009368/comics", items: [{ resourceURI: "http://gateway.dummy.com/v1/comics/501", name: "Iron Man (2012) #1" }, { resourceURI: "http://gateway.dummy.com/v1/comics/890", name: "Civil War (2006) #1" }] },
        series: { available: 140, collectionURI: "http://gateway.dummy.com/v1/characters/1009368/series", items: [{ resourceURI: "http://gateway.dummy.com/v1/series/2400", name: "Iron Man (2012 - 2015)" }, { resourceURI: "http://gateway.dummy.com/v1/series/1800", name: "Civil War (2006 - 2007)" }] },
        stories: { available: 2800, collectionURI: "http://gateway.dummy.com/v1/characters/1009368/stories", items: [{ resourceURI: "http://gateway.dummy.com/v1/stories/4100", name: "Extremis", type: "story" }, { resourceURI: "http://gateway.dummy.com/v1/stories/4101", name: "Behind the Armor", type: "interview" }] },
        events: { available: 12, collectionURI: "http://gateway.dummy.com/v1/characters/1009368/events", items: [{ resourceURI: "http://gateway.dummy.com/v1/events/100", name: "Civil War" }, { resourceURI: "http://gateway.dummy.com/v1/events/200", name: "Secret Invasion" }] },
        urls: [{ type: "detail", url: "http://dummyapi.example.com/characters/1009368" }]
    },
    {
        id: 1009220,
        name: "Captain America",
        description: "Steve Rogers, a frail young man enhanced to the peak of human perfection, becomes a symbol of hope and freedom during wartime and beyond.",
        thumbnail: { path: "https://picsum.photos/200/300", extension: "jpg" },
        comics: { available: 1890, collectionURI: "http://gateway.dummy.com/v1/characters/1009220/comics", items: [{ resourceURI: "http://gateway.dummy.com/v1/comics/600", name: "Captain America (2018) #1" }] },
        series: { available: 95, collectionURI: "http://gateway.dummy.com/v1/characters/1009220/series", items: [{ resourceURI: "http://gateway.dummy.com/v1/series/3000", name: "Captain America (2018 - Present)" }] },
        stories: { available: 2100, collectionURI: "http://gateway.dummy.com/v1/characters/1009220/stories", items: [{ resourceURI: "http://gateway.dummy.com/v1/stories/5001", name: "The Super Soldier Serum", type: "story" }, { resourceURI: "http://gateway.dummy.com/v1/stories/5002", name: "Winter Soldier Promo", type: "promo" }] },
        events: { available: 8, collectionURI: "http://gateway.dummy.com/v1/characters/1009220/events", items: [{ resourceURI: "http://gateway.dummy.com/v1/events/150", name: "World War Hulk" }] },
        urls: [{ type: "detail", url: "http://dummyapi.example.com/characters/1009220" }, { type: "comiclink", url: "http://dummyapi.example.com/reader/cap-2018-1" }]
    },
    {
        id: 1009610,
        name: "Spider-Man",
        description: "Bitten by a radioactive spider, high school student Peter Parker gains arachnid-like abilities and learns that with great power comes great responsibility.",
        thumbnail: { path: "https://picsum.photos/200/300", extension: "jpg" },
        comics: { available: 3100, collectionURI: "http://gateway.dummy.com/v1/characters/1009610/comics", items: [{ resourceURI: "http://gateway.dummy.com/v1/comics/700", name: "Amazing Spider-Man (2018) #1" }] },
        series: { available: 180, collectionURI: "http://gateway.dummy.com/v1/characters/1009610/series", items: [{ resourceURI: "http://gateway.dummy.com/v1/series/4100", name: "Amazing Spider-Man (2018 - Present)" }] },
        stories: { available: 3500, collectionURI: "http://gateway.dummy.com/v1/characters/1009610/stories", items: [{ resourceURI: "http://gateway.dummy.com/v1/stories/6001", name: "If This Be My Destiny...", type: "story" }] },
        events: { available: 10, collectionURI: "http://gateway.dummy.com/v1/characters/1009610/events", items: [{ resourceURI: "http://gateway.dummy.com/v1/events/250", name: "Spider-Verse" }] },
        urls: [{ type: "detail", url: "http://dummyapi.example.com/characters/1009610" }]
    },
    {
        id: 1009189,
        name: "Black Widow",
        description: "Natasha Romanoff, trained from childhood in the brutal Red Room, defected to become one of S.H.I.E.L.D.'s most skilled operatives and an Avenger.",
        thumbnail: { path: "https://picsum.photos/200/300", extension: "jpg" },
        comics: { available: 620, collectionURI: "http://gateway.dummy.com/v1/characters/1009189/comics", items: [{ resourceURI: "http://gateway.dummy.com/v1/comics/800", name: "Black Widow (2016) #1" }] },
        series: { available: 35, collectionURI: "http://gateway.dummy.com/v1/characters/1009189/series", items: [{ resourceURI: "http://gateway.dummy.com/v1/series/5000", name: "Black Widow (2016 - 2017)" }] },
        stories: { available: 710, collectionURI: "http://gateway.dummy.com/v1/characters/1009189/stories", items: [{ resourceURI: "http://gateway.dummy.com/v1/stories/7001", name: "The Ties That Bind", type: "story" }] },
        events: { available: 5, collectionURI: "http://gateway.dummy.com/v1/characters/1009189/events", items: [{ resourceURI: "http://gateway.dummy.com/v1/events/300", name: "Avengers vs. X-Men" }] },
        urls: [{ type: "detail", url: "http://dummyapi.example.com/characters/1009189" }, { type: "wiki", url: "http://dummyapi.example.com/wiki/black-widow" }]
    },
    {
        id: 1009652,
        name: "Thanos",
        description: "A Mad Titan obsessed with Death, Thanos seeks to balance the universe through catastrophic means, wielding the Infinity Gauntlet.",
        thumbnail: { path: "https://picsum.photos/200/300", extension: "jpg" },
        comics: { available: 890, collectionURI: "http://gateway.dummy.com/v1/characters/1009652/comics", items: [{ resourceURI: "http://gateway.dummy.com/v1/comics/900", name: "Infinity Gauntlet (1991) #1" }] },
        series: { available: 55, collectionURI: "http://gateway.dummy.com/v1/characters/1009652/series", items: [{ resourceURI: "http://gateway.dummy.com/v1/series/6000", name: "Infinity Gauntlet (1991)" }] },
        stories: { available: 950, collectionURI: "http://gateway.dummy.com/v1/characters/1009652/stories", items: [{ resourceURI: "http://gateway.dummy.com/v1/stories/8001", name: "The Mad Titan", type: "story" }] },
        events: { available: 6, collectionURI: "http://gateway.dummy.com/v1/characters/1009652/events", items: [{ resourceURI: "http://gateway.dummy.com/v1/events/350", name: "Infinity" }] },
        urls: [{ type: "detail", url: "http://dummyapi.example.com/characters/1009652" }]
    },
    {
        id: 1009282,
        name: "Doctor Strange",
        description: "Once a brilliant but arrogant surgeon, Stephen Strange becomes the Sorcerer Supreme after mastering the mystic arts to protect reality.",
        thumbnail: { path: "https://picsum.photos/200/300", extension: "jpg" },
        comics: { available: 1450, collectionURI: "http://gateway.dummy.com/v1/characters/1009282/comics", items: [{ resourceURI: "http://gateway.dummy.com/v1/comics/1000", name: "Doctor Strange (2015) #1" }] },
        series: { available: 85, collectionURI: "http://gateway.dummy.com/v1/characters/1009282/series", items: [{ resourceURI: "http://gateway.dummy.com/v1/series/7000", name: "Doctor Strange (2015 - 2018)" }] },
        stories: { available: 1600, collectionURI: "http://gateway.dummy.com/v1/characters/1009282/stories", items: [{ resourceURI: "http://gateway.dummy.com/v1/stories/9001", name: "The Vishanti", type: "story" }] },
        events: { available: 4, collectionURI: "http://gateway.dummy.com/v1/characters/1009282/events", items: [{ resourceURI: "http://gateway.dummy.com/v1/events/400", name: "Fear Itself" }] },
        urls: [{ type: "detail", url: "http://dummyapi.example.com/characters/1009282" }]
    },
    {
        id: 1009187,
        name: "Black Panther",
        description: "T'Challa is the king of the hidden, technologically advanced African nation of Wakanda, and the warrior known as the Black Panther.",
        thumbnail: { path: "https://picsum.photos/200/300", extension: "jpg" },
        comics: { available: 1120, collectionURI: "http://gateway.dummy.com/v1/characters/1009187/comics", items: [{ resourceURI: "http://gateway.dummy.com/v1/comics/1100", name: "Black Panther (2016) #1" }] },
        series: { available: 60, collectionURI: "http://gateway.dummy.com/v1/characters/1009187/series", items: [{ resourceURI: "http://gateway.dummy.com/v1/series/8000", name: "Black Panther (2016 - 2018)" }] },
        stories: { available: 1250, collectionURI: "http://gateway.dummy.com/v1/characters/1009187/stories", items: [{ resourceURI: "http://gateway.dummy.com/v1/stories/10001", name: "A Nation Under Our Feet", type: "story" }] },
        events: { available: 3, collectionURI: "http://gateway.dummy.com/v1/characters/1009187/events", items: [{ resourceURI: "http://gateway.dummy.com/v1/events/450", name: "Civil War II" }] },
        urls: [{ type: "detail", url: "http://dummyapi.example.com/characters/1009187" }, { type: "comiclink", url: "http://dummyapi.example.com/reader/bp-2016-1" }]
    },
    {
        id: 1009351,
        name: "Hulk",
        description: "Caught in a gamma bomb explosion, scientist Bruce Banner transforms into the Hulk, a green-skinned monster of limitless strength when angered.",
        thumbnail: { path: "https://picsum.photos/200/300", extension: "jpg" },
        comics: { available: 1670, collectionURI: "http://gateway.dummy.com/v1/characters/1009351/comics", items: [{ resourceURI: "http://gateway.dummy.com/v1/comics/1200", name: "Immortal Hulk (2018) #1" }] },
        series: { available: 90, collectionURI: "http://gateway.dummy.com/v1/characters/1009351/series", items: [{ resourceURI: "http://gateway.dummy.com/v1/series/9000", name: "Immortal Hulk (2018 - 2021)" }] },
        stories: { available: 1890, collectionURI: "http://gateway.dummy.com/v1/characters/1009351/stories", items: [{ resourceURI: "http://gateway.dummy.com/v1/stories/11001", name: "The Night Shift", type: "story" }, { resourceURI: "http://gateway.dummy.com/v1/stories/11002", name: "Gamma Cover", type: "cover" }] },
        events: { available: 9, collectionURI: "http://gateway.dummy.com/v1/characters/1009351/events", items: [{ resourceURI: "http://gateway.dummy.com/v1/events/500", name: "Planet Hulk" }] },
        urls: [{ type: "detail", url: "http://dummyapi.example.com/characters/1009351" }]
    },
    {
        id: 1009629,
        name: "Storm",
        description: "Ororo Munroe, born in Cairo and raised in the streets of Harlem, controls the weather and serves as a respected leader of the X-Men.",
        thumbnail: { path: "https://picsum.photos/200/300", extension: "jpg" },
        comics: { available: 1340, collectionURI: "http://gateway.dummy.com/v1/characters/1009629/comics", items: [{ resourceURI: "http://gateway.dummy.com/v1/comics/1300", name: "Storm (2014) #1" }] },
        series: { available: 75, collectionURI: "http://gateway.dummy.com/v1/characters/1009629/series", items: [{ resourceURI: "http://gateway.dummy.com/v1/series/10000", name: "Storm (2014 - 2015)" }] },
        stories: { available: 1500, collectionURI: "http://gateway.dummy.com/v1/characters/1009629/stories", items: [{ resourceURI: "http://gateway.dummy.com/v1/stories/12001", name: "Goddess of the Weather", type: "story" }] },
        events: { available: 7, collectionURI: "http://gateway.dummy.com/v1/characters/1009629/events", items: [{ resourceURI: "http://gateway.dummy.com/v1/events/550", name: "X-Men: Phoenix Endsong" }] },
        urls: [{ type: "detail", url: "http://dummyapi.example.com/characters/1009629" }, { type: "wiki", url: "http://dummyapi.example.com/wiki/storm" }]
    }
];