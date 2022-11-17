export interface Attributes {
  might: number;
  defence: number;
  magic: number;
  wisdom: number;
  speed: number;
}

export interface Card {
  name: string;
  image: string;
  deck: string;
  attributes: Attributes;
}
