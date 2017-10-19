namespace Terapy.TerapyDB {
    export class TerapyTypeForm extends Serenity.PrefixedContext {
        static formKey = 'TerapyDB.TerapyType';

    }

    export interface TerapyTypeForm {
        TerapyTypeName: Serenity.StringEditor;
        PersonXSession: Serenity.IntegerEditor;
        TerapyTypeCategoryId: Serenity.LookupEditor;
        ReportOrder: Serenity.IntegerEditor;
    }

    [['TerapyTypeName', () => Serenity.StringEditor], ['PersonXSession', () => Serenity.IntegerEditor], ['TerapyTypeCategoryId', () => Serenity.LookupEditor], ['ReportOrder', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(TerapyTypeForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}
