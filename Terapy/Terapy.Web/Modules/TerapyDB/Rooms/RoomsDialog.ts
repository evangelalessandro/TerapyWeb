
namespace Terapy.TerapyDB {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class RoomsDialog extends Serenity.EntityDialog<RoomsRow, any> {
        protected getFormKey() { return RoomsForm.formKey; }
        protected getIdProperty() { return RoomsRow.idProperty; }
        protected getLocalTextPrefix() { return RoomsRow.localTextPrefix; }
        protected getNameProperty() { return RoomsRow.nameProperty; }
        protected getService() { return RoomsService.baseUrl; }

        protected form = new RoomsForm(this.idPrefix);

    }
}