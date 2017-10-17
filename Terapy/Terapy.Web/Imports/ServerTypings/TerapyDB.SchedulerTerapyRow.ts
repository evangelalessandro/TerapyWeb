namespace Terapy.TerapyDB {
    export interface SchedulerTerapyRow {
        SchedulerId?: number;
        SchedulerDateTime?: string;
        SchedEmploy?: number;
        SchedCustomerId?: number;
        SchedTurnId?: number;
        SchedTerapyTypeId?: number;
        SchedNote?: string;
        SchedEmployLastName?: string;
        SchedEmployFirstName?: string;
        SchedEmployBirthDate?: string;
        SchedEmployAddress?: string;
        SchedEmployCity?: string;
        SchedEmployRegion?: string;
        SchedEmployPostalCode?: string;
        SchedEmployCountry?: string;
        SchedEmployPhone?: string;
        SchedEmployPhoto?: number[];
        SchedEmployNotes?: string;
        SchedCustomerCustomerName?: string;
        SchedCustomerCustomerSurname?: string;
        SchedCustomerAddress?: string;
        SchedCustomerCity?: string;
        SchedCustomerRegion?: string;
        SchedCustomerPostalCode?: string;
        SchedCustomerCountry?: string;
        SchedCustomerPhone?: string;
        SchedCustomerEmail?: string;
        SchedTurnTurnName?: string;
        SchedTurnTurnDataStart?: string;
        SchedTurnTurnEndDate?: string;
        SchedTerapyTypeTerapyTypeName?: string;
        SchedTerapyTypePersonXSession?: number;
        SchedTerapyTypeTerapyTypeCategoryId?: number;
        SchedTerapyTypeReportOrder?: number;
    }

    export namespace SchedulerTerapyRow {
        export const idProperty = 'SchedulerId';
        export const nameProperty = 'SchedNote';
        export const localTextPrefix = 'TerapyDB.SchedulerTerapy';

        export namespace Fields {
            export declare const SchedulerId: string;
            export declare const SchedulerDateTime: string;
            export declare const SchedEmploy: string;
            export declare const SchedCustomerId: string;
            export declare const SchedTurnId: string;
            export declare const SchedTerapyTypeId: string;
            export declare const SchedNote: string;
            export declare const SchedEmployLastName: string;
            export declare const SchedEmployFirstName: string;
            export declare const SchedEmployBirthDate: string;
            export declare const SchedEmployAddress: string;
            export declare const SchedEmployCity: string;
            export declare const SchedEmployRegion: string;
            export declare const SchedEmployPostalCode: string;
            export declare const SchedEmployCountry: string;
            export declare const SchedEmployPhone: string;
            export declare const SchedEmployPhoto: string;
            export declare const SchedEmployNotes: string;
            export declare const SchedCustomerCustomerName: string;
            export declare const SchedCustomerCustomerSurname: string;
            export declare const SchedCustomerAddress: string;
            export declare const SchedCustomerCity: string;
            export declare const SchedCustomerRegion: string;
            export declare const SchedCustomerPostalCode: string;
            export declare const SchedCustomerCountry: string;
            export declare const SchedCustomerPhone: string;
            export declare const SchedCustomerEmail: string;
            export declare const SchedTurnTurnName: string;
            export declare const SchedTurnTurnDataStart: string;
            export declare const SchedTurnTurnEndDate: string;
            export declare const SchedTerapyTypeTerapyTypeName: string;
            export declare const SchedTerapyTypePersonXSession: string;
            export declare const SchedTerapyTypeTerapyTypeCategoryId: string;
            export declare const SchedTerapyTypeReportOrder: string;
        }

        ['SchedulerId', 'SchedulerDateTime', 'SchedEmploy', 'SchedCustomerId', 'SchedTurnId', 'SchedTerapyTypeId', 'SchedNote', 'SchedEmployLastName', 'SchedEmployFirstName', 'SchedEmployBirthDate', 'SchedEmployAddress', 'SchedEmployCity', 'SchedEmployRegion', 'SchedEmployPostalCode', 'SchedEmployCountry', 'SchedEmployPhone', 'SchedEmployPhoto', 'SchedEmployNotes', 'SchedCustomerCustomerName', 'SchedCustomerCustomerSurname', 'SchedCustomerAddress', 'SchedCustomerCity', 'SchedCustomerRegion', 'SchedCustomerPostalCode', 'SchedCustomerCountry', 'SchedCustomerPhone', 'SchedCustomerEmail', 'SchedTurnTurnName', 'SchedTurnTurnDataStart', 'SchedTurnTurnEndDate', 'SchedTerapyTypeTerapyTypeName', 'SchedTerapyTypePersonXSession', 'SchedTerapyTypeTerapyTypeCategoryId', 'SchedTerapyTypeReportOrder'].forEach(x => (<any>Fields)[x] = x);
    }
}
