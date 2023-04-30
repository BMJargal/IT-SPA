//login .js

export function LogIn() {
  const section = document.createElement("section");
  const form = document.createElement("form");

  function message(event) {
    event.preventDefault();

    fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .then((users) => {
        let cheker = false;
        for (let i = 0; i < users.length; i++) {
          if (
            this.email.value == users[i].email &&
            this.password.value == users[i].password
          ) {
            cheker = true;
            alert(`User ${users[i].email} has logged in`);
          }
        }
        if (cheker == false) alert("Wrong email or password");
      });
  }

  section.innerHTML = `
  <h2>Logowanie</h2>
    <p>Aby się zalogować, wypełnij poniższy formularz.</p>
  <hr>`;

  form.name = "";
  form.id = "";

  form.innerHTML = `
  <label for="email"><b>E-Mail: </b></label>
  <input type="text" placeholder="E-Mail" name="email" id="email" required>
  <br>

  <label for="password"><b>Hasło: </b></label>
  <input type="password" placeholder="Hasło" name="password" id="password" required>
  <hr>

  <button type="submit" class="btn"
  <style background color:"red">Login</button>
  `;

  form.addEventListener("submit", message);

  section.append(form);

  return section;
}
