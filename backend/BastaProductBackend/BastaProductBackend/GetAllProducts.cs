using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using System.Collections.Generic;
using System;

namespace BastaProductBackend
{
    public static partial class GetAllProducts
    {
        [FunctionName("GetAllProducts")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "products")]
                HttpRequest req,
            [CosmosDB("products", "products", ConnectionStringSetting = "CosmosDbConnection")]
                IEnumerable<ProductListItem> products)
        {
            return new OkObjectResult(products);
        }
    }
}
