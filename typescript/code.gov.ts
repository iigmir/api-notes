/**
 * `releases` at `/code.json`
 */
export interface UsOpenDataRelease {
    name:                        string;
    version?:                    string;
    organization?:               string;
    repositoryURL:               string;
    description:                 string;
    permissions?:                Permissions;
    laborHours:                  number | null;
    status:                      Status;
    vcs:                         Vcs;
    languages?:                  string[] | string;
    tags:                        string[];
    contact:                     Contact;
    date?:                       DateClass;
    downloadURL?:                string;
    homepageURL?:                string;
    partners?:                   any[];
    disclaimerText?:             string;
    disclaimerURL?:              string;
    openSourceProject?:          number;
    governmentWideReuseProject?: number;
    repository?:                 string;
    homepage?:                   string;
    exemption?:                  null;
    exemptionText?:              string;
    updated?:                    Updated;
    relatedCode?:                RelatedCode[];
    repoURL?:                    string;
    reusedCode?:                 RelatedCode[];
}

export interface Contact {
    name?: string;
    email: string;
    URL?:  string;
}

export interface DateClass {
    created:             string;
    lastModified:        string;
    metadataLastUpdated: Date;
}

export interface Permissions {
    licenses:       RelatedCode[];
    usageType:      UsageType;
    exemptionText?: null;
}

export interface RelatedCode {
    name: string;
    URL:  string;
}

export enum UsageType {
    OpenSource = "openSource",
}

export enum Status {
    AlphaV011Prototype = "Alpha v0.11 (Prototype)",
    Archival = "Archival",
    Development = "Development",
    Production = "Production",
    ReleaseCandidate = "Release Candidate",
}

export interface Updated {
    lastCommit:          Date;
    metadataLastUpdated: Date;
    lastModified:        Date;
}

export enum Vcs {
    Git = "git",
}
