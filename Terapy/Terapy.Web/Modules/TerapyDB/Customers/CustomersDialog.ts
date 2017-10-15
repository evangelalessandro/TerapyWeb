
namespace Terapy.TerapyDB {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class CustomersDialog extends Serenity.EntityDialog<CustomersRow, any> {
        protected getFormKey() { return CustomersForm.formKey; }
        protected getIdProperty() { return CustomersRow.idProperty; }
        protected getLocalTextPrefix() { return CustomersRow.localTextPrefix; }
        protected getNameProperty() { return CustomersRow.nameProperty; }
        protected getService() { return CustomersService.baseUrl; }

        protected form = new CustomersForm(this.idPrefix);

    }
}