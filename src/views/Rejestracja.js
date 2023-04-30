//Rejestracja.js

export function Rejestracja() {
  const section = document.createElement("section");
  const form = document.createElement("form");

  function message(event) {
    event.preventDefault();

    fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .then((users) => {
        let validationPass = true;

        validationPass = validateemail.call(this, users);

        if (validationPass == true) {
          validationPass = validatePassword.call(this);
        }
        if (validationPass == true) {
          registerUser.call(this, users);
        }
      });
  }

  function validateemail(users) {
    for (let i = 0; i < users.length; i++) {
      if (this.email.value == users[i].email) {
        alert(`E-Mail ${this.email.value} is already in use.
        Please enter a different username`);
        return false;
      }
    }
    return true;
  }

  function validatePassword() {
    if (this.psw.value !== this.pswRepeat.value) {
      alert("Wprowadzone hasła różnią się.");
      return false;
    }
    return true;
  }

  function registerUser(users) {
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: users.length + 1,
        email: new String(this.email.value),
        password: new String(this.psw.value),
      }),
    });
    alert(`Użytkownik ${this.email.value} został zarejestrowany`);
  }

  section.innerHTML = `
    <h2>Rejestracja</h2>
    <p>By utworzyć konto należy wypełnić poniższy formularz.</p>
    <hr>
    `;

  form.name = "RegForm";
  form.id = "RegForm";
  form.method = "post";

  form.innerHTML = `
    <label for="email"><b>E-Mail: </b></label>
    <input type="text" placeholder="E-Mail" name="email" id="email" required>
    <br>

    <label for="psw"><b>Password: </b></label>
    <input type="password" placeholder="Password" name="psw" id="psw" required>
    <br>

    <label for="psw-repeat"><b>Powtórz Password: </b></label>
    <input type="password" placeholder="Powtórz Password" name="pswRepeat" id="pswRepeat" required>
    <hr>

    <button type="submit" class="btn">Sign Up</button>
    `;

  form.addEventListener("submit", message.bind(form));
  section.append(form);

  return section;
}
