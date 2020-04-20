//달력을 구성하는 하나의 셀정의
//클래스화 시켜놓으면, 여러개를 생산할 수 있고 각각이 셀의 인스턴스에 데이터를 봐관할수도있다
class Cell{
    constructor(container,width,height,dateText,background,borderColor){
        this.container=container; //부모컨테이너!!
        this.div=document.createElement("div"); //div DOM생성!!
        this.width=width;
        this.height=height;
        this.h1=document.createElement("h1"); //날짜 제목이 들어갈 테그
        this.span=document.createElement("span"); //내용이 출력될 테그
        this.dateText=dateText; //몇일인지 여부를 출력할 텍스트
        this.content; // 셀에 넣고 싶은 내용을 보관할 변수
        this.background=background; //셀의 배경색
        this.borderColor=borderColor; //셀의 보더색

        //스타일 적용 및 조립!!
        this.div.style.float="left";
        this.div.style.width=this.width+"px";
        this.div.style.height=this.height+"px";
        this.div.style.background=this.background;
        this.div.style.border="1px solid "+this.borderColor;

        //박스안의 내용 테그들 스타일적용 및 조립
        this.h1.style.width=100%+"px";
        this.h1.style.height=this.height*0.3;
        this.h1.innerHTML=dateText;

        this.span.style.display="inline-block"; //높이를 주기위해!!
        this.span.style.height=this.height*0.7+"px";
        this.span.style.width=this.width*0.7+"px";

        //조립
        this.div.appendChild(this.h1);
        this.div.appendChild(this.span);

        this.container.appendChild(this.div);
    }
}