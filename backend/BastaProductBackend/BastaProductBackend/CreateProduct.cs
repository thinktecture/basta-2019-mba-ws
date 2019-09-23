using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;

namespace BastaProductBackend
{
    public static class CreateProduct
    {
        [FunctionName("CreateProduct")]
        public static IActionResult Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "post", Route = "products")]
                CreateProductModel input,
            [CosmosDB("products", "products", ConnectionStringSetting="CosmosDbConnection")]
                out Product product)
        {
            product = new Product()
            {
                Id = Guid.NewGuid(),
                Color = input.Color,
                Description = input.Description,
                Manufacturer = input.Manufacturer,
                Name = input.Name
            };

            return new CreatedResult($"/api/products/{product.Id}", product);
        }
    }
}
