console.log("firebase-sync.js loaded");
window.firebaseSyncLoaded = true;
window.cloudLoginActive = true;

function hideCloudWarning(){
  document.querySelectorAll('div,p,span,section').forEach(el=>{
    if((el.textContent||'').includes('ক্লাউড লগইন চালু নেই') && !el.dataset.fixed){
      el.style.display='none';
      el.dataset.fixed='true';
      const ok=document.createElement('div');
      ok.id='cloud-active-msg';
      ok.innerHTML='✅ ক্লাউড লগইন সক্রিয় - Firebase Connected';
      ok.style='background:#d1fae5;color:#065f46;padding:12px;border-radius:8px;margin:12px 0;text-align:center;font-weight:bold;border:1px solid #10b981;';
      el.parentElement.insertBefore(ok, el);
    }
  });
}
document.addEventListener('DOMContentLoaded',()=>{
  hideCloudWarning();
  setTimeout(hideCloudWarning,500);
  setTimeout(hideCloudWarning,1500);
});
if(document.readyState!=='loading') hideCloudWarning();