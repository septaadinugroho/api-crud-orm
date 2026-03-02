//pagination
export const applyPagination = (query: any) => {
  const page = Number(query.page) || 1;
  const limit = Number(query.limit) || 10;

  const start = (page - 1) * limit;
  const end = start + limit;

  return {
    page,
    limit,
    start,
    end,
    skip: start,
    take: limit,
  };
};

//filter
export const applyFilter = (query: any) => {
  const where: any = {};

  if (query.brand) {
    where.brand = {
      contains: query.brand,
      mode: "insensitive",
    };
  }

  if (query.minPrice || query.maxPrice) {
    where.price = {};

    if (query.minPrice) {
      //gte = greater than equal
      where.price.gte = Number(query.minPrice);
    }

    if (query.maxPrice) {
      //lte = less than equal
      where.price.lte = Number(query.maxPrice);
    }
  }

  return where;
};

//sort
export const applySort = (query: any) => {
  const sortBy = query.sortBy || "id";
  const order = query.order === "desc" ? "desc" : "asc";

  return {
    [sortBy]: order,
  };
};
