
namespace Terapy.TerapyDB {
    
    @Serenity.Decorators.registerClass()
    export class SchedulerTerapyGrid extends Serenity.EntityGrid<SchedulerTerapyRow, any> {
        protected getColumnsKey() { return 'TerapyDB.SchedulerTerapy'; }
        protected getDialogType() { return SchedulerTerapyDialog; }
        protected getIdProperty() { return SchedulerTerapyRow.idProperty; }
        protected getLocalTextPrefix() { return SchedulerTerapyRow.localTextPrefix; }
        protected getService() { return SchedulerTerapyService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}