import type { ClientOpinionData, ThumbnailData } from "./types";

export const thumbnails: {
    etinAsafa: ThumbnailData;
    thealKayak: ThumbnailData;
    thealTalharpa: ThumbnailData;
    manu: ThumbnailData;
    coraille: ThumbnailData;
    tasawarLahifa: ThumbnailData;
    tasawarNaim: ThumbnailData;
    cisse: ThumbnailData;
    etinMbb: ThumbnailData;
    thealFossiles: ThumbnailData;
} = {
    etinAsafa: {
        link: "https://www.youtube.com/watch?v=ch9TQ8KUuVU",
        title: "La malédiction du sprinter qui devait tout gagner",
        thumbnail: "thumbnails/etin-powell.jpg"
    },
    tasawarLahifa: {
        link: "https://www.youtube.com/watch?v=WGy-2wUs4IY",
        title: "10 IMPOSTEURS VS LAHIFUX : QUI FAIT VRAIMENT DU JJB ? #​2",
        thumbnail: "thumbnails/tasawar-lahifa.jpg"

    },
    thealKayak: {
        link: "https://www.youtube.com/watch?v=TAZummnPVlM",
        title: "14 JOURS SUR LE RHÔNE (enfin ça a fini un peu plus tôt 😭)",
        thumbnail: "thumbnails/theal-kayak.jpg"
    },
    thealTalharpa: {
        link: "https://www.youtube.com/watch?v=l0_nckWW-o4",
        title: "Recréer un instrument VIKING oublié (sans expérience)",
        thumbnail: "thumbnails/theal-talharpa.jpg"
    },
    thealFossiles: {
        link: "https://www.youtube.com/watch?v=ILLzjHAkCjE",
        title: "On découvre des fossiles en Ardèche ! (ft Hugo L'escalier)",
        thumbnail: "thumbnails/theal-fossiles.jpg"
    },
    manu: {
        link: "https://www.youtube.com/watch?v=ejti9yysFiE",
        title: "5 jours à pied pour découvrir les SECRETS cachés de l'île d'Oléron",
        thumbnail: "thumbnails/manu.jpg"
    },
    coraille: {
        link: "https://www.youtube.com/watch?v=COhtSPPKPKE",
        title: "TRAVERSÉE vers les BALÉARES à la voile",
        thumbnail: "thumbnails/coraille.jpg"
    },
    tasawarNaim: {
        link: "https://www.youtube.com/watch?v=LPJzyhc0wqQ",
        title: "@NaimBjj VS 10 IMPOSTEURS : QUI FAIT VRAIMENT DU JJB ? #3",
        thumbnail: "thumbnails/tasawar-naim.jpg"
    },
    cisse: {
        link: "https://www.youtube.com/watch?v=--0XfyXF3gA",
        title: "VLOG : 4 jours en camping-car pour le festival Les Ardentes !",
        thumbnail: "thumbnails/cise.jpg"
    },
    etinMbb: {
        link: "https://www.youtube.com/watch?v=DyxexYo2Khg",
        title: "Seul contre tous : l'histoire du coureur que personne n'aimait",
        thumbnail: "thumbnails/etin-mbb.jpg"
    }
}

export const allThumbnails: ThumbnailData[] = Object.values(thumbnails);

export const clientsOpinion: ClientOpinionData[] = [
    /* TODO Johann, Laura */
    {
        clientName: "Johann Chevillard",
        clientPicture: "https://placecats.com/300/300",
        review: "Je suis ravi de travailler avec Théo qui est pro, rapide, efficace et très à l'écoute. Il a très vite compris ma façon de voir les choses et s'est adapté à mon univers et mes demandes. Je suis à chaque fois très satisfait de la qualité des vidéos pour ma chaine youtube. Vous pouvez lui faire confiance à 100% !"
    },
    {
        clientName: "Projet NDA",
        clientPicture: "https://placecats.com/500/500",
        review: "Très bonne collaboration avec Théo sur notre vidéo YouTube. Le montage était soigné, avec un bon sens du rythme et une vraie compréhension de notre univers éditorial. Théo a été réactif et agréable dans les échanges, et les quelques ajustements demandés ont été intégrés rapidement. Un freelance sérieux et pro, on recommande !"
    },
    {
        clientName: "Lorem Ipsum",
        clientPicture: "https://placecats.com/1000/1000",
        review: "Lorem Ipsum"
    }
]