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
	
	var total=0;
	var precio1=0;
	var precio2=0;
	var precio3=0;
	var precio4=0;
	var precio5=0;
	var precio6=0;
	
	var taco=17;
	var burrito=22;
	var gordita=22;
	var quesadilla=25;
	var agua=10;
	var coca=15;
	
	/*	operacion=1 --> suma
		operacion=2 --> resta
		operacion=3 --> eliminar	*/
	function producto(operacion,producto){
		if(operacion==1){//agregar producto
			if(producto==1){//producto 1
				document.getElementById("producto1").className="row-list on";
				valor1++;
				document.getElementById("number1").value=valor1;
				precio1=precio1+taco;
				document.getElementById("price1").value=precio1;
			}
			else if(producto==2){//producto 2
				document.getElementById("producto2").className="row-list on";
				valor2++;
				document.getElementById("number2").value=valor2;
				precio2=precio2+burrito;
				document.getElementById("price2").value=precio2;
			}
			else if(producto==3){//producto 3
				document.getElementById("producto3").className="row-list on";
				valor3++;
				document.getElementById("number3").value=valor3;
				precio3=precio3+gordita;
				document.getElementById("price3").value=precio3;
			}
			else if(producto==4){//producto 4
				document.getElementById("producto4").className="row-list on";
				valor4++;
				document.getElementById("number4").value=valor4;
				precio4=precio4+quesadilla;
				document.getElementById("price4").value=precio4;
			}
			else if(producto==5){//producto 5
				document.getElementById("producto5").className="row-list on";
				valor5++;
				document.getElementById("number5").value=valor5;
				precio5=precio5+agua;
				document.getElementById("price5").value=precio5;
			}
			else if(producto==6){//producto 6
				document.getElementById("producto6").className="row-list on";
				valor6++;
				document.getElementById("number6").value=valor6;
				precio6=precio6+coca;
				document.getElementById("price6").value=precio6;
			}
		}
		else if(operacion==2){//restar producto
			if(producto==1){//producto 1
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
			else if(producto==2){//producto 2
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
			else if(producto==3){//producto 3
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
			else if(producto==4){//producto 4
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
			else if(producto==5){//producto 5
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
			else if(producto==6){//producto 6
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
		}
		total=precio1+precio2+precio3+precio4+precio5+precio6;
		document.getElementById("totalprice").value=total;	
	}
	function CobrarPedido(){
		valor1=0;
		valor2=0;
		valor3=0;
		valor4=0;
		valor5=0;
		valor6=0;	
		total=0;
		precio1=0;
		precio2=0;
		precio3=0;
		precio4=0;
		precio5=0;
		precio6=0;
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
		document.getElementById("totalprice").value=0;		
	}