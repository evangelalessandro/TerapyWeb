namespace Terapy.TerapyDB {
    export interface UnableTerapyCustomerRow {
        TerapyTypeId?: number;
        CustomerId?: number;
    }

    export namespace UnableTerapyCustomerRow {
        export const idProperty = 'TerapyTypeId';
        export const localTextPrefix = 'TerapyDB.UnableTerapyCustomer';

        export namespace Fields {
            export declare const TerapyTypeId: string;
            export declare const CustomerId: string;
        }

        ['TerapyTypeId', 'CustomerId'].forEach(x => (<any>Fields)[x] = x);
    }
}
