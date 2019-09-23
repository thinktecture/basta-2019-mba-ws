using System;
using Newtonsoft.Json;

namespace BastaProductBackend
{
    public class Product
    {
        [JsonProperty("id")]
        public Guid Id { get; set; }

        public string Manufacturer { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public string Color { get; set; }
    }
}
