export type ThumbnailData = {
    title: string;
    link: string;
    thumbnail: string;
};

export const thumbnails: {
    etinAsafa: ThumbnailData;
    asafaLahifa: ThumbnailData;
    thealKayak: ThumbnailData;
    thealTalharpa: ThumbnailData;
    manu: ThumbnailData;
    coraille: ThumbnailData;
    tasawarNaim: ThumbnailData;
    cisse: ThumbnailData;
    etinMbb: ThumbnailData;
} = {
    etinAsafa: {
        link: "https://www.youtube.com/watch?v=ch9TQ8KUuVU",
        title: "La malédiction du sprinter qui devait tout gagner",
        thumbnail: "thumbnails/etin-powell.jpg"
    },
    asafaLahifa: {
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