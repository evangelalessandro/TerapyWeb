
namespace Terapy.TerapyDB
{
    using Entities;
    using Serenity;
    using Serenity.Data;
    using Serenity.Reporting;
    using System;
    using System.Collections.Generic;
    using System.Linq;

    public class RoomListDecorator : BaseCellDecorator
    {
        public override void Decorate()
        {
            var idList = this.Value as IEnumerable<int>;
            if (idList == null || !idList.Any())
            {
                this.Value = "";
                return;
            }

            var byId = TwoLevelCache.GetLocalStoreOnly("RoomListDecorator:RoomById", 
                TimeSpan.Zero, RoomsRow.Fields.GenerationKey, () =>
                {
                    using (var connection = SqlConnections.NewFor<RoomsRow>())
                    {
                        var fld = RoomsRow.Fields;
                        return connection.List<RoomsRow>(q => q
                            .Select(fld.RoomId)
                            .Select(fld.RoomName))
                            .ToDictionary(x => x.RoomId.Value);
                    }
                });

            this.Value = String.Join(", ", idList.Select(x =>
            {
                RoomsRow e;
                return byId.TryGetValue(x, out e) ? e.RoomName: x.ToString();
            }));
        }
    }
}