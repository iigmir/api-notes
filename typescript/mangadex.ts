/**
 * Response of `/manga/tag`
 */
export interface TagData {
    id:            string;
    type:          TagDataType;
    attributes:    TagDataAttributes;
    relationships: any[];
}

export interface TagDataAttributes {
    name:        TagDataName;
    description: TagDataDescription;
    group:       TagDataGroup;
    version:     number;
}

export interface TagDataDescription {
}

export enum TagDataGroup {
    Content = "content",
    Format = "format",
    Genre = "genre",
    Theme = "theme",
}

export interface TagDataName {
    en: string;
}

export enum TagDataType {
    Tag = "tag",
}
