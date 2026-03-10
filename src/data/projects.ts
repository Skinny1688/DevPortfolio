// ─── Imports ───────────────────────────────────────────────────────────────

import type { Project } from './types';

// ─── Data ──────────────────────────────────────────────────────────────────

export const projects: Project[] = [
    {
        id: 1,
        title: 'Portfolio Website',
        description:
            'Персональный сайт-портфолио с витриной проектов, контактной формой и адаптивным дизайном.',
        repoLink: 'https://github.com',
        isFeatured: true,
        image: '/images/projects/portfolio.png',
    },
    {
        id: 2,
        title: 'Task Manager App',
        description:
            'Веб-приложение для управления задачами с поддержкой тегов, приоритетов и drag-and-drop.',
        repoLink: 'https://github.com',
        isFeatured: true,
        image: '/images/projects/task-manager.png',
    },
    {
        id: 3,
        title: 'Weather Dashboard',
        description:
            'Дашборд с данными о погоде в реальном времени, интеграция с OpenWeatherMap API.',
        repoLink: 'https://github.com',
        isFeatured: true,
        image: '/images/projects/weather.png',
    },
    {
        id: 4,
        title: 'Markdown Notes',
        description:
            'Редактор заметок с поддержкой Markdown, локальным хранилищем и экспортом в PDF.',
        repoLink: 'https://github.com',
        isFeatured: false,
        image: '/images/projects/notes.png',
    },
];
