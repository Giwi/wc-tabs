export interface IWcTabData {
  select: () => void;
  unselect: () => void;
  name: string;
}

export interface IWcTabHeaderData extends IWcTabData {
  id: string;
}

export interface IWcTabContentData extends IWcTabData { }
