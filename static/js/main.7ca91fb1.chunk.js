(this["webpackJsonpreminder-project"]=this["webpackJsonpreminder-project"]||[]).push([[0],{124:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(23),o=n.n(i),c=n(7);n(44);function l(e){try{var t=localStorage.getItem(e);if(null===t)return;return JSON.parse(t)}catch(n){return}}function s(e,t){try{var n=JSON.stringify(t);localStorage.setItem(e,n)}catch(a){return}}var m=n(8),d=n(52),u=function(e){return r.a.createElement("header",{className:"header-background"},r.a.createElement("div",{className:"top-bar-container"},r.a.createElement("ul",{className:"top-bar"},r.a.createElement("li",{className:"li-item first-item start-app",onClick:function(){return e.handleForm(!0)}},r.a.createElement(d.a,{className:"theme-icon"})),r.a.createElement("li",{id:"theme-id",className:"li-item theme-icon",onClick:function(){return e.handleTheme(!e.isDark)}},e.isDark?r.a.createElement(m.e,{id:"icon"}):r.a.createElement(m.d,{id:"icon"})))),r.a.createElement("div",{className:"intro-panel"},r.a.createElement("h1",{className:"panel-heading"},"Task Meister"),r.a.createElement("p",{className:"panel-text"},"Never forget another task again!")))},f=function(){return r.a.createElement("section",{className:"container how-to-use--container"},r.a.createElement("div",{className:"how-to-use-container"},r.a.createElement("h2",{className:"heading"},"How To Use"),r.a.createElement("p",{className:"text-style"},"Task Meister is an alert website which will notify you when a reminder you have set expires."),r.a.createElement("p",{className:"text-style"},"In order to create a reminder you've got to click the green button in the upper right corner of the screen. Doing so will open a form popout. After that just give the reminder an appropriate name corresponding to the task you want to be reminded of, and set at which date and time you want the reminder to go off at."),r.a.createElement("p",{className:"text-style"},r.a.createElement("b",null,"Note! You need to fill in both the name or time, otherwise a reminder will not be made.")),r.a.createElement("p",{className:"text-style"},"Regardless if the reminder has expired or not, you are able to remove any reminder you no longer want or have a need for by clicking the remove button which can be found on every individual reminder. The same goes for entire lists."),r.a.createElement("p",{className:"text-style"},"I recommend removing all the expired and non-needed reminders at a regular interval as to free up space for additional reminders."),r.a.createElement("p",{className:"text-style"},"In addition to removing reminders, you can also mark a reminder as done. This is a great way to have a comprehensive catalogue of which tasks you completed versus which you have not. Like with the expired reminders, removal of any non-needed done reminders is encouraged."),r.a.createElement("p",{className:"text-style"},r.a.createElement("b",null,"Note! The web notification will not show up if you have the tab closed! In order to circumvent this, I suggest keeping the tab containing the site open when running a reminder."))))},p=function(){return r.a.createElement("footer",{className:"footer-container"},r.a.createElement("div",{className:"footer-social"},r.a.createElement("h4",{className:"footer-heading"},"Keep In Touch"),r.a.createElement("ul",{className:"social-links"},r.a.createElement("li",{className:"social-item"},r.a.createElement("a",{className:"link-item",href:"https://github.com/Zylashro",rel:"noopener noreferrer",alt:"GitHub Link"},r.a.createElement(m.b,{"aria-hidden":"true"}))),r.a.createElement("li",{className:"social-item"},r.a.createElement("a",{className:"link-item",href:"https://www.linkedin.com/in/dominik-jug-3aa2971a0/",rel:"noopener noreferrer",alt:"LinkedIn Link"},r.a.createElement(m.c,{"aria-hidden":"true"}))))),r.a.createElement("div",null,r.a.createElement("p",{className:"copyright"},"Copyright \xa9 2020",r.a.createElement("span",null,r.a.createElement("a",{href:"index.html"},"Task Meister")),". All rights reserved.")))},h=n(53),E=n.n(h),v="done",g="expired",N="running";var y=n(54),w=n.n(y);n(64),n(65);var x=function(e){var t=r.a.useState(""),n=Object(c.a)(t,2),a=n[0],i=n[1],o=r.a.useState(new Date),l=Object(c.a)(o,2),s=l[0],d=l[1],u=r.a.useState(!1),f=Object(c.a)(u,2),p=f[0],h=f[1];return r.a.createElement("div",{className:"container form-container"},r.a.createElement("label",{htmlFor:"name",className:"form-label"},"Set a name:"),r.a.createElement("input",{className:"form-input",type:"text",name:"name",onChange:function(e){return i(e.target.value)}}),r.a.createElement("label",{htmlFor:"expTime",className:"form-label"},"Select time:"),r.a.createElement(w.a,{selected:s,onChange:function(e){return d(e)},onSelect:function(e){return d(e)},showTimeSelect:!0,timeFormat:"HH:mm",timeIntervals:15,timeCaption:"Time",dateFormat:"yyyy-MM-dd h:mm aa",minDate:new Date,name:"expTime"}),r.a.createElement("button",{className:"form-btn",type:"submit",onClick:function(){return function(){h(!1);var t=Date.parse(s);!a||!s||a.length<1||t<=Date.now()?h(!0):(e.addReminder({reminderName:a,selectedTime:t}),i(""),d(null),e.handleForm(!1))}()}},"Add"),r.a.createElement("div",{className:p?"error-msg":"hidden"},"Error: Cannot add reminder with an empty input field!"),r.a.createElement(m.f,{className:"close-form",onClick:function(){return e.handleForm(!1)}}))};var b=function(e){var t=r.a.useContext(T),n=t.reminders,a=t.setReminders,i=t.notificationIgnore,o=t.setNotificationData,l={hours:0,minutes:0,seconds:0};if(e.totalSeconds>0){var s=e.totalSeconds;l.hours=Math.floor(s/3600),s%=3600,l.minutes=Math.floor(s/60),l.seconds=s%60}var m=r.a.useState(l),d=Object(c.a)(m,2),u=d[0],f=d[1],p=r.a.useState(0),h=Object(c.a)(p,2),E=(h[0],h[1]),v=n.list,g=v.findIndex((function(t){return t.id===e.id}));return function(e,t){var n=r.a.useRef();r.a.useEffect((function(){n.current=e}),[e]),r.a.useEffect((function(){if(null!==t){var e=setInterval((function(){n.current()}),t);return function(){return clearInterval(e)}}}),[t])}((function(){if(u.seconds>0&&(u.seconds=u.seconds-1),0===u.seconds){if(0===u.minutes){if(0===u.hours)return function(){if(!i){var e={title:"Reminder expired!",options:{body:v[g].name,icon:""}};o(e)}}(),v[g].expired=!0,void a({update:!n.update,list:v});u.hours=u.hours-1,u.minutes=59}u.minutes=u.minutes-1,u.seconds=59}f(u),E(u.seconds)}),1e3),r.a.createElement(r.a.Fragment,null,u.hours<10?"0".concat(u.hours):u.hours,r.a.createElement("span",{className:"colon"},":"),u.minutes<10?"0".concat(u.minutes):u.minutes,r.a.createElement("span",{className:"colon"},":"),u.seconds<10?"0".concat(u.seconds):u.seconds)},k=function(e){var t,n,a=r.a.useContext(T),i=a.reminders,o=a.setReminders,l=i.list,s=l.find((function(t){return t.id===e.id})),d=new Date(s.created),u=new Date(s.expires),f=r.a.useRef(null),p=r.a.useState(!1),h=Object(c.a)(p,2),E=h[0],v=h[1];return t=f,n=function(){return v(!1)},r.a.useEffect((function(){var e=function(e){t.current&&!t.current.contains(e.target)&&n(e)};return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[t,n]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card-container"},r.a.createElement(m.f,{className:"card-delete-btn",onClick:function(){return function(){var t=l.findIndex((function(t){return t.id===e.id}));l.splice(t,1),o({update:!i.update,list:l})}()}}),r.a.createElement("p",{className:"name-heading card-heading"},"Name:")," ",r.a.createElement("p",{className:"card-name card-content",onClick:function(){return v(!0)}},s.name),r.a.createElement("p",{className:"date-heading card-heading"},"Created on:")," ",r.a.createElement("p",{className:"card-date card-content"},d.toLocaleString([],{year:"numeric",month:"numeric",day:"numeric",hour:"2-digit",minute:"2-digit"})),!s.done&&r.a.createElement(m.a,{className:"card-complete-btn",onClick:function(){return function(){var t=l.findIndex((function(t){return t.id===e.id}));l[t].expires=Date.now(),l[t].expired=!0,l[t].done=!0,l.sort((function(e,t){return e.expires-t.expires})),o({update:!i.update,list:l})}()}}),!s.done&&!s.expired&&r.a.createElement("p",{className:"countdown-heading card-heading"},"Expires in: "),s.done&&r.a.createElement("p",{className:"countdown-heading card-heading"},"Done: "),!s.done&&s.expired&&r.a.createElement("p",{className:"countdown-heading card-heading"},"Expired on: "),r.a.createElement("div",{className:"countdown card-content"},!s.done&&!s.expired&&r.a.createElement(b,{totalSeconds:Math.floor((s.expires-Date.now())/1e3),id:s.id}),!s.done&&s.expired&&u.toLocaleString([],{year:"numeric",month:"numeric",day:"numeric",hour:"2-digit",minute:"2-digit"}),s.done&&u.toLocaleString([],{year:"numeric",month:"numeric",day:"numeric",hour:"2-digit",minute:"2-digit"})),r.a.createElement("div",{ref:f,className:E?"show-full-name":"hidden"},s.name)))};var S=function(e){var t=r.a.useContext(T),n=t.reminders,a=t.setReminders,i="";return e.listType===g&&(i="Expired"),e.listType===N&&(i="Running"),e.listType===v&&(i="Done"),r.a.createElement(r.a.Fragment,null,e.list.length>0&&r.a.createElement("div",{className:"list-container list-".concat(e.listType)},r.a.createElement("div",{className:"list-heading"},r.a.createElement("label",{className:"list-label"},i),r.a.createElement(m.f,{className:"del-list",onClick:function(){return function(e){if(e===v){var t,r=null!==(t=n.list.filter((function(e){return!1===e.done})))&&void 0!==t?t:[];a({update:!n.update,list:r})}if(e===g){var i,o=null!==(i=n.list.filter((function(e){return!0===e.done||!1===e.done&&!1===e.expired})))&&void 0!==i?i:[];a({update:!n.update,list:o})}if(e===N){var c,l=null!==(c=n.list.filter((function(e){return!0===e.done||!1===e.done&&!0===e.expired})))&&void 0!==c?c:[];a({update:!n.update,list:l})}}(e.listType)}})),r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"card"},e.list.map((function(e){return r.a.createElement(k,{key:e.id,id:e.id})}))))))},T=r.a.createContext({});var D=function(e){var t=r.a.useState((function(){return function(){var e,t=(null!==(e=l("reminder"))&&void 0!==e?e:[]).map((function(e){return e.expires<=Date.now()&&(e.expired=!0),e}));return s("reminder",t),{update:!1,list:t}}()})),n=Object(c.a)(t,2),i=n[0],o=n[1],m=r.a.useState(!0),d=Object(c.a)(m,2),u=d[0],f=d[1],p=r.a.useState({title:""}),h=Object(c.a)(p,2),y=h[0],w=h[1],b={reminders:i,setReminders:o,notificationIgnore:u,setNotificationIgnore:f,notificationData:y,setNotificationData:w};return Object(a.useEffect)((function(){s("reminder",i.list),function(){var e=i.list.filter((function(e){return!0===e.expired&&!1===e.done}));e.length>0?document.title="(".concat(e.length,") Task Meister"):document.title="Task Meister"}()}),[i.update]),r.a.createElement(r.a.Fragment,null,r.a.createElement(T.Provider,{value:b},e.formActive&&r.a.createElement(x,{addReminder:function(e){var t={id:([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(function(e){return(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)})),created:Date.now(),name:e.reminderName,expires:e.selectedTime,done:!1,expired:!1},n=i.list;n.push(t),n.sort((function(e,t){return e.expires-t.expires})),o({update:!i.update,list:n})},handleForm:e.handleForm}),r.a.createElement(S,{key:"expired",listType:g,list:i.list.filter((function(e){return!1===e.done&&!0===e.expired}))}),r.a.createElement(S,{key:"running",listType:N,list:i.list.filter((function(e){return!1===e.done&&!1===e.expired}))}),r.a.createElement(S,{key:"done",listType:v,list:i.list.filter((function(e){return!0===e.done}))})),r.a.createElement(E.a,{ignore:u&&""!==y.title,notSupported:function(){u||f(!0)},onPermissionGranted:function(){u&&f(!1)},onPermissionDenied:function(){u||f(!0)},timeout:5e3,title:y.title,options:y.options}))},I=function(){var e=r.a.useState((function(){var e;return null!==(e=l("isDark"))&&void 0!==e&&e})),t=Object(c.a)(e,2),n=t[0],a=t[1],i=r.a.useState(!1),o=Object(c.a)(i,2),m=o[0],d=o[1];return r.a.createElement("div",{className:n?"dark app-container":"light app-container"},r.a.createElement(u,{isDark:n,handleTheme:function(e){a(e),s("isDark",e)},handleForm:d}),r.a.createElement(D,{formActive:m,handleForm:d}),r.a.createElement(f,null),r.a.createElement(p,null))};var C=function(){return r.a.createElement(I,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},44:function(e,t,n){},57:function(e,t,n){e.exports=n(124)},65:function(e,t,n){}},[[57,1,2]]]);
//# sourceMappingURL=main.7ca91fb1.chunk.js.map