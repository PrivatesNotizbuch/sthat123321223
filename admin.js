// كلمة السر الافتراضية
const DEFAULT_PWD = 'Dammam2025!';

// helper: جلب كلمة السر المخزنة أو الافتراضية
function getStoredPwd(){
  return localStorage.getItem('adminPwd') || DEFAULT_PWD;
}

function showPanel(){
  document.getElementById('login-box').classList.add('hidden');
  document.getElementById('panel').classList.remove('hidden');
  loadSiteDataToForm();
}

function logout(){
  document.getElementById('panel').classList.add('hidden');
  document.getElementById('login-box').classList.remove('hidden');
}

function loadSiteDataToForm(){
  const data = JSON.parse(localStorage.getItem('siteData') || '{}');
  const d = Object.assign({}, {
    siteTitle: 'سطحه الدمام', heroDesc:'',
    service1Title:'',service1Desc:'',service2Title:'',service2Desc:'',service3Title:'',service3Desc:'',aboutText:'',
    phone1:'',phone2:'',insta:'',tiktok:'',gmap:''
  }, data);
  document.getElementById('siteTitle').value = d.siteTitle;
  document.getElementById('heroDesc').value = d.heroDesc;
  document.getElementById('s1t').value = d.service1Title;
  document.getElementById('s1d').value = d.service1Desc;
  document.getElementById('s2t').value = d.service2Title;
  document.getElementById('s2d').value = d.service2Desc;
  document.getElementById('s3t').value = d.service3Title;
  document.getElementById('s3d').value = d.service3Desc;
  document.getElementById('aboutText').value = d.aboutText;
  document.getElementById('phone1').value = d.phone1;
  document.getElementById('phone2').value = d.phone2;
  document.getElementById('insta').value = d.insta;
  document.getElementById('tiktok').value = d.tiktok;
  document.getElementById('gmap').value = d.gmap;
}

function saveFormToStorage(){
  const obj = {
    siteTitle: document.getElementById('siteTitle').value,
    heroDesc: document.getElementById('heroDesc').value,
    service1Title: document.getElementById('s1t').value,
    service1Desc: document.getElementById('s1d').value,
    service2Title: document.getElementById('s2t').value,
    service2Desc: document.getElementById('s2d').value,
    service3Title: document.getElementById('s3t').value,
    service3Desc: document.getElementById('s3d').value,
    aboutText: document.getElementById('aboutText').value,
    phone1: document.getElementById('phone1').value,
    phone2: document.getElementById('phone2').value,
    insta: document.getElementById('insta').value,
    tiktok: document.getElementById('tiktok').value,
    gmap: document.getElementById('gmap').value
  };
  localStorage.setItem('siteData', JSON.stringify(obj));
  alert('تم حفظ التعديلات. اذهب لصفحة الزبائن واضغط تحديث لعرض التغييرات.');
}

// أحداث
document.getElementById('loginBtn').addEventListener('click', ()=>{
  const val = document.getElementById('pwd').value;
  if(val === getStoredPwd()){
    showPanel();
  } else alert('كلمة السر غير صحيحة');
});

document.getElementById('logoutBtn').addEventListener('click', ()=>{
  logout();
});

document.getElementById('saveBtn').addEventListener('click', saveFormToStorage);

// تغيير كلمة السر
document.getElementById('changePwdBtn').addEventListener('click', ()=>{
  const cur = document.getElementById('curPwd').value;
  const neu = document.getElementById('newPwd').value;
  if(cur !== getStoredPwd()) return alert('كلمة السر الحالية غير صحيحة');
  if(!neu || neu.length < 6) return alert('اختر كلمة سر جديدة (6 حروف على الأقل)');
  localStorage.setItem('adminPwd', neu);
  alert('تم تغيير كلمة السر بنجاح');
  document.getElementById('curPwd').value='';
  document.getElementById('newPwd').value='';
});
