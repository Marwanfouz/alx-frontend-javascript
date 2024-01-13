import {RowID, RowElement} from './interface';

export interface InsertRow {
(row: RowElement): RowID;
}

export interface DeleteRow {
  (rowId: RowID): void;
}

export interface UpdateRow {
  (rowId: RowID,row: RowElement): RowID;
}
