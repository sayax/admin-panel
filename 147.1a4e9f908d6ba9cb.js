"use strict";(self.webpackChunkadmin_panel=self.webpackChunkadmin_panel||[]).push([[147],{7147:(ft,Z,r)=>{r.r(Z),r.d(Z,{EventModule:()=>g});var d=r(4666),t=r(2560),h=r(6413),a=r(2508),o=r(1008),x=r(4633),y=r(3432),M=r(4164),m=r(2673),q=r(3223),D=r(9785);class p{constructor(){this.eventApiService=(0,t.f3M)(q.p),this.userApiService=(0,t.f3M)(D.Q),this.nbAuthService=(0,t.f3M)(M._o)}getEvents(){return this.eventApiService.getEvents()}addEvent(n){return this.nbAuthService.getToken().pipe((0,m.w)(e=>(n.owner_uid=e.getPayload().user_id,this.eventApiService.addEvent(n))))}updateEvent(n){return this.eventApiService.updateEvent(n)}removeEvent(n){return this.eventApiService.removeEvent(n)}getEvent(n){return this.eventApiService.getEvent(n)}getEventSchedules(n){return this.eventApiService.getEventSchedules(n)}updateEventSchedule(n,e){return this.eventApiService.updateEventSchedule(n,e)}addEventSchedules(n,e){return this.eventApiService.addEventSchedules(n,e)}getEnrolledUsers(n){return this.userApiService.getUsersInList(n)}getUsers(){return this.userApiService.getUsers()}}p.\u0275fac=function(n){return new(n||p)},p.\u0275prov=t.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"});const A={1:"\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a",2:"\u0412\u0442\u043e\u0440\u043d\u0438\u043a",3:"\u0421\u0440\u0435\u0434\u0430",4:"\u0427\u0435\u0442\u0432\u0435\u0440\u0433",5:"\u041f\u044f\u0442\u043d\u0438\u0446\u0430",6:"\u0421\u0443\u0431\u0431\u043e\u0442\u0430",0:"\u0412\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435"};var b=r(7091),U=r(7941);function k(u,n){if(1&u&&(t.TgZ(0,"div",3),t._uU(1),t.qZA()),2&u){const e=n.ngIf;t.xp6(1),t.AsE("",e.first_name," ",e.last_name,"")}}function O(u,n){if(1&u&&(t.TgZ(0,"div",3),t._uU(1),t.ALo(2,"date"),t.qZA()),2&u){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(t.xi3(2,1,e.created_on.toMillis(),"dd MM yyyy HH:mm"))}}function J(u,n){if(1&u&&(t.TgZ(0,"div",3),t._uU(1),t.ALo(2,"date"),t.qZA()),2&u){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(t.xi3(2,1,e.updated_on.toMillis(),"dd MM yyyy HH:mm"))}}function I(u,n){if(1&u&&(t.TgZ(0,"div",3),t._uU(1),t.ALo(2,"date"),t.qZA()),2&u){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(t.xi3(2,1,e.start_date.toMillis(),"dd MM yyyy HH:mm"))}}function N(u,n){if(1&u&&(t.TgZ(0,"div",3),t._uU(1),t.ALo(2,"date"),t.qZA()),2&u){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(t.xi3(2,1,e.end_date.toMillis(),"dd MM yyyy HH:mm"))}}const Q=function(u){return["../",u]};function w(u,n){if(1&u){const e=t.EpF();t.TgZ(0,"nb-list-item",2)(1,"div",3),t._uU(2),t.qZA(),t.TgZ(3,"div",3),t._uU(4),t.qZA(),t.TgZ(5,"div",3),t._uU(6),t.qZA(),t.YNc(7,k,2,2,"div",7),t.ALo(8,"async"),t.ALo(9,"user"),t.YNc(10,O,3,4,"div",7),t.YNc(11,J,3,4,"div",7),t.YNc(12,I,3,4,"div",7),t.YNc(13,N,3,4,"div",7),t.TgZ(14,"div",3)(15,"button",8),t._UZ(16,"nb-icon",9),t.qZA(),t.TgZ(17,"button",10),t.NdJ("click",function(){const l=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.deleteEvent(l))}),t._UZ(18,"nb-icon",11),t.qZA()()()}if(2&u){const e=n.$implicit;t.oxw();const s=t.MAs(29);t.xp6(2),t.Oqu(e.uid),t.xp6(2),t.Oqu(e.title),t.xp6(2),t.Oqu(e.is_active?"\u0410\u043a\u0442\u0438\u0432\u0435\u043d":"\u0414\u0435\u0430\u043a\u0442\u0438\u0432\u0438\u0440\u043e\u0432\u0430\u043d"),t.xp6(1),t.Q6J("ngIf",t.lcZ(8,14,t.lcZ(9,16,e.owner_uid)))("ngIfElse",s),t.xp6(3),t.Q6J("ngIf",e.created_on)("ngIfElse",s),t.xp6(1),t.Q6J("ngIf",e.updated_on)("ngIfElse",s),t.xp6(1),t.Q6J("ngIf",e.start_date)("ngIfElse",s),t.xp6(1),t.Q6J("ngIf",e.end_date)("ngIfElse",s),t.xp6(2),t.Q6J("routerLink",t.VKq(18,Q,e.uid))}}function F(u,n){1&u&&t._UZ(0,"div",3)}function S(u,n){if(1&u&&(t.TgZ(0,"nb-option",31),t._uU(1),t.qZA()),2&u){const e=n.$implicit;t.Q6J("value",e.uid),t.xp6(1),t.AsE("",e.first_name," ",e.last_name,"")}}function B(u,n){if(1&u&&(t.TgZ(0,"nb-option",31),t._uU(1),t.qZA()),2&u){const e=n.$implicit;t.Q6J("value",e),t.xp6(1),t.Oqu(e)}}function L(u,n){if(1&u&&(t.ynx(0),t._UZ(1,"input",32)(2,"nb-date-timepicker",33,34),t.BQk()),2&u){const e=t.MAs(3);t.xp6(1),t.Q6J("nbDatepicker",e),t.xp6(1),t.Q6J("step",30)}}function H(u,n){1&u&&t._UZ(0,"input",35)}function Y(u,n){if(1&u&&(t.ynx(0),t._UZ(1,"input",36)(2,"nb-date-timepicker",33,37),t.BQk()),2&u){const e=t.MAs(3);t.xp6(1),t.Q6J("nbDatepicker",e),t.xp6(1),t.Q6J("step",30)}}function P(u,n){1&u&&t._UZ(0,"input",38)}function $(u,n){if(1&u&&(t.TgZ(0,"nb-option",31),t._uU(1),t.qZA()),2&u){const e=n.$implicit;t.Q6J("value",e.value),t.xp6(1),t.Oqu(e.title)}}function K(u,n){if(1&u){const e=t.EpF();t.TgZ(0,"nb-card")(1,"nb-card-header"),t._uU(2,"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0440\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),t.qZA(),t.TgZ(3,"nb-card-body")(4,"form",12)(5,"div",13)(6,"label",14),t._uU(7,"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),t.qZA(),t._UZ(8,"input",15),t.qZA(),t.TgZ(9,"div",13)(10,"label",16),t._uU(11,"\u041f\u0440\u0435\u043f\u043e\u0434\u0430\u0432\u0430\u0442\u0435\u043b\u0438"),t.qZA(),t.TgZ(12,"nb-select",17),t.YNc(13,S,2,3,"nb-option",18),t.ALo(14,"async"),t.qZA()(),t.TgZ(15,"div",13)(16,"label",19),t._uU(17,"\u0426\u0432\u0435\u0442"),t.qZA(),t.TgZ(18,"nb-select",20),t.YNc(19,B,2,2,"nb-option",18),t.qZA()(),t.TgZ(20,"div",13)(21,"label",21),t._uU(22,"\u041d\u0430\u0447\u0430\u043b\u043e"),t.qZA(),t.YNc(23,L,4,2,"ng-container",22),t.YNc(24,H,1,0,"ng-template",null,23,t.W1O),t.qZA(),t.TgZ(26,"div",13)(27,"label",24),t._uU(28,"\u041e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u0435"),t.qZA(),t.YNc(29,Y,4,2,"ng-container",22),t.YNc(30,P,1,0,"ng-template",null,25,t.W1O),t.qZA(),t.TgZ(32,"div",13)(33,"label",26),t._uU(34,"\u0414\u043d\u0438"),t.qZA(),t.TgZ(35,"nb-select",27),t.YNc(36,$,2,2,"nb-option",18),t.qZA()()()(),t.TgZ(37,"nb-card-footer",28)(38,"button",29),t.NdJ("click",function(){const l=t.CHM(e).dialogRef;return t.KtG(l.close())}),t._uU(39,"\u041e\u0442\u043c\u0435\u043d\u0430"),t.qZA(),t.TgZ(40,"button",30),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.addEvent(i.form))}),t._uU(41,"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"),t.qZA()()()}if(2&u){const e=t.MAs(25),s=t.MAs(31),i=t.oxw();let l,c,_;t.xp6(4),t.Q6J("formGroup",i.form),t.xp6(8),t.Q6J("status",null!=(l=i.form.get("teacher_uids"))&&l.touched?null!=(l=i.form.get("teacher_uids"))&&l.invalid?"danger":"success":"basic"),t.xp6(1),t.Q6J("ngForOf",t.lcZ(14,12,i.users$)),t.xp6(5),t.Q6J("status",null!=(c=i.form.get("colors"))&&c.touched?null!=(c=i.form.get("colors"))&&c.invalid?"danger":"success":"basic"),t.xp6(1),t.Q6J("ngForOf",i.colorOptions),t.xp6(4),t.Q6J("ngIf",!i.isMobile)("ngIfElse",e),t.xp6(6),t.Q6J("ngIf",!i.isMobile)("ngIfElse",s),t.xp6(6),t.Q6J("status",null!=(_=i.form.get("days"))&&_.touched?null!=(_=i.form.get("days"))&&_.invalid?"danger":"success":"basic"),t.xp6(1),t.Q6J("ngForOf",i.dayOptions),t.xp6(4),t.Q6J("disabled",i.loading)}}class v{constructor(){this.formBuilder=(0,t.f3M)(a.qu),this.dialogService=(0,t.f3M)(o.Gln),this.teacherService=(0,t.f3M)(y.S),this.eventService=(0,t.f3M)(p),this.toastr=(0,t.f3M)(o.quB),this.users$=this.teacherService.getList(),this.form=this.formBuilder.group({uid:[""],colors:["",a.kI.required],start_date:["",a.kI.required],end_date:["",a.kI.required],days:[[]],meta:this.formBuilder.group({type:["info"]}),title:["",a.kI.required],teacher_uids:[[],a.kI.required],is_active:[!0,a.kI.required]}),this.loading=!1,this.colorOptions=Object.keys(x.O),this.dayOptions=Object.entries(A).map(([n,e])=>({value:n,title:e})),this.isMobile=!1}calculateRows(){this.isMobile=window.innerWidth<768}ngOnInit(){this.calculateRows(),this.getData()}getData(){this.events$=this.eventService.getEvents()}openDialog(n,e){this.ref=this.dialogService.open(n,{context:e})}addEvent(n){const e=new Date(n.value.start_date),s=new Date(n.value.end_date);isNaN(e.getTime())||isNaN(s.getTime())?this.toastr.show("\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 \u0434\u0430\u0442\u044b","\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430",{status:"danger"}):(n.value.start_date=h.EK.fromDate(e),n.value.end_date=h.EK.fromDate(s),n.value.days=n.value.days.map(i=>+i),this.eventService.addEvent(n.value).subscribe({complete:()=>{this.toastr.show("\u0421\u043e\u0431\u044b\u0442\u0438\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e","\u0414\u0430\u043d\u043d\u044b\u0435 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u044b",{status:"success"}),this.loading=!1,this.ref.close(),this.getData()},error:i=>{this.toastr.show(i?.message,"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430",{status:"danger"}),console.log("error",i),this.loading=!1}}))}deleteEvent(n){this.eventService.removeEvent({uid:n.uid}).subscribe(()=>{this.toastr.show("\u0421\u043e\u0431\u044b\u0442\u0438\u0435 \u0443\u0434\u0430\u043b\u0435\u043d\u043e","\u0414\u0430\u043d\u043d\u044b\u0435 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u044b",{status:"success"}),this.getData()})}}v.\u0275fac=function(n){return new(n||v)},v.\u0275cmp=t.Xpm({type:v,selectors:[["app-event-list"]],hostBindings:function(n,e){1&n&&t.NdJ("resize",function(i){return e.calculateRows(i)},!1,t.Jf7)},decls:32,vars:3,consts:[["nbButton","","status","primary","type","button",3,"click"],[1,"event-table"],[1,"event-row"],[1,"event-cell"],["class","event-row",4,"ngFor","ngForOf"],["empty",""],["createDialog",""],["class","event-cell",4,"ngIf","ngIfElse"],["type","button","nbButton","",3,"routerLink"],["icon","edit-outline"],["type","button","nbButton","",3,"click"],["icon","trash-outline"],[3,"formGroup"],[1,"form-group"],["for","title"],["name","title","nbInput","","formControlName","title"],["for","teacher_uids"],["multiple","","placeholder","\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u0440\u0435\u043f\u043e\u0434\u0430\u0432\u0430\u0442\u0435\u043b\u0435\u0439","name","teacher_uids","formControlName","teacher_uids",3,"status"],[3,"value",4,"ngFor","ngForOf"],["for","colors"],["placeholder","\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0446\u0432\u0435\u0442","name","colors","formControlName","colors",3,"status"],["for","start_date"],[4,"ngIf","ngIfElse"],["startDate",""],["for","end_date"],["endDate",""],["for","days"],["multiple","","placeholder","\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u043d\u0438","name","days","formControlName","days",3,"status"],[1,"footer"],["nbButton","",3,"click"],["nbButton","","status","primary",3,"disabled","click"],[3,"value"],["name","start_date","nbInput","","placeholder","yyyy-mm-dd HH:mm","formControlName","start_date",3,"nbDatepicker"],["singleColumn","",3,"step"],["startDatePicker",""],["name","start_date","nbInput","","placeholder","yyyy-mm-dd HH:mm","formControlName","start_date"],["name","end_date","nbInput","","placeholder","yyyy-mm-dd HH:mm","formControlName","end_date",3,"nbDatepicker"],["endDatePicker",""],["name","end_date","nbInput","","placeholder","yyyy-mm-dd HH:mm","formControlName","end_date"]],template:function(n,e){if(1&n){const s=t.EpF();t.TgZ(0,"nb-layout")(1,"nb-layout-column")(2,"nb-card")(3,"nb-card-header")(4,"button",0),t.NdJ("click",function(){t.CHM(s);const l=t.MAs(31);return t.KtG(e.openDialog(l))}),t._uU(5,"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"),t.qZA()(),t.TgZ(6,"nb-card-body")(7,"nb-list",1)(8,"nb-list-item",2)(9,"div",3),t._uU(10,"UID"),t.qZA(),t.TgZ(11,"div",3),t._uU(12,"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),t.qZA(),t.TgZ(13,"div",3),t._uU(14,"\u0421\u0442\u0430\u0442\u0443\u0441"),t.qZA(),t.TgZ(15,"div",3),t._uU(16,"\u041a\u0442\u043e"),t.qZA(),t.TgZ(17,"div",3),t._uU(18,"\u0414\u0430\u0442\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f"),t.qZA(),t.TgZ(19,"div",3),t._uU(20,"\u0414\u0430\u0442\u0430 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f"),t.qZA(),t.TgZ(21,"div",3),t._uU(22,"\u041d\u0430\u0447\u0430\u043b\u043e \u0441\u043e\u0431\u044b\u0442\u0438\u044f"),t.qZA(),t.TgZ(23,"div",3),t._uU(24,"\u041e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u044f"),t.qZA(),t._UZ(25,"div",3),t.qZA(),t.YNc(26,w,19,20,"nb-list-item",4),t.ALo(27,"async"),t.YNc(28,F,1,0,"ng-template",null,5,t.W1O),t.qZA()()()()(),t.YNc(30,K,42,14,"ng-template",null,6,t.W1O)}2&n&&(t.xp6(26),t.Q6J("ngForOf",t.lcZ(27,1,e.events$)))},dependencies:[d.sg,d.O5,o.Aqw,o.dP_,o.Asz,o.yKW,o.XWE,o.ndF,o.fMN,o.h8i,o.DPz,o.rs,o.q51,o.zP_,o.qBV,o.$kf,o.VW_,a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u,b.rH,d.Ov,d.uU,U.d],styles:["[_nghost-%COMP%]{--button-filled-basic-background-color: transparent;--button-filled-basic-hover-background-color: transparent;--button-filled-basic-focus-background-color: transparent}.form-group[_ngcontent-%COMP%]{margin-bottom:.625rem}nb-base-calendar[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]{flex-direction:column}@media screen and (max-width: 768px){nb-date-timepicker[_ngcontent-%COMP%]{display:none}}.event-row[_ngcontent-%COMP%]{column-gap:6px;align-items:center}.event-cell[_ngcontent-%COMP%]{width:calc(12.5% - 5px);text-overflow:ellipsis;overflow-x:hidden}.event-cell[_ngcontent-%COMP%]:last-child{flex-shrink:0;width:40px}.event-cell[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-bottom:4px}"]});var W=r(4466),C=r(9337),T=r(3158),E=r(745),G=r(635);function z(u,n){if(1&u&&(t.TgZ(0,"nb-option",27),t._uU(1),t.qZA()),2&u){const e=n.$implicit;t.Q6J("value",e.uid),t.xp6(1),t.AsE("",e.first_name," ",e.last_name,"")}}function j(u,n){if(1&u&&(t.ynx(0),t._UZ(1,"input",28)(2,"nb-date-timepicker",29,30),t.BQk()),2&u){const e=t.MAs(3);t.xp6(1),t.Q6J("nbDatepicker",e),t.xp6(1),t.Q6J("step",30)}}function R(u,n){1&u&&t._UZ(0,"input",31)}function V(u,n){if(1&u&&(t.ynx(0),t._UZ(1,"input",32)(2,"nb-date-timepicker",29,33),t.BQk()),2&u){const e=t.MAs(3);t.xp6(1),t.Q6J("nbDatepicker",e),t.xp6(1),t.Q6J("step",30)}}function X(u,n){1&u&&t._UZ(0,"input",34)}function tt(u,n){if(1&u&&(t.TgZ(0,"nb-option",27),t._uU(1),t.qZA()),2&u){const e=n.$implicit;t.Q6J("value",e),t.xp6(1),t.Oqu(e)}}function et(u,n){if(1&u&&(t.TgZ(0,"nb-option",27),t._uU(1),t.qZA()),2&u){const e=n.$implicit;t.Q6J("value",e.uid),t.xp6(1),t.AsE("",e.first_name," ",e.last_name," (\u0417\u0430\u043f\u0438\u0441\u044c)")}}function nt(u,n){if(1&u&&(t.TgZ(0,"nb-option",27),t._uU(1),t.qZA()),2&u){const e=n.$implicit;t.Q6J("value",e.uid),t.xp6(1),t.AsE("",e.first_name," ",e.last_name,"")}}function ut(u,n){if(1&u&&(t.TgZ(0,"div",24),t._uU(1),t.ALo(2,"date"),t.qZA()),2&u){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(t.xi3(2,1,e.start_date.toMillis(),"dd.MM.yyyy HH:mm"))}}function it(u,n){if(1&u&&(t.TgZ(0,"div",24),t._uU(1),t.ALo(2,"date"),t.qZA()),2&u){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(t.xi3(2,1,e.end_date.toMillis(),"dd.MM.yyyy HH:mm"))}}function ot(u,n){if(1&u){const e=t.EpF();t.TgZ(0,"nb-list-item",22),t.YNc(1,ut,3,4,"div",35),t.YNc(2,it,3,4,"div",35),t.TgZ(3,"div",24),t._uU(4),t.qZA(),t.TgZ(5,"div",24)(6,"button",36),t.NdJ("click",function(){const l=t.CHM(e).$implicit,c=t.oxw(2);return t.KtG(c.updateScheduleStatus(c.form.value.uid,l,!l.is_active))}),t._UZ(7,"nb-icon",37),t.qZA()()()}if(2&u){const e=n.$implicit;t.oxw();const s=t.MAs(67),i=t.oxw();t.xp6(1),t.Q6J("ngIf",e.start_date)("ngIfElse",s),t.xp6(1),t.Q6J("ngIf",e.end_date)("ngIfElse",s),t.xp6(2),t.AsE(" ",e.is_active?"\u0410\u043a\u0442\u0438\u0432\u0435\u043d":"\u0414\u0435\u0430\u043a\u0442\u0438\u0432\u0438\u0440\u043e\u0432\u0430\u043d"," ",e.start_date.toMillis()>i.today[0]&&e.start_date.toMillis()<i.today[1]?"(\u0421\u0435\u0433\u043e\u0434\u043d\u044f)":""," "),t.xp6(2),t.Q6J("disabled",i.loading),t.xp6(1),t.Q6J("icon",(e.is_active?"trash":"edit")+"-outline")}}function st(u,n){1&u&&t._UZ(0,"div",24)}const at=function(){return[".."]};function lt(u,n){if(1&u){const e=t.EpF();t.TgZ(0,"nb-layout-column")(1,"nb-card")(2,"nb-card-body")(3,"form",2),t.NdJ("submit",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.saveEvent(i.form))}),t.TgZ(4,"div",3)(5,"a",4),t._uU(6,"\u041d\u0430\u0437\u0430\u0434"),t.qZA()(),t.TgZ(7,"div",3)(8,"button",5),t._uU(9,"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"),t.qZA()(),t.TgZ(10,"div",3)(11,"label",6),t._uU(12,"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),t.qZA(),t._UZ(13,"input",7),t.qZA(),t.TgZ(14,"div",3)(15,"label",8),t._uU(16,"\u041f\u0440\u0435\u043f\u043e\u0434\u0430\u0432\u0430\u0442\u0435\u043b\u0438"),t.qZA(),t.TgZ(17,"nb-select",9),t.YNc(18,z,2,3,"nb-option",10),t.ALo(19,"async"),t.qZA()(),t.TgZ(20,"div",3)(21,"label",11),t._uU(22,"\u041d\u0430\u0447\u0430\u043b\u043e"),t.qZA(),t.YNc(23,j,4,2,"ng-container",12),t.YNc(24,R,1,0,"ng-template",null,13,t.W1O),t.qZA(),t.TgZ(26,"div",3)(27,"label",14),t._uU(28,"\u041e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u0435"),t.qZA(),t.YNc(29,V,4,2,"ng-container",12),t.YNc(30,X,1,0,"ng-template",null,15,t.W1O),t.qZA(),t.TgZ(32,"div",3)(33,"label",16),t._uU(34,"\u0426\u0432\u0435\u0442"),t.qZA(),t.TgZ(35,"nb-select",17),t.YNc(36,tt,2,2,"nb-option",10),t.qZA()(),t.TgZ(37,"div",3)(38,"label",16),t._uU(39,"\u0421\u0442\u0430\u0442\u0443\u0441"),t.qZA(),t.TgZ(40,"nb-checkbox",18),t._uU(41,"\u0410\u043a\u0442\u0438\u0432\u0435\u043d"),t.qZA()(),t.TgZ(42,"div",3)(43,"label",19),t._uU(44,"\u0423\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0438"),t.qZA(),t.TgZ(45,"nb-select",20),t.YNc(46,et,2,3,"nb-option",10),t.ALo(47,"async"),t.YNc(48,nt,2,3,"nb-option",10),t.ALo(49,"async"),t.qZA()()(),t.TgZ(50,"nb-list",21)(51,"nb-list-item",22)(52,"h4"),t._uU(53,"\u0420\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),t.qZA(),t.TgZ(54,"button",23),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(),l=t.MAs(5);return t.KtG(i.openDialog(l))}),t._uU(55,"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"),t.qZA()(),t.TgZ(56,"nb-list-item",22)(57,"div",24),t._uU(58,"\u0414\u0430\u0442\u0430 \u043d\u0430\u0447\u0430\u043b\u0430"),t.qZA(),t.TgZ(59,"div",24),t._uU(60,"\u0414\u0430\u0442\u0430 \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044f"),t.qZA(),t.TgZ(61,"div",24),t._uU(62,"\u0421\u0442\u0430\u0442\u0443\u0441"),t.qZA(),t._UZ(63,"div",24),t.qZA(),t.YNc(64,ot,8,8,"nb-list-item",25),t.ALo(65,"async"),t.YNc(66,st,1,0,"ng-template",null,26,t.W1O),t.qZA()()()()}if(2&u){const e=t.MAs(25),s=t.MAs(31),i=t.oxw();let l,c,_;t.xp6(3),t.Q6J("formGroup",i.form),t.xp6(2),t.Q6J("routerLink",t.DdM(23,at)),t.xp6(3),t.Q6J("disabled",i.loading),t.xp6(9),t.Q6J("status",null!=(l=i.form.get("teacher_uids"))&&l.touched?null!=(l=i.form.get("teacher_uids"))&&l.invalid?"danger":"success":"basic"),t.xp6(1),t.Q6J("ngForOf",t.lcZ(19,15,i.teachers$)),t.xp6(5),t.Q6J("ngIf",!i.isMobile)("ngIfElse",e),t.xp6(6),t.Q6J("ngIf",!i.isMobile)("ngIfElse",s),t.xp6(6),t.Q6J("status",null!=(c=i.form.get("colors"))&&c.touched?null!=(c=i.form.get("colors"))&&c.invalid?"danger":"success":"basic"),t.xp6(1),t.Q6J("ngForOf",i.colorOptions),t.xp6(9),t.Q6J("status",null!=(_=i.form.get("participants"))&&_.touched?null!=(_=i.form.get("participants"))&&_.invalid?"danger":"success":"basic"),t.xp6(1),t.Q6J("ngForOf",t.lcZ(47,17,i.enrolledParticipants$)),t.xp6(2),t.Q6J("ngForOf",t.lcZ(49,19,i.users$)),t.xp6(16),t.Q6J("ngForOf",t.lcZ(65,21,i.eventSchedules$))}}function rt(u,n){if(1&u&&(t.ynx(0),t._UZ(1,"input",28)(2,"nb-date-timepicker",29,30),t.BQk()),2&u){const e=t.MAs(3);t.xp6(1),t.Q6J("nbDatepicker",e),t.xp6(1),t.Q6J("step",30)}}function ct(u,n){1&u&&t._UZ(0,"input",31)}function dt(u,n){if(1&u&&(t.ynx(0),t._UZ(1,"input",32)(2,"nb-date-timepicker",29,33),t.BQk()),2&u){const e=t.MAs(3);t.xp6(1),t.Q6J("nbDatepicker",e),t.xp6(1),t.Q6J("step",30)}}function _t(u,n){1&u&&t._UZ(0,"input",34)}function pt(u,n){if(1&u&&(t.TgZ(0,"nb-option",27),t._uU(1),t.qZA()),2&u){const e=n.$implicit;t.Q6J("value",e.value),t.xp6(1),t.Oqu(e.title)}}function mt(u,n){if(1&u){const e=t.EpF();t.TgZ(0,"nb-card")(1,"nb-card-header"),t._uU(2,"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0440\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),t.qZA(),t.TgZ(3,"nb-card-body")(4,"form",38)(5,"div",3)(6,"label",11),t._uU(7,"\u041d\u0430\u0447\u0430\u043b\u043e"),t.qZA(),t.YNc(8,rt,4,2,"ng-container",12),t.YNc(9,ct,1,0,"ng-template",null,13,t.W1O),t.qZA(),t.TgZ(11,"div",3)(12,"label",14),t._uU(13,"\u041e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u0435"),t.qZA(),t.YNc(14,dt,4,2,"ng-container",12),t.YNc(15,_t,1,0,"ng-template",null,15,t.W1O),t.qZA(),t.TgZ(17,"div",3)(18,"label",39),t._uU(19,"\u0414\u043d\u0438"),t.qZA(),t.TgZ(20,"nb-select",40),t.YNc(21,pt,2,2,"nb-option",10),t.qZA()()()(),t.TgZ(22,"nb-card-footer",41)(23,"button",42),t.NdJ("click",function(){const l=t.CHM(e).dialogRef;return t.KtG(l.close())}),t._uU(24,"\u041e\u0442\u043c\u0435\u043d\u0430"),t.qZA(),t.TgZ(25,"button",43),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.addSchedule(i.form.value.uid,i.scheduleForm))}),t._uU(26,"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"),t.qZA()()()}if(2&u){const e=t.MAs(10),s=t.MAs(16),i=t.oxw();let l;t.xp6(4),t.Q6J("formGroup",i.scheduleForm),t.xp6(4),t.Q6J("ngIf",!i.isMobile)("ngIfElse",e),t.xp6(6),t.Q6J("ngIf",!i.isMobile)("ngIfElse",s),t.xp6(6),t.Q6J("status",null!=(l=i.form.get("days"))&&l.touched?null!=(l=i.form.get("days"))&&l.invalid?"danger":"success":"basic"),t.xp6(1),t.Q6J("ngForOf",i.dayOptions),t.xp6(4),t.Q6J("disabled",i.loading)}}const gt=function(u,n){return{event:u,eventSchedules:n}};class f{constructor(){this.formBuilder=(0,t.f3M)(a.qu),this.eventService=(0,t.f3M)(p),this.route=(0,t.f3M)(b.gz),this.cdr=(0,t.f3M)(t.sBO),this.teacherService=(0,t.f3M)(y.S),this.toastr=(0,t.f3M)(o.quB),this.dialogService=(0,t.f3M)(o.Gln),this.loading=!1,this.teachers$=this.teacherService.getList(),this.form=this.formBuilder.group({uid:["",a.kI.required],colors:["",a.kI.required],start_date:[{value:"",disabled:!0},a.kI.required],end_date:[{value:"",disabled:!0},a.kI.required],meta:this.formBuilder.group({type:["info"]}),title:["",a.kI.required],teacher_uids:[[],a.kI.required],is_active:[!1,a.kI.required],enrolled_participants:[[]],participants:[[]]}),this.scheduleForm=this.formBuilder.group({uid:["",a.kI.required],start_date:["",a.kI.required],end_date:["",a.kI.required],days:[[],a.kI.required]}),this.colorOptions=Object.keys(x.O),this.dayOptions=Object.entries(A).map(([n,e])=>({value:n,title:e})),this.isMobile=!1}calculateRows(){this.isMobile=window.innerWidth<768,this.cdr.markForCheck()}ngOnInit(){this.calculateRows(),this.getData(),this.calculateToday()}calculateToday(){const n=new Date,e=new Date;n.setHours(0,0,0),e.setHours(23,59,59),this.today=[n.getTime(),e.getTime()],this.cdr.markForCheck()}getData(){this.event$=this.route.paramMap.pipe((0,m.w)(n=>this.eventService.getEvent(n.get("id")??"")),(0,C.b)(n=>{this.form.patchValue({...n,days:[...n.days.map(e=>e.toString())],start_date:new Date(n.start_date.toMillis()),end_date:new Date(n.end_date.toMillis())}),console.log(this.form.value)}),(0,T.K)(()=>(this.toastr.danger("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443"),(0,E.of)()))),this.eventSchedules$=this.route.paramMap.pipe((0,m.w)(n=>this.eventService.getEventSchedules(n.get("id")??"")),(0,C.b)(n=>{console.log(n)}),(0,T.K)(()=>(this.toastr.danger("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443"),(0,E.of)()))),this.enrolledParticipants$=this.form.controls.enrolled_participants.valueChanges.pipe((0,m.w)(n=>n.length?this.eventService.getEnrolledUsers(n):(0,E.of)([]))),this.enrolledParticipants$=this.form.controls.enrolled_participants.valueChanges.pipe((0,m.w)(n=>n.length?this.eventService.getEnrolledUsers(n):(0,E.of)([]))),this.users$=this.form.controls.enrolled_participants.valueChanges.pipe((0,m.w)(n=>this.eventService.getUsers().pipe((0,G.U)(e=>e.filter(s=>!n.includes(s.uid))))))}openDialog(n,e){this.ref=this.dialogService.open(n,{context:e})}saveEvent(n){this.loading=!0,this.eventService.updateEvent(n.value).subscribe({next:()=>{this.toastr.show("\u0421\u043e\u0431\u044b\u0442\u0438\u0435 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u043e","\u0414\u0430\u043d\u043d\u044b\u0435 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u044b",{status:"success"}),this.loading=!1,this.cdr.markForCheck(),this.getData()},error:e=>{this.toastr.show(e?.message,"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430",{status:"error"}),console.log("error",e),this.loading=!1,this.cdr.markForCheck()}})}updateScheduleStatus(n,e,s){this.loading=!0,this.eventService.updateEventSchedule(n,{uid:e.uid,is_active:s}).subscribe({next:()=>{this.toastr.show("\u0420\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u043e","\u0414\u0430\u043d\u043d\u044b\u0435 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u044b",{status:"success"}),this.loading=!1,this.cdr.markForCheck(),this.getData()},error:i=>{this.toastr.show(i?.message,"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430",{status:"error"}),console.log("error",i),this.loading=!1,this.cdr.markForCheck()}})}addSchedule(n,e){this.loading=!0,this.eventService.addEventSchedules(n,{start_date:h.EK.fromDate(e.value.start_date),end_date:h.EK.fromDate(e.value.end_date),days:e.value.days.map(s=>+s)}).subscribe({next:()=>{this.toastr.show("\u0420\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u043e","\u0414\u0430\u043d\u043d\u044b\u0435 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u044b",{status:"success"}),this.loading=!1,this.cdr.markForCheck(),this.ref.close(),this.getData()},error:s=>{this.toastr.show(s?.message,"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430",{status:"error"}),console.log("error",s),this.loading=!1,this.cdr.markForCheck()}})}}f.\u0275fac=function(n){return new(n||f)},f.\u0275cmp=t.Xpm({type:f,selectors:[["app-event-edit"]],hostBindings:function(n,e){1&n&&t.NdJ("resize",function(i){return e.calculateRows(i)},!1,t.Jf7)},decls:6,vars:8,consts:[[4,"ngIf"],["scheduleDialog",""],[1,"form",3,"formGroup","submit"],[1,"form-group"],["nbButton","","status","primary","outline","",3,"routerLink"],["nbButton","","status","primary","type","submit",1,"event-button",3,"disabled"],["for","title"],["name","title","nbInput","","formControlName","title"],["for","teacher_uids"],["multiple","","placeholder","\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u0440\u0435\u043f\u043e\u0434\u0430\u0432\u0430\u0442\u0435\u043b\u0435\u0439","name","teacher_uids","formControlName","teacher_uids",3,"status"],[3,"value",4,"ngFor","ngForOf"],["for","start_date"],[4,"ngIf","ngIfElse"],["startDate",""],["for","end_date"],["endDate",""],["for","colors"],["placeholder","\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0446\u0432\u0435\u0442","name","colors","formControlName","colors",3,"status"],["formControlName","is_active"],["for","participants"],["multiple","","placeholder","\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u043e\u0432","name","participants","formControlName","participants",3,"status"],[1,"event-table"],[1,"event-row"],["nbButton","","status","primary","outline","","type","button",1,"event-button",3,"click"],[1,"event-cell"],["class","event-row",4,"ngFor","ngForOf"],["empty",""],[3,"value"],["name","start_date","nbInput","","placeholder","yyyy-mm-dd HH:mm","formControlName","start_date",3,"nbDatepicker"],["singleColumn","",3,"step"],["startDatePicker",""],["name","start_date","nbInput","","placeholder","yyyy-mm-dd HH:mm","formControlName","start_date"],["name","end_date","nbInput","","placeholder","yyyy-mm-dd HH:mm","formControlName","end_date",3,"nbDatepicker"],["endDatePicker",""],["name","end_date","nbInput","","placeholder","yyyy-mm-dd HH:mm","formControlName","end_date"],["class","event-cell",4,"ngIf","ngIfElse"],["type","button","nbButton","",3,"disabled","click"],[3,"icon"],[3,"formGroup"],["for","days"],["multiple","","placeholder","\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u043d\u0438","name","days","formControlName","days",3,"status"],[1,"footer"],["nbButton","",3,"click"],["nbButton","","status","primary",3,"disabled","click"]],template:function(n,e){1&n&&(t.TgZ(0,"nb-layout"),t.YNc(1,lt,68,24,"nb-layout-column",0),t.ALo(2,"async"),t.ALo(3,"async"),t.qZA(),t.YNc(4,mt,27,8,"ng-template",null,1,t.W1O)),2&n&&(t.xp6(1),t.Q6J("ngIf",t.WLB(5,gt,t.lcZ(2,1,e.event$),t.lcZ(3,3,e.eventSchedules$))))},dependencies:[d.sg,d.O5,o.Aqw,o.dP_,o.Asz,o.yKW,o.XWE,o.ndF,o.fMN,o.h8i,o.DPz,o.rs,o.q51,o.zP_,o.qBV,o.NTf,o.$kf,o.VW_,a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u,b.rH,d.Ov,d.uU],styles:[".form[_ngcontent-%COMP%]{--list-item-divider-width: 2px;display:flex;flex-wrap:wrap;gap:10px;padding-bottom:1.5rem;border-bottom:var(--list-item-divider-width) var(--list-item-divider-style) var(--list-item-divider-color);margin-bottom:1.5rem}.form-group[_ngcontent-%COMP%]{flex:0 calc(50% - 10px);margin-bottom:10px}.form-group[_ngcontent-%COMP%]   nb-date-timepicker[_ngcontent-%COMP%]{display:none}.event-row[_ngcontent-%COMP%]{column-gap:6px;align-items:center}.event-row[_ngcontent-%COMP%]:first-child{--list-item-divider-width: 0}.event-cell[_ngcontent-%COMP%]{width:calc(33.3333333333% - 5px);text-overflow:ellipsis;overflow-x:hidden}.event-cell[_ngcontent-%COMP%]:last-child{flex-shrink:0;width:40px}.event-cell[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-bottom:4px}.event-button[_ngcontent-%COMP%]{margin-left:auto}nb-card-footer[_ngcontent-%COMP%]{display:flex;justify-content:space-between}"],changeDetection:0});const vt=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:v,data:{title:"\u0421\u043e\u0431\u044b\u0442\u0438\u044f"}},{path:":id",component:f,data:{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"}}];class g{}g.\u0275fac=function(n){return new(n||g)},g.\u0275mod=t.oAB({type:g}),g.\u0275inj=t.cJS({imports:[d.ez,o.BW0,o.zyh,o.KdK,o.nKr,o.T2N,o.IIj,o.COg,o.MfT,o.OA,o.kmq,a.UX,W.m,b.Bz.forChild(vt)]})}}]);
//# sourceMappingURL=147.1a4e9f908d6ba9cb.js.map