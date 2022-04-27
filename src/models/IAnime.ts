export interface IAnime {
  mal_id: number,
  url: string,
  images: { jpg: IImages, webp: IImages },
  trailer: IImages,
  title: string,
  title_english: string,
  title_japanese: string,
  title_synonyms: any[],
  type: string,
  source: string,
  episodes: number,
  status: string,
  airing: boolean,
  aired: {
    from: string,
    to: string,
    prop: { from: IProp, to: IProp },
    string: string
  },
  duration: string,
  rating: string,
  score: number,
  scored_by: number,
  rank: number,
  popularity: number,
  members: number,
  favorites: number,
  synopsis: string,
  season: string,
  year: number,
  broadcast: {
    day: string,
    time: string,
    timezone: string,
    string: string,
  }
  producers: IItem[],
  licensors: IItem[],
  studios: IItem[],
  genres: IItem[],
  explicit_genres: any[],
  themes: IItem[],
  demographics: any[],
}

export interface IImages {
  image_url: string,
  small_image_url: string,
  large_image_url: string,
  medium_image_url?: string,
  maximum_image_url?: string
}

export interface IImages {
  youtube_id: string,
  url: string,
  embed_url: string,
  images: IImages,
}

export interface IProp {
  day: number,
  month: number,
  year: number,
}

export interface IItem {
  mal_id: number,
  type: string,
  name: string,
  url: string,
}