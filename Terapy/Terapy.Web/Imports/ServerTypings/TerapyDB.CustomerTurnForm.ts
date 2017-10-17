namespace Terapy.TerapyDB {
    export class CustomerTurnForm extends Serenity.PrefixedContext {
        static formKey = 'TerapyDB.CustomerTurn';

    }

    export interface CustomerTurnForm {
        TurnId: Serenity.IntegerEditor;
    }

    [['TurnId', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(CustomerTurnForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}
