
namespace Terapy.TerapyDB {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class TerapyTypeDialog extends Serenity.EntityDialog<TerapyTypeRow, any> {
        protected getFormKey() { return TerapyTypeForm.formKey; }
        protected getIdProperty() { return TerapyTypeRow.idProperty; }
        protected getLocalTextPrefix() { return TerapyTypeRow.localTextPrefix; }
        protected getNameProperty() { return TerapyTypeRow.nameProperty; }
        protected getService() { return TerapyTypeService.baseUrl; }

        protected form = new TerapyTypeForm(this.idPrefix);

    }
}