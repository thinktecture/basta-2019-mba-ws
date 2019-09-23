using System;
using Newtonsoft.Json;

namespace BastaProductBackend
{
    public class ProductListItem
    {
        [JsonProperty("id")]
        public Guid Id { get; set; }

        public string Manufacturer { get; set; }

        public string Name { get; set; }
    }

}
