// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {

  driversWithOver = drivers.filter(driver => driver.revenue > revenue);

  return driversWithOver;
}

function driverNamesWithRevenueOver(drivers, revenue) {
  driverNamesWithOver = drivers.filter(driver => driver.revenue > revenue);
  newArr = [];
  newArr.push(driverNamesWithOver.name);
  return driverNamesWithOver;
}
