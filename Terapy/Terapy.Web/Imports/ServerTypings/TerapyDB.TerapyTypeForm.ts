namespace Terapy.TerapyDB {
    export class TerapyTypeForm extends Serenity.PrefixedContext {
        static formKey = 'TerapyDB.TerapyType';

    }

    export interface TerapyTypeForm {
        TerapyTypeName: Serenity.StringEditor;
        TerapyTypeCategoryId: Serenity.LookupEditor;
        TerapyTimeXTurnXPatient: Serenity.IntegerEditor;
        TerapyXHour: Serenity.IntegerEditor;
        Rooms: Serenity.LookupEditor;
        TerapyRaccomandedByDoctor: Serenity.BooleanEditor;
        TerapyByAgeAndSex: Serenity.BooleanEditor;
        TerapyDefaultIfNotRaccomanded: Serenity.LookupEditor;
    }

    [['TerapyTypeName', () => Serenity.StringEditor], ['TerapyTypeCategoryId', () => Serenity.LookupEditor], ['TerapyTimeXTurnXPatient', () => Serenity.IntegerEditor], ['TerapyXHour', () => Serenity.IntegerEditor], ['Rooms', () => Serenity.LookupEditor], ['TerapyRaccomandedByDoctor', () => Serenity.BooleanEditor], ['TerapyByAgeAndSex', () => Serenity.BooleanEditor], ['TerapyDefaultIfNotRaccomanded', () => Serenity.LookupEditor]].forEach(x => Object.defineProperty(TerapyTypeForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}
