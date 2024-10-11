import{A as Y,B as C,C as u,D as c,I as l,J as h,K as w,L as E,M as O,N as F,O as y,P as I,S as P,T as H,U as Me,V as v,W as Z,a as W,aa as $e,ba as Le,c as d,ca as V,d as B,da as q,e as z,f as J,fa as N,ga as Ve,h as L,ha as ee,ia as te,j as x,ja as oe,k as K,ka as ne,la as ie,m as k,ma as re,n as b,na as qe,o as $,oa as se,p as Q,q as p,qa as ae,r as S,ra as pe,s as R,sa as le,ta as _,u as f,v as g,w as i,x as s,y as m,z as X}from"./chunk-CDM5JP47.js";var me=class n{logOut(){localStorage.removeItem("token"),window.location.reload()}ngOnInit(){let t=document.querySelectorAll(".nav-link");t.forEach(e=>{window.location.href.endsWith(e.getAttribute("href")||"")&&e.classList.add("active"),e.addEventListener("click",()=>{t.forEach(o=>o.classList.remove("active")),e.classList.add("active")})})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=x({type:n,selectors:[["app-menu"]],standalone:!0,features:[y],decls:38,vars:0,consts:[[1,"navbar","navbar-expand-lg","bg-body-tertiary"],[1,"container-fluid"],["href","javascript:void(0)",1,"navbar-brand"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarSupportedContent","aria-controls","#navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarSupportedContent",1,"collapse","navbar-collapse"],[1,"navbar-nav","me-auto","mb-2","mb-lg-0"],[1,"nav-item"],["aria-current","page","routerLink","/books",1,"nav-link"],[1,"fas","fa-home-alt"],["aria-current","page","routerLink","my-books",1,"nav-link"],[1,"fas","fa-book"],["aria-current","page","routerLink","my_wating_list",1,"nav-link"],[1,"fas","fa-heart"],["aria-current","page","routerLink","my_return_books",1,"nav-link"],[1,"fas","fa-book-reader"],["aria-current","page","routerLink","my_borrow_books",1,"nav-link"],[1,"fas","fa-book-open"],["role","search",1,"d-flex","gap-2","align-items-center"],["type","text","placeholder","Find a book","aria-label","Search",1,"form-control"],["type","submit",1,"btn","btn-outline-success"],[1,"fas","fa-search"],[1,"text-capitalize","fw-bold"],["type","button",1,"btn","btn-link",3,"click"],[1,"fa","fa-door-open"]],template:function(e,o){e&1&&(i(0,"nav",0)(1,"div",1)(2,"a",2),l(3,"BSN"),s(),i(4,"button",3),m(5,"span",4),s(),i(6,"div",5)(7,"ul",6)(8,"li",7)(9,"a",8),m(10,"i",9),l(11,"\xA0 Home "),s()(),i(12,"li",7)(13,"a",10),m(14,"i",11),l(15,"\xA0 My books "),s()(),i(16,"li",7)(17,"a",12),m(18,"i",13),l(19,"\xA0 My waiting list "),s()(),i(20,"li",7)(21,"a",14),m(22,"i",15),l(23,"\xA0 My returned books "),s()(),i(24,"li",7)(25,"a",16),m(26,"i",17),l(27,"\xA0 My borrowed books "),s()()(),i(28,"form",18),m(29,"input",19),i(30,"button",20),m(31,"i",21),s(),i(32,"span"),l(33,"Welcome!"),s(),i(34,"span",22),l(35,"Abraham"),s(),i(36,"button",23),u("click",function(){return o.logOut()}),m(37,"i",24),s()()()()())},dependencies:[q],styles:["li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover{background-color:#d6e5f1;border-radius:5px}li[_ngcontent-%COMP%] > a.active[_ngcontent-%COMP%]{color:#24a7e9;border-radius:5px}"]})};var ce=class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=x({type:n,selectors:[["app-main"]],standalone:!0,features:[y],decls:4,vars:0,consts:[[1,"d-flex","flex-column","gap-1"],[1,"pe-2","ps-2"]],template:function(e,o){e&1&&(i(0,"div",0),m(1,"app-menu"),i(2,"div",1),m(3,"router-outlet"),s()())},dependencies:[Le,me]})};var Ne=()=>[];function Ue(n,t){n&1&&(X(0),m(1,"i",3),Y())}function De(n,t){n&1&&(X(0),m(1,"i",4),Y())}function We(n,t){n&1&&(X(0),m(1,"i",5),Y())}var j=class n{rating=0;maxRating=5;get fullStars(){return Math.floor(this.rating)}get halfStar(){return this.rating%1!==0}get emptyStar(){return this.maxRating-Math.ceil(this.rating)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=x({type:n,selectors:[["app-rating"]],inputs:{rating:"rating"},standalone:!0,features:[y],decls:4,vars:5,consts:[[1,"rating"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"fa","fa-star","text-warning"],[1,"fa","fa-star-half-alt","text-warning"],[1,"fas","fa-star"]],template:function(e,o){e&1&&(i(0,"div",0),R(1,Ue,2,0,"ng-container",1)(2,De,2,0,"ng-container",2)(3,We,2,0,"ng-container",1),s()),e&2&&(p(),f("ngForOf",I(3,Ne).constructor(o.fullStars)),p(),f("ngIf",o.halfStar),p(),f("ngForOf",I(4,Ne).constructor(o.emptyStar)))},dependencies:[P,H]})};function ze(n,t){if(n&1&&(i(0,"span",16),l(1),s()),n&2){let e=c();p(),w(" ",e.book.rate," ")}}function Je(n,t){if(n&1){let e=C();i(0,"div",12)(1,"i",17),u("click",function(){k(e);let r=c();return b(r.onShowDetails())}),s(),i(2,"i",18),u("click",function(){k(e);let r=c();return b(r.onBorrow())}),s(),i(3,"i",19),u("click",function(){k(e);let r=c();return b(r.onAddToWaitingList())}),s()()}}function Ke(n,t){if(n&1){let e=C();i(0,"div",12)(1,"i",20),u("click",function(){k(e);let r=c();return b(r.onEdit())}),s(),i(2,"i",21),u("click",function(){k(e);let r=c();return b(r.onShare())}),s(),i(3,"i",22),u("click",function(){k(e);let r=c();return b(r.onArchived())}),s()()}}var G=class n{_book={};get book(){return this._book}set book(t){this._book=t}_manage=!1;get manage(){return this._manage}set manage(t){this._manage=t}_bookCover;get bookCover(){return this._book.cover?"data:image/jpg; base64, "+this._book.cover:"https://source.unsplash.com/user/c_v_r/1900x800"}share=new $;archive=new $;addToWatingList=new $;borrow=new $;edit=new $;details=new $;onShowDetails(){this.details.emit(this._book)}onBorrow(){this.borrow.emit(this._book)}onAddToWaitingList(){this.addToWatingList.emit(this._book)}onEdit(){this.edit.emit(this._book)}onShare(){this.share.emit(this._book)}onArchived(){this.archive.emit(this._book)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=x({type:n,selectors:[["app-book-card"]],inputs:{book:"book",manage:"manage"},outputs:{share:"share",archive:"archive",addToWatingList:"addToWatingList",borrow:"borrow",edit:"edit",details:"details"},standalone:!0,features:[y],decls:24,vars:14,consts:[[1,"card","border-3",2,"width","20rem"],["height","200","alt","...",1,"card-img-top",3,"src"],[1,"card-body","overflow-scroll"],[1,"card-title","fs-6","fw-bold","mb-1"],[1,"fa-solid","fa-book"],[1,"card-subtitle","fs-6","text-secondary","mb-1"],[1,"fa-solid","fa-user-check"],[1,"fas","fa-code"],[1,"card-subtitle","fs-6","text-secondary"],[1,"fas","fa-user"],[1,"card-text"],[1,"card-footer","d-flex","gap-2","justify-content-between","align-items-center"],[1,"d-flex","gap-2"],[3,"rating"],["class","fw-bold",4,"ngIf"],["class","d-flex gap-2",4,"ngIf"],[1,"fw-bold"],[1,"fas","fa-circle-info","text-primary",3,"click"],[1,"fas","fa-list-check","text-primary",3,"click"],[1,"fas","fa-heart","text-danger",3,"click"],[1,"fas","fa-edit","text-success",3,"click"],[1,"fas","fa-share-nodes","text-primary",3,"click"],[1,"fas","fa-archive","text-danger",3,"click"]],template:function(e,o){e&1&&(i(0,"div",0),m(1,"img",1),i(2,"div",2)(3,"h5",3),m(4,"i",4),l(5),s(),i(6,"h5",5),m(7,"i",6),l(8),s(),i(9,"h6",5),m(10,"i",7),l(11),s(),i(12,"h6",8),m(13,"i",9),l(14),s(),m(15,"hr"),i(16,"p",10),l(17),s()(),i(18,"div",11)(19,"div",12),m(20,"app-rating",13),R(21,ze,2,1,"span",14),s(),R(22,Je,4,0,"div",15)(23,Ke,4,0,"div",15),s()()),e&2&&(g("border-success",o.book.shareable)("border-warning",!o.book.shareable),p(),f("src",o.bookCover,Q),p(4),w("\xA0 ",o.book.title,""),p(3),w("\xA0 ",o.book.authorName,""),p(3),w("\xA0 ",o.book.isbn,""),p(3),w("\xA0 ",o.book.owner,""),p(3),h(o.book.synopsis),p(3),f("rating",o.book.rate||0),p(),f("ngIf",o.book.rate||!1),p(),f("ngIf",!o.manage),p(),f("ngIf",o.manage))},dependencies:[H,j],styles:["div.card[_ngcontent-%COMP%]{max-height:450px;min-height:450px}i[_ngcontent-%COMP%]{cursor:pointer}"]})};var Fe=W(ae());function de(n,t,e,o){let r=new _(t,de.PATH,"patch");return e&&r.path("bookId",e.bookId,{}),n.request(r.build({responseType:"json",accept:"application/json",context:o})).pipe(B(a=>a instanceof v),d(a=>a))}de.PATH="/books/borrow/return/approve/{bookId}";function ue(n,t,e,o){let r=new _(t,ue.PATH,"post");return e&&r.path("bookId",e.bookId,{}),n.request(r.build({responseType:"json",accept:"application/json",context:o})).pipe(B(a=>a instanceof v),d(a=>a))}ue.PATH="/books/borrow/{bookId}";function fe(n,t,e,o){let r=new _(t,fe.PATH,"get");return e&&(r.query("page",e.page,{}),r.query("size",e.size,{})),n.request(r.build({responseType:"json",accept:"application/json",context:o})).pipe(B(a=>a instanceof v),d(a=>a))}fe.PATH="/books/all";function ke(n,t,e,o){let r=new _(t,ke.PATH,"get");return e&&(r.query("page",e.page,{}),r.query("size",e.size,{})),n.request(r.build({responseType:"json",accept:"application/json",context:o})).pipe(B(a=>a instanceof v),d(a=>a))}ke.PATH="/books/owner";function be(n,t,e,o){let r=new _(t,be.PATH,"get");return e&&(r.query("page",e.page,{}),r.query("size",e.size,{})),n.request(r.build({responseType:"json",accept:"application/json",context:o})).pipe(B(a=>a instanceof v),d(a=>a))}be.PATH="/books/borrowed";function ge(n,t,e,o){let r=new _(t,ge.PATH,"get");return e&&(r.query("page",e.page,{}),r.query("size",e.size,{})),n.request(r.build({responseType:"json",accept:"application/json",context:o})).pipe(B(a=>a instanceof v),d(a=>a))}ge.PATH="/books/returned";function Be(n,t,e,o){let r=new _(t,Be.PATH,"get");return e&&r.path("id",e.id,{}),n.request(r.build({responseType:"json",accept:"application/json",context:o})).pipe(B(a=>a instanceof v),d(a=>a))}Be.PATH="/books/{id}";function ve(n,t,e,o){let r=new _(t,ve.PATH,"patch");return e&&r.path("bookId",e.bookId,{}),n.request(r.build({responseType:"json",accept:"application/json",context:o})).pipe(B(a=>a instanceof v),d(a=>a))}ve.PATH="/books/borrow/return/{bookId}";function _e(n,t,e,o){let r=new _(t,_e.PATH,"post");return e&&r.body(e.body,"application/json"),n.request(r.build({responseType:"json",accept:"application/json",context:o})).pipe(B(a=>a instanceof v),d(a=>a))}_e.PATH="/books";function Re(n,t,e,o){let r=new _(t,Re.PATH,"patch");return e&&r.path("bookId",e.bookId,{}),n.request(r.build({responseType:"json",accept:"application/json",context:o})).pipe(B(a=>a instanceof v),d(a=>a))}Re.PATH="/books/archived/{bookId}";function he(n,t,e,o){let r=new _(t,he.PATH,"patch");return e&&r.path("bookId",e.bookId,{}),n.request(r.build({responseType:"json",accept:"application/json",context:o})).pipe(B(a=>a instanceof v),d(a=>a))}he.PATH="/books/shareable/{bookId}";function xe(n,t,e,o){let r=new _(t,xe.PATH,"post");return e&&(r.path("bookId",e.bookId,{}),r.body(e.body,"multipart/form-data")),n.request(r.build({responseType:"json",accept:"application/json",context:o})).pipe(B(a=>a instanceof v),d(a=>a))}xe.PATH="/books/cover/{bookId}";var T=class n extends le{constructor(t,e){super(t,e)}static SaveBookPath="/books";saveBook$Response(t,e){return _e(this.http,this.rootUrl,t,e)}saveBook(t,e){return this.saveBook$Response(t,e).pipe(d(o=>o.body))}static UploadBookCoverPath="/books/cover/{bookId}";uploadBookCover$Response(t,e){return xe(this.http,this.rootUrl,t,e)}uploadBookCover(t,e){return this.uploadBookCover$Response(t,e).pipe(d(o=>o.body))}static BorrowBookPath="/books/borrow/{bookId}";borrowBook$Response(t,e){return ue(this.http,this.rootUrl,t,e)}borrowBook(t,e){return this.borrowBook$Response(t,e).pipe(d(o=>o.body))}static UpdateSharableStatusPath="/books/shareable/{bookId}";updateSharableStatus$Response(t,e){return he(this.http,this.rootUrl,t,e)}updateSharableStatus(t,e){return this.updateSharableStatus$Response(t,e).pipe(d(o=>o.body))}static ReturnBookPath="/books/borrow/return/{bookId}";returnBook$Response(t,e){return ve(this.http,this.rootUrl,t,e)}returnBook(t,e){return this.returnBook$Response(t,e).pipe(d(o=>o.body))}static ApproveReturnBookPath="/books/borrow/return/approve/{bookId}";approveReturnBook$Response(t,e){return de(this.http,this.rootUrl,t,e)}approveReturnBook(t,e){return this.approveReturnBook$Response(t,e).pipe(d(o=>o.body))}static UpdateArchivedStatusPath="/books/archived/{bookId}";updateArchivedStatus$Response(t,e){return Re(this.http,this.rootUrl,t,e)}updateArchivedStatus(t,e){return this.updateArchivedStatus$Response(t,e).pipe(d(o=>o.body))}static GetBookByIdPath="/books/{id}";getBookById$Response(t,e){return Be(this.http,this.rootUrl,t,e)}getBookById(t,e){return this.getBookById$Response(t,e).pipe(d(o=>o.body))}static GetAllReturnedBooksPath="/books/returned";getAllReturnedBooks$Response(t,e){return ge(this.http,this.rootUrl,t,e)}getAllReturnedBooks(t,e){return this.getAllReturnedBooks$Response(t,e).pipe(d(o=>o.body))}static GetAllBooksByOwnerPath="/books/owner";getAllBooksByOwner$Response(t,e){return ke(this.http,this.rootUrl,t,e)}getAllBooksByOwner(t,e){return this.getAllBooksByOwner$Response(t,e).pipe(d(o=>o.body))}static GetAllBorrowedBooksPath="/books/borrowed";getAllBorrowedBooks$Response(t,e){return be(this.http,this.rootUrl,t,e)}getAllBorrowedBooks(t,e){return this.getAllBorrowedBooks$Response(t,e).pipe(d(o=>o.body))}static GetAllBooksPath="/books/all";getAllBooks$Response(t,e){return fe(this.http,this.rootUrl,t,e)}getAllBooks(t,e){return this.getAllBooks$Response(t,e).pipe(d(o=>o.body))}static \u0275fac=function(e){return new(e||n)(L(pe),L(Z))};static \u0275prov=z({token:n,factory:n.\u0275fac,providedIn:"root"})};var Ye=()=>[];function Ze(n,t){if(n&1&&(i(0,"div",13),l(1),s()),n&2){let e=c();g("alert-success",e.level==="success")("alert-danger",e.level==="error"),p(),h(e.message)}}function et(n,t){if(n&1){let e=C();i(0,"app-book-card",14),u("borrow",function(r){k(e);let a=c();return b(a.borrowBook(r))}),s()}if(n&2){let e=t.$implicit;f("book",e)}}function tt(n,t){if(n&1){let e=C();i(0,"li",6)(1,"a",7),u("click",function(){let r=k(e).index,a=c();return b(a.goToPage(r))}),l(2),s()()}if(n&2){let e=t.index,o=c();p(),g("active",o.page==e),p(),w(" ",e+1," ")}}var Ce=class n{constructor(t,e){this.bookService=t;this.router=e}bookResponse={};page=0;size=5;message="";level="success";ngOnInit(){this.findAllBooks()}findAllBooks(){this.bookService.getAllBooks({page:this.page,size:this.size}).subscribe({next:t=>{this.bookResponse=t},error:t=>{this.message=t.message}})}goToFirstPage(){this.page=0,this.findAllBooks()}goToPreviousPage(){this.page--,this.findAllBooks()}goToPage(t){this.page=t,this.findAllBooks()}goToNextPage(){this.page++,this.findAllBooks()}goToLastPage(){this.page=this.bookResponse.totalPages-1,this.findAllBooks()}get isLastPage(){return this.bookResponse.totalPages>0?this.page===this.bookResponse.totalPages-1:!0}borrowBook(t){this.message="",this.bookService.borrowBook({bookId:t.id}).subscribe({next:()=>{Fe.default.fire({icon:"success",title:"Book successfully added to your list",confirmButtonText:"Ok"}).then(()=>{t.shareable=!1})},error:()=>{Fe.default.fire({title:"Error!",text:"Book already borrowed",icon:"error",confirmButtonText:"Ok"})}})}static \u0275fac=function(e){return new(e||n)(S(T),S(V))};static \u0275cmp=x({type:n,selectors:[["app-book-list"]],standalone:!0,features:[y],decls:22,vars:12,consts:[["class","alert",3,"alert-success","alert-danger",4,"ngIf"],[1,"d-flex","justify-content-start","gap-2","flex-wrap"],[3,"book","borrow",4,"ngFor","ngForOf"],[1,"d-flex","justify-content-center","mt-3"],["aria-label","Page navigation"],[1,"pagination"],[1,"page-item"],["aria-label","Previous","href","javascript:void(0)",1,"page-link",3,"click"],[1,"fa-solid","fa-angles-left"],[1,"fa-solid","fa-angle-left"],["class","page-item",4,"ngFor","ngForOf"],[1,"fa-solid","fa-chevron-right"],[1,"fa-solid","fa-angles-right"],[1,"alert"],[3,"borrow","book"]],template:function(e,o){e&1&&(i(0,"h3"),l(1,"Books list"),s(),R(2,Ze,2,5,"div",0),m(3,"hr"),i(4,"div",1),R(5,et,1,1,"app-book-card",2),s(),i(6,"div",3)(7,"nav",4)(8,"ul",5)(9,"li",6)(10,"a",7),u("click",function(){return o.goToFirstPage()}),m(11,"i",8),s()(),i(12,"li",6)(13,"a",7),u("click",function(){return o.goToPreviousPage()}),m(14,"i",9),s()(),R(15,tt,3,3,"li",10),i(16,"li",6)(17,"a",7),u("click",function(){return o.goToNextPage()}),m(18,"i",11),s()(),i(19,"li",6)(20,"a",7),u("click",function(){return o.goToLastPage()}),m(21,"i",12),s()()()()()),e&2&&(p(2),f("ngIf",o.message),p(3),f("ngForOf",o.bookResponse.content),p(5),g("disabled",o.page==0),p(3),g("disabled",o.page==0),p(2),f("ngForOf",I(11,Ye).constructor(o.bookResponse==null?null:o.bookResponse.totalPages)),p(2),g("disabled",o.isLastPage),p(3),g("disabled",o.isLastPage))},dependencies:[P,G,H]})};var ot=()=>[];function nt(n,t){if(n&1){let e=C();i(0,"app-book-card",15),u("archive",function(r){k(e);let a=c();return b(a.archiveBook(r))})("edit",function(r){k(e);let a=c();return b(a.editBook(r))})("share",function(r){k(e);let a=c();return b(a.shareBook(r))}),s()}if(n&2){let e=t.$implicit;f("book",e)("manage",!0)}}function it(n,t){if(n&1){let e=C();i(0,"li",8)(1,"a",9),u("click",function(){let r=k(e).index,a=c();return b(a.goToPage(r))}),l(2),s()()}if(n&2){let e=t.index,o=c();p(),g("active",o.page==e),p(),w(" ",e+1," ")}}var ye=class n{constructor(t,e){this.bookService=t;this.router=e}bookResponse={};page=0;size=5;ngOnInit(){this.findAllBooks()}findAllBooks(){this.bookService.getAllBooksByOwner({page:this.page,size:this.size}).subscribe({next:t=>{this.bookResponse=t}})}goToFirstPage(){this.page=0,this.findAllBooks()}goToPreviousPage(){this.page--,this.findAllBooks()}goToPage(t){this.page=t,this.findAllBooks()}goToNextPage(){this.page++,this.findAllBooks()}goToLastPage(){this.page=this.bookResponse.totalPages-1,this.findAllBooks()}get isLastPage(){return this.bookResponse.totalPages>0?this.page===this.bookResponse.totalPages-1:!0}archiveBook(t){this.bookService.updateArchivedStatus({bookId:t.id}).subscribe({next:()=>{t.archived=!t.archived}})}shareBook(t){this.bookService.updateSharableStatus({bookId:t.id}).subscribe({next:()=>{t.shareable=!t.shareable}})}editBook(t){this.router.navigate(["books","manage",t.id])}static \u0275fac=function(e){return new(e||n)(S(T),S(V))};static \u0275cmp=x({type:n,selectors:[["app-my-books"]],standalone:!0,features:[y],decls:25,vars:11,consts:[[1,"d-flex","justify-content-end","mb-3"],["routerLink","/books/manage",1,"btn","btn-outline-primary"],[1,"fas","fa-plus"],[1,"d-flex","justify-content-start","gap-2","flex-wrap"],[3,"book","manage","archive","edit","share",4,"ngFor","ngForOf"],[1,"d-flex","justify-content-center","mt-3"],["aria-label","Page navigation"],[1,"pagination"],[1,"page-item"],["aria-label","Previous","href","javascript:void(0)",1,"page-link",3,"click"],[1,"fa-solid","fa-angles-left"],[1,"fa-solid","fa-angle-left"],["class","page-item",4,"ngFor","ngForOf"],[1,"fa-solid","fa-chevron-right"],[1,"fa-solid","fa-angles-right"],[3,"archive","edit","share","book","manage"]],template:function(e,o){e&1&&(i(0,"h3"),l(1,"My books list"),s(),m(2,"hr"),i(3,"div",0)(4,"a",1),m(5,"i",2),l(6," \xA0 New Book "),s()(),i(7,"div",3),R(8,nt,1,2,"app-book-card",4),s(),i(9,"div",5)(10,"nav",6)(11,"ul",7)(12,"li",8)(13,"a",9),u("click",function(){return o.goToFirstPage()}),m(14,"i",10),s()(),i(15,"li",8)(16,"a",9),u("click",function(){return o.goToPreviousPage()}),m(17,"i",11),s()(),R(18,it,3,3,"li",12),i(19,"li",8)(20,"a",9),u("click",function(){return o.goToNextPage()}),m(21,"i",13),s()(),i(22,"li",8)(23,"a",9),u("click",function(){return o.goToLastPage()}),m(24,"i",14),s()()()()()),e&2&&(p(8),f("ngForOf",o.bookResponse.content),p(5),g("disabled",o.page==0),p(3),g("disabled",o.page==0),p(2),f("ngForOf",I(10,ot).constructor(o.bookResponse==null?null:o.bookResponse.totalPages)),p(2),g("disabled",o.isLastPage),p(3),g("disabled",o.isLastPage))},dependencies:[G,P,q]})};var Se=W(ae());function st(n,t){if(n&1&&(i(0,"p",28),l(1),s()),n&2){let e=t.$implicit;p(),h(e)}}function at(n,t){if(n&1&&(i(0,"div",26),R(1,st,2,1,"p",27),s()),n&2){let e=c();p(),f("ngForOf",e.errorMsg)}}var D=class n{constructor(t,e,o){this.bookService=t;this.router=e;this.activatedRoute=o}errorMsg=[];selectedBookCover;selectedPicture;bookRequest={authorName:"",isbn:"",synopsis:"",title:""};onFileSelected(t){if(this.selectedBookCover=t.target.files[0],console.log(this.selectedBookCover),this.selectedBookCover){let e=new FileReader;e.onload=()=>{this.selectedPicture=e.result},e.readAsDataURL(this.selectedBookCover)}}saveBook(){this.bookService.saveBook({body:this.bookRequest}).subscribe({next:t=>{this.bookService.uploadBookCover({bookId:t.data,body:{file:this.selectedBookCover}}).subscribe({next:()=>{Se.default.fire({icon:"success",title:"Book created successfully",confirmButtonText:"Ok"}).then(()=>this.router.navigate(["books/my-books"]))}})},error:t=>{Se.default.fire({title:"Error!",text:t.error.validationError,icon:"error",confirmButtonText:"Ok"})}})}ngOnInit(){let t=this.activatedRoute.snapshot.params.bookId;t&&this.bookService.getBookById({id:t}).subscribe({next:e=>{this.bookRequest={id:e.id,title:e.title,authorName:e.authorName,isbn:e.isbn,synopsis:e.synopsis,available:e.shareable},e.cover&&(this.selectedPicture="data:image/jpg;base64,"+e.cover)},error:e=>{Se.default.fire({title:"Error!",text:e.error.validationError,icon:"error",confirmButtonText:"Ok"})}})}static \u0275fac=function(e){return new(e||n)(S(T),S(V),S($e))};static \u0275cmp=x({type:n,selectors:[["app-manage-book"]],standalone:!0,features:[y],decls:39,vars:7,consts:[[1,"p-2"],["class","alert alert-danger mt-2","role","alert",4,"ngIf"],[1,"d-flex","gap-2"],[1,"col-3"],["width","100%","height","100%","alt","...",1,"rounded-1",3,"src"],[1,"mt-2"],["type","file","id","formFile","accept","image/*",1,"form-control",3,"change"],[1,"col-9"],[1,"row","g-3"],[1,"col-12"],["for","title",1,"form-label"],["name","title","type","text","id","title","placeholder","Book title",1,"form-control",3,"ngModelChange","ngModel"],[1,"col-6"],["for","author",1,"form-label"],["name","authorName","type","text","id","author","placeholder","Author name",1,"form-control",3,"ngModelChange","ngModel"],["for","isbn",1,"form-label"],["name","isbn","type","text","id","isbn","placeholder","ISBN",1,"form-control",3,"ngModelChange","ngModel"],["for","synopsis",1,"form-label"],["name","synopsis","rows","3","id","synopsis","placeholder","Synopsis",1,"form-control",3,"ngModelChange","ngModel"],["name","available","type","checkbox","placeholder","ISBN",1,"form-check-input",3,"ngModelChange","ngModel"],[1,"form-check-label"],[1,"d-flex","justify-content-end","gap-2","col-12"],["type","submit",1,"btn","btn-outline-primary",3,"click"],[1,"fas","fa-save"],["routerLink","/books/my-books",1,"btn","btn-link","text-danger"],[1,"fas","fa-times"],["role","alert",1,"alert","alert-danger","mt-2"],["class","p-0 m-0",4,"ngFor","ngForOf"],[1,"p-0","m-0"]],template:function(e,o){e&1&&(i(0,"div",0)(1,"h2"),l(2,"Manage my book"),s(),m(3,"hr"),R(4,at,2,1,"div",1),i(5,"div",2)(6,"div",3),m(7,"img",4),i(8,"div",5)(9,"input",6),u("change",function(a){return o.onFileSelected(a)}),s()()(),i(10,"div",7)(11,"form",8)(12,"div",9)(13,"label",10),l(14,"Title"),s(),i(15,"input",11),F("ngModelChange",function(a){return O(o.bookRequest.title,a)||(o.bookRequest.title=a),a}),s()(),i(16,"div",12)(17,"label",13),l(18,"Author name"),s(),i(19,"input",14),F("ngModelChange",function(a){return O(o.bookRequest.authorName,a)||(o.bookRequest.authorName=a),a}),s()(),i(20,"div",12)(21,"label",15),l(22,"ISBN"),s(),i(23,"input",16),F("ngModelChange",function(a){return O(o.bookRequest.isbn,a)||(o.bookRequest.isbn=a),a}),s()(),i(24,"div",9)(25,"label",17),l(26,"Synopsis"),s(),i(27,"textarea",18),F("ngModelChange",function(a){return O(o.bookRequest.synopsis,a)||(o.bookRequest.synopsis=a),a}),s()(),i(28,"div",9)(29,"input",19),F("ngModelChange",function(a){return O(o.bookRequest.available,a)||(o.bookRequest.available=a),a}),s(),i(30,"label",20),l(31,"Available"),s()(),i(32,"div",21)(33,"button",22),u("click",function(){return o.saveBook()}),m(34,"i",23),l(35,"\xA0 Save"),s(),i(36,"a",24),m(37,"i",25),l(38,"\xA0 Cancel"),s()()()()()()),e&2&&(p(4),f("ngIf",o.errorMsg.length),p(3),f("src",o.selectedPicture||"https://source.unsplash.com/user/c_v_r/1900x800",Q),p(8),E("ngModel",o.bookRequest.title),p(4),E("ngModel",o.bookRequest.authorName),p(4),E("ngModel",o.bookRequest.isbn),p(4),E("ngModel",o.bookRequest.synopsis),p(2),E("ngModel",o.bookRequest.available))},dependencies:[H,P,se,re,ee,Ve,te,oe,ie,ne,q]})};var Ae=W(ae());function we(n,t,e,o){let r=new _(t,we.PATH,"get");return e&&(r.path("bookId",e.bookId,{}),r.query("page",e.page,{})),n.request(r.build({responseType:"json",accept:"application/json",context:o})).pipe(B(a=>a instanceof v),d(a=>a))}we.PATH="/feedbacks/book/{bookId}";function Pe(n,t,e,o){let r=new _(t,Pe.PATH,"post");return e&&r.body(e.body,"application/json"),n.request(r.build({responseType:"json",accept:"application/json",context:o})).pipe(B(a=>a instanceof v),d(a=>a))}Pe.PATH="/feedbacks/save";var He=class n extends le{constructor(t,e){super(t,e)}static SaveFeedbackPath="/feedbacks/save";saveFeedback$Response(t,e){return Pe(this.http,this.rootUrl,t,e)}saveFeedback(t,e){return this.saveFeedback$Response(t,e).pipe(d(o=>o.body))}static GetFeedbackbyBookPath="/feedbacks/book/{bookId}";getFeedbackbyBook$Response(t,e){return we(this.http,this.rootUrl,t,e)}getFeedbackbyBook(t,e){return this.getFeedbackbyBook$Response(t,e).pipe(d(o=>o.body))}static \u0275fac=function(e){return new(e||n)(L(pe),L(Z))};static \u0275prov=z({token:n,factory:n.\u0275fac,providedIn:"root"})};var lt=()=>[];function mt(n,t){if(n&1){let e=C();i(0,"div",2)(1,"h2"),l(2,"Return and share a feedback"),s(),i(3,"div",3)(4,"div",4)(5,"div",5)(6,"strong"),l(7,"Title"),s()(),i(8,"div",6),l(9),s()(),i(10,"div",4)(11,"div",5)(12,"strong"),l(13,"Author"),s()(),i(14,"div",6),l(15),s()(),i(16,"div",4)(17,"div",5)(18,"strong"),l(19,"ISBN"),s()(),i(20,"div",6),l(21),s()(),i(22,"div",4)(23,"div",5)(24,"strong"),l(25,"Rate"),s()(),i(26,"div",6),l(27),s()()(),m(28,"hr"),i(29,"div",7)(30,"form",8)(31,"div",9)(32,"input",10),F("ngModelChange",function(r){k(e);let a=c();return O(a.feedbackRequest.note,r)||(a.feedbackRequest.note=r),b(r)}),s(),m(33,"app-rating",11),l(34),s(),i(35,"div",7)(36,"label",12),l(37,"Feedback"),s(),i(38,"textarea",13),F("ngModelChange",function(r){k(e);let a=c();return O(a.feedbackRequest.comment,r)||(a.feedbackRequest.comment=r),b(r)}),s()(),i(39,"div",14)(40,"button",15),u("click",function(){k(e);let r=c();return b(r.returnBook(!0))}),m(41,"i",16),l(42,"\xA0 Return book"),s(),i(43,"button",17),u("click",function(){k(e);let r=c();return b(r.returnBook(!1))}),m(44,"i",18),l(45,"\xA0 Return without a feedback"),s(),i(46,"button",19),u("click",function(){k(e);let r=c();return b(r.selectedBook=void 0)}),m(47,"i",20),l(48,"\xA0 Cancel"),s()()()()()}if(n&2){let e=c();p(9),h(e.selectedBook.title),p(6),h(e.selectedBook.authorName),p(6),h(e.selectedBook.isbn),p(6),h(e.selectedBook.rate),p(5),E("ngModel",e.feedbackRequest.note),p(),f("rating",e.feedbackRequest.note||0),p(),w(" ",e.feedbackRequest.note," "),p(4),E("ngModel",e.feedbackRequest.comment)}}function ct(n,t){n&1&&m(0,"i",41)}function dt(n,t){if(n&1){let e=C();i(0,"i",42),u("click",function(){k(e);let r=c().$implicit,a=c(2);return b(a.returnBorrowedBook(r))}),s()}}function ut(n,t){if(n&1&&(i(0,"tr")(1,"th",35),l(2),s(),i(3,"td"),l(4),s(),i(5,"td"),l(6),s(),i(7,"td"),l(8),s(),i(9,"td"),m(10,"i",36),l(11),s(),i(12,"td")(13,"div",37),R(14,ct,1,0,"i",38)(15,dt,1,0,"i",39),m(16,"i",40),s()()()),n&2){let e=t.$implicit,o=t.index;p(2),h(o+1),p(2),h(e.title),p(2),h(e.authorName),p(2),h(e.isbn),p(3),h(e.rate),p(3),f("ngIf",e.returned),p(),f("ngIf",!e.returned),p(),g("text-success",e.returnApproved)}}function ft(n,t){if(n&1){let e=C();i(0,"li",28)(1,"a",29),u("click",function(){let r=k(e).index,a=c(2);return b(a.goToPage(r))}),l(2),s()()}if(n&2){let e=t.index,o=c(2);p(),g("active",o.page==e),p(),w(" ",e+1," ")}}function kt(n,t){if(n&1){let e=C();i(0,"div")(1,"table",21)(2,"thead")(3,"tr")(4,"th",22),l(5,"#"),s(),i(6,"th",22),l(7,"Title"),s(),i(8,"th",22),l(9,"Author"),s(),i(10,"th",22),l(11,"ISBN"),s(),i(12,"th",22),l(13,"Rate"),s(),i(14,"th",22),m(15,"i",23),s()()(),i(16,"tbody"),R(17,ut,17,9,"tr",24),s()(),i(18,"div",25)(19,"nav",26)(20,"ul",27)(21,"li",28)(22,"a",29),u("click",function(){k(e);let r=c();return b(r.goToFirstPage())}),m(23,"i",30),s()(),i(24,"li",28)(25,"a",29),u("click",function(){k(e);let r=c();return b(r.goToPreviousPage())}),m(26,"i",31),s()(),R(27,ft,3,3,"li",32),i(28,"li",28)(29,"a",29),u("click",function(){k(e);let r=c();return b(r.goToNextPage())}),m(30,"i",33),s()(),i(31,"li",28)(32,"a",29),u("click",function(){k(e);let r=c();return b(r.goToLastPage())}),m(33,"i",34),s()()()()()()}if(n&2){let e=c();p(17),f("ngForOf",e.borrowedBooks.content),p(5),g("disabled",e.page==0),p(3),g("disabled",e.page==0),p(2),f("ngForOf",I(10,lt).constructor(e.borrowedBooks==null?null:e.borrowedBooks.totalPages)),p(2),g("disabled",e.isLastPage),p(3),g("disabled",e.isLastPage)}}var Te=class n{constructor(t,e){this.bookService=t;this.feedbackService=e}borrowedBooks={};page=0;size=5;feedbackRequest={bookId:0,comment:"",note:0};selectedBook=void 0;returnBorrowedBook(t){this.selectedBook=t,this.feedbackRequest.bookId=t.id}ngOnInit(){this.findAllBorrowedBooks()}findAllBorrowedBooks(){this.bookService.getAllBorrowedBooks({page:this.page,size:this.size}).subscribe({next:t=>{this.borrowedBooks=t}})}goToFirstPage(){this.page=0,this.findAllBorrowedBooks()}goToPreviousPage(){this.page--,this.findAllBorrowedBooks()}goToPage(t){this.page=t,this.findAllBorrowedBooks()}goToNextPage(){this.page++,this.findAllBorrowedBooks()}goToLastPage(){this.page=this.borrowedBooks.totalPages-1,this.findAllBorrowedBooks()}get isLastPage(){return this.borrowedBooks.totalPages>0?this.page===this.borrowedBooks.totalPages-1:!0}returnBook(t){this.bookService.returnBook({bookId:this.selectedBook?.id}).subscribe({next:()=>{Ae.default.fire({icon:"success",title:"Book returned successfully",confirmButtonText:"Ok"}).then(()=>{t?this.giveFeedback():(this.selectedBook=void 0,this.findAllBorrowedBooks())})},error:()=>{Ae.default.fire({title:"Error!",text:"Error returning book",icon:"error",confirmButtonText:"Ok"})}})}giveFeedback(){this.feedbackService.saveFeedback({body:this.feedbackRequest}).subscribe({next:()=>{Ae.default.fire({icon:"success",title:"Feedback saved successfully",confirmButtonText:"Ok"}),this.selectedBook=void 0,this.findAllBorrowedBooks()}})}static \u0275fac=function(e){return new(e||n)(S(T),S(He))};static \u0275cmp=x({type:n,selectors:[["app-borrowed-book-list"]],standalone:!0,features:[y],decls:5,vars:2,consts:[["class","d-flex flex-column col-6",4,"ngIf"],[4,"ngIf"],[1,"d-flex","flex-column","col-6"],[1,"d-flex","flex-column","col-12"],[1,"d-flex"],[1,"col-1"],[1,"col-11"],[1,"col-12"],[1,"row","g-3"],[1,"d-flex","gap-3"],["type","range","id","rate","name","rate","min","0","max","5","step","0.5",1,"form-range","w-25",3,"ngModelChange","ngModel"],[3,"rating"],["for","feedback",1,"form-label"],["rows","3","id","feedback","name","feedback","placeholder","Give a feedback",1,"form-control",3,"ngModelChange","ngModel"],[1,"d-flex","justify-content-end","gap-2","col-12"],["type","submit",1,"btn","btn-outline-primary",3,"click"],[1,"fas","fa-save"],["type","submit",1,"btn","btn-outline-success",3,"click"],[1,"fa-solid","fa-paper-plane"],[1,"btn","btn-link","text-danger",3,"click"],[1,"fas","fa-times"],[1,"table"],["scope","col"],[1,"fas","fa-cogs"],[4,"ngFor","ngForOf"],[1,"d-flex","justify-content-center","mt-3"],["aria-label","Page navigation"],[1,"pagination"],[1,"page-item"],["aria-label","Previous","href","javascript:void(0)",1,"page-link",3,"click"],[1,"fa-solid","fa-angles-left"],[1,"fa-solid","fa-angle-left"],["class","page-item",4,"ngFor","ngForOf"],[1,"fa-solid","fa-chevron-right"],[1,"fa-solid","fa-angles-right"],["scope","row"],[1,"fas","fa-star","text-warning"],[1,"d-flex","gap-2"],["class","fa-regular fa-paper-plane text-primary cursor-pointer",4,"ngIf"],["class","fa-solid fa-paper-plane text-success cursor-pointer",3,"click",4,"ngIf"],[1,"fa-solid","fa-circle-check"],[1,"fa-regular","fa-paper-plane","text-primary","cursor-pointer"],[1,"fa-solid","fa-paper-plane","text-success","cursor-pointer",3,"click"]],template:function(e,o){e&1&&(i(0,"h2"),l(1,"My borrowed books"),s(),m(2,"hr"),R(3,mt,49,8,"div",0)(4,kt,34,11,"div",1)),e&2&&(p(3),f("ngIf",o.selectedBook),p(),f("ngIf",!o.selectedBook))},dependencies:[P,H,se,re,ee,qe,te,oe,ie,ne,j]})};var Ie=W(ae());var bt=()=>[];function gt(n,t){n&1&&m(0,"i",21)}function Bt(n,t){n&1&&m(0,"i",22)}function vt(n,t){if(n&1){let e=C();i(0,"tr")(1,"th",15),l(2),s(),i(3,"td"),l(4),s(),i(5,"td"),l(6),s(),i(7,"td"),l(8),s(),i(9,"td"),m(10,"i",16),l(11),s(),i(12,"td")(13,"div",17),R(14,gt,1,0,"i",18)(15,Bt,1,0,"i",19),i(16,"i",20),u("click",function(){let r=k(e).$implicit,a=c(2);return b(a.approveBookReturn(r))}),s()()()()}if(n&2){let e=t.$implicit,o=t.index;p(2),h(o+1),p(2),h(e.title),p(2),h(e.authorName),p(2),h(e.isbn),p(3),h(e.rate),p(3),f("ngIf",e.returned),p(),f("ngIf",!e.returned),p(),g("text-success",e.returnApproved)}}function _t(n,t){if(n&1){let e=C();i(0,"li",8)(1,"a",9),u("click",function(){let r=k(e).index,a=c(2);return b(a.goToPage(r))}),l(2),s()()}if(n&2){let e=t.index,o=c(2);p(),g("active",o.page==e),p(),w(" ",e+1," ")}}function Rt(n,t){if(n&1){let e=C();i(0,"div")(1,"table",1)(2,"thead")(3,"tr")(4,"th",2),l(5,"#"),s(),i(6,"th",2),l(7,"Title"),s(),i(8,"th",2),l(9,"Author"),s(),i(10,"th",2),l(11,"ISBN"),s(),i(12,"th",2),l(13,"Rate"),s(),i(14,"th",2),m(15,"i",3),s()()(),i(16,"tbody"),R(17,vt,17,9,"tr",4),s()(),i(18,"div",5)(19,"nav",6)(20,"ul",7)(21,"li",8)(22,"a",9),u("click",function(){k(e);let r=c();return b(r.goToFirstPage())}),m(23,"i",10),s()(),i(24,"li",8)(25,"a",9),u("click",function(){k(e);let r=c();return b(r.goToPreviousPage())}),m(26,"i",11),s()(),R(27,_t,3,3,"li",12),i(28,"li",8)(29,"a",9),u("click",function(){k(e);let r=c();return b(r.goToNextPage())}),m(30,"i",13),s()(),i(31,"li",8)(32,"a",9),u("click",function(){k(e);let r=c();return b(r.goToLastPage())}),m(33,"i",14),s()()()()()()}if(n&2){let e=c();p(17),f("ngForOf",e.returnedBooks.content),p(5),g("disabled",e.page==0),p(3),g("disabled",e.page==0),p(2),f("ngForOf",I(10,bt).constructor(e.returnedBooks==null?null:e.returnedBooks.totalPages)),p(2),g("disabled",e.isLastPage),p(3),g("disabled",e.isLastPage)}}var Ee=class n{constructor(t){this.bookService=t}returnedBooks={};page=0;size=5;selectedBook=void 0;ngOnInit(){this.findAllReturnedBooks()}findAllReturnedBooks(){this.bookService.getAllReturnedBooks({page:this.page,size:this.size}).subscribe({next:t=>{this.returnedBooks=t}})}goToFirstPage(){this.page=0,this.findAllReturnedBooks()}goToPreviousPage(){this.page--,this.findAllReturnedBooks()}goToPage(t){this.page=t,this.findAllReturnedBooks()}goToNextPage(){this.page++,this.findAllReturnedBooks()}goToLastPage(){this.page=this.returnedBooks.totalPages-1,this.findAllReturnedBooks()}get isLastPage(){return this.returnedBooks.totalPages>0?this.page===this.returnedBooks.totalPages-1:!0}approveBookReturn(t){if(!t.returned){Ie.default.fire({title:"Error!",text:"Book has not been returned",icon:"error",confirmButtonText:"Ok"});return}this.bookService.approveReturnBook({bookId:t.id}).subscribe({next:()=>{Ie.default.fire({icon:"success",title:"Return approved successfully",confirmButtonText:"Ok"}).then(()=>this.findAllReturnedBooks())},error:()=>{Ie.default.fire({title:"Error!",text:"Approval failed",icon:"error",confirmButtonText:"Ok"})}})}static \u0275fac=function(e){return new(e||n)(S(T))};static \u0275cmp=x({type:n,selectors:[["app-return-books"]],standalone:!0,features:[y],decls:1,vars:1,consts:[[4,"ngIf"],[1,"table"],["scope","col"],[1,"fas","fa-cogs"],[4,"ngFor","ngForOf"],[1,"d-flex","justify-content-center","mt-3"],["aria-label","Page navigation"],[1,"pagination"],[1,"page-item"],["aria-label","Previous","href","javascript:void(0)",1,"page-link",3,"click"],[1,"fa-solid","fa-angles-left"],[1,"fa-solid","fa-angle-left"],["class","page-item",4,"ngFor","ngForOf"],[1,"fa-solid","fa-chevron-right"],[1,"fa-solid","fa-angles-right"],["scope","row"],[1,"fas","fa-star","text-warning"],[1,"d-flex","gap-2"],["class","fa-regular fa-paper-plane text-primary cursor-pointer",4,"ngIf"],["class","fa-solid fa-paper-plane text-success",4,"ngIf"],[1,"fa-solid","fa-circle-check","cursor-pointer",3,"click"],[1,"fa-regular","fa-paper-plane","text-primary","cursor-pointer"],[1,"fa-solid","fa-paper-plane","text-success"]],template:function(e,o){e&1&&R(0,Rt,34,11,"div",0),e&2&&f("ngIf",!o.selectedBook)},dependencies:[P,H]})};var ht=[{path:"",component:ce,children:[{path:"",component:Ce},{path:"my-books",component:ye},{path:"manage",component:D},{path:"manage/:bookId",component:D},{path:"my_borrow_books",component:Te},{path:"my_return_books",component:Ee}]}],Oe=class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=K({type:n});static \u0275inj=J({imports:[N.forChild(ht),N]})};var Ge=class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=K({type:n});static \u0275inj=J({imports:[Me,N,Oe,N]})};export{Ge as BookModule};
