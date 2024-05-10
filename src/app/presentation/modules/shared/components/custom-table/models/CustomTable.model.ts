import { ColumnTitle } from "./ColumnTitle.model";
import { CustomItem } from "./CustomItem.model";

export interface CustomTable{
  columnTitles: ColumnTitle[];
  customItems : CustomItem[];
  onSelectItem : ( item : CustomItem ) => void;
}
