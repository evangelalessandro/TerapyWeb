
namespace Terapy.TerapyDB {
    
    @Serenity.Decorators.registerClass()
    export class UnableTerapyCustomerGrid extends Serenity.EntityGrid<UnableTerapyCustomerRow, any> {
        protected getColumnsKey() { return 'TerapyDB.UnableTerapyCustomer'; }
        protected getDialogType() { return UnableTerapyCustomerDialog; }
        protected getIdProperty() { return UnableTerapyCustomerRow.idProperty; }
        protected getLocalTextPrefix() { return UnableTerapyCustomerRow.localTextPrefix; }
        protected getService() { return UnableTerapyCustomerService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}