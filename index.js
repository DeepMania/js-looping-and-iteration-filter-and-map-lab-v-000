// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  driversWithOver = drivers.filter(driver => driver.revenue > revenue);

  return driversWithOver;
}

