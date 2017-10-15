/// <reference path="../Common/Helpers/LanguageList.ts" />

namespace Terapy.ScriptInitialization {
    Q.Config.responsiveDialogs = true;
    Q.Config.rootNamespaces.push('Terapy');
    Serenity.EntityDialog.defaultLanguageList = LanguageList.getValue;
}