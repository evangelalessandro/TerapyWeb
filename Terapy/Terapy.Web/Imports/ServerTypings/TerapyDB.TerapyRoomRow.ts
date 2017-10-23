namespace Terapy.TerapyDB {
    export interface TerapyRoomRow {
        RoomId?: number;
        TerapyTypeID?: number;
    }

    export namespace TerapyRoomRow {
        export const idProperty = 'RoomId';
        export const localTextPrefix = 'TerapyDB.TerapyRoom';
        export const lookupKey = 'TerapyDb.TerapyRoom';

        export function getLookup(): Q.Lookup<TerapyRoomRow> {
            return Q.getLookup<TerapyRoomRow>('TerapyDb.TerapyRoom');
        }

        export namespace Fields {
            export declare const RoomId: string;
            export declare const TerapyTypeID: string;
        }

        ['RoomId', 'TerapyTypeID'].forEach(x => (<any>Fields)[x] = x);
    }
}
