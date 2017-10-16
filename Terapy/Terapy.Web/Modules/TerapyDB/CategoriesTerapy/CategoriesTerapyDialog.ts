
namespace Terapy.TerapyDB {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class CategoriesTerapyDialog extends Serenity.EntityDialog<CategoriesTerapyRow, any> {
        protected getFormKey() { return CategoriesTerapyForm.formKey; }
        protected getIdProperty() { return CategoriesTerapyRow.idProperty; }
        protected getLocalTextPrefix() { return CategoriesTerapyRow.localTextPrefix; }
        protected getNameProperty() { return CategoriesTerapyRow.nameProperty; }
        protected getService() { return CategoriesTerapyService.baseUrl; }

        protected form = new CategoriesTerapyForm(this.idPrefix);

    }
}