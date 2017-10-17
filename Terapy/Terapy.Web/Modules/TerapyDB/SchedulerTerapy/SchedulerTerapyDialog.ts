
namespace Terapy.TerapyDB {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class SchedulerTerapyDialog extends Serenity.EntityDialog<SchedulerTerapyRow, any> {
        protected getFormKey() { return SchedulerTerapyForm.formKey; }
        protected getIdProperty() { return SchedulerTerapyRow.idProperty; }
        protected getLocalTextPrefix() { return SchedulerTerapyRow.localTextPrefix; }
        protected getNameProperty() { return SchedulerTerapyRow.nameProperty; }
        protected getService() { return SchedulerTerapyService.baseUrl; }

        protected form = new SchedulerTerapyForm(this.idPrefix);

    }
}