	function menu_toggle(){
		if(document.getElementById("menu-list").className=="menu-toggle"){
			document.getElementById("menu-list").className="menu-toggle on";
			document.getElementById("menu-content").className="menu-content on";
		}
		else {
			ocultar_menu();
		}
	}
	function menu(page){
		if(page!=0){
			document.getElementById("sales").className="hide";
			document.getElementById("admin").className="hide";
			document.getElementById("reports").className="hide";
			document.getElementById("window1").className="hide";
			document.getElementById("window2").className="hide";
			document.getElementById("window3").className="hide";
		}
		if(page==1){
			document.getElementById("sales").className="show";
			document.getElementById("window1").className="title show";
			ocultar_menu();
		}
		else if(page==2){
			document.getElementById("admin").className="show";
			document.getElementById("window2").className="title show";
			ocultar_menu();
		}
		else if(page==3){
			document.getElementById("reports").className="show";
			document.getElementById("window3").className="title show";
			ocultar_menu();
		}
	}	
	function ocultar_menu(){
		document.getElementById("menu-list").className="menu-toggle";
		document.getElementById("menu-content").className="menu-content";
	}
	
	var valor1=0;
	var valor2=0;
	var valor3=0;
	var valor4=0;
	var valor5=0;
	var valor6=0;
	var valor7=0;
	var valor8=0;
	var valor9=0;
	var valor10=0;
	var valor11=0;
	var valor12=0;
	var valor13=0;
	var valor14=0;
	var valor15=0;
	
	var total=0;
	var precio1=0;
	var precio2=0;
	var precio3=0;
	var precio4=0;
	var precio5=0;
	var precio6=0;
	var precio7=0;
	var precio8=0;
	var precio9=0;
	var precio10=0;
	var precio11=0;
	var precio12=0;
	var precio13=0;
	var precio14=0;
	var precio15=0;
	
	var taco=20;
	var burrito=26;
	var gordita=26;
	var quesadilla=30;
	var agua=10;
	var coca=15;
	var tasada=25;
	var qasada=35;
	var promo=50;
	var basada=30;
	var cafe=15;
	var extra=10;
	var aguaj=15;
	var chilaquiles=35;
	var huevo=20;
	
	/*	operacion=1 --> suma
		operacion=2 --> resta
		operacion=3 --> eliminar	*/
	function producto(operacion,producto){
		if(operacion==1){//agregar producto
			if(producto==1){//producto 1 taco
				document.getElementById("producto1").className="row-list on";
				valor1++;
				document.getElementById("number1").value=valor1;
				precio1=precio1+taco;
				document.getElementById("price1").value=precio1;
			}
			else if(producto==2){//producto 2 burrito
				document.getElementById("producto2").className="row-list on";
				valor2++;
				document.getElementById("number2").value=valor2;
				precio2=precio2+burrito;
				document.getElementById("price2").value=precio2;
			}
			else if(producto==3){//producto 3 gordita
				document.getElementById("producto3").className="row-list on";
				valor3++;
				document.getElementById("number3").value=valor3;
				precio3=precio3+gordita;
				document.getElementById("price3").value=precio3;
			}
			else if(producto==4){//producto 4 quesadilla
				document.getElementById("producto4").className="row-list on";
				valor4++;
				document.getElementById("number4").value=valor4;
				precio4=precio4+quesadilla;
				document.getElementById("price4").value=precio4;
			}
			else if(producto==5){//producto 5 agua
				document.getElementById("producto5").className="row-list on";
				valor5++;
				document.getElementById("number5").value=valor5;
				precio5=precio5+agua;
				document.getElementById("price5").value=precio5;
			}
			else if(producto==6){//producto 6 coca
				document.getElementById("producto6").className="row-list on";
				valor6++;
				document.getElementById("number6").value=valor6;
				precio6=precio6+coca;
				document.getElementById("price6").value=precio6;
			}
			else if(producto==7){//producto 7 Taco asada
				document.getElementById("producto7").className="row-list on";
				valor7++;
				document.getElementById("number7").value=valor7;
				precio7=precio7+tasada;
				document.getElementById("price7").value=precio7;
			}
			else if(producto==8){//producto 8 quesadilla asada
				document.getElementById("producto8").className="row-list on";
				valor8++;
				document.getElementById("number8").value=valor8;
				precio8=precio8+qasada;
				document.getElementById("price8").value=precio8;
			}
			else if(producto==9){//producto 9 promo
				document.getElementById("producto9").className="row-list on";
				valor9++;
				document.getElementById("number9").value=valor9;
				precio9=precio9+promo;
				document.getElementById("price9").value=precio9;
			}
			else if(producto==10){//producto 10 burrito asada
				document.getElementById("producto10").className="row-list on";
				valor10++;
				document.getElementById("number10").value=valor10;
				precio10=precio10+basada;
				document.getElementById("price10").value=precio10;
			}
			else if(producto==11){//producto 11 cafe
				document.getElementById("producto11").className="row-list on";
				valor11++;
				document.getElementById("number11").value=valor11;
				precio11=precio11+cafe;
				document.getElementById("price11").value=precio11;
			}
			else if(producto==12){//producto 12 extra
				document.getElementById("producto12").className="row-list on";
				valor12++;
				document.getElementById("number12").value=valor12;
				precio12=precio12+extra;
				document.getElementById("price12").value=precio12;
			}
			else if(producto==13){//producto 13 agua jamaica
				document.getElementById("producto13").className="row-list on";
				valor13++;
				document.getElementById("number13").value=valor13;
				precio13=precio13+aguaj;
				document.getElementById("price13").value=precio13;
			}
			else if(producto==14){//producto 14 chilaquiles
				document.getElementById("producto14").className="row-list on";
				valor14++;
				document.getElementById("number14").value=valor14;
				precio14=precio14+chilaquiles;
				document.getElementById("price14").value=precio14;
			}
			else if(producto==15){//producto 15 huevo
				document.getElementById("producto15").className="row-list on";
				valor15++;
				document.getElementById("number15").value=valor15;
				precio15=precio15+huevo;
				document.getElementById("price15").value=precio15;
			}
		}
		else if(operacion==2){//restar producto
			if(producto==1){//producto 1 taco
				if(valor1==1){
					valor1=0;
					document.getElementById("number1").value=valor1;
					precio1=0;
					document.getElementById("price1").value=precio1;
					document.getElementById("producto1").className="row-list";					
				}else {				
					valor1--;
					document.getElementById("number1").value=valor1;
					precio1=precio1-taco;
					document.getElementById("price1").value=precio1;				
				}
			}
			else if(producto==2){//producto 2 burrito
				if(valor2==1){
					valor2=0;
					document.getElementById("number2").value=valor2;
					precio2=0;
					document.getElementById("price2").value=precio2;
					document.getElementById("producto2").className="row-list";					
				}else {				
					valor2--;
					document.getElementById("number2").value=valor2;
					precio2=precio2-burrito;
					document.getElementById("price2").value=precio2;				
				}
			}
			else if(producto==3){//producto 3 gordita
				if(valor3==1){
					valor3=0;
					document.getElementById("number3").value=valor3;
					precio3=0;
					document.getElementById("price3").value=precio3;
					document.getElementById("producto3").className="row-list";					
				}else {				
					valor3--;
					document.getElementById("number3").value=valor3;
					precio3=precio3-gordita;
					document.getElementById("price3").value=precio3;				
				}
			}
			else if(producto==4){//producto 4 quesadilla
				if(valor4==1){
					valor4=0;
					document.getElementById("number4").value=valor4;
					precio4=0;
					document.getElementById("price4").value=precio4;
					document.getElementById("producto4").className="row-list";					
				}else {				
					valor4--;
					document.getElementById("number4").value=valor4;
					precio4=precio4-quesadilla;
					document.getElementById("price4").value=precio4;				
				}
			}
			else if(producto==5){//producto 5 agua
				if(valor5==1){
					valor5=0;
					document.getElementById("number5").value=valor5;
					precio5=0;
					document.getElementById("price5").value=precio5;
					document.getElementById("producto5").className="row-list";					
				}else {				
					valor5--;
					document.getElementById("number5").value=valor5;
					precio5=precio5-agua;
					document.getElementById("price5").value=precio5;				
				}
			}
			else if(producto==6){//producto 6 coca
				if(valor6==1){
					valor6=0;
					document.getElementById("number6").value=valor6;
					precio6=0;
					document.getElementById("price6").value=precio6;
					document.getElementById("producto6").className="row-list";					
				}else {				
					valor6--;
					document.getElementById("number6").value=valor6;
					precio6=precio6-coca;
					document.getElementById("price6").value=precio6;				
				}
			}
			else if(producto==7){//producto 7 taco asada
				if(valor7==1){
					valor7=0;
					document.getElementById("number7").value=valor7;
					precio7=0;
					document.getElementById("price7").value=precio7;
					document.getElementById("producto7").className="row-list";					
				}else {				
					valor7--;
					document.getElementById("number7").value=valor7;
					precio7=precio7-tasada;
					document.getElementById("price7").value=precio7;				
				}
			}
			else if(producto==8){//producto 8 quesadilla asada
				if(valor8==1){
					valor8=0;
					document.getElementById("number8").value=valor8;
					precio8=0;
					document.getElementById("price8").value=precio8;
					document.getElementById("producto8").className="row-list";					
				}else {				
					valor8--;
					document.getElementById("number8").value=valor8;
					precio8=precio8-qasada;
					document.getElementById("price8").value=precio8;				
				}
			}
			else if(producto==9){//producto 9 promo
				if(valor9==1){
					valor9=0;
					document.getElementById("number9").value=valor9;
					precio9=0;
					document.getElementById("price9").value=precio9;
					document.getElementById("producto9").className="row-list";					
				}else {				
					valor9--;
					document.getElementById("number9").value=valor9;
					precio9=precio9-promo;
					document.getElementById("price9").value=precio9;			
				}
			}
			else if(producto==10){//producto 10 burrito asada
				if(valor10==1){
					valor10=0;
					document.getElementById("number10").value=valor10;
					precio10=0;
					document.getElementById("price10").value=precio10;
					document.getElementById("producto10").className="row-list";					
				}else {				
					valor10--;
					document.getElementById("number10").value=valor10;
					precio10=precio10-basada;
					document.getElementById("price10").value=precio10;			
				}
			}
			else if(producto==11){//producto 11 cafe
				if(valor11==1){
					valor11=0;
					document.getElementById("number11").value=valor11;
					precio11=0;
					document.getElementById("price11").value=precio11;
					document.getElementById("producto11").className="row-list";					
				}else {				
					valor11--;
					document.getElementById("number11").value=valor11;
					precio11=precio11-cafe;
					document.getElementById("price11").value=precio11;			
				}
			}
			else if(producto==12){//producto 12 extra
				if(valor12==1){
					valor12=0;
					document.getElementById("number12").value=valor12;
					precio12=0;
					document.getElementById("price12").value=precio12;
					document.getElementById("producto12").className="row-list";					
				}else {				
					valor12--;
					document.getElementById("number12").value=valor12;
					precio12=precio12-extra;
					document.getElementById("price12").value=precio12;			
				}
			}
			else if(producto==13){//producto 13 agua jamaica
				if(valor13==1){
					valor13=0;
					document.getElementById("number13").value=valor13;
					precio13=0;
					document.getElementById("price13").value=precio13;
					document.getElementById("producto13").className="row-list";					
				}else {				
					valor13--;
					document.getElementById("number13").value=valor13;
					precio13=precio13-aguaj;
					document.getElementById("price13").value=precio13;			
				}
			}
			else if(producto==14){//producto 14 chilaquiles
				if(valor14==1){
					valor14=0;
					document.getElementById("number14").value=valor14;
					precio14=0;
					document.getElementById("price14").value=precio14;
					document.getElementById("producto14").className="row-list";					
				}else {				
					valor14--;
					document.getElementById("number14").value=valor14;
					precio14=precio14-chilaquiles;
					document.getElementById("price14").value=precio14;			
				}
			}
			else if(producto==15){//producto 15 huevo
				if(valor15==1){
					valor15=0;
					document.getElementById("number15").value=valor15;
					precio15=0;
					document.getElementById("price15").value=precio15;
					document.getElementById("producto15").className="row-list";					
				}else {				
					valor15--;
					document.getElementById("number15").value=valor15;
					precio15=precio15-huevo;
					document.getElementById("price15").value=precio15;			
				}
			}
		}
		else if(operacion==3){//eliminar producto
			if(producto==1){
				valor1=0;
				document.getElementById("number1").value=valor1;
				precio1=0;
				document.getElementById("price1").value=precio1;
				document.getElementById("producto1").className="row-list";
			}
			else if(producto==2){
				valor2=0;
				document.getElementById("number2").value=valor2;
				precio2=0;
				document.getElementById("price2").value=precio2;
				document.getElementById("producto2").className="row-list";	
			}
			else if(producto==3){
				valor3=0;
				document.getElementById("number3").value=valor3;
				precio3=0;
				document.getElementById("price3").value=precio3;
				document.getElementById("producto3").className="row-list";	
			}
			else if(producto==4){
				valor4=0;
				document.getElementById("number4").value=valor4;
				precio4=0;
				document.getElementById("price4").value=precio4;
				document.getElementById("producto4").className="row-list";	
			}
			else if(producto==5){
				valor5=0;
				document.getElementById("number5").value=valor5;
				precio5=0;
				document.getElementById("price5").value=precio5;
				document.getElementById("producto5").className="row-list";	
			}
			else if(producto==6){
				valor6=0;
				document.getElementById("number6").value=valor6;
				precio6=0;
				document.getElementById("price6").value=precio6;
				document.getElementById("producto6").className="row-list";	
			}
			else if(producto==7){
				valor7=0;
				document.getElementById("number7").value=valor7;
				precio7=0;
				document.getElementById("price7").value=precio7;
				document.getElementById("producto7").className="row-list";	
			}
			else if(producto==8){
				valor8=0;
				document.getElementById("number8").value=valor8;
				precio8=0;
				document.getElementById("price8").value=precio8;
				document.getElementById("producto8").className="row-list";	
			}
			else if(producto==9){
				valor9=0;
				document.getElementById("number9").value=valor9;
				precio9=0;
				document.getElementById("price9").value=precio9;
				document.getElementById("producto9").className="row-list";	
			}
			else if(producto==10){
				valor10=0;
				document.getElementById("number10").value=valor10;
				precio10=0;
				document.getElementById("price10").value=precio10;
				document.getElementById("producto10").className="row-list";	
			}
			else if(producto==11){
				valor11=0;
				document.getElementById("number11").value=valor11;
				precio11=0;
				document.getElementById("price11").value=precio11;
				document.getElementById("producto11").className="row-list";	
			}
			else if(producto==12){
				valor12=0;
				document.getElementById("number12").value=valor12;
				precio12=0;
				document.getElementById("price12").value=precio12;
				document.getElementById("producto12").className="row-list";	
			}
			else if(producto==13){
				valor13=0;
				document.getElementById("number13").value=valor13;
				precio13=0;
				document.getElementById("price13").value=precio13;
				document.getElementById("producto13").className="row-list";	
			}
			else if(producto==14){
				valor14=0;
				document.getElementById("number14").value=valor14;
				precio14=0;
				document.getElementById("price14").value=precio14;
				document.getElementById("producto14").className="row-list";	
			}
			else if(producto==15){
				valor15=0;
				document.getElementById("number15").value=valor15;
				precio15=0;
				document.getElementById("price15").value=precio15;
				document.getElementById("producto15").className="row-list";	
			}
		}
		total=precio1+precio2+precio3+precio4+precio5+precio6+precio7+precio8+precio9+precio10+precio11+precio12+precio13+precio14+precio15;
		document.getElementById("totalprice").value=total;	
	}
	function CobrarPedido(){
		valor1=0;
		valor2=0;
		valor3=0;
		valor4=0;
		valor5=0;
		valor6=0;	
		valor7=0;
		valor8=0;
		valor9=0;
		valor10=0;
		valor11=0;
		valor12=0;
		valor13=0;
		valor14=0;
		valor15=0;
		total=0;
		precio1=0;
		precio2=0;
		precio3=0;
		precio4=0;
		precio5=0;
		precio6=0;
		precio7=0;
		precio8=0;
		precio9=0;
		precio10=0;
		precio11=0;
		precio12=0;
		precio13=0;
		precio14=0;
		precio15=0;
		document.getElementById("number1").value=0;
		document.getElementById("price1").value=0;
		document.getElementById("producto1").className="row-list";
		document.getElementById("number2").value=0;
		document.getElementById("price2").value=0;
		document.getElementById("producto2").className="row-list";
		document.getElementById("number3").value=0;
		document.getElementById("price3").value=0;
		document.getElementById("producto3").className="row-list";
		document.getElementById("number4").value=0;
		document.getElementById("price4").value=0;
		document.getElementById("producto4").className="row-list";
		document.getElementById("number5").value=0;
		document.getElementById("price5").value=0;
		document.getElementById("producto5").className="row-list";
		document.getElementById("number6").value=0;
		document.getElementById("price6").value=0;
		document.getElementById("producto6").className="row-list";
		document.getElementById("number7").value=0;
		document.getElementById("price7").value=0;
		document.getElementById("producto7").className="row-list";
		document.getElementById("number8").value=0;
		document.getElementById("price8").value=0;
		document.getElementById("producto8").className="row-list";
		document.getElementById("number9").value=0;
		document.getElementById("price9").value=0;
		document.getElementById("producto9").className="row-list";
		document.getElementById("number10").value=0;
		document.getElementById("price10").value=0;
		document.getElementById("producto10").className="row-list";
		document.getElementById("number11").value=0;
		document.getElementById("price11").value=0;
		document.getElementById("producto11").className="row-list";
		document.getElementById("number12").value=0;
		document.getElementById("price12").value=0;
		document.getElementById("producto12").className="row-list";
		document.getElementById("number13").value=0;
		document.getElementById("price13").value=0;
		document.getElementById("producto13").className="row-list";
		document.getElementById("number14").value=0;
		document.getElementById("price14").value=0;
		document.getElementById("producto14").className="row-list";
		document.getElementById("number15").value=0;
		document.getElementById("price15").value=0;
		document.getElementById("producto15").className="row-list";
		document.getElementById("totalprice").value=0;
	}
