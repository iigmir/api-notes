// Common interfaces
export interface TavernPhoto {
    uuid:   string;
    url:    string;
    width:  number;
    height: number;
}

// Tavern Chats, `/chats`
export interface TavernChat {
    uuid:                 string;
    characters:           TavernCharacter[];
    user_persona_enabled: null;
    created_at:           Date;
    updated_at:           Date;
}

export interface TavernCharacter {
    uuid:              string;
    name:              string;
    description:       string;
    deleted:           boolean;
    char_greeting:     string;
    thumbnail_photo:   TavernPhoto;
    character_state:   string;
    created_user_uuid: string;
    creator_type:      string;
    creator_name:      string;
    visibility:        string;
    comments:          number;
    photos:            any[];
    background_photos: TavernPhoto[];
}

export interface TavernItemCharacter {
    uuid:              string;
    name:              string;
    description:       string;
    deleted:           boolean;
    char_greeting:     string;
    thumbnail_photo:   TavernPhoto;
    character_state:   string;
    created_user_uuid: string;
    creator_type:      string;
    creator_name:      string;
    visibility:        string;
    comments:          number;
    photos:            any[] | null;
    background_photos: TavernPhoto[] | null;
}

// Tavern item chat. `chats/{uuid}/messages`
export interface TavernItemChat {
    uuid:           string;
    message:        string;
    message_source: string;
    rating:         null;
    character:      TavernCharacter | null;
    created_at:     Date;
    updated_at:     Date;
}

