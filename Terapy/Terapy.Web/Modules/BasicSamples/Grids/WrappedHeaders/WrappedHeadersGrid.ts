﻿/// <reference path="../../../Northwind/Order/OrderGrid.ts" />

namespace Terapy.BasicSamples {

    @Serenity.Decorators.registerClass()
    export class WrappedHeadersGrid extends Northwind.OrderGrid {

        constructor(container: JQuery) {
            super(container);
        }
    }
}