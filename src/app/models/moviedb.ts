export interface IMoviesdb{
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

export type ApiResponse = {
  Response: string;
  Search: IMoviesdb[];
  totalResults: string;
};

