﻿namespace Terapy.TerapyDB {
    @Serenity.Decorators.registerFormatter()
    export class TurnTerapyListFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {
            let idList = ctx.value as number[];
            if (!idList || !idList.length)
                return "";
            return "";

            //let byId = TurnTerapyRow.getLookup().itemById;
            //return idList.map(x => {
            //    let g = byId[x];
            //    if (!g)
            //        return x.toString();
            //    return Q.htmlEncode(g.TurnName);
            //}).join(", ");
        }
    }
}