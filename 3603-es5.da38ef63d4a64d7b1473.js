!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(self.webpackChunkui=self.webpackChunkui||[]).push([[3603],{3603:function(n,o,i){"use strict";i.r(o),i.d(o,{ProceduresPageModule:function(){return q}});var r=i(1116),c=i(1041),s=i(4812),a=i(3337),l=i(7570),u=i(5366),d=i(8057),Z=i(1950),g=i(5431);function p(e,t){if(1&e&&(u.TgZ(0,"ion-item"),u.TgZ(1,"ion-label"),u._uU(2),u.qZA(),u.TgZ(3,"ion-note",10),u._uU(4),u.qZA(),u.qZA()),2&e){var n=t.$implicit;u.xp6(2),u.Oqu(n.name),u.xp6(2),u.hij("\u20b9",n.cost,"")}}var f,h,m=[{path:"",component:(f=function(){function n(t,o,i,r){e(this,n),this.router=t,this.activatedRoute=o,this.treatmentsService=i,this.proceduresService=r,this.selectedTreatment=new l.w}var o,i,r;return o=n,(i=[{key:"ngOnInit",value:function(){var e=this;this.selectedTreatment$=this.treatmentsService.getSelectedTreatment(),this.selectedTreatment=this.selectedTreatment$.subscribe(function(t){t?(e.treatmentID=t.id,e.getProcedures()):e.router.navigateByUrl("treatments").then()}),this.activatedRoute.queryParams.subscribe(function(t){t.dialog&&e.openAddProcedureModal()})}},{key:"ionViewWillEnter",value:function(){this.ngOnInit()}},{key:"openAddProcedureModal",value:function(){}},{key:"ngOnDestroy",value:function(){this.selectedTreatment.unsubscribe()}},{key:"getProcedures",value:function(){this.procedures$=this.proceduresService.getProcedures({treatmentId:this.treatmentID})}},{key:"goToProcedures",value:function(){this.router.navigateByUrl("add-procedure").then()}}])&&t(o.prototype,i),r&&t(o,r),n}(),f.\u0275fac=function(e){return new(e||f)(u.Y36(a.F0),u.Y36(a.gz),u.Y36(d.z),u.Y36(Z.e))},f.\u0275cmp=u.Xpm({type:f,selectors:[["app-procedures"]],decls:37,vars:21,consts:[["pageName","Procedures"],["size","6"],[1,"font-small","m-0"],["size","6",1,"ion-text-end"],["size","12",1,"ion-text-justify"],[1,"list-header"],[4,"ngFor","ngForOf"],["vertical","bottom","horizontal","end","slot","fixed"],["color","secondary"],["ios","add-outline","md","add-sharp",3,"click"],["slot","end","color","primary"]],template:function(e,t){var n,o,i,r,c,s;1&e&&(u._UZ(0,"app-header",0),u.TgZ(1,"ion-content"),u.TgZ(2,"ion-grid"),u.TgZ(3,"ion-row"),u.TgZ(4,"ion-col"),u.TgZ(5,"h1"),u._uU(6),u.ALo(7,"async"),u.qZA(),u.qZA(),u.qZA(),u.TgZ(8,"ion-row"),u.TgZ(9,"ion-col",1),u.TgZ(10,"p",2),u._uU(11),u.ALo(12,"async"),u.qZA(),u.qZA(),u.TgZ(13,"ion-col",3),u.TgZ(14,"p",2),u._uU(15),u.ALo(16,"async"),u.qZA(),u.qZA(),u.TgZ(17,"ion-col",1),u.TgZ(18,"p",2),u._uU(19),u.ALo(20,"async"),u.qZA(),u.qZA(),u.TgZ(21,"ion-col",3),u.TgZ(22,"p",2),u._uU(23),u.ALo(24,"async"),u.qZA(),u.qZA(),u.TgZ(25,"ion-col",4),u.TgZ(26,"p",2),u._uU(27),u.ALo(28,"async"),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.TgZ(29,"ion-list"),u.TgZ(30,"ion-list-header",5),u._uU(31," Procedures "),u.qZA(),u.YNc(32,p,5,2,"ion-item",6),u.ALo(33,"async"),u.qZA(),u.TgZ(34,"ion-fab",7),u.TgZ(35,"ion-fab-button",8),u.TgZ(36,"ion-icon",9),u.NdJ("click",function(){return t.goToProcedures()}),u.qZA(),u.qZA(),u.qZA(),u.qZA()),2&e&&(u.xp6(6),u.Oqu(null==(n=u.lcZ(7,7,t.selectedTreatment$))?null:n.patient.name),u.xp6(5),u.hij(" IPD no: ",null==(o=u.lcZ(12,9,t.selectedTreatment$))?null:o.id," "),u.xp6(4),u.hij(" Payment type: ",null==(i=u.lcZ(16,11,t.selectedTreatment$))?null:i.payType," "),u.xp6(4),u.hij(" DOA: ",null==(r=u.lcZ(20,13,t.selectedTreatment$))?null:r.admissionDate," "),u.xp6(4),u.hij(" DOD: ",null==(c=u.lcZ(24,15,t.selectedTreatment$))?null:c.dischargeDate," "),u.xp6(4),u.hij(" Notes: ",null==(s=u.lcZ(28,17,t.selectedTreatment$))?null:s.notes," "),u.xp6(5),u.Q6J("ngForOf",u.lcZ(33,19,t.procedures$)))},directives:[g.G,s.W2,s.jY,s.Nd,s.wI,s.q_,s.yh,r.sg,s.IJ,s.W4,s.gu,s.Ie,s.Q$,s.uN],pipes:[r.Ov],styles:[".font-small[_ngcontent-%COMP%], .item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-size:small}.list-header[_ngcontent-%COMP%]{font-size:larger;font-weight:500}"]}),f)}],T=function(){var t=function t(){e(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=u.oAB({type:t}),t.\u0275inj=u.cJS({imports:[[a.Bz.forChild(m)],a.Bz]}),t}(),A=i(5530),y=i(6489),q=((h=function t(){e(this,t)}).\u0275fac=function(e){return new(e||h)},h.\u0275mod=u.oAB({type:h}),h.\u0275inj=u.cJS({imports:[[r.ez,c.u5,s.Pc,T,A.K,y.To]]}),h)}}])}();