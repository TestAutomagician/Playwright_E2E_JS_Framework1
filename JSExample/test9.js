class LoginPage {


    constructor() {
        // this.usernameInput = document.getElementById('username');

        // this.passwordInput = document.getElementById('password');

        // this.loginButton = document.getElementById('loginButton');
        console.log('LoginPage initialized');
        this.username = "Pardeep";
    }

    login(username, password) {
        // this.usernameInput.value = username;
        // this.passwordInput.value = password;
        // this.loginButton.click();

        // Simulate login success
        console.log(`Logged in as ${username}`);
    }
    demo() {
        console.log("Demo function");
    }

}
module.exports = { LoginPage };

// Example usage:
// const loginPage = new LoginPage();
// loginPage.login('myUsername', 'myPassword');