namespace Terapy.TerapyDB {
    @Serenity.Decorators.registerFormatter()
    export class RoomListFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {
            let idList = ctx.value as number[];
            if (!idList || !idList.length)
                return "";

            let byId = RoomsRow.getLookup().itemById;
            return idList.map(x => {
                let g = byId[x];
                if (!g)
                    return x.toString();
                return Q.htmlEncode(g.RoomName);
            }).join(", ");
        }
    }
}