"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9940],{9940:(Y,g,s)=>{s.r(g),s.d(g,{EvaluationPageModule:()=>y});var d=s(6895),l=s(433),u=s(2078),c=s(9171),f=s(655),p=s(5226),b=s.n(p),t=s(8256),_=s(2468),x=s(1802),Z=s(1622);function F(o,r){if(1&o&&(t.TgZ(0,"ion-select-option",15),t._uU(1),t.qZA()),2&o){const i=r.$implicit;t.s9C("value",i),t.xp6(1),t.Oqu(i)}}function B(o,r){1&o&&(t.TgZ(0,"div",16),t._UZ(1,"ion-icon",17),t.qZA())}function E(o,r){if(1&o&&(t.TgZ(0,"ion-item",11)(1,"ion-label"),t._uU(2),t.qZA(),t.TgZ(3,"ion-select",12),t.YNc(4,F,2,2,"ion-select-option",13),t.qZA(),t.YNc(5,B,2,0,"div",14),t.qZA()),2&o){const i=r.$implicit,e=r.index,a=t.oxw(3);let n;t.xp6(2),t.hij(" ",i.name," "),t.xp6(1),t.Q6J("formControlName","score"+e),t.xp6(1),t.Q6J("ngForOf",a.range(0,i.max_score)),t.xp6(1),t.Q6J("ngIf",a.isSubmitted&&(null==(n=a.evaluationForm.get("score"+e))||null==n.errors?null:n.errors.required))}}function T(o,r){if(1&o){const i=t.EpF();t.TgZ(0,"div")(1,"h2",3),t._uU(2),t.qZA(),t.TgZ(3,"ion-text",4),t._uU(4),t.qZA(),t.TgZ(5,"form",5),t.NdJ("ngSubmit",function(){t.CHM(i);const a=t.oxw().$implicit,n=t.oxw();return t.KtG(n.submitForm(a,a.booth))}),t.TgZ(6,"ion-list",6),t.YNc(7,E,6,4,"ion-item",7),t.qZA(),t.TgZ(8,"div",8)(9,"ion-button",9),t._uU(10,"Submit"),t.qZA(),t.TgZ(11,"ion-button",10),t.NdJ("click",function(){t.CHM(i);const a=t.oxw().$implicit,n=t.oxw();return t.KtG(n.cancelEvaluation(a.booth))}),t._uU(12,"Cancel"),t.qZA()()()()}if(2&o){const i=t.oxw().$implicit,e=t.oxw();t.xp6(2),t.Oqu(i.booth.name),t.xp6(2),t.hij("Member(s): ",i.booth.members,""),t.xp6(1),t.Q6J("formGroup",e.evaluationForm),t.xp6(2),t.Q6J("ngForOf",e.criterias)}}function P(o,r){if(1&o&&(t.TgZ(0,"div"),t.YNc(1,T,13,4,"div",2),t.qZA()),2&o){const i=r.$implicit,e=t.oxw();t.xp6(1),t.Q6J("ngIf",i.booth.id===e.specificBooth)}}const S=[{path:"",component:(()=>{class o{constructor(i,e,a,n,v,m){this.activatedRoute=i,this.formBuilder=e,this.dataService=a,this.authService=n,this.router=v,this.toastController=m,this.isSubmitted=!1,this.currentUserId=n.getUID(),this.dataService.getJudgeByAuthId(this.currentUserId).subscribe(h=>{this.currentJudge=h[0]})}ngOnInit(){this.dataService.getJudgeBooth().subscribe(i=>{this.judgeBooth=i,this.dataService.getBooth().subscribe(e=>{this.judgeBoothsWithBooths=this.dataService.combineData(i,e)})}),this.dataService.getCriteria().subscribe(i=>{this.criterias=i,this.evaluationForm=this.formBuilder.group({}),this.criterias.forEach((e,a)=>{this.evaluationForm.addControl(`score${a}`,this.formBuilder.control("",l.kI.required))}),this.evaluationForm.addControl("comment",this.formBuilder.control(""))}),this.specificBooth=this.activatedRoute.snapshot.paramMap.get("id")}range(i,e){return Array(e-i+1).fill(0).map((a,n)=>i+n)}presentToast(){return(0,f.mG)(this,void 0,void 0,function*(){yield(yield this.toastController.create({message:"Please provide all the required values!",duration:1500,icon:"close-circle"})).present()})}cancelEvaluation(i){this.dataService.updateBoothAvailability(i,!0).then(()=>{this.router.navigate(["/booth"])})}submitForm(i,e){if(this.isSubmitted=!0,this.evaluationForm.valid){const a=this.evaluationForm.value;return Object.keys(a).forEach(n=>{if(n.startsWith("score")){const v=parseInt(n.substring(5)),I={booth_id:this.specificBooth,criteria_id:this.criterias[v].id,judge_id:this.currentJudge.id,value:parseInt(a[n])};this.dataService.addScoring(I)}}),delete i.booth,this.dataService.updateJudgeBooth(i,!0),this.dataService.updateBoothAvailability(e,!0),this.evaluationForm.reset(),this.router.navigate(["/booth"]),b().fire({icon:"success",title:"Scoring submitted",text:"Your evaluation has been submitted successfully!",heightAuto:!1}),!0}return this.presentToast(),!1}}return o.\u0275fac=function(i){return new(i||o)(t.Y36(c.gz),t.Y36(l.qu),t.Y36(_.D),t.Y36(x.e),t.Y36(c.F0),t.Y36(u.yF))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-evaluation"]],decls:3,vars:1,consts:[[1,"ion-padding"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"p-0","fw-bold"],[1,"mb-3"],[1,"evaluation-form","mt-3",3,"formGroup","ngSubmit"],["lines","none",1,"mb-2"],["class","mb-2",4,"ngFor","ngForOf"],[1,"evaluation-form-buttons","d-flex","ion-float-right"],["type","submit","color","success",1,"evaluation-submit-button","pr-2"],["color","danger",1,"evaluation-cancel-button",3,"click"],[1,"mb-2"],["interface","popover","placeholder","Give a score",3,"formControlName"],[3,"value",4,"ngFor","ngForOf"],["class","d-flex text-danger",4,"ngIf"],[3,"value"],[1,"d-flex","text-danger"],["name","alert-circle-sharp"]],template:function(i,e){1&i&&(t._UZ(0,"app-topnav-backbtn"),t.TgZ(1,"ion-content",0),t.YNc(2,P,2,1,"div",1),t.qZA()),2&i&&(t.xp6(2),t.Q6J("ngForOf",e.judgeBoothsWithBooths))},dependencies:[d.sg,d.O5,l._Y,l.JJ,l.JL,l.sg,l.u,u.YG,u.W2,u.gu,u.Ie,u.Q$,u.q_,u.t9,u.n0,u.yW,u.QI,Z.Y]}),o})()}];let A=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[c.Bz.forChild(S),c.Bz]}),o})();var J=s(4466);let y=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[d.ez,l.u5,l.UX,u.Pc,A,J.m]}),o})()}}]);