namespace Terapy.TerapyDB {
    export interface CustomersRow {
        CustomerId?: number;
        CustomerName?: string;
        CustomerSurname?: string;
        Address?: string;
        City?: string;
        Region?: string;
        PostalCode?: string;
        Country?: string;
        Phone?: string;
        Email?: string;
    }

    export namespace CustomersRow {
        export const idProperty = 'CustomerId';
        export const nameProperty = 'CustomerName';
        export const localTextPrefix = 'TerapyDB.Customers';

        export namespace Fields {
            export declare const CustomerId: string;
            export declare const CustomerName: string;
            export declare const CustomerSurname: string;
            export declare const Address: string;
            export declare const City: string;
            export declare const Region: string;
            export declare const PostalCode: string;
            export declare const Country: string;
            export declare const Phone: string;
            export declare const Email: string;
        }

        ['CustomerId', 'CustomerName', 'CustomerSurname', 'Address', 'City', 'Region', 'PostalCode', 'Country', 'Phone', 'Email'].forEach(x => (<any>Fields)[x] = x);
    }
}
