
namespace Terapy.TerapyDB {
    
    @Serenity.Decorators.registerClass()
    export class TerapyTypeGrid extends Serenity.EntityGrid<TerapyTypeRow, any> {
        protected getColumnsKey() { return 'TerapyDB.TerapyType'; }
        protected getDialogType() { return TerapyTypeDialog; }
        protected getIdProperty() { return TerapyTypeRow.idProperty; }
        protected getLocalTextPrefix() { return TerapyTypeRow.localTextPrefix; }
        protected getService() { return TerapyTypeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}