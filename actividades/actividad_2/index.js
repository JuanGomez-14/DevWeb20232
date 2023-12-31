const getDataForm = () => {
  const txtName = document.getElementById("txtName").value;
  const txtEmail = document.getElementById("txtEmail").value;
  const txtDescription = document.getElementById("txtTask").value;
  const acceptConditions = document.getElementById("acceptConditions").checked;
  const actividadType = document.getElementById("actividadType").value;
  const taskType = document.getElementById("taskType").value;
  const semestre = document.getElementById("semestre").value;

  // Json => clave:valor
  const data = {
    name: txtName,
    email: txtEmail,
    txtDescription: txtDescription,
    acceptConditions, // sin valor ya que la clave y valor se llaman igual
    actividadType,
    taskType,
    semestre,
  };

  console.log(data);
};
