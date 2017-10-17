
namespace Terapy.TerapyDB {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class MessagesTranslationDialog extends Serenity.EntityDialog<MessagesTranslationRow, any> {
        protected getFormKey() { return MessagesTranslationForm.formKey; }
        protected getIdProperty() { return MessagesTranslationRow.idProperty; }
        protected getLocalTextPrefix() { return MessagesTranslationRow.localTextPrefix; }
        protected getNameProperty() { return MessagesTranslationRow.nameProperty; }
        protected getService() { return MessagesTranslationService.baseUrl; }

        protected form = new MessagesTranslationForm(this.idPrefix);

    }
}