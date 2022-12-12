import { Guid } from 'guid-ts';

export interface Students {
    id: string;
    name: string ;
    birthDate: Date ;
    yearOfStudy: number | null;
}
