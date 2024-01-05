/**
 * Response of `/manga/tag`
 */
export interface TagData {
    id:            string;
    type:          Type;
    attributes:    Attributes;
    relationships: any[];
}

export interface Attributes {
    name:        Name;
    description: Description;
    group:       Group;
    version:     number;
}

export interface Description {
}

export enum Group {
    Content = "content",
    Format = "format",
    Genre = "genre",
    Theme = "theme",
}

export interface Name {
    en: string;
}

export enum Type {
    Tag = "tag",
}
