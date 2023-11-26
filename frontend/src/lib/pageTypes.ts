export interface PageData {
  metadata: Metadata;
  sys: PageDataSys;
  fields: Fields;
}

export interface Fields {
  slug: string;
  page_title: string;
  page_sub_title: string;
  page_content: PageContent;
}

export interface PageContent {
  data: Data;
  content: PageContentContent[];
  nodeType: string;
}

export interface PageContentContent {
  data: Data;
  content: ContentContent[];
  nodeType: string;
}

export interface ContentContent {
  data: Data;
  marks: any[];
  value: string;
  nodeType: string;
}

export interface Data {}

export interface Metadata {
  tags: any[];
}

export interface PageDataSys {
  space: ContentType;
  id: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
  environment: ContentType;
  revision: number;
  contentType: ContentType;
  locale: string;
}

export interface ContentType {
  sys: ContentTypeSys;
}

export interface ContentTypeSys {
  type: string;
  linkType: string;
  id: string;
}
