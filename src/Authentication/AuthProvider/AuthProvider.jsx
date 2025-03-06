import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { Children, createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";


//  Start :


export const AuthContext = createContext();

const GoogleProvider = new GoogleAuthProvider()

const FacebookProvider = new FacebookAuthProvider();


// Main :
const AuthProvider = ({ children }) => {

//   User , Loading States ;
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

 
  //    Sign Up / New user

  const SignUp = (email, passsword) => {

    
    setLoading(true);

    return createUserWithEmailAndPassword(auth, email, passsword);
 
};


  
// LogIN / For existing user
 const LogIn = (email,password)=>{

    setLoading(true);

    return signInWithEmailAndPassword(auth,email,password);
 }



//   google login
const GoogleLogIn = ()=>{
   
    setLoading(true);

    return signInWithPopup(auth, GoogleProvider);
}


// Facebook LogIn 

const FaceBookLogIn = ()=> {

    setLoading(true);

    return  signInWithPopup(auth , FacebookProvider);
}

//  logOut

const LogOut = ()=>{

  setLoading(true);

  return signOut(auth) ;

}
   


//  OnAuth State Changed

useEffect(()=> {

    const unSubsCribe = onAuthStateChanged( auth , (currentUser)=>{

        if(currentUser){
            setUser(currentUser)
        }
        else{
            setUser(null)
        }

        setLoading(false)
    });

    return()=>{
        unSubsCribe();
    }


} , [])







//   Auth Values
  const authValues = {
    setUser,
    user,
    setLoading,
    SignUp,
    LogIn,
   GoogleLogIn,
   FaceBookLogIn,
    LogOut
  };

  return (
    <div>
      <AuthContext.Provider value={authValues}>
        
        
        
        {children}
        
        
        
        </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
