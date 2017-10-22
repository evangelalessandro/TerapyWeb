namespace Terapy.TerapyDB {
    export interface CustomerTurnRow {
        CustomerTurnID?: number;
        CustomerId?: number;
        TurnID?: number;
    }

    export namespace CustomerTurnRow {
        export const idProperty = 'CustomerTurnID';
        export const localTextPrefix = 'CustomerTurn';

        export namespace Fields {
            export declare const CustomerTurnID: string;
            export declare const CustomerId: string;
            export declare const TurnID: string;
        }

        ['CustomerTurnID', 'CustomerId', 'TurnID'].forEach(x => (<any>Fields)[x] = x);
    }
}
