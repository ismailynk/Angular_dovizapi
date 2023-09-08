export class borsaModel {
  currency?: string;
  name?: string;
  pricestr?: string;
  price?: number;
  rate?: number;
  time?: string;
}

export class borsa{
  success ?: string;
  result ?: borsaModel[];
}
