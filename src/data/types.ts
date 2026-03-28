// ─── Interfaces ────────────────────────────────────────────────────────────

export interface Project {
    id: number;
    title: string;
    description: string;
    repoLink: string;
    liveLink?: string;
    isFeatured: boolean;
    image?: string;
}

export interface Contacts {
    telegram: string;
    github: string;
    email: string;
}

export interface TechItem {
    name: string;
    icon?: string;
}
