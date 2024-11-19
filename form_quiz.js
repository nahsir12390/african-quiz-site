document.getElementById("signUpForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const username = document.getElementById("signUpUsername").value;
    const password = document.getElementById("signUpPassword").value;
    
  
    // Simple validation check
    if (username.length < 4 || password.length < 6) {
      alert("Username must be at least 4 characters and password at least 6 characters.");
      return;
    }
  
    // Check if username already exists
    if (localStorage.getItem(username)) {
      alert("Username already taken. Please choose a different one.");
      return;
    }
  
    // Store user data in localStorage
    localStorage.setItem(username, JSON.stringify({ password }));
    alert("Sign up successful! You can now sign in.");
  

    document.getElementById("signUpForm").style.display = "none";
    signInButton.style.display="none"

    // Optionally, show the sign-in form or other content
    document.getElementById("signInForm").style.display = "block";
    signUpButton.style.display="block"
    // Clear the form
    document.getElementById("signUpForm").reset();
  });
  

  const signInButton = document.getElementById("signInButton")
  const signUpButton = document.getElementById("signUpButton")


  signUpButton.style.display="none"
  signInButton.addEventListener("click", event=>{
   
   if(signUpButton.style.display==="none"){
       document.getElementById("signUpForm").style.display="none"
signUpButton.style.display="block"
document.getElementById("signInForm").style.display="block"
signInButton.style.display="none"
   }


    })
    signUpButton.addEventListener("click", (event)=>{
        
        if(signInButton.style.display==="none"){
            signInButton.style.display="block"
            signUpButton.style.display="none"

               }
               if(document.getElementById("signInForm").style.display==="block"){
                document.getElementById("signUpForm").style.display="block"
                document.getElementById("signInForm").style.display="none"
               }
    })



  // Sign In Form
  document.getElementById("signInForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const username = document.getElementById("signInUsername").value;
    const password = document.getElementById("signInPassword").value;
  
    // Retrieve user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem(username));
  
    // Validate user credentials
    if (storedUser && storedUser.password === password) {
      alert("Sign in successful! Welcome back.");
    } else {
      alert("Invalid username or password. Please try again.");
    }
    window.location.href="quiz_page.html"
  
    // Clear the form
    document.getElementById("signInForm").reset();
  });