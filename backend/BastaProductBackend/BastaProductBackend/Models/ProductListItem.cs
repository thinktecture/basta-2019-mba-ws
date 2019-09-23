using System;

namespace BastaProductBackend
{
    public static partial class GetAllProducts
    {
        public class ProductListItem
        {
            public Guid Id { get; set; }

            public string Manufacturer { get; set; }

            public string Name { get; set; }
        }

    }
}
