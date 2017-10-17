namespace Terapy.TerapyDB {
    export class UnableTerapyCustomerForm extends Serenity.PrefixedContext {
        static formKey = 'TerapyDB.UnableTerapyCustomer';

    }

    export interface UnableTerapyCustomerForm {
        CustomerId: Serenity.IntegerEditor;
    }

    [['CustomerId', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(UnableTerapyCustomerForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}
