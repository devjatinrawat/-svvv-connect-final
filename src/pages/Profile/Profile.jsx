import React, { useEffect, useState } from "react";
import { auth, db } from "../../components/firebase.js";
import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";


function Profile() {
 
 
    const [userDetails, setUserDetails] = useState(null);
 
 
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);
      const docRef = doc(db, "Users", user.uid);
      console.log(docRef);
      const docSnap = await getDoc(docRef);
      console.log(docSnap);
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
        console.log(docSnap.data());
      } else {
        console.log("User is not logged in");
      }
    });
  };
  useEffect(() => {
    fetchUserData();
  }, []);

//   async function handleLogout() {
//     try {
//         toast('😊🚀 Wow so easy!', {
//             position: "top-center",
//             autoClose: 3000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//             theme: "light",
//             transition: Bounce,
//             });
//       await auth.signOut();
//       window.location.href = "/login";
//       console.log("User logged out successfully!");
//     } catch (error) {
//       console.error("Error logging out:", error.message);
//     }
//   }
  return (
    <div>
      {userDetails ? (
        <>
          <h3>Welcome {userDetails.firstName} 🙏🙏</h3>
          <div>
            <p>Email: {userDetails.email}</p>
            <p>First Name: {userDetails.firstName}</p>
            <p>Last Name: {userDetails.lastName}</p>
          </div>
          <button className="btn btn-primary" onClick={handleLogout}>
            Logout
          </button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
export default Profile;


