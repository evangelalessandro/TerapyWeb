
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
            export declare const TurnId;
            export declare const TurnName;
            export declare const TurnDataStart;
            export declare const TurnEndDate;
        }

        ['TurnId', 'TurnName', 'TurnDataStart', 'TurnEndDate'].forEach(x => (<any>Fields)[x] = x);
    }
}

