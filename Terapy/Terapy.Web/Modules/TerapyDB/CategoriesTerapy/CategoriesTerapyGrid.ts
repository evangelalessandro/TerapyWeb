
namespace Terapy.TerapyDB {
    
    @Serenity.Decorators.registerClass()
    export class CategoriesTerapyGrid extends Serenity.EntityGrid<CategoriesTerapyRow, any> {
        protected getColumnsKey() { return 'TerapyDB.CategoriesTerapy'; }
        protected getDialogType() { return CategoriesTerapyDialog; }
        protected getIdProperty() { return CategoriesTerapyRow.idProperty; }
        protected getLocalTextPrefix() { return CategoriesTerapyRow.localTextPrefix; }
        protected getService() { return CategoriesTerapyService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}