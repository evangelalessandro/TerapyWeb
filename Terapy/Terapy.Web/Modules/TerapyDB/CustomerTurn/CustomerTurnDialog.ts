
namespace Terapy.TerapyDB {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class CustomerTurnDialog extends Serenity.EntityDialog<CustomerTurnRow, any> {
        protected getFormKey() { return CustomerTurnForm.formKey; }
        protected getIdProperty() { return CustomerTurnRow.idProperty; }
        protected getLocalTextPrefix() { return CustomerTurnRow.localTextPrefix; }
        protected getService() { return CustomerTurnService.baseUrl; }

        protected form = new CustomerTurnForm(this.idPrefix);

    }
}