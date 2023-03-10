const form = document.querySelector("form")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia ja incluso")
    return
  }
  nlwSetup.addDay(today)
  alert("Adicionado com sucesso 🦾")
}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}
const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
/*const data = {
  run: ["01-01", "01-02", "01-03"],
  water: ["01-01", "01-02", "01-03"],
  food: ["01-01", "01-02", "01-03"],
}*/

nlwSetup.setData(data)
nlwSetup.load()
