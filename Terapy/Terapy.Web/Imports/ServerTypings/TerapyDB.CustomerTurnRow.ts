namespace Terapy.TerapyDB {
    export interface CustomerTurnRow {
        CustomerId?: number;
        TurnId?: number;
        CustomerCustomerName?: string;
        CustomerCustomerSurname?: string;
        CustomerAddress?: string;
        CustomerCity?: string;
        CustomerRegion?: string;
        CustomerPostalCode?: string;
        CustomerCountry?: string;
        CustomerPhone?: string;
        CustomerEmail?: string;
        TurnTurnName?: string;
        TurnTurnDataStart?: string;
        TurnTurnEndDate?: string;
    }

    export namespace CustomerTurnRow {
        export const idProperty = 'CustomerId';
        export const localTextPrefix = 'TerapyDB.CustomerTurn';

        export namespace Fields {
            export declare const CustomerId: string;
            export declare const TurnId: string;
            export declare const CustomerCustomerName: string;
            export declare const CustomerCustomerSurname: string;
            export declare const CustomerAddress: string;
            export declare const CustomerCity: string;
            export declare const CustomerRegion: string;
            export declare const CustomerPostalCode: string;
            export declare const CustomerCountry: string;
            export declare const CustomerPhone: string;
            export declare const CustomerEmail: string;
            export declare const TurnTurnName: string;
            export declare const TurnTurnDataStart: string;
            export declare const TurnTurnEndDate: string;
        }

        ['CustomerId', 'TurnId', 'CustomerCustomerName', 'CustomerCustomerSurname', 'CustomerAddress', 'CustomerCity', 'CustomerRegion', 'CustomerPostalCode', 'CustomerCountry', 'CustomerPhone', 'CustomerEmail', 'TurnTurnName', 'TurnTurnDataStart', 'TurnTurnEndDate'].forEach(x => (<any>Fields)[x] = x);
    }
}
