namespace Terapy.TerapyDB {
    export interface TurnTerapyRow {
        TurnId?: number;
        TurnName?: string;
        TurnDataStart?: string;
        TurnEndDate?: string;
        TurnToGenerate?: boolean;
    }

    export namespace TurnTerapyRow {
        export const idProperty = 'TurnId';
        export const nameProperty = 'TurnName';
        export const localTextPrefix = 'TerapyDB.TurnTerapy';
        export const lookupKey = 'TerapyDB.TurnTerapy';

        export function getLookup(): Q.Lookup<TurnTerapyRow> {
            return Q.getLookup<TurnTerapyRow>('TerapyDB.TurnTerapy');
        }

        export namespace Fields {
            export declare const TurnId: string;
            export declare const TurnName: string;
            export declare const TurnDataStart: string;
            export declare const TurnEndDate: string;
            export declare const TurnToGenerate: string;
        }

        ['TurnId', 'TurnName', 'TurnDataStart', 'TurnEndDate', 'TurnToGenerate'].forEach(x => (<any>Fields)[x] = x);
    }
}
