
namespace Terapy.TerapyDB {
    
    @Serenity.Decorators.registerClass()
    export class CustomerTurnGrid extends Serenity.EntityGrid<CustomerTurnRow, any> {
        protected getColumnsKey() { return 'TerapyDB.CustomerTurn'; }
        protected getDialogType() { return CustomerTurnDialog; }
        protected getIdProperty() { return CustomerTurnRow.idProperty; }
        protected getLocalTextPrefix() { return CustomerTurnRow.localTextPrefix; }
        protected getService() { return CustomerTurnService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}