import './polyfills.server.mjs';
import{c as Se}from"./chunk-E64U5GZN.mjs";import{b as $,c as J,f as U,i as G,j as Ee,k as w,l as Me,m as Fe,n as V}from"./chunk-IHFQ224D.mjs";import{$ as he,Da as be,J as l,Ja as D,K as h,Ka as j,La as ye,P as C,Q as me,R as f,S as fe,T as s,Ta as N,U as a,Ua as _e,V as y,Wa as xe,Xa as we,Y as H,Ya as Ae,Z as g,_ as d,aa as ge,ba as Ce,bb as Re,c as v,ca as re,cb as ke,da as c,e as P,ea as L,eb as Ie,ga as k,gb as E,h as A,ha as S,i as ie,ia as I,ib as Te,j as W,k as R,ka as T,l as de,ma as se,n as b,o as ne,r as ue,s as _,t as x,ua as ve,w as oe}from"./chunk-HM557RPL.mjs";import{h as le}from"./chunk-5XUXGTUW.mjs";var z=class i{title="book-social-ui";static \u0275fac=function(e){return new(e||i)};static \u0275cmp=b({type:i,selectors:[["app-root"]],standalone:!0,features:[T],decls:1,vars:0,template:function(e,t){e&1&&y(0,"router-outlet")},dependencies:[Ie]})};function K(i,r,e,t){let n=new V(r,K.PATH,"get");return e&&n.query("token",e.token,{}),i.request(n.build({responseType:"json",accept:"application/json",context:t})).pipe(P(o=>o instanceof N),v(o=>o))}K.PATH="/auth/activate-account";function Q(i,r,e,t){let n=new V(r,Q.PATH,"post");return e&&n.body(e.body,"application/json"),i.request(n.build({responseType:"json",accept:"application/json",context:t})).pipe(P(o=>o instanceof N),v(o=>o))}Q.PATH="/auth/authenticate";function Z(i,r,e,t){let n=new V(r,Z.PATH,"post");return e&&n.body(e.body,"application/json"),i.request(n.build({responseType:"json",accept:"application/json",context:t})).pipe(P(o=>o instanceof N),v(o=>o))}Z.PATH="/auth/register";var F=class i extends Fe{constructor(r,e){super(r,e)}static RegisterPath="/auth/register";register$Response(r,e){return Z(this.http,this.rootUrl,r,e)}register(r,e){return this.register$Response(r,e).pipe(v(t=>t.body))}static AuthenticatePath="/auth/authenticate";authenticate$Response(r,e){return Q(this.http,this.rootUrl,r,e)}authenticate(r,e){return this.authenticate$Response(r,e).pipe(v(t=>t.body))}static ActiveAccountPath="/auth/activate-account";activeAccount$Response(r,e){return K(this.http,this.rootUrl,r,e)}activeAccount(r,e){return this.activeAccount$Response(r,e).pipe(v(t=>t.body))}static \u0275fac=function(e){return new(e||i)(R(Me),R(_e))};static \u0275prov=A({token:i,factory:i.\u0275fac,providedIn:"root"})};var We=new W("JWT_OPTIONS"),Oe=(()=>{class i{constructor(e=null){this.tokenGetter=e&&e.tokenGetter||function(){}}urlBase64Decode(e){let t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:{t+="==";break}case 3:{t+="=";break}default:throw new Error("Illegal base64url string!")}return this.b64DecodeUnicode(t)}b64decode(e){let t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",n="";if(e=String(e).replace(/=+$/,""),e.length%4===1)throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");for(let o=0,p,u,m=0;u=e.charAt(m++);~u&&(p=o%4?p*64+u:u,o++%4)?n+=String.fromCharCode(255&p>>(-2*o&6)):0)u=t.indexOf(u);return n}b64DecodeUnicode(e){return decodeURIComponent(Array.prototype.map.call(this.b64decode(e),t=>"%"+("00"+t.charCodeAt(0).toString(16)).slice(-2)).join(""))}decodeToken(e=this.tokenGetter()){return e instanceof Promise?e.then(t=>this._decodeToken(t)):this._decodeToken(e)}_decodeToken(e){if(!e||e==="")return null;let t=e.split(".");if(t.length!==3)throw new Error("The inspected token doesn't appear to be a JWT. Check to make sure it has three parts and see https://jwt.io for more.");let n=this.urlBase64Decode(t[1]);if(!n)throw new Error("Cannot decode the token.");return JSON.parse(n)}getTokenExpirationDate(e=this.tokenGetter()){return e instanceof Promise?e.then(t=>this._getTokenExpirationDate(t)):this._getTokenExpirationDate(e)}_getTokenExpirationDate(e){let t;if(t=this.decodeToken(e),!t||!t.hasOwnProperty("exp"))return null;let n=new Date(0);return n.setUTCSeconds(t.exp),n}isTokenExpired(e=this.tokenGetter(),t){return e instanceof Promise?e.then(n=>this._isTokenExpired(n,t)):this._isTokenExpired(e,t)}_isTokenExpired(e,t){if(!e||e==="")return!0;let n=this.getTokenExpirationDate(e);return t=t||0,n===null?!1:!(n.valueOf()>new Date().valueOf()+t*1e3)}getAuthScheme(e,t){return typeof e=="function"?e(t):e}}return i.\u0275fac=function(e){return new(e||i)(R(We))},i.\u0275prov=A({token:i,factory:i.\u0275fac}),i})();var O=class i{set token(r){localStorage.setItem("token",r)}get token(){return localStorage.getItem("token")}isTokenNotValid(){return!this.isTokenValid()}isTokenValid(){let r=this.token;return r?new Oe().isTokenExpired(r)?(localStorage.clear(),!1):!0:!1}static \u0275fac=function(e){return new(e||i)};static \u0275prov=A({token:i,factory:i.\u0275fac,providedIn:"root"})};function Je(i,r){if(i&1&&(s(0,"p"),c(1),a()),i&2){let e=r.$implicit;l(),L(e)}}function Ue(i,r){if(i&1&&(s(0,"div",11),C(1,Je,2,1,"p",12),a()),i&2){let e=d();l(),f("ngForOf",e.errorMsg)}}var Y=class i{constructor(r,e,t){this.router=r;this.authService=e;this.tokenService=t}authRequest={email:"",password:""};errorMsg=[];login(){this.errorMsg=[],this.authService.authenticate({body:this.authRequest}).subscribe({next:r=>{this.tokenService.token=r.data,this.router.navigate(["books"])},error:r=>{console.log(r.error.validationErrors),r.error.validationErrors?w.fire({title:"Error!",text:r.error.validationErrors,icon:"error",confirmButtonText:"Ok"}):w.fire({title:"Error!",text:"Email and / or Password is incorrect",icon:"error",confirmButtonText:"Ok"})}})}register(){this.router.navigate(["register"])}static \u0275fac=function(e){return new(e||i)(h(E),h(F),h(O))};static \u0275cmp=b({type:i,selectors:[["app-login"]],standalone:!0,features:[T],decls:22,vars:3,consts:[[1,"container-fluid","card","login-container"],[1,"text-center"],["class","alert alert-danger","role","alert",4,"ngIf"],[1,"mb-3"],[1,"form-label"],["type","email","id","login","placeholder","name@example.com",1,"form-control",3,"ngModelChange","ngModel"],["type","password","id","password","placeholder","password",1,"form-control",3,"ngModelChange","ngModel"],[1,"d-flex","justify-content-between","mb-3"],["type","button",1,"btn","btn-primary",3,"click"],[1,"fas","fa-sign-in-alt"],["type","button",1,"btn","btn-link",3,"click"],["role","alert",1,"alert","alert-danger"],[4,"ngFor","ngForOf"]],template:function(e,t){e&1&&(s(0,"div",0)(1,"h3",1),c(2,"Login"),a(),y(3,"hr"),C(4,Ue,2,1,"div",2),s(5,"div",3)(6,"label",4),c(7,"Email address"),a(),s(8,"input",5),I("ngModelChange",function(o){return S(t.authRequest.email,o)||(t.authRequest.email=o),o}),a()(),s(9,"div",3)(10,"label",4),c(11,"Password"),a(),s(12,"input",6),I("ngModelChange",function(o){return S(t.authRequest.password,o)||(t.authRequest.password=o),o}),a()(),s(13,"div",7)(14,"button",8),g("click",function(){return t.login()}),y(15,"em",9),c(16," \xA0 Sign in "),a(),s(17,"div"),c(18," Don't have an account? \xA0 "),s(19,"button",10),g("click",function(){return t.register()}),y(20,"em",9),c(21," \xA0 Register "),a()()()()),e&2&&(l(4),f("ngIf",t.errorMsg.length),l(4),k("ngModel",t.authRequest.email),l(4),k("ngModel",t.authRequest.password))},dependencies:[G,$,J,U,j,D]})};function Ge(i,r){if(i&1&&(s(0,"p"),c(1),a()),i&2){let e=r.$implicit;l(),L(e)}}function ze(i,r){if(i&1&&(s(0,"div",13),C(1,Ge,2,1,"p",14),a()),i&2){let e=d();l(),f("ngForOf",e.errorMsg)}}var X=class i{constructor(r,e){this.router=r;this.authService=e}registerRequest={email:"",firstName:"",lastName:"",password:""};errorMsg=[];login(){this.router.navigate(["login"])}register(){this.errorMsg=[],this.authService.register({body:this.registerRequest}).subscribe({next:()=>{w.fire({icon:"success",title:"User created successfully",confirmButtonText:"Ok"}).then(()=>this.router.navigate(["activate-account"]))},error:r=>{w.fire({title:"Error!",html:`
              ${r.error.validationErrors.join("<br>")}
            `,icon:"error",confirmButtonText:"Ok"})}})}static \u0275fac=function(e){return new(e||i)(h(E),h(F))};static \u0275cmp=b({type:i,selectors:[["app-register"]],standalone:!0,features:[T],decls:30,vars:5,consts:[[1,"container-fluid","card","login-container"],[1,"text-center"],["class","alert alert-danger","role","alert",4,"ngIf"],[1,"mb-3"],[1,"form-label"],["type","email","id","firstname","placeholder","John",1,"form-control",3,"ngModelChange","ngModel"],["type","email","id","lastname","placeholder","John",1,"form-control",3,"ngModelChange","ngModel"],["type","email","id","login","placeholder","name@example.com",1,"form-control",3,"ngModelChange","ngModel"],["type","password","id","password","placeholder","password",1,"form-control",3,"ngModelChange","ngModel"],[1,"d-flex","justify-content-between","mb-3"],["type","button",1,"btn","btn-primary",3,"click"],[1,"fas","fa-sign-in-alt"],["type","button",1,"btn","btn-link",3,"click"],["role","alert",1,"alert","alert-danger"],[4,"ngFor","ngForOf"]],template:function(e,t){e&1&&(s(0,"div",0)(1,"h3",1),c(2,"Create an account"),a(),y(3,"hr"),C(4,ze,2,1,"div",2),s(5,"div",3)(6,"label",4),c(7,"First Name"),a(),s(8,"input",5),I("ngModelChange",function(o){return S(t.registerRequest.firstName,o)||(t.registerRequest.firstName=o),o}),a()(),s(9,"div",3)(10,"label",4),c(11,"Last Name"),a(),s(12,"input",6),I("ngModelChange",function(o){return S(t.registerRequest.lastName,o)||(t.registerRequest.lastName=o),o}),a()(),s(13,"div",3)(14,"label",4),c(15,"Email address"),a(),s(16,"input",7),I("ngModelChange",function(o){return S(t.registerRequest.email,o)||(t.registerRequest.email=o),o}),a()(),s(17,"div",3)(18,"label",4),c(19,"Password"),a(),s(20,"input",8),I("ngModelChange",function(o){return S(t.registerRequest.password,o)||(t.registerRequest.password=o),o}),a()(),s(21,"div",9)(22,"button",10),g("click",function(){return t.register()}),y(23,"em",11),c(24," \xA0 Register "),a(),s(25,"div"),c(26," Already have an account? \xA0 "),s(27,"button",12),g("click",function(){return t.login()}),y(28,"em",11),c(29," \xA0 Login "),a()()()()),e&2&&(l(4),f("ngIf",t.errorMsg.length),l(4),k("ngModel",t.registerRequest.firstName),l(4),k("ngModel",t.registerRequest.lastName),l(4),k("ngModel",t.registerRequest.email),l(4),k("ngModel",t.registerRequest.password))},dependencies:[D,j,Ee,$,J,G,U]})};var Ke=["input"];function Qe(i,r){if(i&1){let e=H();s(0,"span")(1,"input",2,0),g("click",function(n){_(e);let o=d();return x(o.onClick(n))})("paste",function(n){let o=_(e).index,p=d();return x(p.onPaste(n,o))})("input",function(n){let o=_(e).index,p=d();return x(p.onInput(n,o))})("keydown",function(n){let o=_(e).index,p=d();return x(p.onKeydown(n,o))}),a()()}if(i&2){let e=d();fe("code-hidden",e.isCodeHidden),l(),f("type",e.inputType)("disabled",e.disabled),me("inputmode",e.inputMode)("autocapitalize",e.autocapitalize)}}var Le=new W("CodeInputComponentConfig"),He={codeLength:4,inputType:"tel",inputMode:"numeric",initialFocusField:void 0,isCharsCode:!1,isCodeHidden:!1,isPrevFocusableAfterClearing:!0,isFocusingOnLastByClickIfFilled:!1,code:void 0,disabled:!1,autocapitalize:void 0},q=function(i){return i[i.ready=0]="ready",i[i.reset=1]="reset",i}(q||{}),De=(()=>{class i{constructor(e){if(this.isNonDigitsCode=!1,this.codeChanged=new oe,this.codeCompleted=new oe,this.placeholders=[],this.inputs=[],this.inputsStates=[],this.state={isFocusingAfterAppearingCompleted:!1,isInitialFocusFieldEnabled:!1},Object.assign(this,He),!!e)for(let t in e)e.hasOwnProperty(t)&&He.hasOwnProperty(t)&&(this[t]=e[t])}ngOnInit(){this.state.isInitialFocusFieldEnabled=!this.isEmpty(this.initialFocusField),this.onCodeLengthChanges()}ngAfterViewInit(){this.inputsListSubscription=this.inputsList.changes.subscribe(this.onInputsListChanges.bind(this)),this.onInputsListChanges(this.inputsList)}ngAfterViewChecked(){this.focusOnInputAfterAppearing()}ngOnChanges(e){e.code&&this.onInputCodeChanges(),e.codeLength&&this.onCodeLengthChanges()}ngOnDestroy(){this.inputsListSubscription&&this.inputsListSubscription.unsubscribe()}reset(e=!1){this.onInputCodeChanges(),this.state.isInitialFocusFieldEnabled&&this.focusOnField(this.initialFocusField),e&&this.emitChanges()}focusOnField(e){if(e>=this._codeLength)throw new Error("The index of the focusing input box should be less than the codeLength.");this.inputs[e].focus()}onClick(e){if(!this.isFocusingOnLastByClickIfFilled)return;let t=e.target,n=this.inputs[this._codeLength-1];t===n||!(this.getCurrentFilledCode().length>=this._codeLength)||setTimeout(()=>n.focus())}onInput(e,t){let n=e.target,o=e.data||n.value;if(this.isEmpty(o))return;if(!this.canInputValue(o)){e.preventDefault(),e.stopPropagation(),this.setInputValue(n,null),this.setStateForInput(n,q.reset);return}let p=o.toString().trim().split("");for(let m=0;m<p.length;m++){let B=m+t;if(B>this._codeLength-1)break;this.setInputValue(this.inputs[B],p[m])}this.emitChanges();let u=t+p.length;if(u>this._codeLength-1){n.blur();return}this.inputs[u].focus()}onPaste(e,t){e.preventDefault(),e.stopPropagation();let n=e.clipboardData?e.clipboardData.getData("text").trim():void 0;if(this.isEmpty(n))return;let o=n.split(""),p=0;for(let u=t;u<this.inputs.length&&p!==o.length;u++){let m=this.inputs[u],B=o[p];if(!this.canInputValue(B)){this.setInputValue(m,null),this.setStateForInput(m,q.reset);return}this.setInputValue(m,B.toString()),p++}this.inputs[t].blur(),this.emitChanges()}onKeydown(e,t){return le(this,null,function*(){let n=e.target,o=this.isEmpty(n.value),p=t-1,u=yield this.isBackspaceKey(e),m=this.isDeleteKey(e);!u&&!m||(e.preventDefault(),this.setInputValue(n,null),o||this.emitChanges(),!(p<0||m)&&(o||this.isPrevFocusableAfterClearing)&&this.inputs[p].focus())})}onInputCodeChanges(){if(!this.inputs.length)return;if(this.isEmpty(this.code)){this.inputs.forEach(n=>{this.setInputValue(n,null)});return}let e=this.code.toString().trim().split(""),t=!0;for(let n of e)if(!this.canInputValue(n)){t=!1;break}this.inputs.forEach((n,o)=>{let p=t?e[o]:null;this.setInputValue(n,p)})}onCodeLengthChanges(){if(this.codeLength)if(this._codeLength=this.codeLength,this._codeLength>this.placeholders.length){let e=Array(this._codeLength-this.placeholders.length).fill(1);this.placeholders.splice(this.placeholders.length-1,0,...e)}else this._codeLength<this.placeholders.length&&this.placeholders.splice(this._codeLength)}onInputsListChanges(e){if(e.length>this.inputs.length){let t=e.filter((o,p)=>p>this.inputs.length-1);this.inputs.splice(this.inputs.length,0,...t.map(o=>o.nativeElement));let n=Array(t.length).fill(q.ready);this.inputsStates.splice(this.inputsStates.length,0,...n)}else e.length<this.inputs.length&&(this.inputs.splice(e.length),this.inputsStates.splice(e.length));this.onInputCodeChanges()}focusOnInputAfterAppearing(){this.state.isInitialFocusFieldEnabled&&(this.state.isFocusingAfterAppearingCompleted||(this.focusOnField(this.initialFocusField),this.state.isFocusingAfterAppearingCompleted=document.activeElement===this.inputs[this.initialFocusField]))}emitChanges(){setTimeout(()=>this.emitCode(),50)}emitCode(){let e=this.getCurrentFilledCode();this.codeChanged.emit(e),e.length>=this._codeLength&&this.codeCompleted.emit(e)}getCurrentFilledCode(){let e="";for(let t of this.inputs)this.isEmpty(t.value)||(e+=t.value);return e}isBackspaceKey(e){return e.key&&e.key.toLowerCase()==="backspace"||e.keyCode&&e.keyCode===8?Promise.resolve(!0):!e.keyCode||e.keyCode!==229?Promise.resolve(!1):new Promise(n=>{setTimeout(()=>{let o=e.target,p=this.getStateForInput(o)===q.reset;p&&this.setStateForInput(o,q.ready),n(o.selectionStart===0&&!p)})})}isDeleteKey(e){return e.key&&e.key.toLowerCase()==="delete"||e.keyCode&&e.keyCode===46}setInputValue(e,t){let n=this.isEmpty(t),o="has-value",p="empty";n?(e.value="",e.classList.remove(o),e.parentElement.classList.add(p)):(e.value=t,e.classList.add(o),e.parentElement.classList.remove(p))}canInputValue(e){return this.isEmpty(e)?!1:/^[0-9]+$/.test(e.toString())||this.isCharsCode||this.isNonDigitsCode}setStateForInput(e,t){let n=this.inputs.indexOf(e);n<0||(this.inputsStates[n]=t)}getStateForInput(e){let t=this.inputs.indexOf(e);return this.inputsStates[t]}isEmpty(e){return e==null||!e.toString().length}static{this.\u0275fac=function(t){return new(t||i)(h(Le,8))}}static{this.\u0275cmp=b({type:i,selectors:[["code-input"]],viewQuery:function(t,n){if(t&1&&he(Ke,5),t&2){let o;ge(o=Ce())&&(n.inputsList=o)}},inputs:{codeLength:"codeLength",inputType:"inputType",inputMode:"inputMode",initialFocusField:"initialFocusField",isNonDigitsCode:"isNonDigitsCode",isCharsCode:"isCharsCode",isCodeHidden:"isCodeHidden",isPrevFocusableAfterClearing:"isPrevFocusableAfterClearing",isFocusingOnLastByClickIfFilled:"isFocusingOnLastByClickIfFilled",code:"code",disabled:"disabled",autocapitalize:"autocapitalize"},outputs:{codeChanged:"codeChanged",codeCompleted:"codeCompleted"},features:[ue],decls:1,vars:1,consts:[["input",""],[3,"code-hidden",4,"ngFor","ngForOf"],["autocomplete","one-time-code",3,"click","paste","input","keydown","type","disabled"]],template:function(t,n){t&1&&C(0,Qe,3,6,"span",1),t&2&&f("ngForOf",n.placeholders)},dependencies:[D],styles:["[_nghost-%COMP%]{--text-security-type: disc;--item-spacing: 4px;--item-height: 4.375em;--item-border: 1px solid #dddddd;--item-border-bottom: 1px solid #dddddd;--item-border-has-value: 1px solid #dddddd;--item-border-bottom-has-value: 1px solid #dddddd;--item-border-focused: 1px solid #dddddd;--item-border-bottom-focused: 1px solid #dddddd;--item-shadow-focused: 0px 1px 5px rgba(221, 221, 221, 1);--item-border-radius: 5px;--item-background: transparent;--item-font-weight: 300;--color: #171516;display:flex;transform:translateZ(0);font-size:inherit;color:var(--color)}[_nghost-%COMP%]   span[_ngcontent-%COMP%]{display:block;flex:1;padding-right:var(--item-spacing)}[_nghost-%COMP%]   span[_ngcontent-%COMP%]:first-child{padding-left:var(--item-spacing)}[_nghost-%COMP%]   span.code-hidden[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{text-security:var(--text-security-type);-webkit-text-security:var(--text-security-type);-moz-text-security:var(--text-security-type)}[_nghost-%COMP%]   input[_ngcontent-%COMP%]{width:100%;height:var(--item-height);color:inherit;background:var(--item-background);text-align:center;font-size:inherit;font-weight:var(--item-font-weight);border:var(--item-border);border-bottom:var(--item-border-bottom);border-radius:var(--item-border-radius);-webkit-appearance:none;transform:translateZ(0);-webkit-transform:translate3d(0,0,0);outline:none}[_nghost-%COMP%]   input.has-value[_ngcontent-%COMP%]{border:var(--item-border-has-value);border-bottom:var(--item-border-bottom-has-value)}[_nghost-%COMP%]   input[_ngcontent-%COMP%]:focus{border:var(--item-border-focused);border-bottom:var(--item-border-bottom-focused);box-shadow:var(--item-shadow-focused)}"]})}}return i})(),je=(()=>{class i{static forRoot(e){return{ngModule:i,providers:[{provide:Le,useValue:e}]}}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275mod=ne({type:i})}static{this.\u0275inj=ie({imports:[ye]})}}return i})();function Ye(i,r){if(i&1){let e=H();s(0,"div",5)(1,"h2"),c(2,"Activation successful!"),a(),s(3,"p"),c(4,"Your account has been successfully activated!"),a(),s(5,"button",6),g("click",function(){_(e);let n=d(2);return x(n.redirectToLogin())}),c(6,"Go to Login!"),a()()}}function Xe(i,r){if(i&1){let e=H();s(0,"div",7)(1,"h2"),c(2,"Activation failed!"),a(),s(3,"p"),c(4),a(),s(5,"button",6),g("click",function(){_(e);let n=d(2);return x(n.submitted=!1)}),c(6,"Try again"),a()()}if(i&2){let e=d(2);l(4),L(e.message)}}function et(i,r){if(i&1&&(s(0,"div",3),C(1,Ye,7,0,"div",4)(2,Xe,7,1,"ng-template",null,1,se),a()),i&2){let e=re(3),t=d();l(),f("ngIf",t.isOkay)("ngIfElse",e)}}function tt(i,r){if(i&1){let e=H();s(0,"div",3)(1,"div",8)(2,"h2"),c(3,"Type your activation code:"),a(),s(4,"code-input",9),g("codeCompleted",function(n){_(e);let o=d();return x(o.onCodeCompleted(n))}),a()()()}i&2&&(l(4),f("isCodeHidden",!1)("codeLength",6)("code","number"))}var ee=class i{constructor(r,e){this.router=r;this.authService=e}message="";isOkay=!0;submitted=!1;onCodeCompleted(r){this.confirmAccount(r)}redirectToLogin(){this.router.navigate(["login"])}confirmAccount(r){this.authService.activeAccount({token:r}).subscribe({next:()=>{w.fire({icon:"success",title:"Your account has been successfully activated",confirmButtonText:"Ok"}).then(()=>{this.submitted=!0,this.isOkay=!0})},error:()=>{w.fire({title:"Error!",text:"Token has been expired or invalid!",icon:"error",confirmButtonText:"Ok"}).then(()=>{this.submitted=!0,this.isOkay=!1})}})}static \u0275fac=function(e){return new(e||i)(h(E),h(F))};static \u0275cmp=b({type:i,selectors:[["app-activate-account"]],standalone:!0,features:[T],decls:3,vars:2,consts:[["codeForm",""],["activationError",""],["class","container",4,"ngIf","ngIfElse"],[1,"container"],["class","activate-message",4,"ngIf","ngIfElse"],[1,"activate-message"],[1,"btn","btn-primary",3,"click"],[1,"activate-error"],[1,"text-center",2,"width","400px"],[3,"codeCompleted","isCodeHidden","codeLength","code"]],template:function(e,t){if(e&1&&C(0,et,4,2,"div",2)(1,tt,5,3,"ng-template",null,0,se),e&2){let n=re(2);f("ngIf",t.submitted)("ngIfElse",n)}},dependencies:[j,je,De],styles:[".container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100vh}.activate-message[_ngcontent-%COMP%], .activate-error[_ngcontent-%COMP%]{text-align:center}.activate-error[_ngcontent-%COMP%]{color:red}"]})};var te=class i{constructor(r,e){this.tokenService=r;this.router=e}canActivate(){return this.tokenService.isTokenNotValid()?(this.router.navigate(["login"]),!1):!0}static \u0275fac=function(e){return new(e||i)(R(O),R(E))};static \u0275prov=A({token:i,factory:i.\u0275fac})};var Ne=[{path:"login",component:Y},{path:"register",component:X},{path:"activate-account",component:ee},{path:"books",loadChildren:()=>import("./chunk-CWEONTNF.mjs").then(i=>i.BookModule),canActivate:[te]}];var Ve=(i,r)=>{if(i.url.includes("/auth/register"))return r(i);let t=de(O).token;if(t){let n=i.clone({setHeaders:{Authorization:`Bearer ${t}`}});return r(n)}return r(i)};var qe={providers:[ve({eventCoalescing:!0}),Te(Ne),ke(),xe(Ae(),we([Ve]))]};var it={providers:[Se()]},Be=be(qe,it);var nt=()=>Re(z,Be),Oi=nt;export{Oi as a};
