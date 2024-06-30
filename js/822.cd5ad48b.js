"use strict";(self["webpackChunkrealestate"]=self["webpackChunkrealestate"]||[]).push([[822],{7822:function(e,a,l){l.r(a),l.d(a,{default:function(){return dl}});l(4114);var t=l(6768),i=l(144),d=l(1387),s=l(4232),n=l(4474),o=l(5792),c=l(4976);const p={class:"header-page min-h-[100px] w-full border"},r=(0,t.Lk)("div",{class:"flex gap-2 mb-2 px-3 py-6 border border-e-2"},[(0,t.Lk)("img",{src:n,alt:"user-edit"}),(0,t.Lk)("span",null,"نوع الملف شخصي")],-1),u={class:"group-btns flex justify-center items-center gap-4 my-4"},f=["onClick"],b={class:"text-sm"},v={key:0,src:o,alt:"developer-icon"},m={key:1,src:c,alt:"developer-icon"};var g={__name:"HeaderPage",emits:["handleClick"],setup(e,{emit:a}){const l=a,d=(0,i.KR)([{id:1,buttonText:"مطور عقاري",isShowIcon:!0},{id:2,buttonText:"مزود خدمه",isShowIcon:!1},{id:3,buttonText:"موظف",isShowIcon:!1}]),n=e=>{d.value.forEach((e=>{e.isShowIcon=!1})),e.isShowIcon=!0,l("handleClick",e)};return(e,a)=>((0,t.uX)(),(0,t.CE)("section",p,[r,(0,t.Lk)("div",u,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(d.value,(e=>((0,t.uX)(),(0,t.CE)("button",{key:e.id,onClick:a=>n(e),class:(0,s.C4)({"flex justify-center items-center gap-2 border-[#3C757D] border-2 rounded-md shadow-md p-2":!0,"bg-[#3C757D] text-white":e.isShowIcon})},[(0,t.Lk)("span",b,(0,s.v_)(e.buttonText),1),e.isShowIcon?((0,t.uX)(),(0,t.CE)("img",v)):((0,t.uX)(),(0,t.CE)("img",m))],10,f)))),128))])]))}};const w=g;var k=w;const y={class:"client-inputs grid grid-cols-2 gap-4 p-4 mx-auto mt-4 border-b-[2px]"},L=(0,t.Fv)('<div class="grid md:grid-cols-2 grid-cols-1 items-center"><label class="text-sm" for=""> نوع الباقة</label><select class="select-field w-full"><option>ذهبية</option><option>asd1</option><option>asd1</option></select></div><div class="grid grid-cols-2 items-center"><label class="text-sm" for=""> عدد المستخدمين</label><select class="select-field w-full"><option>100</option><option>asd1</option><option>asd1</option></select></div><div class="grid grid-cols-2 items-center"><label class="text-sm" for=""> عدد الوحدات</label><select class="select-field w-full"><option>1000</option><option>asd1</option><option>asd1</option></select></div><div class="grid grid-cols-2 items-center"><label class="text-sm"> اجراءات العميل المحتمل</label><select class="select-field w-full"><option>ثانوي</option><option>asd1</option><option>asd1</option></select></div><div class="grid grid-cols-2 items-center"><label class="text-sm"> الهيكل التنظيمي</label><select class="select-field w-full"><option>اول</option><option>asd1</option><option>asd1</option></select></div><div class="grid grid-cols-2 items-center"><label class="text-sm"> اجراءات عمليات البيع</label><select class="select-field w-full"><option>كاش</option><option>asd1</option><option>asd1</option></select></div>',6),A=[L];function x(e,a){return(0,t.uX)(),(0,t.CE)("div",y,A)}var F=l(1241);const h={},C=(0,F.A)(h,[["render",x]]);var N=C;const I=e=>((0,t.Qi)("data-v-93e75344"),e=e(),(0,t.jt)(),e),V={class:"w-[80%] mx-auto space-y-2"},E={class:"mt-6 w-[80%] mx-auto flex items-center justify-between"},J=I((()=>(0,t.Lk)("div",{class:"grid grid-cols-4 text-center align-top items-start justify-between w-[90%] text-xs"},[(0,t.Lk)("span",null,"البيانات الشركه"),(0,t.Lk)("span",null," العنوان الوطني"),(0,t.Lk)("span",null," معلومات التواصل"),(0,t.Lk)("span",null," اضافة مدير حساب")],-1)));var j={__name:"StepsSection",props:{setps:Object,currentStep:Number},emits:["nextSetps","prevSetps"],setup(e,{emit:a}){const l=e;return(a,i)=>((0,t.uX)(),(0,t.CE)("div",V,[(0,t.Lk)("div",E,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(l.setps,((a,i)=>((0,t.uX)(),(0,t.CE)("div",{key:i,class:"flex items-center w-full"},[(0,t.Lk)("div",{class:(0,s.C4)({circle:!0,"active-circle":0===i})},(0,s.v_)(a),3),i!==l.setps.length-1?((0,t.uX)(),(0,t.CE)("div",{key:0,class:(0,s.C4)(["setp-bar",{"active-bar":i<e.currentStep}])},null,2)):(0,t.Q3)("",!0)])))),128))]),J]))}};const U=(0,F.A)(j,[["__scopeId","data-v-93e75344"]]);var S=U,X=l(5130),B=l(1527),D=l(5221);const R=e=>((0,t.Qi)("data-v-05b75a9e"),e=e(),(0,t.jt)(),e),K={class:"Personal-data mt-10 grid md:grid-cols-2 md:gap-6 gap-4 grid-cols-1 items-center"},Q={class:"input-wrapper w-[80%]"},M=R((()=>(0,t.Lk)("label",{for:"inputField",class:"label"},"اسم الشركة ",-1))),H={class:"input-wrapper w-[80%]"},T=R((()=>(0,t.Lk)("label",{for:"inputField",class:"label"},"اسم الشركة ",-1))),O={class:"input-wrapper w-[80%]"},P=R((()=>(0,t.Lk)("label",{for:"inputField",class:"label"}," رقم السجل التجاري ",-1))),W={class:"input-wrapper w-[80%]"},Y=R((()=>(0,t.Lk)("label",{for:"inputField",class:"label"}," تاريخ الاصدار ",-1))),_={class:"input-wrapper w-[80%]"},Z=R((()=>(0,t.Lk)("label",{for:"inputField",class:"label"}," تاريخ الانتهاء ",-1))),G={class:"input-wrapper w-[80%]"},z=R((()=>(0,t.Lk)("label",{for:"inputField",class:"label"}," رقم 700",-1))),q={class:"input-wrapper w-[80%]"},$=R((()=>(0,t.Lk)("label",{for:"inputField",class:"label"}," تاريخ الاصدار ",-1))),ee={class:"input-wrapper w-[80%]"},ae=R((()=>(0,t.Lk)("label",{for:"inputField",class:"label"}," مكان الاصدار ",-1))),le={class:"input-wrapper w-[80%]"},te=R((()=>(0,t.Lk)("label",{for:"inputField",class:"label"}," رقم عقد التاسيس ",-1))),ie={class:"input-wrapper w-[80%]"},de=R((()=>(0,t.Lk)("label",{for:"inputField",class:"label"}," رقم ضريبي ",-1))),se=R((()=>(0,t.Lk)("label",{for:"companyIamges",class:"col-span-2 flex items-center justify-center gap-3 border-dashed border-1 p-4 border-[#8A8A8A] rounded-md h-20 cursor-pointer"},[(0,t.Lk)("input",{type:"file",class:"hidden",id:"companyIamges"}),(0,t.Lk)("img",{src:B,alt:"document-cloud",class:"w-auto h-8"}),(0,t.Lk)("span",null,"ارفق الصور الخاصة بالشركة ")],-1))),ne=(0,t.Fv)('<div class="gropu-files my-10 text-sm grid grid-cols-5 md:gap-6 gap-4 justify-between items-center" data-v-05b75a9e><label for="file" class="grid bg-gray-100 gap-2 cursor-pointer justify-center items-center p-2 border-dashed border-1 rounded-md border-[#8A8A8A]" data-v-05b75a9e><input type="file" id="file" class="hidden" data-v-05b75a9e><img src="'+D+'" alt="document-cloud" class="justify-self-center" data-v-05b75a9e><span class="text-center" data-v-05b75a9e> اضف السجل التجاري</span></label><label for="file" class="grid bg-gray-100 gap-2 cursor-pointer justify-center items-center p-2 border-dashed border-1 rounded-md border-[#8A8A8A]" data-v-05b75a9e><input type="file" id="file" class="hidden" data-v-05b75a9e><img src="'+D+'" alt="document-cloud" class="justify-self-center" data-v-05b75a9e><span class="text-center" data-v-05b75a9e> اضف عقد التاسيس</span></label><label for="file" class="grid bg-gray-100 gap-2 cursor-pointer justify-center items-center p-2 border-dashed border-1 rounded-md border-[#8A8A8A]" data-v-05b75a9e><input type="file" id="file" class="hidden" data-v-05b75a9e><img src="'+D+'" alt="document-cloud" class="justify-self-center" data-v-05b75a9e><span class="text-center" data-v-05b75a9e> اضف شهادة الغرفه التجارية</span></label><label for="file" class="grid bg-gray-100 gap-2 cursor-pointer justify-center items-center p-2 border-dashed border-1 rounded-md border-[#8A8A8A]" data-v-05b75a9e><input type="file" id="file" class="hidden" data-v-05b75a9e><img src="'+D+'" alt="document-cloud" class="justify-self-center" data-v-05b75a9e><span class="text-center" data-v-05b75a9e>اضف العنوان الوطني </span></label><label for="file" class="grid bg-gray-100 gap-2 cursor-pointer justify-center items-center p-2 border-dashed border-1 rounded-md border-[#8A8A8A]" data-v-05b75a9e><input type="file" id="file" class="hidden" data-v-05b75a9e><img src="'+D+'" alt="document-cloud" class="justify-self-center" data-v-05b75a9e><span class="text-center" data-v-05b75a9e> اضف رقم ضريبي</span></label></div>',1);var oe={__name:"CompanyData",setup(e){const a=(0,i.KR)({companyNameArabic:"رفال",companyNameEnglish:"RAFAL",CommercialRegistrationNo:"54354",fullNameArabic:"احمد محمد فريد",releaseDate:"2023/ 01 /04",endDate:"2023/ 01 /04",number:"3456",place:"منصة المركز السعودي",EstablishmentNumber:"254325",taxNumber:"32-32423"});return(e,l)=>((0,t.uX)(),(0,t.CE)(t.FK,null,[(0,t.Lk)("div",K,[(0,t.Lk)("div",Q,[M,(0,t.bo)((0,t.Lk)("input",{type:"text",id:"inputField",class:"input-field bg-gray-100","onUpdate:modelValue":l[0]||(l[0]=e=>a.value.companyNameArabic=e)},null,512),[[X.Jo,a.value.companyNameArabic]])]),(0,t.Lk)("div",H,[T,(0,t.bo)((0,t.Lk)("input",{type:"text",id:"inputField",class:"input-field bg-gray-100","onUpdate:modelValue":l[1]||(l[1]=e=>a.value.companyNameEnglish=e)},null,512),[[X.Jo,a.value.companyNameEnglish]])]),(0,t.Lk)("div",O,[P,(0,t.bo)((0,t.Lk)("input",{type:"text",id:"inputField",class:"input-field bg-gray-100","onUpdate:modelValue":l[2]||(l[2]=e=>a.value.CommercialRegistrationNo=e)},null,512),[[X.Jo,a.value.CommercialRegistrationNo]])]),(0,t.Lk)("div",W,[Y,(0,t.bo)((0,t.Lk)("input",{type:"text",id:"inputField",class:"input-field","onUpdate:modelValue":l[3]||(l[3]=e=>a.value.releaseDate=e)},null,512),[[X.Jo,a.value.releaseDate]])]),(0,t.Lk)("div",_,[Z,(0,t.bo)((0,t.Lk)("input",{type:"text",id:"inputField",class:"input-field","onUpdate:modelValue":l[4]||(l[4]=e=>a.value.endDate=e)},null,512),[[X.Jo,a.value.endDate]])]),(0,t.Lk)("div",G,[z,(0,t.bo)((0,t.Lk)("input",{type:"text",id:"inputField",class:"input-field","onUpdate:modelValue":l[5]||(l[5]=e=>a.value.number=e)},null,512),[[X.Jo,a.value.number]])]),(0,t.Lk)("div",q,[$,(0,t.bo)((0,t.Lk)("input",{type:"text",id:"inputField",class:"input-field","onUpdate:modelValue":l[6]||(l[6]=e=>a.value.releaseDate=e)},null,512),[[X.Jo,a.value.releaseDate]])]),(0,t.Lk)("div",ee,[ae,(0,t.bo)((0,t.Lk)("input",{type:"text",id:"inputField",class:"input-field","onUpdate:modelValue":l[7]||(l[7]=e=>a.value.place=e)},null,512),[[X.Jo,a.value.place]])]),(0,t.Lk)("div",le,[te,(0,t.bo)((0,t.Lk)("input",{type:"text",id:"inputField",class:"input-field","onUpdate:modelValue":l[8]||(l[8]=e=>a.value.EstablishmentNumber=e)},null,512),[[X.Jo,a.value.EstablishmentNumber]])]),(0,t.Lk)("div",ie,[de,(0,t.bo)((0,t.Lk)("input",{type:"text",id:"inputField",class:"input-field","onUpdate:modelValue":l[9]||(l[9]=e=>a.value.taxNumber=e)},null,512),[[X.Jo,a.value.taxNumber]])]),se]),ne],64))}};const ce=(0,F.A)(oe,[["__scopeId","data-v-05b75a9e"]]);var pe=ce;const re=e=>((0,t.Qi)("data-v-e9ae92ba"),e=e(),(0,t.jt)(),e),ue={class:"national-address mt-10 grid md:grid-cols-2 gap-6 grid-cols-1 items-center"},fe={class:"input-wrapper w-[80%]"},be=re((()=>(0,t.Lk)("label",{for:"inputField",class:"label"}," العنوان المختصر ",-1))),ve=re((()=>(0,t.Lk)("div",{class:"input-wrapper w-[80%]"},[(0,t.Lk)("label",{for:"inputField",class:"label"}," البلد "),(0,t.Lk)("select",{class:"select-field w-full"},[(0,t.Lk)("option",null,"المملكة العربية السعودية"),(0,t.Lk)("option",null,"asd1"),(0,t.Lk)("option",null,"asd1")])],-1))),me={class:"input-wrapper w-[80%]"},ge=re((()=>(0,t.Lk)("label",{for:"inputField",class:"label"}," المدينة ",-1))),we={class:"input-wrapper w-[80%]"},ke=re((()=>(0,t.Lk)("label",{for:"inputField",class:"label"}," الحي ",-1))),ye={class:"input-wrapper w-[80%]"},Le=re((()=>(0,t.Lk)("label",{for:"inputField",class:"label"}," الشارع",-1))),Ae={class:"input-wrapper w-[80%]"},xe=re((()=>(0,t.Lk)("label",{for:"inputField",class:"label"},"الرمز البريدي",-1))),Fe={class:"input-wrapper w-[80%]"},he=re((()=>(0,t.Lk)("label",{for:"inputField",class:"label"}," رقم المبني",-1))),Ce={class:"input-wrapper w-[80%]"},Ne=re((()=>(0,t.Lk)("label",{for:"inputField",class:"label"}," الرقم الفرعي",-1))),Ie=re((()=>(0,t.Lk)("label",{for:"file",class:"w-32 h-32 mx-auto grid bg-gray-50 gap-2 cursor-pointer justify-center items-center p-2 border-dashed border-1 rounded-md border-[#8A8A8A]"},[(0,t.Lk)("input",{type:"file",id:"file",class:"hidden"}),(0,t.Lk)("img",{src:D,alt:"document-cloud",class:"justify-self-center"}),(0,t.Lk)("span",{class:"text-center"}," اضف العنوان الوطني")],-1)));var Ve={__name:"NationalAddress",setup(e){const a=(0,i.KR)({shortTitle:"56849643",city:"الرياض",District:"الربيع",street:"الامير بدر",postalCode:"00000",buildingNumber:"65",Subnumber:"32"});return(e,l)=>((0,t.uX)(),(0,t.CE)(t.FK,null,[(0,t.Lk)("div",ue,[(0,t.Lk)("div",fe,[be,(0,t.bo)((0,t.Lk)("input",{type:"text",id:"inputField",class:"input-field","onUpdate:modelValue":l[0]||(l[0]=e=>a.value.shortTitle=e)},null,512),[[X.Jo,a.value.shortTitle]])]),ve,(0,t.Lk)("div",me,[ge,(0,t.bo)((0,t.Lk)("input",{type:"text",id:"inputField",class:"input-field","onUpdate:modelValue":l[1]||(l[1]=e=>a.value.city=e)},null,512),[[X.Jo,a.value.city]])]),(0,t.Lk)("div",we,[ke,(0,t.bo)((0,t.Lk)("input",{type:"text",id:"inputField",class:"input-field","onUpdate:modelValue":l[2]||(l[2]=e=>a.value.District=e)},null,512),[[X.Jo,a.value.District]])]),(0,t.Lk)("div",ye,[Le,(0,t.bo)((0,t.Lk)("input",{type:"text",id:"inputField",class:"input-field","onUpdate:modelValue":l[3]||(l[3]=e=>a.value.street=e)},null,512),[[X.Jo,a.value.street]])]),(0,t.Lk)("div",Ae,[xe,(0,t.bo)((0,t.Lk)("input",{type:"text",id:"inputField",class:"input-field","onUpdate:modelValue":l[4]||(l[4]=e=>a.value.postalCode=e)},null,512),[[X.Jo,a.value.postalCode]])]),(0,t.Lk)("div",Fe,[he,(0,t.bo)((0,t.Lk)("input",{type:"text",id:"inputField",class:"input-field","onUpdate:modelValue":l[5]||(l[5]=e=>a.value.buildingNumber=e)},null,512),[[X.Jo,a.value.buildingNumber]])]),(0,t.Lk)("div",Ce,[Ne,(0,t.bo)((0,t.Lk)("input",{type:"text",id:"inputField",class:"input-field","onUpdate:modelValue":l[6]||(l[6]=e=>a.value.Subnumber=e)},null,512),[[X.Jo,a.value.Subnumber]])])]),Ie],64))}};const Ee=(0,F.A)(Ve,[["__scopeId","data-v-e9ae92ba"]]);var Je=Ee;const je={class:"contact-information mt-10 grid md:grid-cols-2 gap-6 grid-cols-1 items-center"},Ue={class:"input-wrapper w-[80%]"},Se=(0,t.Lk)("label",{for:"inputField",class:"label"}," الموقع الالكتروني",-1),Xe={class:"input-wrapper w-[80%]"},Be=(0,t.Lk)("label",{for:"inputField",class:"label"}," البريد الإلكتروني : ",-1),De={class:"input-wrapper w-[80%]"},Re=(0,t.Lk)("label",{for:"inputField",class:"label"}," الرقم الموحد",-1),Ke={class:"input-wrapper w-[80%]"},Qe=(0,t.Lk)("label",{for:"inputField",class:"label"}," LinkedIn",-1),Me={class:"input-wrapper w-[80%]"},He=(0,t.Lk)("label",{for:"inputField",class:"label"}," Instagram",-1),Te={class:"input-wrapper w-[80%]"},Oe=(0,t.Lk)("label",{for:"inputField",class:"label"}," Twitter",-1);var Pe={__name:"ContactInformation",setup(e){const a=(0,i.KR)({website:"Www.example.com",email:"email@example.com",unifiedNumber:"+96651  234  5678"});return(e,l)=>((0,t.uX)(),(0,t.CE)("div",je,[(0,t.Lk)("div",Ue,[Se,(0,t.bo)((0,t.Lk)("input",{type:"text",id:"inputField",class:"input-field bg-gray-100","onUpdate:modelValue":l[0]||(l[0]=e=>a.value.website=e)},null,512),[[X.Jo,a.value.website]])]),(0,t.Lk)("div",Xe,[Be,(0,t.bo)((0,t.Lk)("input",{type:"text",id:"inputField",class:"input-field bg-gray-100","onUpdate:modelValue":l[1]||(l[1]=e=>a.value.email=e)},null,512),[[X.Jo,a.value.email]])]),(0,t.Lk)("div",De,[Re,(0,t.bo)((0,t.Lk)("input",{type:"text",id:"inputField",class:"input-field bg-gray-100","onUpdate:modelValue":l[2]||(l[2]=e=>a.value.unifiedNumber=e)},null,512),[[X.Jo,a.value.unifiedNumber]])]),(0,t.Lk)("div",Ke,[Qe,(0,t.bo)((0,t.Lk)("input",{type:"text",id:"inputField",class:"input-field bg-gray-100","onUpdate:modelValue":l[3]||(l[3]=e=>a.value.website=e)},null,512),[[X.Jo,a.value.website]])]),(0,t.Lk)("div",Me,[He,(0,t.bo)((0,t.Lk)("input",{type:"text",id:"inputField",class:"input-field bg-gray-100","onUpdate:modelValue":l[4]||(l[4]=e=>a.value.website=e)},null,512),[[X.Jo,a.value.website]])]),(0,t.Lk)("div",Te,[Oe,(0,t.bo)((0,t.Lk)("input",{type:"text",id:"inputField",class:"input-field bg-gray-100","onUpdate:modelValue":l[5]||(l[5]=e=>a.value.website=e)},null,512),[[X.Jo,a.value.website]])])]))}};const We=Pe;var Ye=We;const _e=e=>((0,t.Qi)("data-v-6cff815d"),e=e(),(0,t.jt)(),e),Ze={class:"manager-data mt-10"},Ge={class:"sub-titles bg-gray-200 col-span-2 flex justify-between min-h-10 rounded-md"},ze=["onClick"],qe={key:0},$e={class:"Personal-data mt-10 grid md:grid-cols-2 md:gap-6 gap-4 grid-cols-1 content-start min-h-[600px]"},ea={class:"input-wrapper w-[80%]"},aa=_e((()=>(0,t.Lk)("label",{for:"inputField",class:"label"},"اسم الشركة ",-1))),la={class:"input-wrapper w-[80%]"},ta=_e((()=>(0,t.Lk)("label",{for:"inputField",class:"label"}," معرف المستخدم ",-1))),ia={class:"input-wrapper w-[80%]"},da=_e((()=>(0,t.Lk)("label",{for:"inputField",class:"label"}," الاسم بالكامل ",-1))),sa={class:"input-wrapper w-[80%]"},na=_e((()=>(0,t.Lk)("label",{for:"inputField",class:"label"}," الاسم بالكامل ",-1))),oa={class:"input-wrapper w-[80%]"},ca=_e((()=>(0,t.Lk)("label",{for:"inputField",class:"label"}," البريد الإلكتروني : ",-1))),pa={class:"input-wrapper w-[80%]"},ra=_e((()=>(0,t.Lk)("label",{for:"inputField",class:"label"}," رقم الجوال ",-1))),ua=(0,t.Fv)('<div class="gropu-files my-10 text-sm grid grid-cols-6 gap-3 justify-between w-full" data-v-6cff815d><label for="file" class="grid bg-gray-100 gap-2 cursor-pointer justify-center items-center p-2 border-dashed border-1 rounded-md border-[#8A8A8A]" data-v-6cff815d><input type="file" id="file" class="hidden" data-v-6cff815d><img src="'+D+'" alt="document-cloud" class="justify-self-center" data-v-6cff815d><span class="text-center" data-v-6cff815d>اضف الهوية الوطنية</span></label><label for="file" class="grid bg-gray-100 gap-2 cursor-pointer justify-center items-center p-2 border-dashed border-1 rounded-md border-[#8A8A8A]" data-v-6cff815d><input type="file" id="file" class="hidden" data-v-6cff815d><img src="'+D+'" alt="document-cloud" class="justify-self-center" data-v-6cff815d><span class="text-center" data-v-6cff815d> اضف العنوان الوطني</span></label><label for="file" class="grid bg-gray-100 gap-2 cursor-pointer justify-center items-center p-2 border-dashed border-1 rounded-md border-[#8A8A8A]" data-v-6cff815d><input type="file" id="file" class="hidden" data-v-6cff815d><img src="'+D+'" alt="document-cloud" class="justify-self-center" data-v-6cff815d><span class="text-center" data-v-6cff815d> اضف العقد</span></label><label for="file" class="grid bg-gray-100 gap-2 cursor-pointer justify-center items-center p-2 border-dashed border-1 rounded-md border-[#8A8A8A]" data-v-6cff815d><input type="file" id="file" class="hidden" data-v-6cff815d><img src="'+D+'" alt="document-cloud" class="justify-self-center" data-v-6cff815d><span class="text-center" data-v-6cff815d> اضف شهادة الآيبان</span></label><label for="file" class="grid bg-gray-100 gap-2 cursor-pointer justify-center items-center p-2 border-dashed border-1 rounded-md border-[#8A8A8A]" data-v-6cff815d><input type="file" id="file" class="hidden" data-v-6cff815d><img src="'+D+'" alt="document-cloud" class="justify-self-center" data-v-6cff815d><span class="text-center" data-v-6cff815d>اضف الوكالة الشرعية </span></label><label for="file" class="grid bg-gray-100 gap-2 cursor-pointer justify-center items-center p-2 border-dashed border-1 rounded-md border-[#8A8A8A]" data-v-6cff815d><input type="file" id="file" class="hidden" data-v-6cff815d><img src="'+D+'" alt="document-cloud" class="justify-self-center" data-v-6cff815d><span class="text-center" data-v-6cff815d> اضف تفويض مدير المبيعات </span></label></div>',1),fa={key:1},ba={class:"Personal-data mt-10 grid md:grid-cols-2 gap-6 grid-cols-1 items-center"},va={class:"input-wrapper w-[80%]"},ma=_e((()=>(0,t.Lk)("label",{for:"inputField",class:"label"}," رقم الهوية ",-1))),ga={class:"input-wrapper w-[80%]"},wa=_e((()=>(0,t.Lk)("label",{for:"inputField",class:"label"}," تاريخ الميلاد (ميلادي) ",-1))),ka=(0,t.Fv)('<div class="input-wrapper w-[80%]" data-v-6cff815d><label for="inputField" class="label" data-v-6cff815d> الجنسية </label><select class="select-field w-full" data-v-6cff815d><option data-v-6cff815d>سعودي</option><option data-v-6cff815d>asd1</option><option data-v-6cff815d>asd1</option></select></div><div class="input-wrapper w-[80%]" data-v-6cff815d><label for="inputField" class="label" data-v-6cff815d> الحالة الاجتماعية </label><select class="select-field w-full" data-v-6cff815d><option data-v-6cff815d>اعزب</option><option data-v-6cff815d>asd1</option><option data-v-6cff815d>asd1</option></select></div><div class="input-wrapper w-[80%]" data-v-6cff815d><label for="inputField" class="label" data-v-6cff815d> الجنس</label><select class="select-field w-full" data-v-6cff815d><option data-v-6cff815d>ذكر</option><option data-v-6cff815d>asd1</option><option data-v-6cff815d>asd1</option></select></div>',3),ya={class:"input-wrapper w-[80%]"},La=_e((()=>(0,t.Lk)("label",{for:"inputField",class:"label"}," رقم الايبان (IBAN) ",-1))),Aa={key:2},xa=(0,t.Fv)('<div class="language-data mt-10 grid md:grid-cols-2 gap-6 grid-cols-1 items-center" data-v-6cff815d><div class="input-wrapper w-[80%]" data-v-6cff815d><label for="inputField" class="label" data-v-6cff815d> البلد</label><select class="select-field w-full" data-v-6cff815d><option data-v-6cff815d>المملكة العربية السعودية</option><option data-v-6cff815d>asd1</option><option data-v-6cff815d>asd1</option></select></div><div class="input-wrapper w-[80%]" data-v-6cff815d><label for="inputField" class="label" data-v-6cff815d> اللغة </label><select class="select-field w-full" data-v-6cff815d><option data-v-6cff815d>اللغة العربية</option><option data-v-6cff815d>asd1</option><option data-v-6cff815d>asd1</option></select></div><div class="input-wrapper w-[80%]" data-v-6cff815d><label for="inputField" class="label" data-v-6cff815d> صيغة الوقت</label><select class="select-field w-full" data-v-6cff815d><option data-v-6cff815d>12 ساعة</option><option data-v-6cff815d>asd1</option><option data-v-6cff815d>asd1</option></select></div><div class="input-wrapper w-[80%]" data-v-6cff815d><label for="inputField" class="label" data-v-6cff815d> صيغة التاريخ</label><select class="select-field w-full" data-v-6cff815d><option data-v-6cff815d>يوم /شهر / سنة</option><option data-v-6cff815d>asd1</option><option data-v-6cff815d>asd1</option></select></div><div class="input-wrapper w-[80%]" data-v-6cff815d><label for="inputField" class="label" data-v-6cff815d> منطقة التوقيت</label><select class="select-field w-full" data-v-6cff815d><option data-v-6cff815d>(ت ع م+03:00) الرياض</option><option data-v-6cff815d>asd1</option><option data-v-6cff815d>asd1</option></select></div></div>',1),Fa=[xa],ha={key:3},Ca={class:"Functional-data mt-10 grid md:grid-cols-2 md:gap-6 gap-4 grid-cols-1 items-center"},Na={class:"input-wrapper w-[80%]"},Ia=_e((()=>(0,t.Lk)("label",{for:"inputField",class:"label"}," الرقم الوظيفي ",-1))),Va={class:"input-wrapper w-[80%]"},Ea=_e((()=>(0,t.Lk)("label",{for:"inputField",class:"label"},"الفرع",-1))),Ja={class:"input-wrapper w-[80%]"},ja=_e((()=>(0,t.Lk)("label",{for:"inputField",class:"label"}," تاريخ الانضمام (ميلادي) ",-1))),Ua={class:"input-wrapper w-[80%]"},Sa=_e((()=>(0,t.Lk)("label",{for:"inputField",class:"label"}," تاريخ الانضمام (هجري) ",-1))),Xa={class:"input-wrapper w-[80%]"},Ba=_e((()=>(0,t.Lk)("label",{for:"inputField",class:"label"}," المدير المباشر ",-1))),Da=(0,t.Fv)('<div class="input-wrapper w-[80%]" data-v-6cff815d><label for="inputField" class="label" data-v-6cff815d> نوع الوظيفة </label><select class="select-field w-full" data-v-6cff815d><option data-v-6cff815d>دوام كامل</option><option data-v-6cff815d>asd1</option><option data-v-6cff815d>asd1</option></select></div><div class="input-wrapper w-[80%]" data-v-6cff815d><label for="inputField" class="label" data-v-6cff815d> المسمي الوظيفي </label><select class="select-field w-full" data-v-6cff815d><option data-v-6cff815d>مدير مالي</option><option data-v-6cff815d>asd1</option><option data-v-6cff815d>asd1</option></select></div>',2),Ra={class:"input-wrapper w-[80%]"},Ka=_e((()=>(0,t.Lk)("label",{for:"inputField",class:"label"}," الموقع ",-1))),Qa=(0,t.Fv)('<div class="input-wrapper w-[80%]" data-v-6cff815d><label for="inputField" class="label" data-v-6cff815d> القسم </label><select class="select-field w-full" data-v-6cff815d><option data-v-6cff815d>مبيعات</option><option data-v-6cff815d>asd1</option><option data-v-6cff815d>asd1</option></select></div><div class="input-wrapper w-[80%]" data-v-6cff815d><label for="inputField" class="label" data-v-6cff815d> الدرجة </label><select class="select-field w-full" data-v-6cff815d><option data-v-6cff815d>اول</option><option data-v-6cff815d>asd1</option><option data-v-6cff815d>asd1</option></select></div>',2);var Ma={__name:"ManagerData",setup(e){const a=(0,i.KR)("المعلومات الاساسية"),l=(0,i.KR)([{id:1,name:"المعلومات الاساسية",activeBtn:!0},{id:2,name:"البيانات الشخصية",activeBtn:!1},{id:3,name:"اللغة والمنطقة",activeBtn:!1},{id:4,name:"البيانات الوظيفية",activeBtn:!1}]),d=(0,i.KR)({companyName:"رفال",userId:"RAF-7546574",fullNameArabic:"احمد محمد فريد",fullNameEnglish:"Ahmed Mohamed Farid",email:"A.f.ghonaim@gmail.com",phoneNumber:"+96651  234  5678",authorizationNumber:"678556745",releaseDate:"2023/ 01 /04",endDate:"2023/ 01 /04"}),n=(0,i.KR)({idNumber:"23523453452",dob:"2024-3-1",fullNameArabic:"احمد محمد فريد",fullNameEnglish:"Ahmed Mohamed Farid",email:"A.f.ghonaim@gmail.com",phoneNumber:"+96651  234  5678",authorizationNumber:"678556745",releaseDate:"2023/ 01 /04",IBAN:"43258007"}),o=(0,i.KR)({jobNumber:"329-54846",branch:"الرياض",JoiningDate:"2022 / 5 / 5",JoiningDateHijri:"1444 / 4 / 4",directManager:"وائل محمد",phoneNumber:"+96651  234  5678",jobTitle:"678556745",site:"الرياض",endDate:"2023/ 01 /04"}),c=e=>{l.value.forEach((e=>{e.activeBtn=!1})),e.activeBtn=!0,a.value=e.name};return(e,i)=>((0,t.uX)(),(0,t.CE)("div",Ze,[(0,t.Lk)("div",Ge,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(l.value,(e=>((0,t.uX)(),(0,t.CE)("button",{onClick:a=>c(e),key:e.id,class:(0,s.C4)([{"bg-[#3C757D] text-white":e.activeBtn,"bg-gray-200":!e.activeBtn},"p-3 h-[30%] rounded-md"])},(0,s.v_)(e.name),11,ze)))),128))]),"المعلومات الاساسية"===a.value?((0,t.uX)(),(0,t.CE)("div",qe,[(0,t.Lk)("div",$e,[(0,t.Lk)("div",ea,[aa,(0,t.bo)((0,t.Lk)("input",{type:"text",id:"inputField",class:"input-field bg-gray-100","onUpdate:modelValue":i[0]||(i[0]=e=>d.value.companyName=e)},null,512),[[X.Jo,d.value.companyName]])]),(0,t.Lk)("div",la,[ta,(0,t.bo)((0,t.Lk)("input",{type:"text",id:"inputField",class:"input-field bg-gray-100","onUpdate:modelValue":i[1]||(i[1]=e=>d.value.userId=e)},null,512),[[X.Jo,d.value.userId]])]),(0,t.Lk)("div",ia,[da,(0,t.bo)((0,t.Lk)("input",{type:"text",id:"inputField",class:"input-field","onUpdate:modelValue":i[2]||(i[2]=e=>d.value.fullNameArabic=e)},null,512),[[X.Jo,d.value.fullNameArabic]])]),(0,t.Lk)("div",sa,[na,(0,t.bo)((0,t.Lk)("input",{type:"text",id:"inputField",class:"input-field","onUpdate:modelValue":i[3]||(i[3]=e=>d.value.fullNameEnglish=e)},null,512),[[X.Jo,d.value.fullNameEnglish]])]),(0,t.Lk)("div",oa,[ca,(0,t.bo)((0,t.Lk)("input",{type:"text",id:"inputField",class:"input-field","onUpdate:modelValue":i[4]||(i[4]=e=>d.value.email=e)},null,512),[[X.Jo,d.value.email]])]),(0,t.Lk)("div",pa,[ra,(0,t.bo)((0,t.Lk)("input",{type:"text",id:"inputField",class:"input-field","onUpdate:modelValue":i[5]||(i[5]=e=>d.value.phoneNumber=e)},null,512),[[X.Jo,d.value.phoneNumber]])])]),ua])):(0,t.Q3)("",!0),"البيانات الشخصية"===a.value?((0,t.uX)(),(0,t.CE)("div",fa,[(0,t.Lk)("div",ba,[(0,t.Lk)("div",va,[ma,(0,t.bo)((0,t.Lk)("input",{type:"text",id:"inputField",class:"input-field","onUpdate:modelValue":i[6]||(i[6]=e=>n.value.idNumber=e)},null,512),[[X.Jo,n.value.idNumber]])]),(0,t.Lk)("div",ga,[wa,(0,t.bo)((0,t.Lk)("input",{type:"text",id:"inputField",class:"input-field","onUpdate:modelValue":i[7]||(i[7]=e=>n.value.dob=e)},null,512),[[X.Jo,n.value.dob]])]),ka,(0,t.Lk)("div",ya,[La,(0,t.bo)((0,t.Lk)("input",{type:"text",id:"inputField",class:"input-field","onUpdate:modelValue":i[8]||(i[8]=e=>n.value.IBAN=e)},null,512),[[X.Jo,n.value.IBAN]])])])])):(0,t.Q3)("",!0),"اللغة والمنطقة"===a.value?((0,t.uX)(),(0,t.CE)("div",Aa,Fa)):(0,t.Q3)("",!0),"البيانات الوظيفية"===a.value?((0,t.uX)(),(0,t.CE)("div",ha,[(0,t.Lk)("div",Ca,[(0,t.Lk)("div",Na,[Ia,(0,t.bo)((0,t.Lk)("input",{type:"text",id:"inputField",class:"input-field bg-gray-100","onUpdate:modelValue":i[9]||(i[9]=e=>o.value.jobNumber=e)},null,512),[[X.Jo,o.value.jobNumber]])]),(0,t.Lk)("div",Va,[Ea,(0,t.bo)((0,t.Lk)("input",{type:"text",id:"inputField",class:"input-field bg-gray-100","onUpdate:modelValue":i[10]||(i[10]=e=>o.value.branch=e)},null,512),[[X.Jo,o.value.branch]])]),(0,t.Lk)("div",Ja,[ja,(0,t.bo)((0,t.Lk)("input",{type:"text",id:"inputField",class:"input-field","onUpdate:modelValue":i[11]||(i[11]=e=>o.value.JoiningDateHijri=e)},null,512),[[X.Jo,o.value.JoiningDateHijri]])]),(0,t.Lk)("div",Ua,[Sa,(0,t.bo)((0,t.Lk)("input",{type:"text",id:"inputField",class:"input-field","onUpdate:modelValue":i[12]||(i[12]=e=>o.value.fullNameEnglish=e)},null,512),[[X.Jo,o.value.fullNameEnglish]])]),(0,t.Lk)("div",Xa,[Ba,(0,t.bo)((0,t.Lk)("input",{type:"text",id:"inputField",class:"input-field","onUpdate:modelValue":i[13]||(i[13]=e=>o.value.directManager=e)},null,512),[[X.Jo,o.value.directManager]])]),Da,(0,t.Lk)("div",Ra,[Ka,(0,t.bo)((0,t.Lk)("input",{type:"text",id:"inputField",class:"input-field","onUpdate:modelValue":i[14]||(i[14]=e=>o.value.site=e)},null,512),[[X.Jo,o.value.site]])]),Qa])])):(0,t.Q3)("",!0)]))}};const Ha=(0,F.A)(Ma,[["__scopeId","data-v-6cff815d"]]);var Ta=Ha,Oa=l(4213);const Pa={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},Wa=(0,t.Fv)('<div class="modal-dialog modal-lg" data-v-7a53d0de><div class="modal-content" data-v-7a53d0de><div class="modal-header" data-v-7a53d0de><button class="btn-close m-0 bg-slate-50" data-bs-dismiss="modal" aria-label="Close" data-v-7a53d0de></button></div><div class="modal-body" data-v-7a53d0de><div class="bg-white rounded-xl w-full mx-auto" data-v-7a53d0de><div class="main-content flex flex-col gap-4 justify-center items-center" data-v-7a53d0de><img src="'+Oa+'" alt="user-icon" data-v-7a53d0de><h1 class="text-xl font-bold" data-v-7a53d0de>تفعيل الحساب</h1><p class="w-[50%] text-center leading-6" data-v-7a53d0de> تم ارسال بريد الي البريد الإلكتروني الخاص بالموظف وسيتم التفعيل عند تاكيد الموظف للبيانات </p><button data-bs-dismiss="modal" class="bg-[#3C757D] w-fit text-white font-bold py-2 px-4 rounded" data-v-7a53d0de> تم </button></div></div></div></div></div>',1),Ya=[Wa];function _a(e,a){return(0,t.uX)(),(0,t.CE)("div",Pa,Ya)}const Za={},Ga=(0,F.A)(Za,[["render",_a],["__scopeId","data-v-7a53d0de"]]);var za=Ga;const qa={style:{direction:"rtl"},class:"container text-end text-sm pt-16"},$a={class:"w-[90%] mx-auto min-h-[900px] rounded-md border"},el={class:"page-content grid items-start min-h-[700px] w-[80%] mx-auto"},al={class:"flex justify-center mb-6 self-end gap-4"},ll={key:2,class:"bg-[#3C757D] rounded-[8px] text-white w-[20%] p-3","data-bs-toggle":"modal","data-bs-target":"#exampleModal"};var tl={__name:"RealEstateDeveloper",setup(e){const a=(0,d.rd)(),l=(0,i.KR)([1,2,3,4]),s=(0,i.KR)(1);let n=document.getElementsByClassName("circle"),o=document.getElementsByClassName("bar");const c=e=>{switch(e.buttonText){case"مطور عقاري":a.push({name:"RealEstateDeveloper"});break;case"مزود خدمه":a.push({name:"serviceProvider"});break;case"موظف":a.push({name:"addFileUserOwner"});break}},p=()=>{s.value++,u()},r=()=>{s.value--,u()},u=()=>{Array.from(n).forEach(((e,a)=>{e.classList.toggle("active-circle",a<s.value)})),Array.from(o).forEach(((e,a)=>{e.classList.toggle("active-bar",a<s.value-1)}))};return(e,a)=>((0,t.uX)(),(0,t.CE)("div",qa,[(0,t.Lk)("div",$a,[(0,t.bF)(k,{onHandleClick:c}),(0,t.bF)(N),(0,t.bF)(S,{setps:l.value,currentStep:s.value},null,8,["setps","currentStep"]),(0,t.Lk)("div",el,[1===s.value?((0,t.uX)(),(0,t.Wv)(pe,{key:0})):(0,t.Q3)("",!0),2===s.value?((0,t.uX)(),(0,t.Wv)(Je,{key:1})):(0,t.Q3)("",!0),3===s.value?((0,t.uX)(),(0,t.Wv)(Ye,{key:2})):(0,t.Q3)("",!0),4===s.value?((0,t.uX)(),(0,t.Wv)(Ta,{key:3})):(0,t.Q3)("",!0),(0,t.bF)(za),(0,t.Lk)("div",al,[s.value>1&&s.value<4?((0,t.uX)(),(0,t.CE)("button",{key:0,class:"bg-white border border-[#3C757D] text-[#3C757D] rounded-[8px] w-[20%] p-3",onClick:r}," السابق ")):(0,t.Q3)("",!0),4!==s.value?((0,t.uX)(),(0,t.CE)("button",{key:1,class:"bg-[#3C757D] rounded-[8px] text-white w-[20%] p-3",onClick:p}," التالي ")):(0,t.Q3)("",!0),4===s.value?((0,t.uX)(),(0,t.CE)("button",ll," انشاء حساب ")):(0,t.Q3)("",!0)])])])]))}};const il=tl;var dl=il},5792:function(e,a,l){e.exports=l.p+"img/developer-icon-white.2c068903.svg"},4976:function(e,a,l){e.exports=l.p+"img/developer-icon.f1c80dd7.svg"},1527:function(e,a,l){e.exports=l.p+"img/document-cloud.99c200fc.svg"},4474:function(e,a,l){e.exports=l.p+"img/user-edit.e01c81aa.svg"},4213:function(e,a,l){e.exports=l.p+"img/user-tick.411f4212.svg"},5221:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASWSURBVHgB7ZtNTxNBGMcfXtpCAWlaOVCUlIN4gYDBCyeLQOlBgsQEw8l6NPGAn0A9eBY+gXglEWyUAIUEvODFGAicOABi0nDBQIACDS/+h7SkrN3XTne37v6Szew+M9t2/jPP7MyzUyIbGxsbC1NEHBgfH/dVVFTUnp+fV+HSReo5KSsrW+no6DjINE5NTQWKioqGcLoRDodHKA9oFmB6err24uIiUFxc3EjaKn0NiLcPPg0MDCTTttnZ2Xl8RzB1ORoKhZ4TZ0pJJWNjY06Px9OOH3YXrUO8gJBV1dXVTMzVtA3f0ZBRJBKLxYi3CMVqCrNWx48cZJWn/CDXk5gIH4gjigWYnJxsRIv3EofuniNcRVAkwOLiore0tDRI5oGbCLICMJ/f29vrIfPBRQRZAdxudzMboMic5CyCpADz8/OVeD43kbnJSQRJARKJhP/s7MzoQU8JmkWQFACjfr4ed/lAkwiSAjidTi8VFqpFEBVgbm7Op3f3T60lrkAP3CD1qBJBVIDDw0Pdfb+kpKQ28xqCfCNtKBZBVAB0fyfpDKbYVdFotCrjNwwj2SVtKBJBVACHw6G7AIzKyso76XMsj3fRC96SdmRFULUY0oPT09NmNv9IXyMOMIyekZMIWMe0imWaTgDgSiaTwUxDT0/PGyRsGbxJGsBMVtSNRBf0eAo04ikQJINAq/9A6/8U2hEkCSJphWt4lHwOKr/Q3d29IJZvWgEYYiLwxIwucAXmAfcRFxzMHBO4f4dYhhl6gIA4Bsg1rE7jwuBpLqiOCRqIH0EZPwZImpmZOcEYkJS7AS60U15eviglmKldQAIXi1HIHZhZBo6Pj3tZUEfsgwpVAMUwIXw+X61oPlkAuILousYSAkhhC0AWxxaALI4tAFkcWwCyOJYXoJBWg1dgauvGHL8F8YIWnNfD5Etl7cC2Bdsyju9KPqsQBWhF5Z8hdaOSwjwfbEyMe6nNHF/khCgoAVCpASSdCoszISK45zbSBbFCBTMGoCKPSHnlM+lEZOuFWKbUqzFuYadcQeXbkfSSRtheQ8QWI9nypHrAPpkHzZVPg+jQ+4mJiX9C6aIC9PX17eOmEzKYVOv7pMrU19dfHjJ4EB+MCI2SYwACkH/IeFrlCiBYenkoICg0SAoAxbS8n+cKHmM3iRNs7iC0ScpWU1Oztr293WbkPiG4wK1sdtbl063u9V7fyIL3B7S1tZXttoDQINkDmpqakqj8Kv3HyDpOXV3dSjweb2SbF8gYdijLIJithdfX10mGTaFBdiLEegF8J0bG8Zs4gbdJy0KboplgV1fXDvxqgYxhSa4A83l2yIGG/Cy0qdrwH41G/XgyPNDTHVIrv3c4dVNubIZCoQahUdVaAJOj+NHR0Vd0pTXSCTwFEhDhI+VO1m02mv/ywXZzOZ3ONra1Tace8RRiPCQNoMFGwuHwULY8Lv95icVifofD4cUC6obL5crb7jII/QTJSzX3SFWewe9PPzoBsSNIXlOWSU0m6C27EOwV/H5UshwVKEwIVPAxKhrAZXqK+wu2JbYx6uDgYLS/v1/rJksbG6vwFw/sq5rpbF28AAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=822.cd5ad48b.js.map