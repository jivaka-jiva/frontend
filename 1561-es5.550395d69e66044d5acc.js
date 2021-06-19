!function(){function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return e(t,n);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return e(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function n(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var n,i=r(t);if(e){var o=r(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return a(this,n)}}function a(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function u(t,e,n){return e&&l(t.prototype,e),n&&l(t,n),t}(self.webpackChunkui=self.webpackChunkui||[]).push([[1561],{1561:function(e,i,a){"use strict";a.r(i),a.d(i,{DashboardPageModule:function(){return Ot}});var r=a(1116),l=a(1041),c=a(4812),p=a(3337),h=a(4762),d=a(6238),f=a(9996),m=a(2935),v=a(5366),g=a(3070),_=a(9550),y=a(4369);function b(t,e){1&t&&(v.TgZ(0,"mat-error"),v._uU(1," Please enter patient's unique ID "),v.qZA())}function w(t,e){1&t&&(v.TgZ(0,"mat-error"),v._uU(1," Please enter patient's name "),v.qZA())}var k=function(){var t=function(){function t(e,n,i){s(this,t),this.dialogRef=e,this.data=n,this.router=i}return u(t,[{key:"ngOnInit",value:function(){this.addPatientForm=new l.cw({patientName:new l.NI(null,l.kI.required),patientId:new l.NI(this.data.patientId,l.kI.required)})}},{key:"addPatient",value:function(){return(0,h.mG)(this,void 0,void 0,regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0=this.addPatientForm.valid,!t.t0){t.next=5;break}return t.next=4,this.closeModal();case 4:this.router.navigate(["treatments"],{queryParams:{patientId:this.addPatientForm.value.patientId}}).then();case 5:case"end":return t.stop()}},t,this)}))}},{key:"closeModal",value:function(){return(0,h.mG)(this,void 0,void 0,regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.dialogRef.close();case 2:case"end":return t.stop()}},t,this)}))}}]),t}();return t.\u0275fac=function(e){return new(e||t)(v.Y36(m.so),v.Y36(m.WI),v.Y36(p.F0))},t.\u0275cmp=v.Xpm({type:t,selectors:[["app-add-patient"]],decls:18,vars:3,consts:[["slot","end"],[3,"click"],["name","close-outline"],[1,"ion-justify-content-center","h-100","d-flex"],[1,"m-auto","card-dimensions"],[1,"single-line-container",2,"padding","2rem",3,"formGroup","ngSubmit"],["matInput","","placeholder","Patient ID","type","text","required","","formControlName","patientId"],[4,"ngIf"],["matInput","","placeholder","Name","type","text","required","","formControlName","patientName"],["mat-raised-button","","type","submit","color","primary",1,"mt-4",2,"margin-bottom","1.5em"]],template:function(t,e){1&t&&(v.TgZ(0,"ion-toolbar"),v.TgZ(1,"ion-title"),v._uU(2,"Add patient"),v.qZA(),v.TgZ(3,"ion-buttons",0),v.TgZ(4,"ion-button",1),v.NdJ("click",function(){return e.closeModal()}),v._UZ(5,"ion-icon",2),v.qZA(),v.qZA(),v.qZA(),v.TgZ(6,"ion-grid",3),v.TgZ(7,"ion-row"),v.TgZ(8,"div",4),v.TgZ(9,"form",5),v.NdJ("ngSubmit",function(){return e.addPatient()}),v.TgZ(10,"mat-form-field"),v._UZ(11,"input",6),v.YNc(12,b,2,0,"mat-error",7),v.qZA(),v.TgZ(13,"mat-form-field"),v._UZ(14,"input",8),v.YNc(15,w,2,0,"mat-error",7),v.qZA(),v.TgZ(16,"button",9),v._uU(17,"Add"),v.qZA(),v.qZA(),v.qZA(),v.qZA(),v.qZA()),2&t&&(v.xp6(9),v.Q6J("formGroup",e.addPatientForm),v.xp6(3),v.Q6J("ngIf",e.addPatientForm.get("patientId").hasError("required")),v.xp6(3),v.Q6J("ngIf",e.addPatientForm.get("patientName").hasError("required")))},directives:[c.sr,c.wd,c.Sm,c.YG,c.gu,c.jY,c.Nd,l._Y,l.JL,l.sg,g.KE,_.Nt,l.Fj,l.Q7,l.JJ,l.u,r.O5,y.lW,g.TO],styles:[""]}),t}(),O=a(8372),x=a(5431),A=a(7388),C=a(9861),P=a(3169),S=a(5706),Z=a(7570),T=a(5959),F=a(1450),I=a(1906),R=a(878),L=a(7254),q=a(5333),M=a(4700),E=a(9235),Y=a(2151),N=a(611),D=a(4689),z=a(3835),J=a(6599),V=a(8569),W=a(6673),j=a(3103),U=function(){function t(e,n){s(this,t),this.delay=e,this.scheduler=n}return u(t,[{key:"call",value:function(t,e){return e.subscribe(new G(t,this.delay,this.scheduler))}}]),t}(),G=function(t){n(i,t);var e=o(i);function i(t,n,o){var a;return s(this,i),(a=e.call(this,t)).delay=n,a.scheduler=o,a.queue=[],a.active=!1,a.errored=!1,a}return u(i,[{key:"_schedule",value:function(t){this.active=!0,this.destination.add(t.schedule(i.dispatch,this.delay,{source:this,destination:this.destination,scheduler:t}))}},{key:"scheduleNotification",value:function(t){if(!0!==this.errored){var e=this.scheduler,n=new B(e.now()+this.delay,t);this.queue.push(n),!1===this.active&&this._schedule(e)}}},{key:"_next",value:function(t){this.scheduleNotification(j.P.createNext(t))}},{key:"_error",value:function(t){this.errored=!0,this.queue=[],this.destination.error(t),this.unsubscribe()}},{key:"_complete",value:function(){this.scheduleNotification(j.P.createComplete()),this.unsubscribe()}}],[{key:"dispatch",value:function(t){for(var e=t.source,n=e.queue,i=t.scheduler,o=t.destination;n.length>0&&n[0].time-i.now()<=0;)n.shift().notification.observe(o);if(n.length>0){var a=Math.max(0,n[0].time-i.now());this.schedule(t,a)}else this.unsubscribe(),e.active=!1}}]),i}(W.L),B=function t(e,n){s(this,t),this.time=e,this.notification=n},H=a(4720),Q=["panel"];function K(t,e){if(1&t&&(v.TgZ(0,"div",0,1),v.Hsn(2),v.qZA()),2&t){var n=e.id,i=v.oxw();v.Q6J("id",i.id)("ngClass",i._classList),v.uIk("aria-label",i.ariaLabel||null)("aria-labelledby",i._getPanelAriaLabelledby(n))}}var X=["*"],$=0,tt=function t(e,n){s(this,t),this.source=e,this.option=n},et=(0,S.Kr)(function t(){s(this,t)}),nt=new v.OlP("mat-autocomplete-default-options",{providedIn:"root",factory:function(){return{autoActiveFirstOption:!1}}}),it=function(){var t=function(t){n(i,t);var e=o(i);function i(t,n,o,a){var r;return s(this,i),(r=e.call(this))._changeDetectorRef=t,r._elementRef=n,r._activeOptionChanges=Z.w.EMPTY,r.showPanel=!1,r._isOpen=!1,r.displayWith=null,r.optionSelected=new v.vpe,r.opened=new v.vpe,r.closed=new v.vpe,r.optionActivated=new v.vpe,r._classList={},r.id="mat-autocomplete-"+$++,r.inertGroups=(null==a?void 0:a.SAFARI)||!1,r._autoActiveFirstOption=!!o.autoActiveFirstOption,r}return u(i,[{key:"isOpen",get:function(){return this._isOpen&&this.showPanel}},{key:"autoActiveFirstOption",get:function(){return this._autoActiveFirstOption},set:function(t){this._autoActiveFirstOption=(0,C.Ig)(t)}},{key:"classList",set:function(t){this._classList=t&&t.length?(0,C.du)(t).reduce(function(t,e){return t[e]=!0,t},{}):{},this._setVisibilityClasses(this._classList),this._elementRef.nativeElement.className=""}},{key:"ngAfterContentInit",value:function(){var t=this;this._keyManager=new A.s1(this.options).withWrap(),this._activeOptionChanges=this._keyManager.change.subscribe(function(e){t.optionActivated.emit({source:t,option:t.options.toArray()[e]||null})}),this._setVisibility()}},{key:"ngOnDestroy",value:function(){this._activeOptionChanges.unsubscribe()}},{key:"_setScrollTop",value:function(t){this.panel&&(this.panel.nativeElement.scrollTop=t)}},{key:"_getScrollTop",value:function(){return this.panel?this.panel.nativeElement.scrollTop:0}},{key:"_setVisibility",value:function(){this.showPanel=!!this.options.length,this._setVisibilityClasses(this._classList),this._changeDetectorRef.markForCheck()}},{key:"_emitSelectEvent",value:function(t){var e=new tt(this,t);this.optionSelected.emit(e)}},{key:"_getPanelAriaLabelledby",value:function(t){return this.ariaLabel?null:this.ariaLabelledby?(t?t+" ":"")+this.ariaLabelledby:t}},{key:"_setVisibilityClasses",value:function(t){t[this._visibleClass]=this.showPanel,t[this._hiddenClass]=!this.showPanel}}]),i}(et);return t.\u0275fac=function(e){return new(e||t)(v.Y36(v.sBO),v.Y36(v.SBq),v.Y36(nt),v.Y36(P.t4))},t.\u0275dir=v.lG2({type:t,viewQuery:function(t,e){var n;(1&t&&(v.Gf(v.Rgc,7),v.Gf(Q,5)),2&t)&&(v.iGM(n=v.CRH())&&(e.template=n.first),v.iGM(n=v.CRH())&&(e.panel=n.first))},inputs:{displayWith:"displayWith",autoActiveFirstOption:"autoActiveFirstOption",classList:["class","classList"],ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],panelWidth:"panelWidth"},outputs:{optionSelected:"optionSelected",opened:"opened",closed:"closed",optionActivated:"optionActivated"},features:[v.qOj]}),t}(),ot=function(){var t,e=function(t){n(i,t);var e=o(i);function i(){var t;return s(this,i),(t=e.apply(this,arguments))._visibleClass="mat-autocomplete-visible",t._hiddenClass="mat-autocomplete-hidden",t}return i}(it);return e.\u0275fac=function(n){return(t||(t=v.n5z(e)))(n||e)},e.\u0275cmp=v.Xpm({type:e,selectors:[["mat-autocomplete"]],contentQueries:function(t,e,n){var i;(1&t&&(v.Suo(n,S.K7,5),v.Suo(n,S.ey,5)),2&t)&&(v.iGM(i=v.CRH())&&(e.optionGroups=i),v.iGM(i=v.CRH())&&(e.options=i))},hostAttrs:[1,"mat-autocomplete"],inputs:{disableRipple:"disableRipple"},exportAs:["matAutocomplete"],features:[v._Bn([{provide:S.HF,useExisting:e}]),v.qOj],ngContentSelectors:X,decls:1,vars:0,consts:[["role","listbox",1,"mat-autocomplete-panel",3,"id","ngClass"],["panel",""]],template:function(t,e){1&t&&(v.F$t(),v.YNc(0,K,3,4,"ng-template"))},directives:[r.mk],styles:[".mat-autocomplete-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;visibility:hidden;max-width:none;max-height:256px;position:relative;width:100%;border-bottom-left-radius:4px;border-bottom-right-radius:4px}.mat-autocomplete-panel.mat-autocomplete-visible{visibility:visible}.mat-autocomplete-panel.mat-autocomplete-hidden{visibility:hidden}.mat-autocomplete-panel-above .mat-autocomplete-panel{border-radius:0;border-top-left-radius:4px;border-top-right-radius:4px}.mat-autocomplete-panel .mat-divider-horizontal{margin-top:-1px}.cdk-high-contrast-active .mat-autocomplete-panel{outline:solid 1px}mat-autocomplete{display:none}\n"],encapsulation:2,changeDetection:0}),e}(),at=new v.OlP("mat-autocomplete-scroll-strategy"),rt={provide:at,deps:[q.aV],useFactory:function(t){return function(){return t.scrollStrategies.reposition()}}},st={provide:l.JU,useExisting:(0,v.Gpc)(function(){return ut}),multi:!0},lt=function(){var e=function(){function e(n,i,o,a,r,l,u,c,p,h,d){var f=this;s(this,e),this._element=n,this._overlay=i,this._viewContainerRef=o,this._zone=a,this._changeDetectorRef=r,this._dir=u,this._formField=c,this._document=p,this._viewportRuler=h,this._defaults=d,this._componentDestroyed=!1,this._autocompleteDisabled=!1,this._manuallyFloatingLabel=!1,this._viewportSubscription=Z.w.EMPTY,this._canOpenOnNextFocus=!0,this._closeKeyEventStream=new T.xQ,this._windowBlurHandler=function(){f._canOpenOnNextFocus=f._document.activeElement!==f._element.nativeElement||f.panelOpen},this._onChange=function(){},this._onTouched=function(){},this.position="auto",this.autocompleteAttribute="off",this._overlayAttached=!1,this.optionSelections=(0,F.P)(function(){return f.autocomplete&&f.autocomplete.options?I.T.apply(void 0,t(f.autocomplete.options.map(function(t){return t.onSelectionChange}))):f._zone.onStable.pipe((0,N.q)(1),(0,D.w)(function(){return f.optionSelections}))}),this._scrollStrategy=l}return u(e,[{key:"autocompleteDisabled",get:function(){return this._autocompleteDisabled},set:function(t){this._autocompleteDisabled=(0,C.Ig)(t)}},{key:"ngAfterViewInit",value:function(){var t=this,e=this._getWindow();void 0!==e&&this._zone.runOutsideAngular(function(){return e.addEventListener("blur",t._windowBlurHandler)})}},{key:"ngOnChanges",value:function(t){t.position&&this._positionStrategy&&(this._setStrategyPositions(this._positionStrategy),this.panelOpen&&this._overlayRef.updatePosition())}},{key:"ngOnDestroy",value:function(){var t=this._getWindow();void 0!==t&&t.removeEventListener("blur",this._windowBlurHandler),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete()}},{key:"panelOpen",get:function(){return this._overlayAttached&&this.autocomplete.showPanel}},{key:"openPanel",value:function(){this._attachOverlay(),this._floatLabel()}},{key:"closePanel",value:function(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this.autocomplete.closed.emit(),this.autocomplete._isOpen=this._overlayAttached=!1,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._componentDestroyed||this._changeDetectorRef.detectChanges())}},{key:"updatePosition",value:function(){this._overlayAttached&&this._overlayRef.updatePosition()}},{key:"panelClosingActions",get:function(){var t=this;return(0,I.T)(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe((0,z.h)(function(){return t._overlayAttached})),this._closeKeyEventStream,this._getOutsideClickStream(),this._overlayRef?this._overlayRef.detachments().pipe((0,z.h)(function(){return t._overlayAttached})):(0,R.of)()).pipe((0,f.U)(function(t){return t instanceof S.rN?t:null}))}},{key:"activeOption",get:function(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null}},{key:"_getOutsideClickStream",value:function(){var t=this;return(0,I.T)((0,L.R)(this._document,"click"),(0,L.R)(this._document,"auxclick"),(0,L.R)(this._document,"touchend")).pipe((0,z.h)(function(e){var n=t._isInsideShadowRoot&&e.composedPath?e.composedPath()[0]:e.target,i=t._formField?t._formField._elementRef.nativeElement:null,o=t.connectedTo?t.connectedTo.elementRef.nativeElement:null;return t._overlayAttached&&n!==t._element.nativeElement&&(!i||!i.contains(n))&&(!o||!o.contains(n))&&!!t._overlayRef&&!t._overlayRef.overlayElement.contains(n)}))}},{key:"writeValue",value:function(t){var e=this;Promise.resolve(null).then(function(){return e._setTriggerValue(t)})}},{key:"registerOnChange",value:function(t){this._onChange=t}},{key:"registerOnTouched",value:function(t){this._onTouched=t}},{key:"setDisabledState",value:function(t){this._element.nativeElement.disabled=t}},{key:"_handleKeydown",value:function(t){var e=t.keyCode;if(e!==E.hY||(0,E.Vb)(t)||t.preventDefault(),this.activeOption&&e===E.K5&&this.panelOpen)this.activeOption._selectViaInteraction(),this._resetActiveItem(),t.preventDefault();else if(this.autocomplete){var n=this.autocomplete._keyManager.activeItem,i=e===E.LH||e===E.JH;this.panelOpen||e===E.Mf?this.autocomplete._keyManager.onKeydown(t):i&&this._canOpen()&&this.openPanel(),(i||this.autocomplete._keyManager.activeItem!==n)&&this._scrollToOption(this.autocomplete._keyManager.activeItemIndex||0)}}},{key:"_handleInput",value:function(t){var e=t.target,n=e.value;"number"===e.type&&(n=""==n?null:parseFloat(n)),this._previousValue!==n&&(this._previousValue=n,this._onChange(n),this._canOpen()&&this._document.activeElement===t.target&&this.openPanel())}},{key:"_handleFocus",value:function(){this._canOpenOnNextFocus?this._canOpen()&&(this._previousValue=this._element.nativeElement.value,this._attachOverlay(),this._floatLabel(!0)):this._canOpenOnNextFocus=!0}},{key:"_floatLabel",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this._formField&&"auto"===this._formField.floatLabel&&(t?this._formField._animateAndLockLabel():this._formField.floatLabel="always",this._manuallyFloatingLabel=!0)}},{key:"_resetLabel",value:function(){this._manuallyFloatingLabel&&(this._formField.floatLabel="auto",this._manuallyFloatingLabel=!1)}},{key:"_subscribeToClosingActions",value:function(){var t=this,e=this._zone.onStable.pipe((0,N.q)(1)),n=this.autocomplete.options.changes.pipe((0,J.b)(function(){return t._positionStrategy.reapplyLastPosition()}),function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:V.P,i=(e=t)instanceof Date&&!isNaN(+e)?+t-n.now():Math.abs(t);return function(t){return t.lift(new U(i,n))}}(0));return(0,I.T)(e,n).pipe((0,D.w)(function(){var e=t.panelOpen;return t._resetActiveItem(),t.autocomplete._setVisibility(),t.panelOpen&&(t._overlayRef.updatePosition(),e!==t.panelOpen&&t.autocomplete.opened.emit()),t.panelClosingActions}),(0,N.q)(1)).subscribe(function(e){return t._setValueAndClose(e)})}},{key:"_destroyPanel",value:function(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}},{key:"_setTriggerValue",value:function(t){var e=this.autocomplete&&this.autocomplete.displayWith?this.autocomplete.displayWith(t):t,n=null!=e?e:"";this._formField?this._formField._control.value=n:this._element.nativeElement.value=n,this._previousValue=n}},{key:"_setValueAndClose",value:function(t){t&&t.source&&(this._clearPreviousSelectedOption(t.source),this._setTriggerValue(t.source.value),this._onChange(t.source.value),this._element.nativeElement.focus(),this.autocomplete._emitSelectEvent(t.source)),this.closePanel()}},{key:"_clearPreviousSelectedOption",value:function(t){this.autocomplete.options.forEach(function(e){e!==t&&e.selected&&e.deselect()})}},{key:"_attachOverlay",value:function(){var t,e=this;null==this._isInsideShadowRoot&&(this._isInsideShadowRoot=!!(0,P.kV)(this._element.nativeElement));var n=this._overlayRef;n?(this._positionStrategy.setOrigin(this._getConnectedElement()),n.updateSize({width:this._getPanelWidth()})):(this._portal=new Y.UE(this.autocomplete.template,this._viewContainerRef,{id:null===(t=this._formField)||void 0===t?void 0:t.getLabelId()}),n=this._overlay.create(this._getOverlayConfig()),this._overlayRef=n,n.keydownEvents().subscribe(function(t){(t.keyCode===E.hY&&!(0,E.Vb)(t)||t.keyCode===E.LH&&(0,E.Vb)(t,"altKey"))&&(e._resetActiveItem(),e._closeKeyEventStream.next(),t.stopPropagation(),t.preventDefault())}),this._viewportSubscription=this._viewportRuler.change().subscribe(function(){e.panelOpen&&n&&n.updateSize({width:e._getPanelWidth()})})),n&&!n.hasAttached()&&(n.attach(this._portal),this._closingActionsSubscription=this._subscribeToClosingActions());var i=this.panelOpen;this.autocomplete._setVisibility(),this.autocomplete._isOpen=this._overlayAttached=!0,this.panelOpen&&i!==this.panelOpen&&this.autocomplete.opened.emit()}},{key:"_getOverlayConfig",value:function(){var t;return new q.X_({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),width:this._getPanelWidth(),direction:this._dir,panelClass:null===(t=this._defaults)||void 0===t?void 0:t.overlayPanelClass})}},{key:"_getOverlayPosition",value:function(){var t=this._overlay.position().flexibleConnectedTo(this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1);return this._setStrategyPositions(t),this._positionStrategy=t,t}},{key:"_setStrategyPositions",value:function(t){var e,n=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],i=this._aboveClass,o=[{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:i},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:i}];e="above"===this.position?o:"below"===this.position?n:[].concat(n,o),t.withPositions(e)}},{key:"_getConnectedElement",value:function(){return this.connectedTo?this.connectedTo.elementRef:this._formField?this._formField.getConnectedOverlayOrigin():this._element}},{key:"_getPanelWidth",value:function(){return this.autocomplete.panelWidth||this._getHostWidth()}},{key:"_getHostWidth",value:function(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}},{key:"_resetActiveItem",value:function(){var t=this.autocomplete;t.autoActiveFirstOption?t._keyManager.setFirstItemActive():t._keyManager.setActiveItem(-1)}},{key:"_canOpen",value:function(){var t=this._element.nativeElement;return!t.readOnly&&!t.disabled&&!this._autocompleteDisabled}},{key:"_getWindow",value:function(){var t;return(null===(t=this._document)||void 0===t?void 0:t.defaultView)||window}},{key:"_scrollToOption",value:function(t){var e=this.autocomplete,n=(0,S.CB)(t,e.options,e.optionGroups);if(0===t&&1===n)e._setScrollTop(0);else if(e.panel){var i=e.options.toArray()[t];if(i){var o=i._getHostElement(),a=(0,S.jH)(o.offsetTop,o.offsetHeight,e._getScrollTop(),e.panel.nativeElement.offsetHeight);e._setScrollTop(a)}}}}]),e}();return e.\u0275fac=function(t){return new(t||e)(v.Y36(v.SBq),v.Y36(q.aV),v.Y36(v.s_b),v.Y36(v.R0b),v.Y36(v.sBO),v.Y36(at),v.Y36(H.Is,8),v.Y36(g.G_,9),v.Y36(r.K0,8),v.Y36(M.rL),v.Y36(nt,8))},e.\u0275dir=v.lG2({type:e,inputs:{position:["matAutocompletePosition","position"],autocompleteAttribute:["autocomplete","autocompleteAttribute"],autocompleteDisabled:["matAutocompleteDisabled","autocompleteDisabled"],autocomplete:["matAutocomplete","autocomplete"],connectedTo:["matAutocompleteConnectedTo","connectedTo"]},features:[v.TTD]}),e}(),ut=function(){var t,e=function(t){n(i,t);var e=o(i);function i(){var t;return s(this,i),(t=e.apply(this,arguments))._aboveClass="mat-autocomplete-panel-above",t}return i}(lt);return e.\u0275fac=function(n){return(t||(t=v.n5z(e)))(n||e)},e.\u0275dir=v.lG2({type:e,selectors:[["input","matAutocomplete",""],["textarea","matAutocomplete",""]],hostAttrs:[1,"mat-autocomplete-trigger"],hostVars:7,hostBindings:function(t,e){1&t&&v.NdJ("focusin",function(){return e._handleFocus()})("blur",function(){return e._onTouched()})("input",function(t){return e._handleInput(t)})("keydown",function(t){return e._handleKeydown(t)}),2&t&&v.uIk("autocomplete",e.autocompleteAttribute)("role",e.autocompleteDisabled?null:"combobox")("aria-autocomplete",e.autocompleteDisabled?null:"list")("aria-activedescendant",e.panelOpen&&e.activeOption?e.activeOption.id:null)("aria-expanded",e.autocompleteDisabled?null:e.panelOpen.toString())("aria-owns",e.autocompleteDisabled||!e.panelOpen||null==e.autocomplete?null:e.autocomplete.id)("aria-haspopup",!e.autocompleteDisabled)},exportAs:["matAutocompleteTrigger"],features:[v._Bn([st]),v.qOj]}),e}(),ct=function(){var t=function t(){s(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=v.oAB({type:t}),t.\u0275inj=v.cJS({providers:[rt],imports:[[q.U8,S.Ng,S.BQ,r.ez],M.ZD,S.Ng,S.BQ]}),t}(),pt=a(2797);function ht(t,e){if(1&t&&(v.TgZ(0,"mat-option",11),v._uU(1),v.qZA()),2&t){var n=e.$implicit;v.Q6J("value",n),v.xp6(1),v.hij(" ",n," ")}}function dt(t,e){if(1&t&&(v.TgZ(0,"h3"),v._uU(1),v.ALo(2,"currency"),v.qZA()),2&t){var n=v.oxw().$implicit;v.xp6(1),v.hij(" ",v.xi3(2,1,n.value,"INR")," ")}}function ft(t,e){if(1&t&&(v.TgZ(0,"h3"),v._uU(1),v.ALo(2,"number"),v.qZA()),2&t){var n=v.oxw().$implicit;v.xp6(1),v.hij(" ",v.lcZ(2,1,n.value)," ")}}var mt=function(t){return[t]};function vt(t,e){if(1&t&&(v.TgZ(0,"ion-col",12),v.TgZ(1,"mat-card",13),v.TgZ(2,"div",14),v.YNc(3,dt,3,4,"h3",15),v.YNc(4,ft,3,3,"h3",15),v.TgZ(5,"p"),v._uU(6),v.qZA(),v.qZA(),v.TgZ(7,"div",16),v._UZ(8,"i",17),v.qZA(),v.TgZ(9,"a",18),v._uU(10,"View More "),v._UZ(11,"i",19),v.qZA(),v.qZA(),v.qZA()),2&t){var n=e.$implicit;v.Q6J("size",n.colClasses.xs)("sizeSm",n.colClasses.sm)("sizeMd",n.colClasses.md)("sizeLg",n.colClasses.lg)("sizeXl",n.colClasses.xl),v.xp6(1),v.Q6J("ngClass",n.cardColor),v.xp6(2),v.Q6J("ngIf","currency"===n.type),v.xp6(1),v.Q6J("ngIf","value"===n.type),v.xp6(2),v.hij(" ",n.title," "),v.xp6(2),v.Q6J("ngClass",n.icon),v.xp6(1),v.Q6J("routerLink",v.VKq(11,mt,n.viewMoreLink))}}var gt,_t,yt=[{path:"",component:(gt=function(){function t(e,n,i){s(this,t),this.router=e,this.storage=n,this.dialog=i,this.cards=[],this.myControl=new l.NI,this.patients=[{id:"FSFDS2242EW",name:"Patient 1"},{id:"DSFJD7642FS",name:"Patient 2"},{id:"KDSFJ7322FG",name:"Patient 3"},{id:"PYTUT6552HG",name:"Patient 4"}]}return u(t,[{key:"ngOnInit",value:function(){var t=this;this.initializeCards().then(),this.filteredPatients=this.myControl.valueChanges.pipe((0,d.O)(""),(0,f.U)(function(e){return t._filter(e)}))}},{key:"_filter",value:function(t){var e=t.toLowerCase(),n=this.patients.filter(function(t){return t.id.toLowerCase().includes(e)}).map(function(t){return t.id});return n.length<1&&(n=['Would you like to add new patient: "'+t+'" ?']),n}},{key:"ionViewWillEnter",value:function(){this.initializeCards().then()}},{key:"initializeCards",value:function(){return(0,h.mG)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var e,n=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.t1=parseInt,t.next=3,this.storage.get("total_fees_this_month");case 3:if(t.t2=t.sent,t.t0=(0,t.t1)(t.t2,10),t.t0){t.next=7;break}t.t0=0;case 7:return t.t3=t.t0,t.t4={xs:12,sm:6,md:6,lg:6,xl:6},t.t5={value:t.t3,cardColor:"bg-green-200",colClasses:t.t4,type:"currency",title:"Fees this month",icon:"fa fa-rupee-sign",viewMoreLink:"/dashboard"},t.t7=parseInt,t.next=13,this.storage.get("total_procedures");case 13:if(t.t8=t.sent,t.t6=(0,t.t7)(t.t8,10),t.t6){t.next=17;break}t.t6=0;case 17:return t.t9=t.t6,t.t10={xs:12,sm:6,md:6,lg:6,xl:6},t.t11={value:t.t9,cardColor:"bg-blue-200",colClasses:t.t10,type:"value",title:"Total Procedures",icon:"fa fa-stethoscope",viewMoreLink:"/dashboard"},this.cards=[t.t5,t.t11],t.next=23,this.storage.get("hospitals");case 23:return e=t.sent,t.next=26,e.forEach(function(t){return(0,h.mG)(n,void 0,void 0,regeneratorRuntime.mark(function e(){var n,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t1=parseInt,e.next=3,this.storage.get("total_fees_this_month");case 3:if(e.t2=e.sent,e.t0=(0,e.t1)(e.t2,10),e.t0){e.next=7;break}e.t0=0;case 7:return e.t3=e.t0,e.t4={xs:6,sm:4,md:4,lg:3,xl:3},n={value:e.t3,cardColor:"bg-cyan-200",colClasses:e.t4,type:"currency",title:"Hospital 1",icon:"fa fa-hospital-symbol",viewMoreLink:"/dashboard"},e.next=12,this.storage.get(t);case 12:i=e.sent,n.value=parseInt(i,10)||0,n.title=t,this.cards.push(n);case 14:case"end":return e.stop()}},e,this)}))});case 26:case"end":return t.stop()}},t,this)}))}},{key:"optionSelected",value:function(t){t.value.includes("Would you like to add new patient: ")&&this.addPatient(t.value.split('"')[1])}},{key:"addPatient",value:function(t){this.dialog.open(k,{data:{patientId:t}})}}]),t}(),gt.\u0275fac=function(t){return new(t||gt)(v.Y36(p.F0),v.Y36(O.Ke),v.Y36(m.uw))},gt.\u0275cmp=v.Xpm({type:gt,selectors:[["app-dashboard"]],decls:19,vars:8,consts:[[3,"pageName"],[1,"example-form"],[1,"example-full-width"],["type","text","placeholder","Patient ID","aria-label","Search patient","matInput","",3,"formControl","matAutocomplete"],[3,"optionSelected"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[3,"size","sizeSm","sizeMd","sizeLg","sizeXl",4,"ngFor","ngForOf"],["vertical","bottom","horizontal","end","slot","fixed"],["color","secondary"],["ios","add-outline","md","add-sharp",3,"routerLink"],[3,"value"],[3,"size","sizeSm","sizeMd","sizeLg","sizeXl"],[1,"card-box","m-0",3,"ngClass"],[1,"inner"],[4,"ngIf"],[1,"icon"],["aria-hidden","true",3,"ngClass"],[1,"card-box-footer",3,"routerLink"],[1,"fa","fa-arrow-circle-right"]],template:function(t,e){if(1&t&&(v._UZ(0,"app-header",0),v.TgZ(1,"ion-content"),v.TgZ(2,"ion-grid"),v.TgZ(3,"ion-row"),v.TgZ(4,"ion-col"),v.TgZ(5,"form",1),v.TgZ(6,"mat-form-field",2),v.TgZ(7,"mat-label"),v._uU(8,"Search Patient"),v.qZA(),v._UZ(9,"input",3),v.TgZ(10,"mat-autocomplete",4,5),v.NdJ("optionSelected",function(t){return e.optionSelected(t.option)}),v.YNc(12,ht,2,2,"mat-option",6),v.ALo(13,"async"),v.qZA(),v.qZA(),v.qZA(),v.qZA(),v.qZA(),v.TgZ(14,"ion-row"),v.YNc(15,vt,12,13,"ion-col",7),v.qZA(),v.qZA(),v.TgZ(16,"ion-fab",8),v.TgZ(17,"ion-fab-button",9),v._UZ(18,"ion-icon",10),v.qZA(),v.qZA(),v.qZA()),2&t){var n=v.MAs(11);v.Q6J("pageName","Dashboard"),v.xp6(9),v.Q6J("formControl",e.myControl)("matAutocomplete",n),v.xp6(3),v.Q6J("ngForOf",v.lcZ(13,6,e.filteredPatients)),v.xp6(3),v.Q6J("ngForOf",e.cards),v.xp6(3),v.Q6J("routerLink","/add-procedure")}},directives:[x.G,c.W2,c.jY,c.Nd,c.wI,l._Y,l.JL,l.F,g.KE,g.hX,_.Nt,l.Fj,ut,l.JJ,l.oH,ot,r.sg,c.IJ,c.W4,c.gu,c.YI,p.rH,S.ey,pt.a8,r.mk,r.O5,p.yS],pipes:[r.Ov,r.H9,r.JJ],styles:[".card-box[_ngcontent-%COMP%]{position:relative;color:#fff;padding:20px 10px 40px;margin:20px 0}.card-box[_ngcontent-%COMP%]:hover{text-decoration:none;color:#f1f1f1}.card-box[_ngcontent-%COMP%]:hover   .icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:100px;transition:1s;-webkit-transition:1s}.card-box[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]{padding:5px 10px 0}.card-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:27px;font-weight:700;margin:0 0 8px;white-space:nowrap;padding:0;text-align:left}.card-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:15px}.card-box[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{position:absolute;top:auto;bottom:5px;right:5px;z-index:0;font-size:72px;color:rgba(0,0,0,.15)}.card-box[_ngcontent-%COMP%]   .card-box-footer[_ngcontent-%COMP%]{position:absolute;left:0;bottom:0;text-align:center;padding:3px 0;color:hsla(0,0%,100%,.8);background:rgba(0,0,0,.1);width:100%;text-decoration:none}.card-box[_ngcontent-%COMP%]:hover   .card-box-footer[_ngcontent-%COMP%]{background:rgba(0,0,0,.3)}.example-form[_ngcontent-%COMP%]{min-width:150px;max-width:500px;width:100%}.example-full-width[_ngcontent-%COMP%]{width:100%}"]}),gt)}],bt=function(){var t=function t(){s(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=v.oAB({type:t}),t.\u0275inj=v.cJS({imports:[[p.Bz.forChild(yt)],p.Bz]}),t}(),wt=a(2904),kt=a(5530),Ot=((_t=function t(){s(this,t)}).\u0275fac=function(t){return new(t||_t)},_t.\u0275mod=v.oAB({type:_t}),_t.\u0275inj=v.cJS({providers:[{provide:m.Bq,useValue:{hasBackdrop:!0}}],imports:[[r.ez,l.u5,c.Pc,O.Fw.forRoot(),bt,pt.QW,wt.FullPageLayoutModule,kt.K,g.lN,ct,_.c,l.UX,y.ot,m.Is]]}),_t)}}])}();