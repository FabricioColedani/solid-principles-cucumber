export interface Openable {
    open(): void;
}

export interface Editable {
    edit(): void;
}

export interface Savable {
    save(): void;
}

// Convenience composite types for clients
export type ReadWriteDocument = Openable & Editable & Savable;
