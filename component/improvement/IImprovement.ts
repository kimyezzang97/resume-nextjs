import { ICommon } from '../common/ICommon';

export declare namespace IImprovement {
  export interface Section {
    title: string;
    descriptions: string[];
  }

  export interface Item {
    company: string;
    title: string;
    summary: string;
    sections: Section[];
    notes?: string[];
    technologies: string[];
  }

  export interface Payload extends ICommon.Payload {
    list: Item[];
  }
}
