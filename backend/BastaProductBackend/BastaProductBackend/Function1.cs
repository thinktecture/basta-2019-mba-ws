using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace BastaProductBackend
{
    public static class Function1
    {
        [FunctionName("GetAllProducts")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "products")]
                HttpRequest req,
            [CosmosDB("products", "products", ConnectionStringSetting = "CosmosDbConnection")]
                IEnumerable<ProductListItem> products,
            ILogger log)
        {
            return new OkObjectResult(products);
        }

        public class ProductListItem
        {
            public Guid Id { get; set; }

            public string Manufacturer { get; set; }

            public string Name { get; set; }
        }

    }
}
