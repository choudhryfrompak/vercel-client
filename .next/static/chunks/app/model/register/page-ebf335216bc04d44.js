(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[544],{8237:(e,a,r)=>{Promise.resolve().then(r.bind(r,7905))},7905:(e,a,r)=>{"use strict";r.r(a),r.d(a,{default:()=>i});var t=r(5155),l=r(2115);function i(){let[e,a]=(0,l.useState)({firstName:"",lastName:"",email:"",phone:"",age:"",height:"",weight:"",experience:"",instagram:"",portfolio:"",availability:""}),[r,i]=(0,l.useState)({}),[s,n]=(0,l.useState)(!1),o=()=>{let a={};e.firstName.trim()?e.firstName.length<2&&(a.firstName="First name must be at least 2 characters"):a.firstName="First name is required",e.lastName.trim()?e.lastName.length<2&&(a.lastName="Last name must be at least 2 characters"):a.lastName="Last name is required",e.email?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.email)||(a.email="Please enter a valid email address"):a.email="Email is required",e.phone?/^\+?[\d\s-]{10,}$/.test(e.phone)||(a.phone="Please enter a valid phone number"):a.phone="Phone number is required";let r=parseInt(e.age);e.age?(isNaN(r)||r<18||r>100)&&(a.age="Age must be between 18 and 100"):a.age="Age is required";let t=parseFloat(e.height);e.height?(isNaN(t)||t<140||t>220)&&(a.height="Height must be between 140 and 220 cm"):a.height="Height is required";let l=parseFloat(e.weight);if(e.weight?(isNaN(l)||l<40||l>150)&&(a.weight="Weight must be between 40 and 150 kg"):a.weight="Weight is required",e.experience.trim()||(a.experience="Please describe your modeling experience"),e.instagram&&!/^@?[a-zA-Z0-9._]+$/.test(e.instagram)&&(a.instagram="Please enter a valid Instagram handle"),e.portfolio)try{new URL(e.portfolio)}catch(e){a.portfolio="Please enter a valid URL"}return e.availability||(a.availability="Please select your availability"),a},d=async r=>{r.preventDefault(),n(!0);let t=o();if(i(t),0===Object.keys(t).length)try{console.log("Form submitted successfully:",e),a({firstName:"",lastName:"",email:"",phone:"",age:"",height:"",weight:"",experience:"",instagram:"",portfolio:"",availability:""})}catch(e){console.error("Error submitting form:",e)}else console.log("Form validation failed");n(!1)},c=e=>r[e]?(0,t.jsx)("span",{className:"text-red-500 text-sm mt-1",children:r[e]}):null;return(0,t.jsxs)("main",{className:"min-h-screen p-8 max-w-2xl mx-auto",children:[(0,t.jsx)("h1",{className:"text-4xl font-bold text-center mb-6",children:"MODEL REGISTRATION - MIAMI"}),(0,t.jsx)("p",{className:"text-center mb-8 text-gray-700",children:"Join our modeling agency in Miami by filling out the registration form below. We're always looking for new talent in the Miami area."}),(0,t.jsx)("p",{className:"text-center mb-8 text-gray-600",children:"We will review your application and contact you shortly."}),(0,t.jsxs)("form",{onSubmit:d,className:"space-y-4",children:[(0,t.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("input",{type:"text",placeholder:"First Name",className:"p-2 border rounded w-full ".concat(r.firstName?"border-red-500":"border-gray-300"),value:e.firstName,onChange:r=>a({...e,firstName:r.target.value})}),c("firstName")]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("input",{type:"text",placeholder:"Last Name",className:"p-2 border rounded w-full ".concat(r.lastName?"border-red-500":"border-gray-300"),value:e.lastName,onChange:r=>a({...e,lastName:r.target.value})}),c("lastName")]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("input",{type:"email",placeholder:"Email",className:"w-full p-2 border rounded ".concat(r.email?"border-red-500":"border-gray-300"),value:e.email,onChange:r=>a({...e,email:r.target.value})}),c("email")]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("input",{type:"tel",placeholder:"Phone Number",className:"w-full p-2 border rounded ".concat(r.phone?"border-red-500":"border-gray-300"),value:e.phone,onChange:r=>a({...e,phone:r.target.value})}),c("phone")]}),(0,t.jsxs)("div",{className:"grid grid-cols-3 gap-4",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("input",{type:"number",placeholder:"Age",className:"w-full p-2 border rounded ".concat(r.age?"border-red-500":"border-gray-300"),value:e.age,onChange:r=>a({...e,age:r.target.value})}),c("age")]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("input",{type:"number",placeholder:"Height (cm)",className:"w-full p-2 border rounded ".concat(r.height?"border-red-500":"border-gray-300"),value:e.height,onChange:r=>a({...e,height:r.target.value})}),c("height")]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("input",{type:"number",placeholder:"Weight (kg)",className:"w-full p-2 border rounded ".concat(r.weight?"border-red-500":"border-gray-300"),value:e.weight,onChange:r=>a({...e,weight:r.target.value})}),c("weight")]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("textarea",{placeholder:"Modeling Experience",className:"w-full p-2 border rounded ".concat(r.experience?"border-red-500":"border-gray-300"),value:e.experience,onChange:r=>a({...e,experience:r.target.value}),rows:4}),c("experience")]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("input",{type:"text",placeholder:"Instagram Handle (optional)",className:"w-full p-2 border rounded ".concat(r.instagram?"border-red-500":"border-gray-300"),value:e.instagram,onChange:r=>a({...e,instagram:r.target.value})}),c("instagram")]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("input",{type:"url",placeholder:"Portfolio URL (optional)",className:"w-full p-2 border rounded ".concat(r.portfolio?"border-red-500":"border-gray-300"),value:e.portfolio,onChange:r=>a({...e,portfolio:r.target.value})}),c("portfolio")]}),(0,t.jsxs)("div",{children:[(0,t.jsxs)("select",{className:"w-full p-2 border rounded ".concat(r.availability?"border-red-500":"border-gray-300"),value:e.availability,onChange:r=>a({...e,availability:r.target.value}),children:[(0,t.jsx)("option",{value:"",children:"Select Availability"}),(0,t.jsx)("option",{value:"full-time",children:"Full Time"}),(0,t.jsx)("option",{value:"part-time",children:"Part Time"}),(0,t.jsx)("option",{value:"weekends",children:"Weekends Only"}),(0,t.jsx)("option",{value:"flexible",children:"Flexible"})]}),c("availability")]}),(0,t.jsx)("button",{type:"submit",disabled:s,className:"w-full bg-black text-white p-3 rounded hover:bg-gray-800 disabled:bg-gray-400 transition-colors",children:s?"Submitting...":"Submit Registration"})]})]})}}},e=>{var a=a=>e(e.s=a);e.O(0,[441,517,358],()=>a(8237)),_N_E=e.O()}]);