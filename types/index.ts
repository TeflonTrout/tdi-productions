export interface FieldProps {
  title: string;
  thumbnail: {
    metadata: Object;
    fields: ThumbnailFields;
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

export interface ThumbnailFields {
  title: string
  description: string
  file: File
}

export interface File {
  url: string
  details: Details
  fileName: string
  contentType: string
}

export interface Details {
  size: number
  image: Image
}

export interface Image {
  width: number
  height: number
}