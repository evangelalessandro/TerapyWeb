
namespace Terapy.TerapyDB {
    
    @Serenity.Decorators.registerClass()
    export class RoomsGrid extends Serenity.EntityGrid<RoomsRow, any> {
        protected getColumnsKey() { return 'TerapyDB.Rooms'; }
        protected getDialogType() { return RoomsDialog; }
        protected getIdProperty() { return RoomsRow.idProperty; }
        protected getLocalTextPrefix() { return RoomsRow.localTextPrefix; }
        protected getService() { return RoomsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}