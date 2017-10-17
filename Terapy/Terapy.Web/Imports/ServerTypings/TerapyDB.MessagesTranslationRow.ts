namespace Terapy.TerapyDB {
    export interface MessagesTranslationRow {
        MessageId?: number;
        MessageEn?: string;
    }

    export namespace MessagesTranslationRow {
        export const idProperty = 'MessageId';
        export const nameProperty = 'MessageEn';
        export const localTextPrefix = 'TerapyDB.MessagesTranslation';

        export namespace Fields {
            export declare const MessageId: string;
            export declare const MessageEn: string;
        }

        ['MessageId', 'MessageEn'].forEach(x => (<any>Fields)[x] = x);
    }
}
