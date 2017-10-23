namespace Terapy.TerapyDB {
    export class RoomsForm extends Serenity.PrefixedContext {
        static formKey = 'TerapyDB.Rooms';

    }

    export interface RoomsForm {
        RoomName: Serenity.StringEditor;
        Terapies: Serenity.LookupEditor;
    }

    [['RoomName', () => Serenity.StringEditor], ['Terapies', () => Serenity.LookupEditor]].forEach(x => Object.defineProperty(RoomsForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}
