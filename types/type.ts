export type PortfolioType = {
    name: string;
    description: string;
    image: string;
    link?: string;
    github: string;
    stack: Array<string>;
}

export type TimelineType = {
    company: string;
    location: string;
    year: string;
    title: string;
    duration: string;
    details: Array<string>;
}
export type EducationType = {
    university: string;
    degree: string;
    year: string;
    gpa: string;
    details: Array<string>;
};
export type TitleProps = {
    children: React.ReactNode;
    id?: string;
};