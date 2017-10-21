
namespace Terapy.TerapyDB {
    
    @Serenity.Decorators.registerClass()
    export class TurnTerapyGrid extends Serenity.EntityGrid<TurnTerapyRow, any> {
        protected getColumnsKey() { return 'TerapyDB.TurnTerapy'; }
        protected getDialogType() { return TurnTerapyDialog; }
        protected getIdProperty() { return TurnTerapyRow.idProperty; }
        protected getLocalTextPrefix() { return TurnTerapyRow.localTextPrefix; }
        protected getService() { return TurnTerapyService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}