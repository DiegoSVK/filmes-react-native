

// id genero
 export type idGeneroInfo = {
  idGenero: number;
};

//filme
 export type Filme = {
  id: number;
  title: string;
  poster_path: string;
};

export type GeneroInfo ={
    id:number
    genero:string
}
 

export type GenreApi = {
  id: number;
  name: string;
};

export type ApiResponse = {
  genres: GenreApi[];
};

export type infoDetalhesType = {
  icon: any
  text:string
  color?:string
}

export type infoTrailer = {
  chaveTrailer: string;
};
export type MovieDetails = {
    id:number;
    title:string;
    overview:string;
    backdrop_path:string;
    poster_path:string;
    vote_average:number;
    release_date:string;
    runtime:number;
    tagline:string;
    genres:{
        id:number,
        name:string;
    }[];

}