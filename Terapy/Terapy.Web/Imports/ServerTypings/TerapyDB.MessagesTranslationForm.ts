namespace Terapy.TerapyDB {
    export class MessagesTranslationForm extends Serenity.PrefixedContext {
        static formKey = 'TerapyDB.MessagesTranslation';

    }

    export interface MessagesTranslationForm {
        MessageEn: Serenity.StringEditor;
    }

    [['MessageEn', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(MessagesTranslationForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}
