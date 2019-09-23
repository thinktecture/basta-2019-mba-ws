using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;

namespace BastaProductBackend
{
    public static class GetProductById
    {
        [FunctionName("GetProductById")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "products/{id}")]
                HttpRequest req,
            [CosmosDB("products", "products", Id = "{id}", PartitionKey = "{id}", ConnectionStringSetting="CosmosDbConnection")]
                ProductDetailItem item)
        {
            if (item == null)
            {
                return new NotFoundResult();
            }

            return new OkObjectResult(item);
        }
    }
}
