import { firebaseAuth, googleProvider } from "./firebase";

class AuthService {
  logIn() {
    const provider = googleProvider;
    return firebaseAuth.signInWithPopup(provider);
  }
  logOut() {
    return firebaseAuth.signOut();
  }
}

export default AuthService;
