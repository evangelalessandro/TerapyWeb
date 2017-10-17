namespace Terapy.TerapyDB {
    export interface TerapyTypeRow {
        TerapyTypeId?: number;
        TerapyTypeName?: string;
        PersonXSession?: number;
        TerapyTypeCategoryId?: number;
        ReportOrder?: number;
        TerapyTypeCategoryCategoryName?: string;
    }

    export namespace TerapyTypeRow {
        export const idProperty = 'TerapyTypeId';
        export const nameProperty = 'TerapyTypeName';
        export const localTextPrefix = 'TerapyDB.TerapyType';

        export namespace Fields {
            export declare const TerapyTypeId: string;
            export declare const TerapyTypeName: string;
            export declare const PersonXSession: string;
            export declare const TerapyTypeCategoryId: string;
            export declare const ReportOrder: string;
            export declare const TerapyTypeCategoryCategoryName: string;
        }

        ['TerapyTypeId', 'TerapyTypeName', 'PersonXSession', 'TerapyTypeCategoryId', 'ReportOrder', 'TerapyTypeCategoryCategoryName'].forEach(x => (<any>Fields)[x] = x);
    }
}
