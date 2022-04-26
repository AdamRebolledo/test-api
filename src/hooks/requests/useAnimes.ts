import { useQuery } from "react-query";

export function useAnimelist(page: number, limit: number, type?: string) {
  return useQuery(['animeList'], () => () => { }, {
    select: data => {
      return (data)
    }
  })
}

export function useAnimeDetail(id: number) {
  return useQuery(['animeDetail', id], () => () => { })
}