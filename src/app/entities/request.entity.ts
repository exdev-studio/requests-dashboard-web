export enum RequestType {
  VK_CREDENTIALS = 'VK_CREDENTIALS',
}

export enum RequestFieldType {
  STRING = 'string',
}

export interface RequestFieldEntity {
  type: RequestFieldType;
  name: string;
  value: string;
}

export interface RequestEntity {
  id: number;
  type: RequestType;
  fields: RequestFieldEntity[];
}
