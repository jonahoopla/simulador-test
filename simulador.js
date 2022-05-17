const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `

		<link href="assets/css/style.min.css" rel="stylesheet">

		<div id="idContenedorSimulador" class="">

			<div class="fondoCajero">

				<div class="contLateral">
					<div class="cuadroTexto">
						<img src="assets/img/BER/Cajero/Caja-Texto-ER.png" alt="">
						<img class="mobile" src="assets/img/BER/Mobile/Caja-Texto-ER-mobile.png" alt="">
						<div class="contTexto pasoUno activo">
							<p>Ingresá la tarjeta de débito en la ranura y escribí la clave PIN de cuatro dígitos que entrega el Banco o los últimos 4 dígitos del DNI.</p>
							<p>Para este ejemplo ingresá la clave: <strong>1373</strong> en tu teclado luego hacé click en <strong>“Continuar”.</strong></p>
						</div>
						<div class="contTexto pasoDos">
							<p>El cajero te pedirá generar una nueva clave. Lo primero que tenés que ingresar es la clave actual: recordá que son los últimos 4 dígitos de tu DNI o la emitida por el banco.</p>
							<p>Para este ejemplo utilizamos: <strong>1373.</strong></p>
						</div>
						<div class="contTexto pasoTres">
							<p>Ahora debes ingresar la nueva clave, en este caso: <strong>2080</strong> y luego presioná <strong>“Continuar”.</strong></p>
							<p>Ingresá la clave una vez más y presioná nuevamente <strong>“Continuar”.</strong></p>
						</div>
						<div class="contTexto pasoCuatro">
							<p>La operación será válida si el cajero emite el <strong>ticket de cambio de PIN.</strong></p>
							<p>Extraé la tarjeta y volvé a ingresarla con tu nueva clave si necesitas seguir operando en el cajero.</p>
						</div>
					</div>
					<div class="cuadroMano num1">
						<img src="assets/img/BER/Cajero/Mano-02.png" alt="">
					</div>
				</div>

				<div class="contCuadroPantalla pasoUno">
					<div class="pantallaTexto Top">
						<p style="--animation-order: 1;">BIENVENIDO A RED LINK<br />INGRESE SU CODIGO DE<br />ACCESO PERSONAL (PIN)<br />LUEGO PRESIONE CONTIUAR</p>
					</div>
					<div class="pantallaTexto Center" style="--animation-order: 3;">
						<input type="text" id="primerPass" readonly>
					</div>
					<div class="pantallaTexto btn num-7" style="--animation-order: 4;">
						<p>CONTINUAR -></p>
						<a class="btnClick"></a>
					</div>
					<div class="pantallaTexto Bottom" style="--animation-order: 2;">
						<p>TAPE EL TECLADO MIENTRAS<br />ESCRIBE SU CODIGO</p>
					</div>
				</div>

				<div class="contCuadroPantalla pasoDos">
					<div class="pantallaTexto Top">
						<p style="--animation-order: 1;">INGRESE UNA NUEVA CLAVE<br />DE CAJERO<br />DISTINTA DE SU CLAVE ACTUAL<br />LUEGO PRESIONE CONTIUAR</p>
					</div>
					<div class="pantallaTexto Center" style="--animation-order: 3;">
						<p>INGRESE CLAVE ACTUAL:<input type="text" id="segundoPass" readonly></p>
						<p>INGRESE NUEVA CLAVE:<input type="text" id="tercerPass" readonly></p>
						<p>REINGRESE NUEVA CLAVE:<input type="text" id="cuartoPass" readonly></p>
					</div>
					<div class="pantallaTexto btn num-7" style="--animation-order: 4;">
						<p>CONTINUAR -></p>
						<a class="btnClick"></a>
					</div>
					<div class="pantallaTexto Bottom" style="--animation-order: 2;">
						<p>TAPE EL TECLADO MIENTRAS<br />ESCRIBE LAS CLAVES</p>
					</div>
				</div>

				<div class="contCuadroPantalla pasoTres">
					<div class="pantallaTexto Top">
						<p style="--animation-order: 1;">SU OPERACION HA SIDO<br />COMPLETADA</p>
					</div>
					<div class="pantallaTexto Center colorCeleste" style="--animation-order: 3;">
						<p>GRACIAS POR UTILIZAR<br />NUESTROS SERVICIOS</p>
					</div>
					<div class="pantallaTexto Bottom" style="--animation-order: 2;">
						<p>DESEA REALIZAR OTRA OPERACION?</p>
						<div class="contBtnNoSi">
							<div class="btn izq">
								<p><--------- NO</p>
								<a class="btnClick"></a>
							</div>
							<div class="btn der">
								<p>SI ---------></p>
							</div>
						</div>
					</div>
				</div>

				<img class="imgPantallaCajero" src="assets/img/BER/Cajero/Pantalla-00.png" alt="">

			</div>

		</div>
`;
class simuladorBancosProd extends HTMLElement{

	ok_primerPass;
	ok_segundoPass;
	enter_primerPass;
	front_primerPass;
	textoPantalla;
	btnClick;
	primerPass;
	segundoPass;
	tercerPass;
	cuartoPass;
	contTexto_activo;
	contTexto_proximo;
	etapaPasoDos;

	constructor() {
        // Always call super first in constructor
        super();

        this.ok_primerPass = "1373";
		this.ok_segundoPass = "2080";
		this.enter_primerPass = "";
		this.front_primerPass = "";
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });

        shadowRoot.appendChild(headerTemplate.content);

        var banco = this.getAttribute("data-banco");
        var template = this.getAttribute("data-template");

        this.shadowRoot.getElementById("idContenedorSimulador").classList.add(template);
        this.shadowRoot.getElementById("idContenedorSimulador").classList.add(banco);

        this.primerPass = this.shadowRoot.getElementById("primerPass");
		this.segundoPass = this.shadowRoot.getElementById("segundoPass");
		this.tercerPass = this.shadowRoot.getElementById("tercerPass");
		this.cuartoPass = this.shadowRoot.getElementById("cuartoPass");

        if( this.isMobile() ){
	        var inputs, index;

	        inputs = this.shadowRoot.getElementsByTagName('input');
	        for (index = 0; index < inputs.length; ++index) {
	            inputs[index].removeAttribute('readonly');
	        }
	    }

	    if( this.shadowRoot.getElementById('idContenedorSimulador').classList.contains('ingreso') ){
	        this.handlerKeyUp();
	    
	        this.pasoUno();
	    }

	    if( this.shadowRoot.getElementById('idContenedorSimulador').classList.contains('movimientos') ){

	        this.setVarsMov();

	        this.handlerKeyUp();
	    
	        this.pasoUno();
	    }

	    if( this.shadowRoot.getElementById('idContenedorSimulador').classList.contains('escritorio') ){
	        this.initPasoUno();
	    }
    }

    /***********************************************************/


	isMobile() {
		if (window.screen.width <= 768) return true;

		return false;
	}

	setVarsMov(){
	    this.ok_primerPass = "1987";
	    this.ok_segundoPass = "1";
	}

	handlerKeyUp(){
		var puntero = this;
	    document.onkeyup = function(event){
	        //console.log(event.key);

	        if( isNaN( parseInt(event.key)) ){
	            //console.log('letra');
	            return;
	        }

	        if( puntero.textoPantalla.classList.contains('pasoUno') ){
	            if(puntero.front_primerPass.length < 4){
	                puntero.enter_primerPass += ""+event.key;
	                
	                puntero.front_primerPass += 'X';
	                puntero.primerPass.value = puntero.front_primerPass;
	            }
	            if(puntero.front_primerPass.length == 4){
	                puntero.shadowRoot.querySelector('.contCuadroPantalla.pasoUno .pantallaTexto.btn').classList.add('siguiente');
	            }
	        }else if( puntero.textoPantalla.classList.contains('pasoSeis') && puntero.shadowRoot.getElementById('idContenedorSimulador').classList.contains('movimientos') ){
	            if(puntero.front_primerPass.length < 1){
	                puntero.front_primerPass += ""+event.key;
	                puntero.segundoPass.value = puntero.front_primerPass;
	            }
	            if(puntero.front_primerPass.length == 1){
	                puntero.shadowRoot.querySelector('.contCuadroPantalla.pasoSeis .pantallaTexto.btn.num-8').classList.add('siguiente');
	            }
	        }else if( puntero.textoPantalla.classList.contains('pasoDos') && puntero.shadowRoot.getElementById('idContenedorSimulador').classList.contains('ingreso') ){

	            if( puntero.etapaPasoDos == 1){
	                if(puntero.front_primerPass.length < 4){
	                    puntero.enter_primerPass += ""+event.key;
	                    
	                    puntero.front_primerPass += 'X';
	                    puntero.segundoPass.value = puntero.front_primerPass;
	                }
	                if(puntero.front_primerPass.length == 4){
	                    
	                    puntero.shadowRoot.querySelector('.contCuadroPantalla.pasoDos .pantallaTexto.btn').classList.add('siguiente');
	                }
	            }else if( puntero.etapaPasoDos == 2){
	                if(puntero.front_primerPass.length < 4){
	                    puntero.enter_primerPass += ""+event.key;
	                    
	                    puntero.front_primerPass += 'X';
	                    puntero.tercerPass.value = puntero.front_primerPass;
	                }
	                if(puntero.front_primerPass.length == 4){
	                    puntero.shadowRoot.querySelector('.contCuadroPantalla.pasoDos .pantallaTexto.btn').classList.add('siguiente');
	                }
	            }else if( puntero.etapaPasoDos == 3){
	                if(puntero.front_primerPass.length < 4){
	                    puntero.enter_primerPass += ""+event.key;
	                    
	                    puntero.front_primerPass += 'X';
	                    puntero.cuartoPass.value = puntero.front_primerPass;
	                }
	                if(puntero.front_primerPass.length == 4){
	                    puntero.shadowRoot.querySelector('.contCuadroPantalla.pasoDos .pantallaTexto.btn').classList.add('siguiente');
	                }
	            }
	        }
	        
	    };
	}
	pasoUno(){
	    this.textoPantalla = this.shadowRoot.querySelector('.contCuadroPantalla.pasoUno');
	    
	    this.contTexto_activo = this.shadowRoot.querySelector('.contTexto.pasoUno');
	    this.contTexto_proximo = this.shadowRoot.querySelector('.contTexto.pasoDos');

	    this.btnClick = this.shadowRoot.querySelector('.pasoUno .btnClick');
	    var puntero = this;
	    this.btnClick.onclick = function() {
	        if( puntero.isMobile() ) puntero.enter_primerPass = puntero.primerPass.value;
	        if( puntero.ok_primerPass == puntero.enter_primerPass ){
	            puntero.textoPantalla.classList.add('animOcultar');

	            puntero.contTexto_activo.classList.remove('activo');
	            puntero.contTexto_proximo.classList.add('activo');

	            puntero.front_primerPass = "";
	            puntero.enter_primerPass = "";

	            puntero.textoPantalla.classList.remove('activo');

	            puntero.pasoDos();
	        }else{
	            puntero.shadowRoot.querySelector('.contCuadroPantalla.pasoUno .pantallaTexto.Top p').innerHTML = "INGRESÓ UNA CLAVE INCORRECTA<br />VUELVA A INGRESARLA<br />LUEGO PRESIONE CONTINUAR";
	            puntero.shadowRoot.querySelector('.contCuadroPantalla.pasoUno .pantallaTexto.btn').classList.remove('siguiente');
	            puntero.enter_primerPass = "";
	            puntero.front_primerPass = "";
	            puntero.primerPass.value = puntero.front_primerPass;
	        }
	    };

	    this.textoPantalla.classList.add("activo");
	    this.textoPantalla.classList.add('anim');
	}
	pasoDos(){
	    this.textoPantalla = this.shadowRoot.querySelector('.contCuadroPantalla.pasoDos');

	    this.contTexto_activo = this.shadowRoot.querySelector('.contTexto.pasoDos');
	    this.contTexto_proximo = this.shadowRoot.querySelector('.contTexto.pasoTres');

	    this.textoPantalla.classList.add("activo");
	    this.textoPantalla.classList.add('anim');

	    this.shadowRoot.querySelector('.cuadroMano').classList.remove('num1');
	    this.shadowRoot.querySelector('.cuadroMano').classList.add('num2');

	    this.btnClick = this.shadowRoot.querySelector('.pasoDos .btnClick');

	    var puntero = this;

	    if( this.shadowRoot.getElementById('idContenedorSimulador').classList.contains('movimientos') ){

	        this.shadowRoot.querySelector('.contCuadroPantalla.pasoDos .pantallaTexto.btn.num-8').classList.add('siguiente');

	        this.btnClick.onclick = function() {
	            puntero.textoPantalla.classList.add('animOcultar');

	            puntero.contTexto_activo.classList.remove('activo');
	            puntero.contTexto_proximo.classList.add('activo');

	            puntero.textoPantalla.classList.remove('activo');

	            puntero.pasoTres();
	        };

	    }else{

	        this.etapaPasoDos = 1;

	        this.btnClick.onclick = function() {
	            if(puntero.etapaPasoDos == 1){
	                puntero.shadowRoot.querySelector('.contCuadroPantalla.pasoDos .pantallaTexto.btn').classList.remove('siguiente');
	                if( puntero.isMobile() ) puntero.enter_primerPass = puntero.segundoPass.value;
	                if( puntero.ok_primerPass == puntero.enter_primerPass ){
	                    puntero.contTexto_activo.classList.remove('activo');
	                    puntero.contTexto_proximo.classList.add('activo');

	                    puntero.enter_primerPass = "";
	                    puntero.front_primerPass = "";

	                    puntero.etapaPasoDos = 2;
	                    puntero.shadowRoot.querySelector('.contCuadroPantalla.pasoDos .pantallaTexto.Top p').innerHTML = "INGRESE LA NUEVA CLAVE<br />** RECUERDELA PARA EL FUTURO **<br />LUEGO PRESIONE CONTINUAR";
	                    if( puntero.isMobile() ) puntero.tercerPass.focus();
	                }else{
	                    puntero.shadowRoot.querySelector('.contCuadroPantalla.pasoDos .pantallaTexto.Top p').innerHTML = "** CLAVE INCORRECTA **<br />VUELVA A INGRESARLA";
	                    puntero.enter_primerPass = "";
	                    puntero.front_primerPass = "";
	                    puntero.segundoPass.value = puntero.front_primerPass;
	                }
	            }else if( puntero.etapaPasoDos == 2){
	                if(puntero.isMobile()) puntero.enter_primerPass = puntero.tercerPass.value;
	                if( puntero.ok_segundoPass == puntero.enter_primerPass ){
	                    puntero.enter_primerPass = "";
	                    puntero.front_primerPass = "";

	                    puntero.etapaPasoDos = 3;
	                    puntero.shadowRoot.querySelector('.contCuadroPantalla.pasoDos .pantallaTexto.btn').classList.remove('siguiente');
	                    puntero.shadowRoot.querySelector('.contCuadroPantalla.pasoDos .pantallaTexto.Top p').innerHTML = "INGRESE OTRA VEZ LA NUEVA CLAVE<br />** RECUERDELA PARA EL FUTURO **<br />LUEGO PRESIONE CONTINUAR";

	                    if( puntero.isMobile() ) puntero.cuartoPass.focus();
	                }else{
	                    puntero.enter_primerPass = "";
	                    puntero.front_primerPass = "";
	                    puntero.tercerPass.value = puntero.front_primerPass;
	                }
	            }else if( puntero.etapaPasoDos == 3){
	                if(puntero.isMobile()) puntero.enter_primerPass = puntero.cuartoPass.value;
	                if( puntero.ok_segundoPass == puntero.enter_primerPass ){
	                    puntero.enter_primerPass = "";
	                    puntero.front_primerPass = "";

	                    puntero.contTexto_activo = puntero.shadowRoot.querySelector('.contTexto.pasoTres');
	                    puntero.contTexto_proximo = puntero.shadowRoot.querySelector('.contTexto.pasoCuatro');
	                    
	                    puntero.textoPantalla.classList.add('animOcultar');

	                    puntero.contTexto_activo.classList.remove('activo');
	                    puntero.contTexto_proximo.classList.add('activo');

	                    puntero.textoPantalla.classList.remove('activo');

	                    puntero.pasoTres();
	                }else{
	                    puntero.enter_primerPass = "";
	                    puntero.front_primerPass = "";
	                    puntero.cuartoPass.value = puntero.front_primerPass;
	                }
	            }
	        };
	    }
	}
	pasoTres(){
	    this.textoPantalla = this.shadowRoot.querySelector('.contCuadroPantalla.pasoTres');

	    this.textoPantalla.classList.add("activo");
	    this.textoPantalla.classList.add('anim');

	    this.btnClick = this.shadowRoot.querySelector('.pasoTres .btnClick');

	    var puntero = this;

	    if( this.shadowRoot.getElementById('idContenedorSimulador').classList.contains('movimientos') ){

	        this.contTexto_activo = this.shadowRoot.querySelector('.contTexto.pasoTres');
	        this.contTexto_proximo = this.shadowRoot.querySelector('.contTexto.pasoCuatro');

	        this.shadowRoot.querySelector('.contCuadroPantalla.pasoTres .pantallaTexto.btn.num-6').classList.add('siguiente');

	        this.shadowRoot.querySelector('.cuadroMano').classList.remove('num2');
	        this.shadowRoot.querySelector('.cuadroMano').classList.add('num1');

	        this.btnClick.onclick = function() {
	            puntero.textoPantalla.classList.add('animOcultar');

	            puntero.contTexto_activo.classList.remove('activo');
	            puntero.contTexto_proximo.classList.add('activo');

	            puntero.textoPantalla.classList.remove('activo');

	            puntero.pasoCuatro();
	        };

	    }else{

	        this.shadowRoot.querySelector('.cuadroMano').classList.remove('num2');
	        this.shadowRoot.querySelector('.cuadroMano').classList.add('num3');

	        this.btnClick.onclick = function() {
	            //alert('fin');
	        };
	    }
	}

	pasoCuatro(){
	    this.textoPantalla = this.shadowRoot.querySelector('.contCuadroPantalla.pasoCuatro');

	    this.contTexto_activo = this.shadowRoot.querySelector('.contTexto.pasoCuatro');
	    this.contTexto_proximo = this.shadowRoot.querySelector('.contTexto.pasoCinco');

	    this.textoPantalla.classList.add("activo");
	    this.textoPantalla.classList.add('anim');

	    this.shadowRoot.querySelector('.contCuadroPantalla.pasoCuatro .pantallaTexto.btn.num-5').classList.add('siguiente');

	    this.btnClick = this.shadowRoot.querySelector('.pasoCuatro .btnClick');

	    this.shadowRoot.querySelector('.cuadroMano').classList.remove('num1');
	    this.shadowRoot.querySelector('.cuadroMano').classList.add('num2');

	    var puntero = this;

	    this.btnClick.onclick = function() {
	        puntero.textoPantalla.classList.add('animOcultar');

	        puntero.contTexto_activo.classList.remove('activo');
	        puntero.contTexto_proximo.classList.add('activo');

	        puntero.textoPantalla.classList.remove('activo');

	        puntero.pasoCinco();
	    };
	}

	pasoCinco(){
	    this.textoPantalla = this.shadowRoot.querySelector('.contCuadroPantalla.pasoCinco');

	    this.contTexto_activo = this.shadowRoot.querySelector('.contTexto.pasoCinco');
	    this.contTexto_proximo = this.shadowRoot.querySelector('.contTexto.pasoSeis');

	    this.textoPantalla.classList.add("activo");
	    this.textoPantalla.classList.add('anim');

	    this.shadowRoot.querySelector('.contCuadroPantalla.pasoCinco .pantallaTexto.btn.num-5').classList.add('siguiente');

	    this.btnClick = this.shadowRoot.querySelector('.pasoCinco .btnClick');

	    this.shadowRoot.querySelector('.cuadroMano').classList.remove('num2');
	    this.shadowRoot.querySelector('.cuadroMano').classList.add('num1');

	    var puntero = this;

	    this.btnClick.onclick = function() {
	        puntero.textoPantalla.classList.add('animOcultar');

	        puntero.contTexto_activo.classList.remove('activo');
	        puntero.contTexto_proximo.classList.add('activo');

	        puntero.textoPantalla.classList.remove('activo');

	        puntero.pasoSeis();
	    };
	}

	pasoSeis(){
	    this.textoPantalla = this.shadowRoot.querySelector('.contCuadroPantalla.pasoSeis');

	    this.contTexto_activo = this.shadowRoot.querySelector('.contTexto.pasoSeis');
	    this.contTexto_proximo = this.shadowRoot.querySelector('.contTexto.pasoSiete');

	    this.textoPantalla.classList.add("activo");
	    this.textoPantalla.classList.add('anim');

	    this.btnClick = this.shadowRoot.querySelector('.pasoSeis .btnClick');

	    this.shadowRoot.querySelector('.cuadroMano').classList.remove('num1');
	    this.shadowRoot.querySelector('.cuadroMano').classList.add('num2');

	    var puntero = this;

	    this.btnClick.onclick = function() {

	        if(puntero.isMobile()) puntero.front_primerPass = puntero.segundoPass.value;

	        if( puntero.ok_segundoPass == puntero.front_primerPass){
	            puntero.textoPantalla.classList.add('animOcultar');

	            puntero.contTexto_activo.classList.remove('activo');
	            puntero.contTexto_proximo.classList.add('activo');

	            puntero.textoPantalla.classList.remove('activo');

	            puntero.pasoSiete();
	        }else{
	            puntero.segundoPass.value = "";
	            puntero.front_primerPass = '';

	            puntero.shadowRoot.querySelector('.contCuadroPantalla.pasoSeis .pantallaTexto.btn.num-8').classList.remove('siguiente');
	        }
	    };
	}

	pasoSiete(){
	    this.textoPantalla = this.shadowRoot.querySelector('.contCuadroPantalla.pasoSiete');

	    this.contTexto_activo = this.shadowRoot.querySelector('.contTexto.pasoSiete');
	    this.contTexto_proximo = this.shadowRoot.querySelector('.contTexto.pasoOcho');

	    this.textoPantalla.classList.add("activo");
	    this.textoPantalla.classList.add('anim');

	    var btnClick_uno = this.shadowRoot.querySelector('.pasoSiete .izq .btnClick');
	    var btnClick_dos = this.shadowRoot.querySelector('.pasoSiete .der .btnClick');

	    this.shadowRoot.querySelector('.cuadroMano').classList.remove('num2');
	    this.shadowRoot.querySelector('.cuadroMano').classList.add('num1');

	    var puntero = this;

	    this.btnClick_uno.onclick = function() {
	        puntero.textoPantalla.classList.add('animOcultar');

	        puntero.contTexto_activo.classList.remove('activo');
	        puntero.contTexto_proximo.classList.add('activo');

	        puntero.textoPantalla.classList.remove('activo');

	        puntero.pasoOcho();
	        
	    };

	    this.btnClick_dos.onclick = function() {
	        puntero.textoPantalla.classList.add('animOcultar');

	        puntero.contTexto_activo.classList.remove('activo');
	        puntero.contTexto_proximo.classList.add('activo');

	        puntero.textoPantalla.classList.remove('activo');

	        puntero.pasoOcho();
	    };

	}

	pasoOcho(){
	    this.textoPantalla = this.shadowRoot.querySelector('.contCuadroPantalla.pasoOcho');

	    this.textoPantalla.classList.add("activo");
	    this.textoPantalla.classList.add('anim');

	    this.btnClick = this.shadowRoot.querySelector('.pasoOcho .btnClick');

	    this.shadowRoot.querySelector('.cuadroMano').classList.remove('num1');
	    this.shadowRoot.querySelector('.cuadroMano').classList.add('num3');

	    var puntero = this;

	    this.btnClick.onclick = function() {

	        //alert('fin');

	    };
	}

	initPasoUno(){
	    var abtn = this.shadowRoot.getElementById('btnPasoUno');

	    var puntero = this;

	    abtn.onclick = function() {
	        
	        puntero.shadowRoot.querySelector('.fondoCompu .contPasos').classList.add('dosColumnas');

	        puntero.shadowRoot.querySelector('.contTexto.pasoUno').classList.remove('activo');
	        puntero.shadowRoot.querySelector('.contTexto.pasoDos').classList.add('activo');

	        puntero.shadowRoot.querySelector('.fondoCompu .contLateral .contMano').classList.remove('mano-1');
	        puntero.shadowRoot.querySelector('.fondoCompu .contLateral .contMano').classList.add('mano-2');

	    };

	    var abtnDos = this.shadowRoot.getElementById('btnPasoDos');

	    abtnDos.onclick = function() {
	        
	        var cont = puntero.shadowRoot.getElementById('contIzqImgs');
	        cont.classList.remove('img-1');
	        cont.classList.add('img-2');

	        puntero.shadowRoot.querySelector('.contTexto.pasoDos').classList.remove('activo');
	        puntero.shadowRoot.querySelector('.contTexto.pasoTres').classList.add('activo');

	        puntero.shadowRoot.querySelector('.fondoCompu .contLateral .contMano').classList.remove('mano-2');
	        puntero.shadowRoot.querySelector('.fondoCompu .contLateral .contMano').classList.add('mano-3');
	    };

	    var abtnTres = this.shadowRoot.getElementById('btnPasoTres');

	    abtnTres.onclick = function() {
	        
	        var cont = puntero.shadowRoot.getElementById('contIzqImgs');
	        cont.classList.remove('img-2');
	        cont.classList.add('img-3');

	        puntero.shadowRoot.querySelector('.contTexto.pasoTres').classList.remove('activo');
	        puntero.shadowRoot.querySelector('.contTexto.pasoCuatro').classList.add('activo');

	        puntero.shadowRoot.querySelector('.fondoCompu .contLateral .contMano').classList.remove('mano-3');
	        puntero.shadowRoot.querySelector('.fondoCompu .contLateral .contMano').classList.add('mano-4');
	    };

	    var abtnPasoCuatro = this.shadowRoot.getElementById('btnPasoCuatro');

	    abtnPasoCuatro.onclick = function() {
	        
	        var cont = puntero.shadowRoot.getElementById('contIzqImgs');
	        cont.classList.remove('img-3');
	        cont.classList.add('img-4');

	        puntero.shadowRoot.querySelector('.contTexto.pasoCuatro').classList.remove('activo');
	        puntero.shadowRoot.querySelector('.contTexto.pasoCinco').classList.add('activo');

	        puntero.shadowRoot.querySelector('.fondoCompu .contLateral .contMano').classList.remove('mano-4');
	        puntero.shadowRoot.querySelector('.fondoCompu .contLateral .contMano').classList.add('mano-1');
	    };

	    var abtnPasoCinco = this.shadowRoot.getElementById('btnPasoCinco');

	    abtnPasoCinco.onclick = function() {
	        
	        var cont = puntero.shadowRoot.getElementById('contIzqImgs');
	        cont.classList.remove('img-4');
	        cont.classList.add('img-5');

	        puntero.shadowRoot.querySelector('.contTexto.pasoCinco').classList.remove('activo');
	        puntero.shadowRoot.querySelector('.contTexto.pasoSeis').classList.add('activo');

	        puntero.shadowRoot.querySelector('.fondoCompu .contLateral .contMano').classList.remove('mano-1');
	        puntero.shadowRoot.querySelector('.fondoCompu .contLateral .contMano').classList.add('mano-2');
	    };

	    var abtnPasoSeis = this.shadowRoot.getElementById('btnPasoSeis');

	    abtnPasoSeis.onclick = function() {
	        
	        var cont = puntero.shadowRoot.getElementById('contIzqImgs');
	        cont.classList.remove('img-5');
	        cont.classList.add('img-6');

	        puntero.shadowRoot.querySelector('.contTexto.pasoSeis').classList.remove('activo');
	        puntero.shadowRoot.querySelector('.contTexto.pasoSiete').classList.add('activo');

	        puntero.shadowRoot.querySelector('.fondoCompu .contLateral .contMano').classList.remove('mano-2');
	        puntero.shadowRoot.querySelector('.fondoCompu .contLateral .contMano').classList.add('mano-3');
	    };

	    var abtnPasoSiete = this.shadowRoot.getElementById('btnPasoSiete');

	    abtnPasoSiete.onclick = function() {
	        
	        var cont = puntero.shadowRoot.getElementById('contIzqImgs');
	        cont.classList.remove('img-6');
	        cont.classList.add('img-7');

	        puntero.shadowRoot.querySelector('.contTexto.pasoSiete').classList.remove('activo');
	        puntero.shadowRoot.querySelector('.contTexto.pasoOcho').classList.add('activo');

	        puntero.shadowRoot.querySelector('.fondoCompu .contLateral .contMano').classList.remove('mano-3');
	        puntero.shadowRoot.querySelector('.fondoCompu .contLateral .contMano').classList.add('mano-4');
	    };

	    var abtnPasoOcho = this.shadowRoot.getElementById('btnPasoOcho');

	    abtnPasoOcho.onclick = function() {
	        
	        var cont = puntero.shadowRoot.getElementById('contIzqImgs');
	        cont.classList.remove('img-7');
	        cont.classList.add('img-8');

	        puntero.shadowRoot.querySelector('.contTexto.pasoOcho').classList.remove('activo');
	        puntero.shadowRoot.querySelector('.contTexto.pasoNueve').classList.add('activo');

	        puntero.shadowRoot.querySelector('.fondoCompu .contLateral .contMano').classList.remove('mano-4');
	        puntero.shadowRoot.querySelector('.fondoCompu .contLateral .contMano').classList.add('mano-1');
	    };

	    var abtnPasoNueve = this.shadowRoot.getElementById('btnPasoNueve');

	    abtnPasoNueve.onclick = function() {

	        puntero.shadowRoot.querySelector('.fondoCompu .contPasos').classList.remove('dosColumnas');
	        
	        var cont = puntero.shadowRoot.getElementById('contIzqImgs');
	        cont.classList.remove('img-8');
	        cont.classList.add('img-1');

	        puntero.shadowRoot.querySelector('.contTexto.pasoNueve').classList.remove('activo');
	        puntero.shadowRoot.querySelector('.contTexto.pasoUno').classList.add('activo');

	        puntero.shadowRoot.querySelector('.fondoCompu .contLateral .contMano').classList.remove('mano-1');
	        puntero.shadowRoot.querySelector('.fondoCompu .contLateral .contMano').classList.add('mano-2');
	    };

	};
}

window.customElements.define("simulador-bancos-prod", simuladorBancosProd);