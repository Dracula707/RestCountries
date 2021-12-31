export type Args = {
  update?: number;
}

export type Flash = {
  type: number,
  info: string,
}


export type Country = {
  name: string;
  region: string;
  area: number;
}


export type ApiRet = {
  statusCode: number;
  statusInfo: string; 
  data: Array<Country> | undefined;
}

export type Filter = {
  area: number;
  region: string;
  order: string;
}