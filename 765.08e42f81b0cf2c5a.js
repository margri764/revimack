(self.webpackChunkrevimack=self.webpackChunkrevimack||[]).push([[765],{2765:(q,b,h)=>{"use strict";h.r(b),h.d(b,{AgroMachinesModule:()=>a});var f=h(9808),Z=h(2155),m=h(2382),T=h(7979),A=h(3094),d=h.n(A),e=h(4893),g=h(2387);let v=(()=>{class t{constructor(){this.carModel="",this.arrayChevroletCars=[{name:"Cruze",img:"./assets/tracDeere.jpg"}],this.arrayChevroletSuv=[{name:"Nueva Tracker",img:"./assets/tracker.png"},{name:"Spin",img:"./assets/spin.png"},{name:"Equinox",img:"./assets/equinox.png"},{name:"Trailblazer",img:"./assets/trailblazer.png"}],this.arrayChevroletPickups=[{name:"S10 High Country",img:"./assets/s10High.png"},{name:"S10 Cabina Simple",img:"./assets/s10Simple.png"},{name:"S10 Cabina Doble",img:"./assets/s10Doble.png"}],this.arrayChevroletSports=[{name:"Camaro Coupe",img:"./assets/camaroCoupe.jpg"},{name:"Camaro Convertible",img:"./assets/camaroConvertible.png"}],this.arrayFord=[{name:"Ford1",img:"./assets/logo_ford.png"},{name:"Ford2",img:"./assets/logo_ford.png"}]}get model(){return this.carModel}getBrandCars(i){switch(i){case"chevrolet":return this.arrayChevroletCars;case"ford":return this.arrayFord;default:return null}}getModelCars(i){switch(i){case"car":return this.arrayChevroletCars;case"suv":return this.arrayChevroletSuv;case"pickups":return this.arrayChevroletPickups;case"sports":return this.arrayChevroletSports;default:return null}}getCarSelection(i){this.carModel=i}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),S=(()=>{class t{constructor(){this.nameLastName="^[A-Za-z\xf1\xd1 ]+$",this.emailPattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var L=h(3322);function E(t,c){1&t&&(e.TgZ(0,"span",11),e._uU(1," No se permiten numeros ni caracteres especiales "),e.qZA())}function w(t,c){1&t&&(e.TgZ(0,"span",11),e._uU(1," Este campo es obligatorio "),e.qZA())}function M(t,c){1&t&&(e.TgZ(0,"span",11),e._uU(1," No respeta formato de email "),e.qZA())}const C=function(t){return{"is-invalid":t}};let x=(()=>{class t{constructor(i,o,u,_){this.validatorservice=i,this.agroMachinesService=o,this.fb=u,this.cdRef=_,this.invalidName=!1,this.invalidPhone=!1,this.invalidEmail=!1,this.car="",this.myForm=this.fb.group({name:["",m.kI.required],phone:["",m.kI.required],email:["",[m.kI.required,m.kI.pattern(this.validatorservice.emailPattern)]],car:[""]})}test(i){switch(i){case"name":this.invalidName=!(!this.myForm.controls.name.errors||!this.myForm.controls.name.touched);break;case"phone":this.invalidPhone=!(!this.myForm.controls.phone.errors||!this.myForm.controls.phone.touched);break;case"email":this.invalidEmail=!(!this.myForm.controls.email.errors||!this.myForm.controls.email.touched)}}validField(i){return this.test(i),this.myForm.controls[i].errors&&this.myForm.controls[i].touched}onSubmit(){this.myForm.invalid?this.myForm.markAllAsTouched():(console.log("this.car",this.agroMachinesService.model),this.myForm.controls.car.setValue(this.modelSelection),console.log(this.myForm.value))}ngOnInit(){}ngAfterViewChecked(){this.cdRef.detectChanges()}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(S),e.Y36(v),e.Y36(m.qu),e.Y36(e.sBO))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-form"]],inputs:{modelSelection:"modelSelection"},decls:20,vars:13,consts:[["autocomplete","off",3,"formGroup"],[1,"form-floating"],["type","text","id","floatingInput","formControlName","name","autofocus","","placeholder","ingrese nombre",1,"form-control",3,"ngClass"],["class","form-text text-danger animate__animated animate__tada",4,"ngIf"],["for","floatingInput"],["type","number","id","floatphone","formControlName","phone","placeholder","ingrese telefono",1,"form-control",3,"ngClass"],["class","form-text text-danger  animate__animated animate__tada",4,"ngIf"],["for","floatphone"],["type","email","id","floatemail","formControlName","email","placeholder","email",1,"form-control",3,"ngClass"],["for","floatemail"],["type","submit",1,"btn","btn-primary","mt-5",3,"click"],[1,"form-text","text-danger","animate__animated","animate__tada"]],template:function(i,o){1&i&&(e.TgZ(0,"form",0),e.TgZ(1,"div",1),e._UZ(2,"input",2),e.YNc(3,E,2,0,"span",3),e.TgZ(4,"label",4),e._uU(5,"Nombre y Apellido"),e.qZA(),e.qZA(),e._UZ(6,"br"),e.TgZ(7,"div",1),e._UZ(8,"input",5),e.YNc(9,w,2,0,"span",6),e.TgZ(10,"label",7),e._uU(11,"Telefono / Celular"),e.qZA(),e.qZA(),e._UZ(12,"br"),e.TgZ(13,"div",1),e._UZ(14,"input",8),e.YNc(15,M,2,0,"span",6),e.TgZ(16,"label",9),e._uU(17,"Correo electronico "),e.qZA(),e.qZA(),e.TgZ(18,"button",10),e.NdJ("click",function(){return o.onSubmit()}),e._uU(19,"Submit"),e.qZA(),e.qZA()),2&i&&(e.Q6J("formGroup",o.myForm),e.xp6(2),e.Q6J("ngClass",e.VKq(7,C,o.invalidName)),e.xp6(1),e.Q6J("ngIf",o.validField("name")),e.xp6(5),e.Q6J("ngClass",e.VKq(9,C,o.invalidPhone)),e.xp6(1),e.Q6J("ngIf",o.validField("phone")),e.xp6(5),e.Q6J("ngClass",e.VKq(11,C,o.invalidEmail)),e.xp6(1),e.Q6J("ngIf",o.validField("email")))},directives:[m._Y,m.JL,m.sg,m.Fj,m.JJ,m.u,f.mk,L.oO,f.O5,m.wV],styles:[".products[_ngcontent-%COMP%]{border-radius:10px;padding:10px;background-color:#fbfbfb;box-shadow:10px 10px 29px -8px #b5b5b5bf;-webkit-box-shadow:10px 10px 29px -8px rgba(181,181,181,.75);-moz-box-shadow:10px 10px 29px -8px rgba(181,181,181,.75)}"]}),t})();function y(t,c){if(1&t){const i=e.EpF();e.TgZ(0,"div",2),e.TgZ(1,"div",3),e.TgZ(2,"div",4),e.TgZ(3,"div",5),e._UZ(4,"img",6),e.qZA(),e.TgZ(5,"div",7),e.TgZ(6,"div",8),e.TgZ(7,"h5",9),e._uU(8),e.qZA(),e.TgZ(9,"p",10),e._uU(10,"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."),e.qZA(),e.TgZ(11,"a",11),e.NdJ("click",function(){const _=e.CHM(i).$implicit,F=e.oxw();return F.next(),F.selectedCar(_.name)}),e._uU(12,"Selecciona"),e.qZA(),e.TgZ(13,"a",11),e.NdJ("click",function(){return e.CHM(i),e.oxw().previous()}),e._uU(14,"Volver"),e.qZA(),e.TgZ(15,"p",10),e.TgZ(16,"small",12),e._uU(17),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&t){const i=c.$implicit,o=e.oxw();e.xp6(4),e.Q6J("src",i.img,e.LSH),e.xp6(4),e.Oqu(i.name),e.xp6(9),e.Oqu(o.date)}}let k=(()=>{class t{constructor(i,o,u){this.agroMachines=i,this.cdRef=o,this.formcomponente=u,this.arrayMachines=[],this.date=new Date,this.triggerNext="true",this.triggerPrevious="true",this.triggerToNext=new e.vpe,this.triggerToPrevious=new e.vpe,this.modelSelect=new e.vpe,this.brandSelection="",this.modelSelection=""}next(){this.triggerToNext.emit(this.triggerNext)}previous(){this.triggerToPrevious.emit(this.triggerPrevious)}brandFromBackend(){this.arrayMachines=this.agroMachines.getBrandCars(this.brandSelection)}modelFromBackend(){this.arrayMachines=this.agroMachines.getModelCars(this.modelSelection)}ngAfterViewChecked(){this.cdRef.detectChanges(),this.brandSelection&&(this.brandFromBackend(),this.brandSelection=""),this.modelSelection&&(this.modelFromBackend(),this.modelSelection="")}selectedCar(i){this.modelSelect.emit(i),this.agroMachines.getCarSelection(i)}ngOnInit(){}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(v),e.Y36(e.sBO),e.Y36(x))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-machines"]],inputs:{brandSelection:"brandSelection",modelSelection:"modelSelection"},outputs:{triggerToNext:"triggerToNext",triggerToPrevious:"triggerToPrevious",modelSelect:"modelSelect"},decls:2,vars:1,consts:[["fxLayout","row wrap","fxLayout.xs","column","fxLayoutAlign","center","fxLayoutGap","0px"],["fxFlex","100",4,"ngFor","ngForOf"],["fxFlex","100"],[1,"card","mb-3",2,"border","0px"],[1,"row","g-0"],[1,"col-md-8"],["width","50%","alt","...",1,"img-fluid","rounded-start",3,"src"],[1,"col-md-4"],[1,"card-body"],[1,"card-title"],[1,"card-text"],[1,"btn","btn-primary",3,"click"],[1,"text-muted"]],template:function(i,o){1&i&&(e.TgZ(0,"div",0),e.YNc(1,y,18,3,"div",1),e.qZA()),2&i&&(e.xp6(1),e.Q6J("ngForOf",o.arrayMachines))},directives:[g.xw,g.Wh,g.SQ,f.sg,g.yH],styles:[""]}),t})();const p=["bsStepper"],s=["target"],r=[{path:"",children:[{path:"maquinas",component:(()=>{class t{constructor(i){this.cdRef=i,this.triggerNext="",this.triggerPrevious="false",this.brandSelection="",this.modelSelection="",this.disabledBrand=!0,this.disabledModel=!0,this.carSelect=""}toggleNavbar(){this.navbarOpen=!this.navbarOpen}next(){this.stepper.next()}previous(){this.stepper.previous()}ngAfterViewChecked(){"true"==this.triggerNext&&(this.next(),this.triggerNext="false"),"true"==this.triggerPrevious&&(this.previous(),this.triggerPrevious="false"),""!=this.brandSelection&&(this.disabledBrand=!1),""!=this.modelSelection&&(this.disabledModel=!1),this.cdRef.detectChanges()}ngOnInit(){}ngAfterViewInit(){this.stepper=new(d())(this.stepperElement.nativeElement,{linear:!1,animation:!0}),this.element=this.target.nativeElement}goToBrand(i){this.brandSelection=i}goToModel(i){this.modelSelection=i}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(e.sBO))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-home-machines"]],viewQuery:function(i,o){if(1&i&&(e.Gf(p,5),e.Gf(s,5)),2&i){let u;e.iGM(u=e.CRH())&&(o.stepperElement=u.first),e.iGM(u=e.CRH())&&(o.target=u.first)}},decls:49,vars:5,consts:[[2,"width","100vw","height","100vh","background-color","white"],["fxLayoutAlign","center","fxFlex","100",1,"container","flex-grow-1","flex-shrink-0","py-0","animate__animated","animate__fadeIn"],["target",""],["fxFlex","90","id","stepper1",1,"bs-stepper"],["bsStepper",""],["role","tablist",1,"bs-stepper-header"],["data-target","#test-l-1",1,"step"],["type","button","role","tab","id","stepper1trigger1","aria-controls","test-l-1",1,"step-trigger"],[1,"bs-stepper-circle"],[1,"bs-stepper-label"],[1,"bs-stepper-line"],["data-target","#test-l-2",1,"step"],["type","button","role","tab","id","stepper1trigger2","aria-controls","test-l-2",1,"step-trigger",3,"disabled"],["data-target","#test-l-3",1,"step"],["type","button","role","tab","id","stepper1trigger3","aria-controls","test-l-3",1,"step-trigger",3,"disabled"],[1,"bs-stepper-content"],["id","test-l-1","role","tabpanel","aria-labelledby","stepper1trigger1",1,"bs-stepper-pane"],["fxLayout","row wrap"],["fxLayoutAlign","space-evenly center","fxLayout","row wrap","fxLayoutGap","40px"],["fxFlex","20","src","assets/johnDeere.png","id","chevrolet",3,"click"],["id","test-l-2","role","tabpanel","aria-labelledby","stepper1trigger2",1,"bs-stepper-pane"],["fxLayout","row","fxLayoutAlign","center space-evenly"],["fxFlex","25",3,"click"],[3,"brandSelection","modelSelection","triggerToNext","triggerToPrevious","modelSelect"],["id","test-l-3","role","tabpanel","aria-labelledby","stepper1trigger3",1,"bs-stepper-pane","text-center"],[3,"modelSelection"],[1,"btn","btn-primary","mt-0",3,"click"]],template:function(i,o){1&i&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1,2),e.TgZ(3,"div",3,4),e.TgZ(5,"div",5),e.TgZ(6,"div",6),e.TgZ(7,"button",7),e.TgZ(8,"span",8),e._uU(9,"1"),e.qZA(),e.TgZ(10,"span",9),e._uU(11,"Seleccion\xe1 Marca"),e.qZA(),e.qZA(),e.qZA(),e._UZ(12,"div",10),e.TgZ(13,"div",11),e.TgZ(14,"button",12),e.TgZ(15,"span",8),e._uU(16,"2"),e.qZA(),e.TgZ(17,"span",9),e._uU(18,"Elegi tu modelo"),e.qZA(),e.qZA(),e.qZA(),e._UZ(19,"div",10),e.TgZ(20,"div",13),e.TgZ(21,"button",14),e.TgZ(22,"span",8),e._uU(23,"3"),e.qZA(),e.TgZ(24,"span",9),e._uU(25,"Tus datos"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e._UZ(26,"br"),e._UZ(27,"br"),e.TgZ(28,"div",15),e.TgZ(29,"div",16),e.TgZ(30,"div",17),e.TgZ(31,"div",18),e.TgZ(32,"img",19),e.NdJ("click",function(){return o.goToBrand("chevrolet"),o.next()}),e.qZA(),e.qZA(),e._UZ(33,"br"),e._UZ(34,"br"),e._UZ(35,"br"),e._UZ(36,"br"),e.qZA(),e.qZA(),e.TgZ(37,"div",20),e.TgZ(38,"div",21),e.TgZ(39,"span",22),e.NdJ("click",function(){return o.goToModel("car")}),e._uU(40,"Tractores"),e.qZA(),e.qZA(),e._UZ(41,"br"),e._UZ(42,"br"),e.TgZ(43,"app-machines",23),e.NdJ("triggerToNext",function(_){return o.triggerNext=_})("triggerToPrevious",function(_){return o.triggerPrevious=_})("modelSelect",function(_){return o.carSelect=_}),e.qZA(),e.qZA(),e.TgZ(44,"div",24),e._uU(45," i "),e._UZ(46,"app-form",25),e.TgZ(47,"button",26),e.NdJ("click",function(){return o.previous()}),e._uU(48,"Previous"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&i&&(e.xp6(14),e.Q6J("disabled",o.disabledBrand),e.xp6(7),e.Q6J("disabled",o.disabledModel),e.xp6(22),e.Q6J("brandSelection",o.brandSelection)("modelSelection",o.modelSelection),e.xp6(3),e.Q6J("modelSelection",o.carSelect))},directives:[g.Wh,g.yH,g.xw,g.SQ,k,x],styles:["@font-face{font-family:ribeye;src:url(/assets/font/Ribeye-Regular.ttf)}.animate__animated.animate__fadeIn[_ngcontent-%COMP%]{--animate-duration: 3s}img[_ngcontent-%COMP%], span[_ngcontent-%COMP%]{cursor:pointer}span[_ngcontent-%COMP%]:hover{color:#00f;font-weight:700}#johnDeere[_ngcontent-%COMP%]:hover{transform:scale(1.1)}#next[_ngcontent-%COMP%]{font-size:2vw;font-family:poppins;border:1.5px solid black;background-color:#fff;border-radius:5px;padding:10px}#next[_ngcontent-%COMP%]:hover{border:1.5px solid blue}@media only screen and (min-width: 769px)and (max-width: 1024px){img[_ngcontent-%COMP%]{height:700px}}@media only screen and (min-width: 1025px){img[_ngcontent-%COMP%]{height:900px}}"]}),t})()},{path:"**",redirectTo:"maquinas-agricolas"}]}];let l=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[f.ez,T.Bz.forChild(r)],T.Bz]}),t})(),a=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({providers:[x],imports:[[f.ez,l,Z.o9,m.UX]]}),t})()},3094:function(q){q.exports=function(){"use strict";function b(){return b=Object.assign||function(p){for(var s=1;s<arguments.length;s++){var n=arguments[s];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(p[r]=n[r])}return p},b.apply(this,arguments)}var h=window.Element.prototype.matches,f=function(s,n){return s.closest(n)},Z=function(s,n){return new window.Event(s,n)},m=function(s,n){return new window.CustomEvent(s,n)};!function T(){if(window.Element.prototype.matches||(h=window.Element.prototype.msMatchesSelector||window.Element.prototype.webkitMatchesSelector),window.Element.prototype.closest||(f=function(n,r){if(!document.documentElement.contains(n))return null;do{if(h.call(n,r))return n;n=n.parentElement||n.parentNode}while(null!==n&&1===n.nodeType);return null}),(!window.Event||"function"!=typeof window.Event)&&(Z=function(n,r){r=r||{};var l=document.createEvent("Event");return l.initEvent(n,Boolean(r.bubbles),Boolean(r.cancelable)),l}),"function"!=typeof window.CustomEvent){var p=window.Event.prototype.preventDefault;m=function(n,r){var l=document.createEvent("CustomEvent");return l.initCustomEvent(n,(r=r||{bubbles:!1,cancelable:!1,detail:null}).bubbles,r.cancelable,r.detail),l.preventDefault=function(){!this.cancelable||(p.call(this),Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}}))},l}}}();var d_ACTIVE="active",d_LINEAR="linear",d_BLOCK="dstepper-block",d_NONE="dstepper-none",d_FADE="fade",d_VERTICAL="vertical",e="transitionend",g="bsStepper",v=function(s,n,r,l){var a=s[g];if(!a._steps[n].classList.contains(d_ACTIVE)&&!a._stepsContents[n].classList.contains(d_ACTIVE)){var t=m("show.bs-stepper",{cancelable:!0,detail:{from:a._currentIndex,to:n,indexStep:n}});s.dispatchEvent(t);var c=a._steps.filter(function(o){return o.classList.contains(d_ACTIVE)}),i=a._stepsContents.filter(function(o){return o.classList.contains(d_ACTIVE)});t.defaultPrevented||(c.length&&c[0].classList.remove(d_ACTIVE),i.length&&(i[0].classList.remove(d_ACTIVE),!s.classList.contains(d_VERTICAL)&&!a.options.animation&&i[0].classList.remove(d_BLOCK)),S(s,a._steps[n],a._steps,r),L(s,a._stepsContents[n],a._stepsContents,i,l))}},S=function(s,n,r,l){r.forEach(function(t){var c=t.querySelector(l.selectors.trigger);c.setAttribute("aria-selected","false"),s.classList.contains(d_LINEAR)&&c.setAttribute("disabled","disabled")}),n.classList.add(d_ACTIVE);var a=n.querySelector(l.selectors.trigger);a.setAttribute("aria-selected","true"),s.classList.contains(d_LINEAR)&&a.removeAttribute("disabled")},L=function(s,n,r,l,a){var t=s[g],c=r.indexOf(n),i=m("shown.bs-stepper",{cancelable:!0,detail:{from:t._currentIndex,to:c,indexStep:c}});if(n.classList.contains(d_FADE)){n.classList.remove(d_NONE);var u=E(n);n.addEventListener(e,function o(){n.classList.add(d_BLOCK),n.removeEventListener(e,o),s.dispatchEvent(i),a()}),l.length&&l[0].classList.add(d_NONE),n.classList.add(d_ACTIVE),w(n,u)}else n.classList.add(d_ACTIVE),n.classList.add(d_BLOCK),s.dispatchEvent(i),a()},E=function(s){if(!s)return 0;var n=window.getComputedStyle(s).transitionDuration;return parseFloat(n)?(n=n.split(",")[0],1e3*parseFloat(n)):0},w=function(s,n){var r=!1,a=n+5;function t(){r=!0,s.removeEventListener(e,t)}s.addEventListener(e,t),window.setTimeout(function(){r||s.dispatchEvent(Z(e)),s.removeEventListener(e,t)},a)},y={linear:!0,animation:!1,selectors:{steps:".step",trigger:".step-trigger",stepper:".bs-stepper"}};return function(){function p(n,r){var l=this;void 0===r&&(r={}),this._element=n,this._currentIndex=0,this._stepsContents=[],this.options=b({},y,{},r),this.options.selectors=b({},y.selectors,{},this.options.selectors),this.options.linear&&this._element.classList.add(d_LINEAR),this._steps=[].slice.call(this._element.querySelectorAll(this.options.selectors.steps)),this._steps.filter(function(a){return a.hasAttribute("data-target")}).forEach(function(a){l._stepsContents.push(l._element.querySelector(a.getAttribute("data-target")))}),function(s,n){n.animation&&s.forEach(function(r){r.classList.add(d_FADE),r.classList.add(d_NONE)})}(this._stepsContents,this.options),this._setLinkListeners(),Object.defineProperty(this._element,g,{value:this,writable:!0}),this._steps.length&&v(this._element,this._currentIndex,this.options,function(){})}var s=p.prototype;return s._setLinkListeners=function(){var r=this;this._steps.forEach(function(l){var a=l.querySelector(r.options.selectors.trigger);r.options.linear?(r._clickStepLinearListener=function(n){n.preventDefault()},a.addEventListener("click",r._clickStepLinearListener)):(r._clickStepNonLinearListener=function(s){return function(r){r.preventDefault();var l=f(r.target,s.selectors.steps),a=f(l,s.selectors.stepper),t=a[g],c=t._steps.indexOf(l);v(a,c,s,function(){t._currentIndex=c})}}(r.options),a.addEventListener("click",r._clickStepNonLinearListener))})},s.next=function(){var r=this,l=this._currentIndex+1<=this._steps.length-1?this._currentIndex+1:this._steps.length-1;v(this._element,l,this.options,function(){r._currentIndex=l})},s.previous=function(){var r=this,l=this._currentIndex-1>=0?this._currentIndex-1:0;v(this._element,l,this.options,function(){r._currentIndex=l})},s.to=function(r){var l=this,a=r-1,t=a>=0&&a<this._steps.length?a:0;v(this._element,t,this.options,function(){l._currentIndex=t})},s.reset=function(){var r=this;v(this._element,0,this.options,function(){r._currentIndex=0})},s.destroy=function(){var r=this;this._steps.forEach(function(l){l.querySelector(r.options.selectors.trigger).removeEventListener("click",r.options.linear?r._clickStepLinearListener:r._clickStepNonLinearListener)}),this._element[g]=void 0,this._element=void 0,this._currentIndex=void 0,this._steps=void 0,this._stepsContents=void 0,this._clickStepLinearListener=void 0,this._clickStepNonLinearListener=void 0},p}()}()}}]);