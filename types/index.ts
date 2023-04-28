export interface FieldProps {
  title: string;
  thumbnail: string;
  description: string;
  releaseData: string;
  url: string;
  genres: Array<string>;
  slug: string;
}

export interface PropType {
  films: FilmProp[];
}

export interface FilmProp {
  metadata: Object;
  sys: Array<object>;
  fields: FieldProps;
}