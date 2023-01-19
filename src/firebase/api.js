import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signOut
  } from "firebase/auth";
  
  import { auth } from "./config";
  
  export const onSignUp = async ({ name, email, password }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      return user;
    } catch(error) {
      // const errorMessage = error.message;
      return null;
    }
  }
  
  export const onSignIn = async ({ email, password }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      const user = userCredential.user;
      return user;
    } catch(error) {
      // const errorCode = error.code;
      const errorMessage = error.message;
      console.log("errorMessage ==> ", errorMessage)
    }
  }
  
  export const handleSignOut = async () => {
    try {
      await signOut(auth)
    } catch(error) {
      // const errorCode = error.code;
      const errorMessage = error.message;
      console.log("errorMessage ==> ", errorMessage)
    }
  }