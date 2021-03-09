const getEmployerRole = (employeeName, employees) => {
  const found = employees.find((e) => e.name === employeeName);
  if (found) return found.role;
  return "Not found!";
};

module.exports = getEmployerRole;
