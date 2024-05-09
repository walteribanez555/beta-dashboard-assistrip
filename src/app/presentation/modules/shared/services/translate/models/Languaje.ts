export interface Language{
  word  : string,
  translations : Translations,
}


export interface Translations{
  [key: string]: string;
}


