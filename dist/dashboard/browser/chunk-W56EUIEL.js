import{B as w,C as S,D as v,E as _,F as l,G as a,H as P,I as ae,J as le,K as N,L as d,M as y,R as k,S as ue,T as ce,U as de,V as he,W as fe,X as z,Y as C,a as c,b as f,ba as pe,ca as ge,da as me,e as te,ea as q,f as ne,g as ie,h as re,i as H,ia as ve,ja as _e,k as R,l as p,la as V,n as O,o as g,p as L,q as m,r as oe,s as M,t as A,u as se,v as W,w as x,x as u,y as s,z as $}from"./chunk-MLBTADIJ.js";var we=(()=>{let e=class e{constructor(i,r){this._renderer=i,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(i,r){this._renderer.setProperty(this._elementRef.nativeElement,i,r)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}};e.\u0275fac=function(r){return new(r||e)(s($),s(W))},e.\u0275dir=m({type:e});let t=e;return t})(),Re=(()=>{let e=class e extends we{};e.\u0275fac=(()=>{let i;return function(o){return(i||(i=se(e)))(o||e)}})(),e.\u0275dir=m({type:e,features:[w]});let t=e;return t})(),Ee=new p("");var Le={provide:Ee,useExisting:H(()=>B),multi:!0};function We(){let t=q()?q().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var $e=new p(""),B=(()=>{let e=class e extends we{constructor(i,r,o){super(i,r),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!We())}writeValue(i){let r=i??"";this.setProperty("value",r)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}};e.\u0275fac=function(r){return new(r||e)(s($),s(W),s($e,8))},e.\u0275dir=m({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,o){r&1&&d("input",function(b){return o._handleInput(b.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(b){return o._compositionEnd(b.target.value)})},features:[z([Le]),w]});let t=e;return t})();var ze=new p(""),qe=new p("");function Fe(t){return t!=null}function Ie(t){return pe(t)?ne(t):t}function Oe(t){let e={};return t.forEach(n=>{e=n!=null?c(c({},e),n):e}),Object.keys(e).length===0?null:e}function xe(t,e){return e.map(n=>n(t))}function Ze(t){return!t.validate}function Se(t){return t.map(e=>Ze(e)?e:n=>e.validate(n))}function Ye(t){if(!t)return null;let e=t.filter(Fe);return e.length==0?null:function(n){return Oe(xe(n,e))}}function Pe(t){return t!=null?Ye(Se(t)):null}function Xe(t){if(!t)return null;let e=t.filter(Fe);return e.length==0?null:function(n){let i=xe(n,e).map(Ie);return re(i).pipe(ie(Oe))}}function Ne(t){return t!=null?Xe(Se(t)):null}function ye(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function Ke(t){return t._rawValidators}function Je(t){return t._rawAsyncValidators}function Z(t){return t?Array.isArray(t)?t:[t]:[]}function G(t,e){return Array.isArray(t)?t.includes(e):t===e}function Ce(t,e){let n=Z(e);return Z(t).forEach(r=>{G(n,r)||n.push(r)}),n}function Ve(t,e){return Z(e).filter(n=>!G(t,n))}var j=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Pe(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Ne(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},Y=class extends j{get formDirective(){return null}get path(){return null}},I=class extends j{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},X=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},Qe={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Rt=f(c({},Qe),{"[class.ng-submitted]":"isSubmitted"}),ke=(()=>{let e=class e extends X{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(s(I,2))},e.\u0275dir=m({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){r&2&&_("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[w]});let t=e;return t})();var E="VALID",T="INVALID",D="PENDING",F="DISABLED";function et(t){return(U(t)?t.validators:t)||null}function tt(t){return Array.isArray(t)?Pe(t):t||null}function nt(t,e){return(U(e)?e.asyncValidators:t)||null}function it(t){return Array.isArray(t)?Ne(t):t||null}function U(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}var K=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===E}get invalid(){return this.status===T}get pending(){return this.status==D}get disabled(){return this.status===F}get enabled(){return this.status!==F}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Ce(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Ce(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Ve(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Ve(e,this._rawAsyncValidators))}hasValidator(e){return G(this._rawValidators,e)}hasAsyncValidator(e){return G(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(n=>{n.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=D,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=F,this.errors=null,this._forEachChild(i=>{i.disable(f(c({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(f(c({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=E,this._forEachChild(i=>{i.enable(f(c({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(f(c({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===E||this.status===D)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?F:E}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=D,this._hasOwnPendingAsyncValidator=!0;let n=Ie(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((i,r)=>i&&i._find(r),this)}getError(e,n){let i=n?this.get(n):this;return i&&i.errors?i.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new x,this.statusChanges=new x}_calculateStatus(){return this._allControlsDisabled()?F:this.errors?T:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(D)?D:this._anyControlsHaveStatus(T)?T:E}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){U(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=tt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=it(this._rawAsyncValidators)}};var Te=new p("CallSetDisabledState",{providedIn:"root",factory:()=>Q}),Q="always";function rt(t,e){return[...e.path,t]}function ot(t,e,n=Q){at(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),lt(t,e),ct(t,e),ut(t,e),st(t,e)}function De(t,e){t.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function st(t,e){if(e.valueAccessor.setDisabledState){let n=i=>{e.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}function at(t,e){let n=Ke(t);e.validator!==null?t.setValidators(ye(n,e.validator)):typeof n=="function"&&t.setValidators([n]);let i=Je(t);e.asyncValidator!==null?t.setAsyncValidators(ye(i,e.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();De(e._rawValidators,r),De(e._rawAsyncValidators,r)}function lt(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&Ge(t,e)})}function ut(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&Ge(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function Ge(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function ct(t,e){let n=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}function dt(t,e){if(!t.hasOwnProperty("model"))return!1;let n=t.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function ht(t){return Object.getPrototypeOf(t.constructor)===Re}function ft(t,e){if(!e)return null;Array.isArray(e);let n,i,r;return e.forEach(o=>{o.constructor===B?n=o:ht(o)?i=o:r=o}),r||i||n||null}function be(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function Me(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var pt=class extends K{constructor(e=null,n,i){super(et(n),nt(i,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),U(n)&&(n.nonNullable||n.initialValueIsDefault)&&(Me(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){be(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){be(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Me(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var gt={provide:I,useExisting:H(()=>ee)},Ae=Promise.resolve(),ee=(()=>{let e=class e extends I{constructor(i,r,o,h,b,He){super(),this._changeDetectorRef=b,this.callSetDisabledState=He,this.control=new pt,this._registered=!1,this.name="",this.update=new x,this._parent=i,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=ft(this,h)}ngOnChanges(i){if(this._checkForErrors(),!this._registered||"name"in i){if(this._registered&&(this._checkName(),this.formDirective)){let r=i.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in i&&this._updateDisabled(i),dt(i,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){ot(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(i){Ae.then(()=>{this.control.setValue(i,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(i){let r=i.isDisabled.currentValue,o=r!==0&&me(r);Ae.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(i){return this._parent?rt(i,this._parent):[i]}};e.\u0275fac=function(r){return new(r||e)(s(Y,9),s(ze,10),s(qe,10),s(Ee,10),s(ge,8),s(Te,8))},e.\u0275dir=m({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[O.None,"disabled","isDisabled"],model:[O.None,"ngModel","model"],options:[O.None,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[z([gt]),w,oe]});let t=e;return t})();var mt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=L({type:e}),e.\u0275inj=R({});let t=e;return t})();var je=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:Te,useValue:i.callSetDisabledState??Q}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=L({type:e}),e.\u0275inj=R({imports:[mt]});let t=e;return t})();var Be=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=g({type:e,selectors:[["item-list"]],inputs:{id:"id",name:"name"},standalone:!0,features:[C],decls:4,vars:1,consts:[[1,"item-list"],[1,"item-name"]],template:function(r,o){r&1&&(l(0,"div",0)(1,"div",1)(2,"span"),k(3),a()()()),r&2&&(u(3),ce(" ",o.name," "))},dependencies:[V],styles:[".item-list[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:space-between;padding:10px 20px;cursor:pointer;border:1px solid gainsboro;font-size:12px;outline:none;font-weight:700}.item-list[_ngcontent-%COMP%]:hover{background-color:#dcdcdc}"],changeDetection:0});let t=e;return t})();function yt(t,e){if(t&1){let n=N();l(0,"item-list",2),d("click",function(){let r=M(n).$implicit,o=y();return A(o.onSelect(r))}),a()}if(t&2){let n=e.$implicit;v("name",n.name)("id",n.id)}}var Ue=(()=>{let e=class e{constructor(){this.isHidden=!1,this.items=[],this.filteredItems=[]}ngOnInit(){console.log(this.items),this.filteredItems=this.items,this.filterListener?.subscribe({next:i=>{this.filterItems(i)}})}filterItems(i){this.filteredItems=this.items.filter(r=>r.name.toLowerCase().startsWith(i.toLowerCase()))}onSelect(i){this.onSelectItem(i)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=g({type:e,selectors:[["listview"]],inputs:{isHidden:"isHidden",onSelectItem:"onSelectItem",items:"items",filterListener:"filterListener"},standalone:!0,features:[C],decls:2,vars:3,consts:[[1,"list"],[3,"name","id","click",4,"ngFor","ngForOf"],[3,"click","name","id"]],template:function(r,o){r&1&&(l(0,"div",0),S(1,yt,1,2,"item-list",1),a()),r&2&&(_("li--ovhidden",o.isHidden),u(),v("ngForOf",o.filteredItems))},dependencies:[V,ve,Be],styles:[".list.li--ovhidden[_ngcontent-%COMP%]{margin-top:10px;max-height:150px;overflow-y:auto;padding-right:7px}.li--ovhidden[_ngcontent-%COMP%]::-webkit-scrollbar{width:7px}.li--ovhidden[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#f1f1f1;border-radius:25px}.li--ovhidden[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:var(--main-color);border-radius:25px}.li--ovhidden[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:var(--main-color)}"]});let t=e;return t})();function Ct(t,e){if(t&1){let n=N();ae(0),l(1,"div",4)(2,"div",5),P(3,"i",6),l(4,"input",7),d("input",function(r){M(n);let o=y();return A(o.searchTerm(r))}),fe("ngModelChange",function(r){M(n);let o=y();return he(o.searchText,r)||(o.searchText=r),A(r)}),a()(),P(5,"listview",8),a(),le()}if(t&2){let n=y();u(4),de("ngModel",n.searchText),u(),v("items",n.data)("isHidden",!0)("onSelectItem",n.onSelectItem)("filterListener",n.searchTerm$)}}var en=(()=>{let e=class e{constructor(){this.searchTerm$=new te,this.isToggle=!1,this.searchInput="Select Country",this.searchText="",this.onSelectItem=i=>{this.formControl.setValue(i.name),this.searchInput=i.name,this.isToggle=!1}}ngOnInit(){console.log({data:this.data}),this.formControl.value&&this.formControl.value.length>0&&(this.searchInput=this.formControl.value)}searchTerm(i){i.target.value&&this.searchTerm$.next(i.target.value)}updateToggle(){this.isToggle=!this.isToggle}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=g({type:e,selectors:[["input-value"]],inputs:{placeholder:"placeholder",data:"data",formControl:"formControl"},standalone:!0,features:[C],decls:6,vars:4,consts:[[1,"select-country"],[1,"select-btn",3,"click"],[1,"fa-solid","fa-chevron-down","fa-2xs"],[4,"ngIf"],[1,"content"],[1,"search"],[1,"uil","uil-search"],["spellcheck","false","type","text","placeholder","Search",3,"input","ngModelChange","ngModel"],[3,"items","isHidden","onSelectItem","filterListener"]],template:function(r,o){r&1&&(l(0,"div",0)(1,"div",1),d("click",function(){return o.updateToggle()}),l(2,"span"),k(3),a(),P(4,"i",2),a(),S(5,Ct,6,5,"ng-container",3),a()),r&2&&(_("active",o.isToggle),u(3),ue(o.searchInput),u(2),v("ngIf",o.isToggle))},dependencies:[V,_e,Ue,je,B,ke,ee],styles:[".select-btn[_ngcontent-%COMP%], li[_ngcontent-%COMP%]{display:flex;align-items:center;cursor:pointer}.select-btn[_ngcontent-%COMP%]{padding:10px 20px;background:#fff;border-radius:7px;justify-content:space-between;border:1px solid gainsboro;font-weight:700;font-size:12px}.select-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:12px;transition:transform .3s linear}.select-country.active[_ngcontent-%COMP%]   .select-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{transform:rotate(-180deg)}.content[_ngcontent-%COMP%]{position:absolute;display:none;padding:10px;margin-top:15px;background:#fff;border-radius:7px;box-shadow:0 10px 25px #0000001a;z-index:2}.select-country.active[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{display:block}.content[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]{position:relative}.search[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{top:50%;left:15px;color:#999;font-size:20px;pointer-events:none;transform:translateY(-50%);position:absolute}.search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{outline:none;font-size:12px;border-radius:5px;padding:10px 20px;border:1px solid gainsboro;width:100%}.search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{padding-left:42px;border:2px solid var(--main-color)}.search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{color:#bfbfbf}listview[_ngcontent-%COMP%]{margin-top:10px;max-height:150px;overflow-y:auto;padding-right:7px}listview[_ngcontent-%COMP%]::-webkit-scrollbar{width:7px}listview[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#f1f1f1;border-radius:25px}listview[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:var(--main-color);border-radius:25px}listview[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:var(--main-color)}@media (max-width: 768px){.select-btn[_ngcontent-%COMP%]{font-size:12px;height:40px}.search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{outline:none;font-size:12px;border-radius:5px;padding:10px 20px;width:100%}.select-btn[_ngcontent-%COMP%], .search[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:12px}listview[_ngcontent-%COMP%]{height:30px;padding:13px;font-size:12px}.select-country[_ngcontent-%COMP%]{width:100%}.select-country.active[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{width:90%}}"],changeDetection:0});let t=e;return t})();export{B as a,ke as b,pt as c,ee as d,je as e,Ue as f,en as g};