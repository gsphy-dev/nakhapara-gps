// Cloud Sync Logic for GPS Attendance
import { collection, addDoc, onSnapshot, query, orderBy, serverTimestamp, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const db = window.firebaseDB;

// লাইভ হাজিরা লোড
export function startAttendanceListener(callback) {
  const q = query(collection(db, "attendance"), orderBy("timestamp", "desc"));
  onSnapshot(q, (snap) => {
    const data = [];
    snap.forEach(d => data.push(d.data()));
    callback(data);
    // লাল Error মেসেজ হাইড করো
    const errEl = document.querySelector('.bg-red-50, .text-red-600');
    if(errEl && errEl.textContent.includes('ক্লাউড লগইন')) errEl.style.display='none';
    console.log("✅ Cloud Login Active");
  });
}

// হাজিরা সেভ
export async function saveAttendanceToCloud(payload) {
  await addDoc(collection(db, "attendance"), {
    ...payload,
    timestamp: serverTimestamp(),
    dateStr: new Date().toISOString().split('T')[0],
    timeStr: new Date().toLocaleString('bn-BD', {timeZone:'Asia/Dhaka'})
  });
}

window.firebaseSyncLoaded = true;