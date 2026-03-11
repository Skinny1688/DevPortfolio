// ─── Imports ───────────────────────────────────────────────────────────────

import type { Project } from './types';

// ─── Data ──────────────────────────────────────────────────────────────────

export const projects: Project[] = [
    {
        id: 1,
        title: 'FinTech Dashboard',
        description:
            'Система управления личными финансами с автоматическим анализом трат с помощью ИИ.',
        repoLink: 'https://github.com',
        isFeatured: true,
    },
    {
        id: 2,
        title: 'Workspace Pro',
        description:
            'Инструмент для командной работы, объединяющий чат, задачи и облачное хранилище.',
        repoLink: 'https://github.com',
        isFeatured: true,
    },
    {
        id: 3,
        title: 'E-shop Modern',
        description:
            'Маркетплейс с молниеносной скоростью загрузки и кастомным конструктором товаров.',
        repoLink: 'https://github.com',
        isFeatured: true,
    },
    {
        id: 4,
        title: 'Markdown Notes',
        description:
            'Редактор заметок с поддержкой Markdown, локальным хранилищем и экспортом в PDF.',
        repoLink: 'https://github.com',
        isFeatured: false,
    },
];
