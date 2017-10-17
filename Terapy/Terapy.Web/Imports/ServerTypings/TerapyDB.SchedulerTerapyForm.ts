namespace Terapy.TerapyDB {
    export class SchedulerTerapyForm extends Serenity.PrefixedContext {
        static formKey = 'TerapyDB.SchedulerTerapy';

    }

    export interface SchedulerTerapyForm {
        SchedulerDateTime: Serenity.DateEditor;
        SchedEmploy: Serenity.IntegerEditor;
        SchedCustomerId: Serenity.IntegerEditor;
        SchedTurnId: Serenity.IntegerEditor;
        SchedTerapyTypeId: Serenity.IntegerEditor;
        SchedNote: Serenity.StringEditor;
    }

    [['SchedulerDateTime', () => Serenity.DateEditor], ['SchedEmploy', () => Serenity.IntegerEditor], ['SchedCustomerId', () => Serenity.IntegerEditor], ['SchedTurnId', () => Serenity.IntegerEditor], ['SchedTerapyTypeId', () => Serenity.IntegerEditor], ['SchedNote', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(SchedulerTerapyForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}
