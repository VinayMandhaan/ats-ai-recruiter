interface ExperienceLevel {
    id: string;
    years: string;
    label: string;
}

export const jobExperienceLevels: ExperienceLevel[] = [
    { id: '1', years: '0-2', label: 'Entry Level' },
    { id: '2', years: '3-5', label: 'Mid Level' },
    { id: '3', years: '6-10', label: 'Senior Level' },
    { id: '4', years: '10+', label: 'Expert Level' },
];