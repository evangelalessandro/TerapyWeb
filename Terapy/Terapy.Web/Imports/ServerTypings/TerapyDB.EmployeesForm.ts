namespace Terapy.TerapyDB {
    export class EmployeesForm extends Serenity.PrefixedContext {
        static formKey = 'TerapyDB.Employees';

    }

    export interface EmployeesForm {
        LastName: Serenity.StringEditor;
        FirstName: Serenity.StringEditor;
        BirthDate: Serenity.DateEditor;
        Address: Serenity.StringEditor;
        City: Serenity.StringEditor;
        Region: Serenity.StringEditor;
        PostalCode: Serenity.StringEditor;
        Country: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Photo: Serenity.StringEditor;
        Notes: Serenity.StringEditor;
    }

    [['LastName', () => Serenity.StringEditor], ['FirstName', () => Serenity.StringEditor], ['BirthDate', () => Serenity.DateEditor], ['Address', () => Serenity.StringEditor], ['City', () => Serenity.StringEditor], ['Region', () => Serenity.StringEditor], ['PostalCode', () => Serenity.StringEditor], ['Country', () => Serenity.StringEditor], ['Phone', () => Serenity.StringEditor], ['Photo', () => Serenity.StringEditor], ['Notes', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(EmployeesForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}
