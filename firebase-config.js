// firebase-config_2.js (교회학교 행정 / 반별 보고서용)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Tri-A 마스터 프로젝트 키로 교체 완료
const firebaseConfig = {
  apiKey: "AIzaSyACywSL8W3g9FOAWUiw3dInsVktya30Mxs",
  authDomain: "tri-a-master.firebaseapp.com",
  projectId: "tri-a-master",
  storageBucket: "tri-a-master.firebasestorage.app",
  messagingSenderId: "317482832345",
  appId: "1:317482832345:web:56a3fbeea85e94eaf449c8",
  measurementId: "G-L9EWG4CZ2T"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, serverTimestamp };