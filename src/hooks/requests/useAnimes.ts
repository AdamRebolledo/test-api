import { useQuery } from "react-query";

export function useAnimelist(page: number, limit: number, type: string, order_by: string) {
  return useQuery(['animeList'], async () => {
    return await fetch(`https://api.jikan.moe/v4/anime?page=${page}&type=${type}&limit=${limit}&order_by=${order_by}&sfw=true`).then(res =>
      res.json()
    )
  }, { enabled: true });
}



export function useAnimeDetail(id: number) {
  return useQuery(['animeDetail', id], async () => {
    return await fetch(`https://api.jikan.moe/v4/anime/${id}`).then(res =>
      res.json()
    )
  })
}