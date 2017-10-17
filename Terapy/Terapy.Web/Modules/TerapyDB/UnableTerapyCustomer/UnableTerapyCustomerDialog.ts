
namespace Terapy.TerapyDB {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class UnableTerapyCustomerDialog extends Serenity.EntityDialog<UnableTerapyCustomerRow, any> {
        protected getFormKey() { return UnableTerapyCustomerForm.formKey; }
        protected getIdProperty() { return UnableTerapyCustomerRow.idProperty; }
        protected getLocalTextPrefix() { return UnableTerapyCustomerRow.localTextPrefix; }
        protected getService() { return UnableTerapyCustomerService.baseUrl; }

        protected form = new UnableTerapyCustomerForm(this.idPrefix);

    }
}