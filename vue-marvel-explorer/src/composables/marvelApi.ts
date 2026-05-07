import { dummyCharacters } from '@/types/dummyCharacterData';
import { dummyComics } from '@/types/dummyComicData';
import { Path } from '@/types/marvel'
import type { Comics, Characters } from '@/types/marvel'

const apiKey = import.meta.env.VITE_APP_MARVEL_API_PUBLIC;
const MARVEL_API = `//gateway.marvel.com/v1/public/`
const API_SIGN = `apikey=${apiKey}`
const ITEMS_PER_PAGE = 20;

interface ApiOptions {
  query?: string;
  page?: number;
}

export const useMarvelAPI = async (path: Path, options: ApiOptions, data: boolean): Promise<Comics|Characters> => {
  const pagination = getPagination(options.page);
  const query = getQuery(options.query);

  const requestURI = getRequestURI(path, query, pagination);

  return useFetch(requestURI, data);

}

const getPagination = (page?: number): string => {
  return page ? `&offset=${page * ITEMS_PER_PAGE}` : ''
}

const getQuery = (query?: string): string => {
  return query ? `&${query}` : ''
}

const getRequestURI = (path: Path, query: string, pagination: string): string => {
  const apiPath = `${MARVEL_API}/${path}`;
  return `${apiPath}?${API_SIGN}${query}${pagination}`;
}

export const useFetch = async (requestURI: string, data: boolean): Promise<Comics | Characters> => {
  // const res = await fetch(requestURI);
  // if (!res.ok) {
  //   throw new Error('Failed to fetch data');
  // }
  // const jsonRes = await res.json();
  // return jsonRes.data as Comics | Characters;
  const comics = {
    count: 10,
    limit: 5,
    offset: 0,
    total: 10,
    results: dummyComics
  }

  const characters = {
    count: 10,
    limit: 5,
    offset: 0,
    total: 10,
    results: dummyCharacters
  }
  if(data) {
    return comics
  }
  return characters

}

export const useComics = async (page: number = 0): Promise<Comics> => {
  try {
    return await useMarvelAPI(Path.COMICS, { page }, true) as Comics
  } catch {
    throw new Error('An error occurred while trying to read comics');
  }
}

export const useCharacterSearch = async (query: string, page: number = 0): Promise<Characters> => {
  try {
    return await useMarvelAPI(Path.CHARACTERS, { query: `nameStartsWith=${query}`, page }, false) as Characters
  } catch {
    throw new Error('An error occurred while trying to search comics');
  }
}
