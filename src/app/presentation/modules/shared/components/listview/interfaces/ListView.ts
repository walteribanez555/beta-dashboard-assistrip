import { Observable } from "rxjs";
import { ItemList } from "../../item-list/interfaces/ItemList.interfaces";

export interface ListView{
   items : ItemList[],
   onSelectItem : ( item : ItemList ) => void;
   filterListener? : Observable<string>;
}



