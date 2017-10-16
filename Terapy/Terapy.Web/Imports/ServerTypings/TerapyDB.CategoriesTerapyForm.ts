namespace Terapy.TerapyDB {
    export class CategoriesTerapyForm extends Serenity.PrefixedContext {
        static formKey = 'TerapyDB.CategoriesTerapy';

    }

    export interface CategoriesTerapyForm {
        CategoryName: Serenity.StringEditor;
    }

    [['CategoryName', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(CategoriesTerapyForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}
