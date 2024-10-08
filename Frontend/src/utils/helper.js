export function filterData(searchText,restaurants){
    const filterdata= restaurants.filter((restaurant) =>
        restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    );
    return filterdata;
}