namespace Terapy.TerapyDB {
    export class TurnTerapyForm extends Serenity.PrefixedContext {
        static formKey = 'TerapyDB.TurnTerapy';

    }

    export interface TurnTerapyForm {
        TurnName: Serenity.StringEditor;
        TurnDataStart: Serenity.DateEditor;
        TurnEndDate: Serenity.DateEditor;
        TurnToGenerate: Serenity.BooleanEditor;
    }

    [['TurnName', () => Serenity.StringEditor], ['TurnDataStart', () => Serenity.DateEditor], ['TurnEndDate', () => Serenity.DateEditor], ['TurnToGenerate', () => Serenity.BooleanEditor]].forEach(x => Object.defineProperty(TurnTerapyForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}
