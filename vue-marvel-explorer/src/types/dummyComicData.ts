import type { Comic } from "./marvel";

export const dummyComics: Comic[] = [
    {
        id: 1,
        title: "The Cosmic Vanguard #1",
        description: "A ragtag team of interstellar outcasts must unite to stop a rogue AI from consuming the Andromeda sector.",
        thumbnail: { path: "https://dummy.api/comics/cosmic_vanguard_1", extension: "jpg" },
        creators: {
            available: 2,
            collectionURI: "https://dummy.api/creators",
            items: [
                { resourceURI: "https://dummy.api/creators/101", name: "Elena Rostova", role: "writer" },
                { resourceURI: "https://dummy.api/creators/102", name: "Marcus Chen", role: "penciller" }
            ]
        },
        characters: {
            available: 3,
            collectionURI: "https://dummy.api/characters",
            items: [
                { resourceURI: "https://dummy.api/characters/201", name: "Nova Star" },
                { resourceURI: "https://dummy.api/characters/202", name: "Iron Sentinel" },
                { resourceURI: "https://dummy.api/characters/203", name: "Dr. Quantum" }
            ]
        },
        series: { resourceURI: "https://dummy.api/series/301", name: "Cosmic Vanguard Vol. 1" },
        stories: {
            available: 2,
            collectionURI: "https://dummy.api/stories",
            items: [
                { resourceURI: "https://dummy.api/stories/401", name: "Cosmic Vanguard #1 Cover", type: "cover" },
                { resourceURI: "https://dummy.api/stories/402", name: "Awakening Protocol", type: "interiorStory" }
            ]
        },
        events: {
            available: 1,
            collectionURI: "https://dummy.api/events",
            items: [{ resourceURI: "https://dummy.api/events/501", name: "Galactic Convergence" }]
        },
        urls: [
            { type: "detail", url: "https://dummy.api/comics/1" },
            { type: "purchase", url: "https://store.dummy.api/buy/1" }
        ]
    },
    {
        id: 2,
        title: "Shadow Protocol #3",
        description: "Detective Vance uncovers a conspiracy that ties the city's elite to a string of impossible disappearances.",
        thumbnail: { path: "https://dummy.api/comics/shadow_protocol_3", extension: "png" },
        creators: {
            available: 3,
            collectionURI: "https://dummy.api/creators",
            items: [
                { resourceURI: "https://dummy.api/creators/103", name: "Julian Black", role: "writer" },
                { resourceURI: "https://dummy.api/creators/104", name: "Aisha Patel", role: "inker" },
                { resourceURI: "https://dummy.api/creators/105", name: "Leo Vance", role: "letterer" }
            ]
        },
        characters: {
            available: 2,
            collectionURI: "https://dummy.api/characters",
            items: [
                { resourceURI: "https://dummy.api/characters/204", name: "Detective Vance" },
                { resourceURI: "https://dummy.api/characters/205", name: "The Silhouette" }
            ]
        },
        series: { resourceURI: "https://dummy.api/series/302", name: "Shadow Protocol Vol. 1" },
        stories: {
            available: 3,
            collectionURI: "https://dummy.api/stories",
            items: [
                { resourceURI: "https://dummy.api/stories/403", name: "Cover Art", type: "cover" },
                { resourceURI: "https://dummy.api/stories/404", name: "The Vanishing Point", type: "interiorStory" },
                { resourceURI: "https://dummy.api/stories/405", name: "Next Issue Promo", type: "promo" }
            ]
        },
        events: {
            available: 0,
            collectionURI: "https://dummy.api/events",
            items: []
        },
        urls: [{ type: "detail", url: "https://dummy.api/comics/2" }]
    },
    {
        id: 3,
        title: "The Amber Throne #5",
        description: "When the ancient crown falls into the hands of a reluctant farmhand, the fate of three kingdoms hangs in the balance.",
        thumbnail: { path: "https://dummy.api/comics/amber_throne_5", extension: "webp" },
        creators: {
            available: 2,
            collectionURI: "https://dummy.api/creators",
            items: [
                { resourceURI: "https://dummy.api/creators/106", name: "Sofia Morales", role: "writer" },
                { resourceURI: "https://dummy.api/creators/107", name: "Kaito Tanaka", role: "colorist" }
            ]
        },
        characters: {
            available: 4,
            collectionURI: "https://dummy.api/characters",
            items: [
                { resourceURI: "https://dummy.api/characters/206", name: "Elian" },
                { resourceURI: "https://dummy.api/characters/207", name: "Queen Lyra" },
                { resourceURI: "https://dummy.api/characters/208", name: "Sir Gideon" },
                { resourceURI: "https://dummy.api/characters/209", name: "The Whisperer" }
            ]
        },
        series: { resourceURI: "https://dummy.api/series/303", name: "The Amber Throne" },
        stories: {
            available: 2,
            collectionURI: "https://dummy.api/stories",
            items: [
                { resourceURI: "https://dummy.api/stories/406", name: "Cover", type: "cover" },
                { resourceURI: "https://dummy.api/stories/407", name: "Crown of Ashes", type: "interiorStory" }
            ]
        },
        events: {
            available: 1,
            collectionURI: "https://dummy.api/events",
            items: [{ resourceURI: "https://dummy.api/events/502", name: "Realm Wars" }]
        },
        urls: [
            { type: "detail", url: "https://dummy.api/comics/3" },
            { type: "reader", url: "https://read.dummy.api/3" }
        ]
    },
    {
        id: 4,
        title: "Neon Nights: Cybernetic Dreams #12",
        description: "In a rain-slicked megacity, a hacker discovers a digital backdoor that could rewrite human consciousness.",
        thumbnail: { path: "https://dummy.api/comics/neon_nights_12", extension: "jpg" },
        creators: {
            available: 3,
            collectionURI: "https://dummy.api/creators",
            items: [
                { resourceURI: "https://dummy.api/creators/108", name: "Dex Carter", role: "writer" },
                { resourceURI: "https://dummy.api/creators/109", name: "Mika Sato", role: "penciller" },
                { resourceURI: "https://dummy.api/creators/110", name: "Ravi Desai", role: "editor" }
            ]
        },
        characters: {
            available: 2,
            collectionURI: "https://dummy.api/characters",
            items: [
                { resourceURI: "https://dummy.api/characters/210", name: "Glitch" },
                { resourceURI: "https://dummy.api/characters/211", name: "Synthia-9" }
            ]
        },
        series: { resourceURI: "https://dummy.api/series/304", name: "Neon Nights" },
        stories: {
            available: 2,
            collectionURI: "https://dummy.api/stories",
            items: [
                { resourceURI: "https://dummy.api/stories/408", name: "Cybernetic Dreams Cover", type: "cover" },
                { resourceURI: "https://dummy.api/stories/409", name: "Root Access", type: "interiorStory" }
            ]
        },
        events: {
            available: 1,
            collectionURI: "https://dummy.api/events",
            items: [{ resourceURI: "https://dummy.api/events/503", name: "Digital Uprising" }]
        },
        urls: [{ type: "detail", url: "https://dummy.api/comics/4" }, { type: "purchase", url: "https://store.dummy.api/buy/4" }]
    },
    {
        id: 5,
        title: "Titan's Fall #1",
        description: "The world's greatest hero loses his powers and must survive a city that wants him dead.",
        thumbnail: { path: "https://dummy.api/comics/titans_fall_1", extension: "png" },
        creators: {
            available: 2,
            collectionURI: "https://dummy.api/creators",
            items: [
                { resourceURI: "https://dummy.api/creators/111", name: "Clara Vance", role: "writer" },
                { resourceURI: "https://dummy.api/creators/112", name: "Omar Hassan", role: "penciller" }
            ]
        },
        characters: {
            available: 3,
            collectionURI: "https://dummy.api/characters",
            items: [
                { resourceURI: "https://dummy.api/characters/212", name: "Atlas" },
                { resourceURI: "https://dummy.api/characters/213", name: "Blackout" },
                { resourceURI: "https://dummy.api/characters/214", name: "Mayor Sterling" }
            ]
        },
        series: { resourceURI: "https://dummy.api/series/305", name: "Titan's Fall" },
        stories: {
            available: 2,
            collectionURI: "https://dummy.api/stories",
            items: [
                { resourceURI: "https://dummy.api/stories/410", name: "Cover", type: "cover" },
                { resourceURI: "https://dummy.api/stories/411", name: "Grounded", type: "interiorStory" }
            ]
        },
        events: {
            available: 1,
            collectionURI: "https://dummy.api/events",
            items: [{ resourceURI: "https://dummy.api/events/504", name: "Hero Down" }]
        },
        urls: [{ type: "detail", url: "https://dummy.api/comics/5" }]
    },
    {
        id: 6,
        title: "The Last Botanist #7",
        description: "In a world choked by synthetic flora, a rogue scientist races to preserve the last natural seed vault.",
        thumbnail: { path: "https://dummy.api/comics/last_botanist_7", extension: "jpg" },
        creators: {
            available: 3,
            collectionURI: "https://dummy.api/creators",
            items: [
                { resourceURI: "https://dummy.api/creators/113", name: "Nia Okoro", role: "writer" },
                { resourceURI: "https://dummy.api/creators/114", name: "Liam Frost", role: "colorist" },
                { resourceURI: "https://dummy.api/creators/115", name: "Yuki Tan", role: "inker" }
            ]
        },
        characters: {
            available: 2,
            collectionURI: "https://dummy.api/characters",
            items: [
                { resourceURI: "https://dummy.api/characters/215", name: "Dr. Elara Moss" },
                { resourceURI: "https://dummy.api/characters/216", name: "Agent Thorne" }
            ]
        },
        series: { resourceURI: "https://dummy.api/series/306", name: "The Last Botanist" },
        stories: {
            available: 3,
            collectionURI: "https://dummy.api/stories",
            items: [
                { resourceURI: "https://dummy.api/stories/412", name: "Cover Art", type: "cover" },
                { resourceURI: "https://dummy.api/stories/413", name: "Root Systems", type: "interiorStory" },
                { resourceURI: "https://dummy.api/stories/414", name: "Editor's Note", type: "textStory" }
            ]
        },
        events: {
            available: 0,
            collectionURI: "https://dummy.api/events",
            items: []
        },
        urls: [{ type: "detail", url: "https://dummy.api/comics/6" }, { type: "purchase", url: "https://store.dummy.api/buy/6" }]
    },
    {
        id: 7,
        title: "Crimson Tide #15",
        description: "A naval blockade turns into a supernatural nightmare when ancient sea creatures rise from the abyss.",
        thumbnail: { path: "https://dummy.api/comics/crimson_tide_15", extension: "webp" },
        creators: {
            available: 2,
            collectionURI: "https://dummy.api/creators",
            items: [
                { resourceURI: "https://dummy.api/creators/116", name: "Finn MacLeod", role: "writer" },
                { resourceURI: "https://dummy.api/creators/117", name: "Isabella Cruz", role: "penciller" }
            ]
        },
        characters: {
            available: 4,
            collectionURI: "https://dummy.api/characters",
            items: [
                { resourceURI: "https://dummy.api/characters/217", name: "Captain Hayes" },
                { resourceURI: "https://dummy.api/characters/218", name: "The Leviathan" },
                { resourceURI: "https://dummy.api/characters/219", name: "Lieutenant Vega" },
                { resourceURI: "https://dummy.api/characters/220", name: "Dr. Aris" }
            ]
        },
        series: { resourceURI: "https://dummy.api/series/307", name: "Crimson Tide Vol. 2" },
        stories: {
            available: 2,
            collectionURI: "https://dummy.api/stories",
            items: [
                { resourceURI: "https://dummy.api/stories/415", name: "Cover", type: "cover" },
                { resourceURI: "https://dummy.api/stories/416", name: "Depths of War", type: "interiorStory" }
            ]
        },
        events: {
            available: 1,
            collectionURI: "https://dummy.api/events",
            items: [{ resourceURI: "https://dummy.api/events/505", name: "Abyssal Rising" }]
        },
        urls: [{ type: "detail", url: "https://dummy.api/comics/7" }]
    },
    {
        id: 8,
        title: "Quantum Drift #2",
        description: "Time fractures across Manhattan. Only one physicist can stitch the timeline back together before reality unravels.",
        thumbnail: { path: "https://dummy.api/comics/quantum_drift_2", extension: "jpg" },
        creators: {
            available: 3,
            collectionURI: "https://dummy.api/creators",
            items: [
                { resourceURI: "https://dummy.api/creators/118", name: "Theo Wright", role: "writer" },
                { resourceURI: "https://dummy.api/creators/119", name: "Zara Lin", role: "penciller" },
                { resourceURI: "https://dummy.api/creators/120", name: "Ben Carter", role: "letterer" }
            ]
        },
        characters: {
            available: 3,
            collectionURI: "https://dummy.api/characters",
            items: [
                { resourceURI: "https://dummy.api/characters/221", name: "Dr. Aris Thorne" },
                { resourceURI: "https://dummy.api/characters/222", name: "Chronos" },
                { resourceURI: "https://dummy.api/characters/223", name: "Agent Kael" }
            ]
        },
        series: { resourceURI: "https://dummy.api/series/308", name: "Quantum Drift" },
        stories: {
            available: 2,
            collectionURI: "https://dummy.api/stories",
            items: [
                { resourceURI: "https://dummy.api/stories/417", name: "Cover", type: "cover" },
                { resourceURI: "https://dummy.api/stories/418", name: "Parallax Effect", type: "interiorStory" }
            ]
        },
        events: {
            available: 1,
            collectionURI: "https://dummy.api/events",
            items: [{ resourceURI: "https://dummy.api/events/506", name: "Temporal Fracture" }]
        },
        urls: [
            { type: "detail", url: "https://dummy.api/comics/8" },
            { type: "reader", url: "https://read.dummy.api/8" }
        ]
    },
    {
        id: 9,
        title: "Echoes of Olympus #9",
        description: "Ancient gods walk among mortals in modern Athens, but their petty rivalries threaten to ignite a divine war.",
        thumbnail: { path: "https://dummy.api/comics/echoes_olympus_9", extension: "png" },
        creators: {
            available: 2,
            collectionURI: "https://dummy.api/creators",
            items: [
                { resourceURI: "https://dummy.api/creators/121", name: "Helen Pappas", role: "writer" },
                { resourceURI: "https://dummy.api/creators/122", name: "Dmitri Volkov", role: "penciller" }
            ]
        },
        characters: {
            available: 4,
            collectionURI: "https://dummy.api/characters",
            items: [
                { resourceURI: "https://dummy.api/characters/224", name: "Athena (Modern Avatar)" },
                { resourceURI: "https://dummy.api/characters/225", name: "Ares" },
                { resourceURI: "https://dummy.api/characters/226", name: "Nikos" },
                { resourceURI: "https://dummy.api/characters/227", name: "Hera" }
            ]
        },
        series: { resourceURI: "https://dummy.api/series/309", name: "Echoes of Olympus" },
        stories: {
            available: 3,
            collectionURI: "https://dummy.api/stories",
            items: [
                { resourceURI: "https://dummy.api/stories/419", name: "Cover Art", type: "cover" },
                { resourceURI: "https://dummy.api/stories/420", name: "Gods in the Streets", type: "interiorStory" },
                { resourceURI: "https://dummy.api/stories/421", name: "Character Sketches", type: "promo" }
            ]
        },
        events: {
            available: 0,
            collectionURI: "https://dummy.api/events",
            items: []
        },
        urls: [{ type: "detail", url: "https://dummy.api/comics/9" }, { type: "purchase", url: "https://store.dummy.api/buy/9" }]
    },
    {
        id: 10,
        title: "Steel City Chronicles #20",
        description: "A gritty urban fantasy where street gangs wield enchanted weapons and corporate sorcerers control the skyline.",
        thumbnail: { path: "https://dummy.api/comics/steel_city_20", extension: "jpg" },
        creators: {
            available: 4,
            collectionURI: "https://dummy.api/creators",
            items: [
                { resourceURI: "https://dummy.api/creators/123", name: "Jax Miller", role: "writer" },
                { resourceURI: "https://dummy.api/creators/124", name: "Rosa Delgado", role: "penciller" },
                { resourceURI: "https://dummy.api/creators/125", name: "Trey Nguyen", role: "colorist" },
                { resourceURI: "https://dummy.api/creators/126", name: "Mia Chen", role: "inker" }
            ]
        },
        characters: {
            available: 3,
            collectionURI: "https://dummy.api/characters",
            items: [
                { resourceURI: "https://dummy.api/characters/228", name: "Rook" },
                { resourceURI: "https://dummy.api/characters/229", name: "Silas Vance" },
                { resourceURI: "https://dummy.api/characters/230", name: "The Alchemist" }
            ]
        },
        series: { resourceURI: "https://dummy.api/series/310", name: "Steel City Chronicles" },
        stories: {
            available: 2,
            collectionURI: "https://dummy.api/stories",
            items: [
                { resourceURI: "https://dummy.api/stories/422", name: "Cover", type: "cover" },
                { resourceURI: "https://dummy.api/stories/423", name: "Concrete & Runes", type: "interiorStory" }
            ]
        },
        events: {
            available: 1,
            collectionURI: "https://dummy.api/events",
            items: [{ resourceURI: "https://dummy.api/events/507", name: "Neon Arcana" }]
        },
        urls: [
            { type: "detail", url: "https://dummy.api/comics/10" },
            { type: "reader", url: "https://read.dummy.api/10" }
        ]
    }
];