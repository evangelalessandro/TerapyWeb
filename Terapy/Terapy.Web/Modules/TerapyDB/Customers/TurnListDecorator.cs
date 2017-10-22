
namespace Terapy.TerapyDB
{
    using Entities;
    using Serenity;
    using Serenity.Data;
    using Serenity.Reporting;
    using System;
    using System.Collections.Generic;
    using System.Linq;

    public class TurnListDecorator : BaseCellDecorator
    {
        public override void Decorate()
        {
            var idList = this.Value as IEnumerable<int>;
            if (idList == null || !idList.Any())
            {
                this.Value = "";
                return;
            }

            var byId = TwoLevelCache.GetLocalStoreOnly("TurnListDecorator:TurnById", 
                TimeSpan.Zero, TurnTerapyRow.Fields.GenerationKey, () =>
                {
                    using (var connection = SqlConnections.NewFor<TurnTerapyRow>())
                    {
                        var fld = TurnTerapyRow.Fields;
                        return connection.List<TurnTerapyRow>(q => q
                            .Select(fld.TurnId)
                            .Select(fld.TurnName))
                            .ToDictionary(x => x.TurnId.Value);
                    }
                });

            this.Value = String.Join(", ", idList.Select(x =>
            {
                TurnTerapyRow e;
                return byId.TryGetValue(x, out e) ? e.TurnName: x.ToString();
            }));
        }
    }
}