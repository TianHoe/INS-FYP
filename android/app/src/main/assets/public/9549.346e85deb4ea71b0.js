"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9549],{9549:(T,u,r)=>{r.r(u),r.d(u,{HistoryPageModule:()=>P});var c=r(6895),g=r(433),n=r(2078),l=r(9171),t=r(8256),h=r(2468),p=r(1802),m=r(2724);function v(o,s){if(1&o){const i=t.EpF();t.TgZ(0,"ion-card",6),t.NdJ("click",function(){t.CHM(i);const a=t.oxw().$implicit,d=t.oxw();return t.KtG(d.setOpen(!0,a.booth))}),t.TgZ(1,"ion-card-header")(2,"ion-card-title",7),t._uU(3),t.qZA()()()}if(2&o){const i=t.oxw().$implicit;t.xp6(3),t.Oqu(i.booth.name)}}function f(o,s){if(1&o&&(t.TgZ(0,"ion-row")(1,"ion-col"),t._uU(2),t.qZA(),t.TgZ(3,"ion-col",13),t._uU(4),t.qZA()()),2&o){const i=s.$implicit;t.xp6(2),t.Oqu(i.criteria.name),t.xp6(2),t.Oqu(i.value)}}function y(o,s){if(1&o){const i=t.EpF();t.TgZ(0,"ion-header")(1,"ion-toolbar",8)(2,"ion-title"),t._uU(3,"Scoring"),t.qZA(),t.TgZ(4,"ion-buttons",9)(5,"ion-button",10),t.NdJ("click",function(){t.CHM(i);const a=t.oxw(2);return t.KtG(a.setOpen(!1))}),t._UZ(6,"ion-icon",11),t.qZA()()()(),t.TgZ(7,"ion-content",0)(8,"ion-grid")(9,"ion-row")(10,"ion-col")(11,"ion-text")(12,"h3",12),t._uU(13),t.qZA()()()(),t.YNc(14,f,5,2,"ion-row",2),t.qZA()()}if(2&o){const i=t.oxw().$implicit,e=t.oxw();t.xp6(13),t.Oqu(i.booth.name),t.xp6(1),t.Q6J("ngForOf",e.scoringWithCriteria)}}function _(o,s){if(1&o&&(t.TgZ(0,"div"),t.YNc(1,v,4,1,"ion-card",4),t.TgZ(2,"ion-modal",5),t.YNc(3,y,15,2,"ng-template"),t.qZA()()),2&o){const i=s.$implicit,e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.evaluatedCount>0&&i.evaluated),t.xp6(1),t.Q6J("isOpen",e.isModalOpen)}}function Z(o,s){1&o&&(t.TgZ(0,"div")(1,"ion-text",14),t._uU(2,"There is no history to display here."),t.qZA()())}const x=[{path:"",component:(()=>{class o{constructor(i,e,a){this.dataService=i,this.authService=e,this.modalController=a,this.isModalOpen=!1}ngOnInit(){this.currentUserId=this.authService.getUID(),this.dataService.getJudgeByAuthId(this.currentUserId).subscribe(i=>{this.currentJudge=i[0],this.dataService.getJudgeBoothByJudgeId(this.currentJudge.id).subscribe(e=>{this.judgeBooth=e,this.evaluatedCount=this.judgeBooth.filter(a=>1==a.evaluated).length,this.assignedCount=this.judgeBooth.length}),this.dataService.getJudgeBoothByJudgeId(this.currentJudge.id).subscribe(e=>{this.dataService.getBooth().subscribe(a=>{this.judgeBoothsWithBooths=this.dataService.combineData(e,a)})})})}setOpen(i,e){this.isModalOpen=i,e&&(console.log(this.currentJudge.id),console.log(e.id),this.dataService.getBoothScoring(this.currentJudge.id,e.id).subscribe(a=>{this.dataService.getCriteria().subscribe(d=>{this.scoringWithCriteria=this.dataService.combineScoringCriteria(a,d)})}))}}return o.\u0275fac=function(i){return new(i||o)(t.Y36(h.D),t.Y36(p.e),t.Y36(n.IN))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-history"]],decls:8,vars:4,consts:[[1,"ion-padding"],[1,"ps-0","fw-bold"],[4,"ngFor","ngForOf"],[4,"ngIf"],["class","mx-0","color","light",3,"click",4,"ngIf"],[3,"isOpen"],["color","light",1,"mx-0",3,"click"],[1,"fw-bold"],["color","toolbar"],["slot","end"],[3,"click"],["name","close-sharp"],[1,"fw-bold","mt-0"],["size","auto"],[1,"ion-text-align-center"]],template:function(i,e){1&i&&(t._UZ(0,"app-topnav"),t.TgZ(1,"ion-content",0)(2,"ion-title",1),t._uU(3,"History"),t.qZA(),t.TgZ(4,"ion-text"),t._uU(5),t.qZA(),t.YNc(6,_,4,2,"div",2),t.YNc(7,Z,3,0,"div",3),t.qZA()),2&i&&(t.xp6(5),t.AsE("Booth evaluated: ",e.evaluatedCount,"/",e.assignedCount,""),t.xp6(1),t.Q6J("ngForOf",e.judgeBoothsWithBooths),t.xp6(1),t.Q6J("ngIf",e.evaluatedCount<=0))},dependencies:[c.sg,c.O5,n.YG,n.Sm,n.PM,n.Zi,n.Dq,n.wI,n.W2,n.jY,n.Gu,n.gu,n.Nd,n.yW,n.wd,n.sr,n.ki,m.Y]}),o})()}];let B=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[l.Bz.forChild(x),l.Bz]}),o})();var H=r(4466);let P=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[c.ez,g.u5,n.Pc,B,H.m]}),o})()}}]);