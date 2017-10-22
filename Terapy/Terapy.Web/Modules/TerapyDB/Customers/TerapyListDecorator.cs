
namespace Terapy.TerapyDB
{
    using Entities;
    using Serenity;
    using Serenity.Data;
    using Serenity.Reporting;
    using System;
    using System.Collections.Generic;
    using System.Linq;

    public class TerapyListDecorator : BaseCellDecorator
    {
        public override void Decorate()
        {
            var idList = this.Value as IEnumerable<int>;
            if (idList == null || !idList.Any())
            {
                this.Value = "";
                return;
            }

            var byId = TwoLevelCache.GetLocalStoreOnly("TerapyListDecorator:TurnById", 
                TimeSpan.Zero, TerapyTypeRow.Fields.GenerationKey, () =>
                {
                    using (var connection = SqlConnections.NewFor<TerapyTypeRow>())
                    {
                        var fld = TerapyTypeRow.Fields;
                        return connection.List<TerapyTypeRow>(q => q
                            .Select(fld.TerapyTypeId)
                            .Select(fld.TerapyTypeName))
                            .ToDictionary(x => x.TerapyTypeId.Value);
                    }
                });

            this.Value = String.Join(", ", idList.Select(x =>
            {
                TerapyTypeRow e;
                return byId.TryGetValue(x, out e) ? e.TerapyTypeName : x.ToString();
            }));
        }
    }
}