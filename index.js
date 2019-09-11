// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {

  driversWithOver = drivers.filter(driver => driver.revenue > revenue);

  return driversWithOver;
}

function driverNamesWithRevenueOver() {
  driverNamesWithOver = drivers.filter(driver => driver.revenue > revenue);
  driversNamesWithOver =driverNamesWithOver.map(driver => return driver.name);
  return driversNamesWithOver;
}
