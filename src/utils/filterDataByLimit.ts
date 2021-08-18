/**
 * Function to slice an array by a limit
 * @param data receive data array
 * @param limit filter limit
 * @returns filtered data array
 */
export const filterDataByLimit = (data: [] | never[], limit: number) => {
  if (limit === 0) {
    return data
  }
  return data.slice(0, limit)
}
