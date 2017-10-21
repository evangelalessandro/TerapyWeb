
namespace Terapy.TerapyDB {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class TurnTerapyDialog extends Serenity.EntityDialog<TurnTerapyRow, any> {
        protected getFormKey() { return TurnTerapyForm.formKey; }
        protected getIdProperty() { return TurnTerapyRow.idProperty; }
        protected getLocalTextPrefix() { return TurnTerapyRow.localTextPrefix; }
        protected getNameProperty() { return TurnTerapyRow.nameProperty; }
        protected getService() { return TurnTerapyService.baseUrl; }

        protected form = new TurnTerapyForm(this.idPrefix);

    }
}