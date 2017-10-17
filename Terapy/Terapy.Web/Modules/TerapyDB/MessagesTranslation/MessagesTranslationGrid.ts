
namespace Terapy.TerapyDB {
    
    @Serenity.Decorators.registerClass()
    export class MessagesTranslationGrid extends Serenity.EntityGrid<MessagesTranslationRow, any> {
        protected getColumnsKey() { return 'TerapyDB.MessagesTranslation'; }
        protected getDialogType() { return MessagesTranslationDialog; }
        protected getIdProperty() { return MessagesTranslationRow.idProperty; }
        protected getLocalTextPrefix() { return MessagesTranslationRow.localTextPrefix; }
        protected getService() { return MessagesTranslationService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}