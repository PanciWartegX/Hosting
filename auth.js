import { auth, db } from "./firebase.js";
import { signInWithEmailAndPassword } from
  "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";
import { doc, getDoc } from
  "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";

window.login = async () => {
  try {
    const res = await signInWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );

    const snap = await getDoc(doc(db, "users", res.user.uid));
    const role = snap.data().role;

    location.href = role === "admin" ? "admin.html" : "member.html";
  } catch (e) {
    msg.innerText = "Login gagal";
  }
};
