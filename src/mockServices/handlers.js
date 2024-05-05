import rest from "msw";

export const handlers = [
    rest.get("https://fakestoreapi.com/products", (req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json([
            { title: "t-shirt" },
            { title: "shirt" },
            { title: "jewelry" },
            { title: "pant" },
          ])
        );
    })
]


/* First it take api url then it takes three parameters
  1. req = request
  2. res = response
  3. ctx = It is create the status 

*/
  