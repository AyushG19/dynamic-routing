export interface ItemProp {
  label: string;
  value: string;
}

export interface CatalogItem {
  id?: string;
  itemname: string;
  category: string;
  image: string;
  itemprops: ItemProp[];
}
