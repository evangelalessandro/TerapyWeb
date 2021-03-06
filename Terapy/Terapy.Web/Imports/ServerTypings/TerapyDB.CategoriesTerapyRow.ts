﻿namespace Terapy.TerapyDB {
    export interface CategoriesTerapyRow {
        CategoryId?: number;
        CategoryName?: string;
    }

    export namespace CategoriesTerapyRow {
        export const idProperty = 'CategoryId';
        export const nameProperty = 'CategoryName';
        export const localTextPrefix = 'TerapyDB.CategoriesTerapy';
        export const lookupKey = 'TerapyDb.CategoriesTerapy';

        export function getLookup(): Q.Lookup<CategoriesTerapyRow> {
            return Q.getLookup<CategoriesTerapyRow>('TerapyDb.CategoriesTerapy');
        }

        export namespace Fields {
            export declare const CategoryId: string;
            export declare const CategoryName: string;
        }

        ['CategoryId', 'CategoryName'].forEach(x => (<any>Fields)[x] = x);
    }
}
