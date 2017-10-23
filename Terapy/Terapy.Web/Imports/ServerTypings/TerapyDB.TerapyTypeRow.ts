namespace Terapy.TerapyDB {
    export interface TerapyTypeRow {
        TerapyTypeId?: number;
        TerapyTypeName?: string;
        TerapyTimeXTurnXPatient?: number;
        TerapyXHour?: number;
        TerapyDefaultIfNotRaccomanded?: number;
        TerapyRaccomandedByDoctor?: boolean;
        TerapyByAgeAndSex?: boolean;
        Rooms?: number[];
        TerapyTypeCategoryId?: number;
        TerapyTypeCategoryCategoryName?: string;
    }

    export namespace TerapyTypeRow {
        export const idProperty = 'TerapyTypeId';
        export const nameProperty = 'TerapyTypeName';
        export const localTextPrefix = 'TerapyDB.TerapyType';
        export const lookupKey = 'TerapyDB.TerapyType';

        export function getLookup(): Q.Lookup<TerapyTypeRow> {
            return Q.getLookup<TerapyTypeRow>('TerapyDB.TerapyType');
        }

        export namespace Fields {
            export declare const TerapyTypeId: string;
            export declare const TerapyTypeName: string;
            export declare const TerapyTimeXTurnXPatient: string;
            export declare const TerapyXHour: string;
            export declare const TerapyDefaultIfNotRaccomanded: string;
            export declare const TerapyRaccomandedByDoctor: string;
            export declare const TerapyByAgeAndSex: string;
            export declare const Rooms: string;
            export declare const TerapyTypeCategoryId: string;
            export declare const TerapyTypeCategoryCategoryName: string;
        }

        ['TerapyTypeId', 'TerapyTypeName', 'TerapyTimeXTurnXPatient', 'TerapyXHour', 'TerapyDefaultIfNotRaccomanded', 'TerapyRaccomandedByDoctor', 'TerapyByAgeAndSex', 'Rooms', 'TerapyTypeCategoryId', 'TerapyTypeCategoryCategoryName'].forEach(x => (<any>Fields)[x] = x);
    }
}
