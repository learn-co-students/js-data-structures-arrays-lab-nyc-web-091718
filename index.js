const drivers = ["Milo", "Otis", "Garfield"]

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

  const copyOfDrivers = [...drivers, name];
  return copyOfDrivers;
}

function prependDriver(name) {
  const copyOfDrivers = [name, ...drivers];
  // console.log(copyOfDrivers);
  return copyOfDrivers;

}

function removeLastDriver() {
  const newDrivers = drivers.slice(0, drivers.length - 1);
  return newDrivers;
}

function removeFirstDriver() {
  const newArray = drivers.slice(1);
  return newArray;

}
