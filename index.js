// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver(name) {
  const aDrivers = drivers.slice()
  aDrivers.push(name);
  return aDrivers;
}

function prependDriver(name) {
  const pDrivers = [name, ...drivers];
  return pDrivers;
}

function removeLastDriver() {
  const rLdrivers = drivers.slice(0, drivers.length - 1);
  return rLdrivers;
}

function removeFirstDriver() {
  const rFdrivers = drivers.slice(1);
  return rFdrivers;
}
