export interface FieldProps {
  title: string;
  thumbnail: {
    metadata: Object;
    fields: {
      description: string;
      file: {
        url: string;
        fileName: string;
      };
      title: string;
    };
    sys: Array<object>;
  };
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