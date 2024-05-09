
export interface CountryRegionLng {
  id:              number;
  name:            string;
  iso3:            string;
  iso2:            string;
  numeric_code:    string;
  phone_code:      string;
  capital:         string;
  currency:        string;
  currency_name:   string;
  currency_symbol: string;
  tld:             string;
  native:          null | string;
  region:          string;
  region_id:       null | string;
  subregion:       string;
  subregion_id:    null | string;
  nationality:     string;
  timezones:       Timezone[] | null;
  translations:    Translations;
  latitude:        string;
  longitude:       string;
  emoji:           string;
  emojiU:          string;
}



export interface Timezone {
  zoneName:      string;
  gmtOffset:     number;
  gmtOffsetName: string;
  abbreviation:  string;
  tzName:        string;
}

export interface Translations {
  kr:       string;
  "pt-BR"?: string;
  pt?:      string;
  nl?:      string;
  hr?:      string;
  fa?:      string;
  de?:      string;
  es?:      string;
  fr?:      string;
  ja?:      string;
  it?:      string;
  cn:       string;
  tr:       string;
}
