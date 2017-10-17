namespace Terapy.TerapyDB {
    export interface EmployeesRow {
        EmployeeId?: number;
        LastName?: string;
        FirstName?: string;
        BirthDate?: string;
        Address?: string;
        City?: string;
        Region?: string;
        PostalCode?: string;
        Country?: string;
        Phone?: string;
        Photo?: number[];
        Notes?: string;
    }

    export namespace EmployeesRow {
        export const idProperty = 'EmployeeId';
        export const nameProperty = 'LastName';
        export const localTextPrefix = 'TerapyDB.Employees';

        export namespace Fields {
            export declare const EmployeeId: string;
            export declare const LastName: string;
            export declare const FirstName: string;
            export declare const BirthDate: string;
            export declare const Address: string;
            export declare const City: string;
            export declare const Region: string;
            export declare const PostalCode: string;
            export declare const Country: string;
            export declare const Phone: string;
            export declare const Photo: string;
            export declare const Notes: string;
        }

        ['EmployeeId', 'LastName', 'FirstName', 'BirthDate', 'Address', 'City', 'Region', 'PostalCode', 'Country', 'Phone', 'Photo', 'Notes'].forEach(x => (<any>Fields)[x] = x);
    }
}
