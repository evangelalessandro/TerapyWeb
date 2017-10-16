namespace Terapy.TerapyDB {
    export interface TurnTerapyRow {
        TurnId?: number;
        TurnName?: string;
        TurnDataStart?: string;
        TurnEndDate?: string;
    }

    export namespace TurnTerapyRow {
        export const idProperty = 'TurnId';
        export const nameProperty = 'TurnName';
        export const localTextPrefix = 'TerapyDB.TurnTerapy';

        export namespace Fields {
            export declare const TurnId: string;
            export declare const TurnName: string;
            export declare const TurnDataStart: string;
            export declare const TurnEndDate: string;
        }

        ['TurnId', 'TurnName', 'TurnDataStart', 'TurnEndDate'].forEach(x => (<any>Fields)[x] = x);
    }
}
