import {PersonalDetailsData} from "./PersonalDetailsInterfaces"
export interface FieldOptionInterfaces {
    label: string;
    name: keyof PersonalDetailsData;
    type?: string;
}