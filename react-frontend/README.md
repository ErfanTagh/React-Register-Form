# User Sign In With React and Java Spring

With React and Java Spring, I developed a user sign in front-end and back-end.

![AddFlashcard-1](SignIn.JPG)

When the user switches between logging in and signing up, the front-end includes an animation.

![AddFlashcard-2](SignUp.JPG)

## Authorization Rest API in Spring

The main java class that handles adding new users and authenticating users is the [UserController class](https://github.com/ErfanTagh/React-Register-Form/blob/master/spring-backend/src/main/java/com/example/demo/UsersController.java). There are two main functions:

```
   @PostMapping("/users")
    Users newUser(@RequestBody Users newUser) {
        return repository.save(newUser);
    }

    // Single item

    @PostMapping("/auchuser")
    EmailResponse check(@RequestBody Users user) {
        Users findedUser = repository.findByEmail(user.getEmail());
        if(findedUser==null){

            return new EmailResponse(0);
        }
         if(repository.findByEmail(user.getEmail()).getPass().equals(user.getPass())){
        return new EmailResponse(1);}

        return new EmailResponse(2);

    }

```

If the user is authenticated, the check function will return 1.
