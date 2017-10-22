namespace Terapy.TerapyDB {
    export class CustomersForm extends Serenity.PrefixedContext {
        static formKey = 'TerapyDB.Customers';

    }

    export interface CustomersForm {
        CustomerName: Serenity.StringEditor;
        CustomerSurname: Serenity.StringEditor;
        UnableTerapy: Serenity.LookupEditor;
        Turns: Serenity.LookupEditor;
        Address: Serenity.StringEditor;
        City: Serenity.StringEditor;
        Region: Serenity.StringEditor;
        PostalCode: Serenity.StringEditor;
        Country: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Email: Serenity.StringEditor;
    }

    [['CustomerName', () => Serenity.StringEditor], ['CustomerSurname', () => Serenity.StringEditor], ['UnableTerapy', () => Serenity.LookupEditor], ['Turns', () => Serenity.LookupEditor], ['Address', () => Serenity.StringEditor], ['City', () => Serenity.StringEditor], ['Region', () => Serenity.StringEditor], ['PostalCode', () => Serenity.StringEditor], ['Country', () => Serenity.StringEditor], ['Phone', () => Serenity.StringEditor], ['Email', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(CustomersForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}
