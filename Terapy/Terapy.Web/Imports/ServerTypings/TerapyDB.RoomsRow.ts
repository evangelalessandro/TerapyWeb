namespace Terapy.TerapyDB {
    export interface RoomsRow {
        RoomId?: number;
        RoomName?: string;
        Terapies?: number[];
    }

    export namespace RoomsRow {
        export const idProperty = 'RoomId';
        export const nameProperty = 'RoomName';
        export const localTextPrefix = 'TerapyDB.Rooms';
        export const lookupKey = 'TerapyDb.Rooms';

        export function getLookup(): Q.Lookup<RoomsRow> {
            return Q.getLookup<RoomsRow>('TerapyDb.Rooms');
        }

        export namespace Fields {
            export declare const RoomId: string;
            export declare const RoomName: string;
            export declare const Terapies: string;
        }

        ['RoomId', 'RoomName', 'Terapies'].forEach(x => (<any>Fields)[x] = x);
    }
}
