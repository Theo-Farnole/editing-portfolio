import type { ThumbnailData } from "../types";

export const thumbnails: ThumbnailData[] = [
    {
        category: "Jeux multicam",
        link: "https://www.youtube.com/watch?v=WGy-2wUs4IY",
        title: "10 IMPOSTEURS VS LAHIFUX : QUI FAIT VRAIMENT DU JJB ? #​2",
        thumbnail: "thumbnails/tasawar-lahifa.jpg"
    },
    {
        category: "Jeux multicam",
        link: "https://www.youtube.com/watch?v=LPJzyhc0wqQ",
        title: "@NaimBjj VS 10 IMPOSTEURS : QUI FAIT VRAIMENT DU JJB ? #3",
        thumbnail: "thumbnails/tasawar-naim.jpg"
    },
    {
        category: "Outdoor",
        link: "https://www.youtube.com/watch?v=TAZummnPVlM",
        title: "14 JOURS SUR LE RHÔNE (enfin ça a fini un peu plus tôt 😭)",
        thumbnail: "thumbnails/theal-kayak.jpg"
    },
    {
        category: "Outdoor",
        link: "https://www.youtube.com/watch?v=ejti9yysFiE",
        title: "5 jours à pied pour découvrir les SECRETS cachés de l'île d'Oléron",
        thumbnail: "thumbnails/manu.jpg"
    },
    {
        category: "Outdoor",
        link: "https://www.youtube.com/watch?v=COhtSPPKPKE",
        title: "TRAVERSÉE vers les BALÉARES à la voile",
        thumbnail: "thumbnails/coraille.jpg"
    },
    {
        category: "Outdoor",
        link: "https://www.youtube.com/watch?v=l0_nckWW-o4",
        title: "Recréer un instrument VIKING oublié (sans expérience)",
        thumbnail: "thumbnails/theal-talharpa.jpg"
    },
    {
        category: "Outdoor",
        link: "https://www.youtube.com/watch?v=ILLzjHAkCjE",
        title: "On découvre des fossiles en Ardèche ! (ft Hugo L'escalier)",
        thumbnail: "thumbnails/theal-fossiles.jpg"
    },
    {
        category: "Educatif",
        link: "https://www.youtube.com/watch?v=ch9TQ8KUuVU",
        title: "La malédiction du sprinter qui devait tout gagner",
        thumbnail: "thumbnails/etin-powell.jpg"
    },
    {
        category: "Educatif",
        link: "https://www.youtube.com/watch?v=DyxexYo2Khg",
        title: "Seul contre tous : l'histoire du coureur que personne n'aimait",
        thumbnail: "thumbnails/etin-mbb.jpg"
    },
    {
        category: "Educatif",
        link: "https://www.youtube.com/watch?v=CBPf2ayr0sc",
        title: "La LUNE : le prochain territoire américain ?",
        thumbnail: "thumbnails/jurible-lune.jpg"
    },
    // TODO l'univers de marie
    {
        category: "Vlog",
        link: "https://www.youtube.com/watch?v=--0XfyXF3gA",
        title: "VLOG : 4 jours en camping-car pour le festival Les Ardentes !",
        thumbnail: "thumbnails/cise.jpg"
    }
];

/** Category label and items, in order of first appearance in `thumbnails`. */
export const thumbnailsByCategory: readonly (readonly [string, ThumbnailData[]])[] = (() => {
    const byCategory = new Map<string, ThumbnailData[]>();
    const order: string[] = [];
    for (const t of thumbnails) {
        if (!byCategory.has(t.category)) {
            order.push(t.category);
            byCategory.set(t.category, []);
        }
        byCategory.get(t.category)!.push(t);
    }
    return order.map((name) => [name, byCategory.get(name)!] as const);
})();
