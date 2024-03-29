const headerTemplateMov = document.createElement('template');
headerTemplateMov.innerHTML = `
		<link href="https://simuladores.pages.dev/assets/css/style.min.css" rel="stylesheet">
		<div id="idContenedorSimulador" class="movimientos">
			<div class="fondoCajero">
				<div class="contLateral">
					<div class="cuadroTexto">
						<img src="https://simuladores.pages.dev/assets/img/BER/Cajero/Caja-Texto-ER.png" alt="">
						<img class="mobile" src="https://simuladores.pages.dev/assets/img/BER/Mobile/Caja-Texto-ER-mobile.png" alt="">
						<div class="contTexto pasoUno activo">
							<p>Ingresá la tarjeta de débito en el cajero y escribí <strong>(con el teclado)</strong> tu clave. <strong>Para este ejemplo 1987</strong> y luego presioná <strong>“Continuar”.</strong></p>
						</div>
						<div class="contTexto pasoDos">
							<p>En pantalla debes hacer click en la opción <strong>“Consultas / Solicitudes”.</strong></p>
						</div>
						<div class="contTexto pasoTres">
							<p>Luego elegí la opción <strong>“Movimientos”.</strong></p>
						</div>
						<div class="contTexto pasoCuatro">
							<p>En esta instancia seleccioná <strong>“Últimos movimientos”</strong>.</p>
						</div>
                        <div class="contTexto pasoCinco">
							<p>Ahora debes seleccionar la cuenta correspondiente, para este caso: <strong>“Caja de ahorro en pesos”.</strong></p>
						</div>
                        <div class="contTexto pasoSeis">
							<p>En caso de que tengas más de una caja de ahorro ahora vas a tener que marcar la cuenta correspondiente que desees consultar. <strong>Para este caso ingresá 1</strong> y luego <strong>“Continuar”.</strong></p>
						</div>
                        <div class="contTexto pasoSiete">
							<p><strong>El cajero imprimirá automáticamente el ticket</strong> con los últimos movimientos de tu cuenta, y en caso de que existan más, te va a dar la opción de imprimirlos.</p>
						</div>
                        <div class="contTexto pasoOcho">
							<p>Luego vas a tener la opción de seguir operando en el cajero automático, para este caso vamos a apretar “NO” y el cajero te devolverá la tarjeta de débito. <strong>¡No olvides retirarla!</strong></p>
						</div>
						<div class="contTexto pasoNueve">
							<p>Presioná <strong>“Si”</strong> para repetir el simulador.</p>
						</div>
					</div>
					<div class="cuadroMano num1">
						<img src="https://simuladores.pages.dev/assets/img/BER/Cajero/Mano-02.png" alt="">
					</div>
				</div>
				<div class="contCuadroPantalla pasoUno">
					<div class="pantallaTexto Top">
						<p style="--animation-order: 1;">BIENVENIDO A RED LINK<br />INGRESE SU CODIGO DE<br />ACCESO PERSONAL (PIN)<br />LUEGO PRESIONE CONTIUAR</p>
					</div>
					<div class="pantallaTexto Center" style="--animation-order: 3;">
						<input type="text" id="primerPass"  maxlength="4">
					</div>
					<div class="pantallaTexto btn num-7" style="--animation-order: 4;">
						<p>CONTINUAR -></p>
						<a class="btnClick"></a>
						<div class="cuadroFlecha">
							<div class="imgCont">
								<img src="https://simuladores.pages.dev/assets/img/BER/Cajero/Flecha-ER.png" alt="">
							</div>
						</div>
					</div>
					<div class="pantallaTexto Bottom" style="--animation-order: 2;">
						<p>TAPE EL TECLADO MIENTRAS<br />ESCRIBE SU CODIGO</p>
					</div>
				</div>
				<div class="contCuadroPantalla pasoDos">
					<div class="pantallaTexto Top">
						<p style="--animation-order: 1;">SELECCIONE EL TIPO DE<br />OPERACION QUE DESEA EFECTUAR</p>
					</div>
					<div class="pantallaTexto btn num-1 doslineas" style="--animation-order: 2;">
						<p class="align">TRANSFERENCIAS/<span class="linea"><span class="flecha"><-----</span>DEPOSITOS</span></p>
					</div>
                    <div class="pantallaTexto btn num-2 doslineas" style="--animation-order: 3;">
						<p class="align">PRESTAMOS<span class="linea"><span class="flecha"><---</span>INVERSIONES</span></p>
					</div>
                    <div class="pantallaTexto btn num-3 doslineas" style="--animation-order: 4;">
						<p class="align">COMPRAS/<span class="linea"><span class="flecha"><-----</span>RECARGAS</span></p>
					</div>
                    <div class="pantallaTexto btn num-4 doslineas" style="--animation-order: 5;">
						<p class="align">GESTION<span class="linea"><span class="flecha"><-----</span>DE CLAVES</span></p>
					</div>

                    <div class="pantallaTexto btn num-5 doslineas" style="--animation-order: 2;">
						<p class="align">EXTRACCIONES/<span class="linea">ADELANTOS<span class="flecha">----></span></span></p>
					</div>
                    <div class="pantallaTexto btn num-6" style="--animation-order: 3;">
						<p class="align">PAGOS<span class="flecha">--------></span></p>
					</div>
                    <div class="pantallaTexto btn num-7 doslineas" style="--animation-order: 4;">
						<p class="align">PUNTO<span class="linea">EFECTIVO<span class="flecha">------></span></span></p>
					</div>
                    <div class="pantallaTexto btn num-8 doslineas" style="--animation-order: 5;">
						<p class="align">CONSULTAS/<span class="linea">SOLICITUDES<span class="flecha">---></span></span></p>
                        <a class="btnClick"></a>
                        <div class="cuadroFlecha">
							<div class="imgCont">
								<img src="https://simuladores.pages.dev/assets/img/BER/Cajero/Flecha-ER.png" alt="">
							</div>
						</div>
					</div>
				</div>
				<div class="contCuadroPantalla pasoTres">
                    <div class="pantallaTexto Top">
						<p style="--animation-order: 1;">SELECCIONE EL TIPO DE<br />OPERACION QUE DESEA EFECTUAR</p>
					</div>
					<div class="pantallaTexto btn num-1 doslineas" style="--animation-order: 2;">
						<p class="align">IMPRESION DE/<span class="linea"><span class="flecha"><-</span>COMPROBANTES</span></p>
					</div>
                    <div class="pantallaTexto btn num-2 doslineas" style="--animation-order: 3;">
						<p class="align">TIPO DE<span class="linea"><span class="flecha"><-------</span>CAMBIO</span></p>
					</div>
                    <div class="pantallaTexto btn num-3 doslineas" style="--animation-order: 4;">
						<p class="align">CONSULTA/<span class="linea"><span class="flecha"><-----</span>CBU/ALIAS</span></p>
					</div>
                    <div class="pantallaTexto btn num-4" style="--animation-order: 5;">
						<p class="align"><span class="flecha"><---</span>SOLICITUDES</p>
					</div>

                    <div class="pantallaTexto btn num-5 doslineas" style="--animation-order: 2;">
						<p class="align">CONSULTA<span class="linea">DE PUNTOS<span class="flecha">----></span></span></p>
					</div>
                    <div class="pantallaTexto btn num-6" style="--animation-order: 3;">
						<p class="align">MOVIMIENTOS<span class="flecha">--></span></p>
                        <a class="btnClick"></a>
                        <div class="cuadroFlecha">
							<div class="imgCont">
								<img src="https://simuladores.pages.dev/assets/img/BER/Cajero/Flecha-ER.png" alt="">
							</div>
						</div>
					</div>
                    <div class="pantallaTexto btn num-7 doslineas" style="--animation-order: 4;">
						<p class="align">ULTIMOS DEBITOS<span class="linea">AUTOMATICOS<span class="flecha">--></span></span></p>
					</div>
                    <div class="pantallaTexto btn num-8 doslineas" style="--animation-order: 5;">
						<p class="align">CONSULTAS DE<span class="linea">SALDOS<span class="flecha">-------></span></span></p>
					</div>
				</div>
                <div class="contCuadroPantalla pasoCuatro">
                    <div class="pantallaTexto Top">
						<p style="--animation-order: 1;">SELECCIONE EL TIPO DE<br />OPERACION QUE DESEA EFECTUAR</p>
					</div>
                    <div class="pantallaTexto btn num-5 doslineas" style="--animation-order: 2;">
						<p class="align">ULTIMOS<span class="linea">MOVIMIENTOS<span class="flecha">---></span></span></p>
                        <a class="btnClick"></a>
                        <div class="cuadroFlecha">
							<div class="imgCont">
								<img src="https://simuladores.pages.dev/assets/img/BER/Cajero/Flecha-ER.png" alt="">
							</div>
						</div>
					</div>
                    <div class="pantallaTexto btn num-6 doslineas" style="--animation-order: 3;">
                        <p class="align">MOVIMIENTOS<span class="linea">CONFORMADOS<span class="flecha">--></span></span></p>
					</div>
				</div>
                <div class="contCuadroPantalla pasoCinco">
                    <div class="pantallaTexto Top">
						<p style="--animation-order: 1;">SELECCIONE EL TIPO DE<br />OPERACION QUE DESEA EFECTUAR</p>
					</div>
					<div class="pantallaTexto btn num-1 doslineas" style="--animation-order: 2;">
						<p class="align">CAJA DE AHORRO<span class="linea"><span class="flecha"><----</span>EN DOLARES</span></p>
					</div>
                    <div class="pantallaTexto btn num-2 doslineas" style="--animation-order: 3;">
						<p class="align">CTA. CORRIENTE<span class="linea"><span class="flecha"><----</span>EN DOLARES</span></p>
					</div>
                    
                    <div class="pantallaTexto btn num-5 doslineas" style="--animation-order: 2;">
						<p class="align">CAJA DE AHORRO<span class="linea">EN PESOS<span class="flecha">------></span></span></p>
                        <a class="btnClick"></a>
                        <div class="cuadroFlecha">
							<div class="imgCont">
								<img src="https://simuladores.pages.dev/assets/img/BER/Cajero/Flecha-ER.png" alt="">
							</div>
						</div>
					</div>
                    <div class="pantallaTexto btn num-6 doslineas" style="--animation-order: 3;">
                        <p class="align">CTA. CORRIENTE<span class="linea">EN PESOS<span class="flecha">------></span></span></p>
					</div>
                    <div class="pantallaTexto btn num-7 doslineas" style="--animation-order: 4;">
						<p class="align">TARJETA DE<span class="linea">CREDITO<span class="flecha">-------></span></span></p>
					</div>
				</div>
                <div class="contCuadroPantalla pasoSeis">
                    <div class="pantallaTexto Top">
						<p style="--animation-order: 1;">SELECCIONE LA <span class="celeste">CAJA DE AHORROS</span><br />CON LA QUE DESEA OPERAR</p>
                        <div class="contInfoCuentas" style="--animation-order: 2;">
                            <ul class="listaCuentas">
                                <li>1) 00020000031044</li>
                                <li>2) 00020002773775</li>
                                <li>3) 11301300010322</li>
                                <li>4) 12454587841424</li>
                                <li>5) 00020002765473</li>
                                <li>6) VER MAS CUENTAS</li>
                            </ul>
                            <p style="--animation-order: 3;">USTED SELECCIONO:<input type="text" id="segundoPass"></p>
                        </div>
					</div>
                    <div class="pantallaTexto btn num-7" style="--animation-order: 4;">
						<p class="align">MODIFICAR<span class="flecha">------></span></p>
					</div>
                    <div class="pantallaTexto btn num-8" style="--animation-order: 5;">
                        <p class="align">CONTINUAR<span class="flecha">------></span></p>
                        <a class="btnClick"></a>
                        <div class="cuadroFlecha">
							<div class="imgCont">
								<img src="https://simuladores.pages.dev/assets/img/BER/Cajero/Flecha-ER.png" alt="">
							</div>
						</div>
					</div>
				</div>
                <div class="contCuadroPantalla pasoSiete">
					<div class="pantallaTexto Top">
						<p style="--animation-order: 1;">HAY MAS TICKETS REGISTRADOS<br />DESEA IMPRIMIR EL PROXIMO?</p>
					</div>
					<div class="pantallaTexto Bottom" style="--animation-order: 2;">
						<p>&nbsp;</p>
						<div class="contBtnNoSi">
							<div class="btn izq">
								<p><--------- NO</p>
							</div>
							<div class="btn der">
								<p>SI ---------></p>
                                <a class="btnClick"></a>
                                <div class="cuadroFlecha">
									<div class="imgCont">
										<img src="https://simuladores.pages.dev/assets/img/BER/Cajero/Flecha-ER.png" alt="">
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
                <div class="contCuadroPantalla pasoOcho">
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
								<div class="cuadroFlecha">
									<div class="imgCont">
										<img src="https://simuladores.pages.dev/assets/img/BER/Cajero/Flecha-ER.png" alt="">
									</div>
								</div>
							</div>
							<div class="btn der">
								<p>SI ---------></p>
							</div>
						</div>
					</div>
				</div>
				<div class="contCuadroPantalla pasoNueve">
					<div class="pantallaTexto Bottom" style="--animation-order: 2;">
						<p>VOLVER A SIMULAR?</p>
						<div class="contBtnNoSi">
							<div class="btn izq"></div>
							<div class="btn der">
								<p>SI ---------></p>
								<a class="btnClick"></a>
								<div class="cuadroFlecha">
									<div class="imgCont">
										<img src="https://simuladores.pages.dev/assets/img/BER/Cajero/Flecha-ER.png" alt="">
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<img class="imgPantallaCajero" src="https://simuladores.pages.dev/assets/img/BER/Cajero/Pantalla-00.png" alt="">
			</div>
		</div>
`;

const headerTemplateHB = document.createElement('template');
headerTemplateHB.innerHTML = `
		<link href="https://simuladores.pages.dev/assets/css/style.min.css" rel="stylesheet">
		<div id="idContenedorSimulador" class="escritorio">
			<div class="fondoCompu">
                <div class="contLateral">
                    <div class="contMano mano-1">
                        <img src="https://simuladores.pages.dev/assets/img/BER/Homebanking/Mano-01.png" alt="">
                    </div>
                    <div class="contCuadro">
                        <img src="https://simuladores.pages.dev/assets/img/BER/Homebanking/Caja-Texto-ER.png" alt="">
                        <img class="mobile" src="https://simuladores.pages.dev/assets/img/BER/Mobile/Caja-Texto-ER-mobile.png" alt="">
                        <div class="contTexto pasoUno activo">
							<p>El primer paso es dar click en el <strong>botón superior derecho</strong> para comenzar tu registro</p>
						</div>
                        <div class="contTexto pasoDos">
							<p><strong>Comenzamos.</strong></p>
                            <p>Primero, seleccioná la opción <strong>“Crear nuevo usuario”</strong></p>
						</div>
                        <div class="contTexto pasoTres">
							<p>En esta pantalla elegí la opción que prefieras para completar los datos, <strong>tildá</strong> la casilla y presioná <strong>“Aceptar”</strong> para recibir el código de activación.</p>
                            <p><strong>Para este ejemplo completá: DNI 12975317</strong></p>
						</div>
                        <div class="contTexto pasoCuatro">
							<p>¡Código enviado! cuando estés haciendo realmente este paso vas a recibir un código en tu correo electrónico. Una vez que lo encuentres, volvé a esta pantalla para activarlo y presioná <strong>“Continuar”</strong>.</p>
						</div>
                        <div class="contTexto pasoCinco">
                            <p>Para este ejemplo, vamos a usar el código de verificación <strong>596445988</strong>. Luego seleccioná <strong>“Continuar”</strong>.</p>
						</div>
                        <div class="contTexto pasoSeis">
							<p>Te enviaremos un <strong>segundo código</strong> para validar tu identidad al teléfono registrado.</p>
                            <p>Para este ejemplo, usá <strong>80245448</strong> y presioná <strong>“Continuar”</strong>.</p>
						</div>
                        <div class="contTexto pasoSiete">
							<p>Ahora debés completar tus datos que te serán solicitados cada vez que ingreses a Home Banking.</p>
                            <p>Para este caso completá: Usuario: <strong>Ignacio970</strong> / Contraseña: <strong>452.122</strong> / Seleccionar <strong>imagen</strong> / <strong>Tildar</strong> la casilla de Términos y condiciones / Presionar <strong>“Continuar”</strong>.</p>
						</div>
                        <div class="contTexto pasoOcho">
							<p>¡Listo! Ya generaste tu usuario y contraseña para poder operar en Home Banking de Banco XXXX desde donde estés. <strong>¡Anotala para no olvidarla!</strong></p>
						</div>
                        <div class="contTexto pasoNueve">
							<p>Puedes volver a ver los pasos.</p>
						</div>
                    </div>
                </div>
                <div class="contPasos">
                    <div id="contIzqImgs" class="contIzquierda img-1">
                        <img src="https://simuladores.pages.dev/assets/img/BER/Homebanking/ER-03.jpg" alt="">
                        <div class="contCuadro cuadro-2">
                            <div class="contenido">
                                <div class="fila">
                                    <select name="" id="selectDNI">
                                        <option value="CUIL">CUIL</option>
                                        <option value="DNI">DNI</option>
                                    </select>
                                    <input type="text" name="" id="inputDNI">
                                </div>
                                <div class="contcaptcha">
                                    <div class="contCheck">
                                        <label for="inputCaptcha"><input id="inputCaptcha" type="checkbox"><span>No soy un robot</span></label>
                                    </div>
                                    <img src="https://simuladores.pages.dev/assets/img/captcha.jpg" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="contCuadro cuadro-4">
                            <div class="contenido">
                                <div class="filalabel">
                                    <label for="inputCodigoVerificacion">Código de verificación</label>
                                    <input type="text" name="" id="inputCodigoVerificacion">
                                </div>
                            </div>
                        </div>
                        <div class="contCuadro cuadro-5">
                            <div class="contenido">
                                <div class="filalabel">
                                    <label for="inputCodigoVerificacion2">Código de verificación</label>
                                    <input type="text" name="" id="inputCodigoVerificacion2">
                                </div>
                            </div>
                        </div>
                        <div class="contCuadro cuadro-6">
                            <div class="contenido">
                                <div class="filafull">
                                    <label for="inputUsuario"><span>Usuario</span><input type="text" name="" id="inputUsuario"></label>
                                </div>
                                <div class="filafull">
                                    <label for="inputContrasena"><span>Contraseña</span><input type="password" name="" id="inputContrasena"></label>
                                    <ul>
                                        <li>La contraseña debe contener al menos 5 caracteres</li>
                                        <li>Debe contener números</li>
                                        <li>Caracteres especiales</li>
                                    </ul>
                                </div>
                                <div class="filafull">
                                    <label for="inputRepetirContrasena"><span>Repetir Contraseña</span><input type="password" name="" id="inputRepetirContrasena"></label>
                                </div>
                                <div class="filaimagen">
                                    <a class="contImagen" id="abtnOpenSelImage">
                                        <div class="contTexto">
                                            <p class="titulo">IMAGEN DE SEGURIDAD</p>
                                            <p>Selecciona imagen</p>
                                        </div>
                                        <div id="contimagensel" class="Img">
                                            <img src="https://simuladores.pages.dev/assets/img/BER/Homebanking/imgfondo.jpg" alt="">
                                            <div class="itemimagen" id="imgimagen-1">
                                                <img src="https://simuladores.pages.dev/assets/img/Lapizeditar.svg" alt="">
                                                <div class="img"><img src="https://simuladores.pages.dev/assets/img/img-seguridad-01.jpg" alt=""></div>
                                            </div>
                                            <div class="itemimagen" id="imgimagen-2">
                                                <img src="https://simuladores.pages.dev/assets/img/Lapizeditar.svg" alt="">
                                                <div class="img"><img src="https://simuladores.pages.dev/assets/img/img-seguridad-02.jpg" alt=""></div>
                                            </div>
                                            <div class="itemimagen" id="imgimagen-3">
                                                <img src="https://simuladores.pages.dev/assets/img/Lapizeditar.svg" alt="">
                                                <div class="img"><img src="https://simuladores.pages.dev/assets/img/img-seguridad-03.jpg" alt=""></div>
                                            </div>
                                            <div class="itemimagen" id="imgimagen-4">
                                                <img src="https://simuladores.pages.dev/assets/img/Lapizeditar.svg" alt="">
                                                <div class="img"><img src="https://simuladores.pages.dev/assets/img/img-seguridad-04.jpg" alt=""></div>
                                            </div>
                                            <div class="itemimagen" id="imgimagen-5">
                                                <img src="https://simuladores.pages.dev/assets/img/Lapizeditar.svg" alt="">
                                                <div class="img"><img src="https://simuladores.pages.dev/assets/img/img-seguridad-05.jpg" alt=""></div>
                                            </div>
                                            <div class="itemimagen" id="imgimagen-6">
                                                <img src="https://simuladores.pages.dev/assets/img/Lapizeditar.svg" alt="">
                                                <div class="img"><img src="https://simuladores.pages.dev/assets/img/img-seguridad-06.jpg" alt=""></div>
                                            </div>
                                        </div>
                                    </a>
                                    <div id="contCuadroSelImagen" class="contCuadroSelImagen">
                                        <div class="conttitulo">
                                            <div class="tit">
                                                <p>Seleccionar Imagen</p>
                                            </div>
                                            <div class="close">
                                                <a id="abtnCerrarCuadro">x</a>
                                            </div>
                                        </div>
                                        <div class="contImagenes">
                                            <a class="item" id="abtnimagen-1">
                                                <img src="https://simuladores.pages.dev/assets/img/check.svg" alt="">
                                                <div class="img"><img src="https://simuladores.pages.dev/assets/img/img-seguridad-01.jpg" alt=""></div>
                                            </a>
                                            <a class="item" id="abtnimagen-2">
                                                <img src="https://simuladores.pages.dev/assets/img/check.svg" alt="">
                                                <div class="img"><img src="https://simuladores.pages.dev/assets/img/img-seguridad-02.jpg" alt=""></div>
                                            </a>
                                            <a class="item" id="abtnimagen-3">
                                                <img src="https://simuladores.pages.dev/assets/img/check.svg" alt="">
                                                <div class="img"><img src="https://simuladores.pages.dev/assets/img/img-seguridad-03.jpg" alt=""></div>
                                            </a>
                                            <a class="item" id="abtnimagen-4">
                                                <img src="https://simuladores.pages.dev/assets/img/check.svg" alt="">
                                                <div class="img"><img src="https://simuladores.pages.dev/assets/img/img-seguridad-04.jpg" alt=""></div>
                                            </a>
                                            <a class="item" id="abtnimagen-5">
                                                <img src="https://simuladores.pages.dev/assets/img/check.svg" alt="">
                                                <div class="img"><img src="https://simuladores.pages.dev/assets/img/img-seguridad-05.jpg" alt=""></div>
                                            </a>
                                            <a class="item" id="abtnimagen-6">
                                                <img src="https://simuladores.pages.dev/assets/img/check.svg" alt="">
                                                <div class="img"><img src="https://simuladores.pages.dev/assets/img/img-seguridad-06.jpg" alt=""></div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="filaLegales">
                                    <div class="continpup">
                                        <input type="checkbox" id="inputlegales">
                                    </div>
                                    <div class="conttexto">
                                        <label for="inputlegales">He leido y acepto los términos y condiciones.</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a id="btnPasoDos">
                            <div class="cuadroFlecha">
                                <div class="imgCont">
                                    <img src="https://simuladores.pages.dev/assets/img/BER/Cajero/Flecha-ER.png" alt="">
                                </div>
                            </div>
                        </a>
                        <a id="btnPasoTres">
                            <div class="cuadroFlecha">
                                <div class="imgCont">
                                    <img src="https://simuladores.pages.dev/assets/img/BER/Cajero/Flecha-ER.png" alt="">
                                </div>
                            </div>
                        </a>
                        <a id="btnPasoCuatro">
                            <div class="cuadroFlecha">
                                <div class="imgCont">
                                    <img src="https://simuladores.pages.dev/assets/img/BER/Cajero/Flecha-ER.png" alt="">
                                </div>
                            </div>
                        </a>
                        <a id="btnPasoCinco">
                            <div class="cuadroFlecha">
                                <div class="imgCont">
                                    <img src="https://simuladores.pages.dev/assets/img/BER/Cajero/Flecha-ER.png" alt="">
                                </div>
                            </div>
                        </a>
                        <a id="btnPasoSeis">
                            <div class="cuadroFlecha">
                                <div class="imgCont">
                                    <img src="https://simuladores.pages.dev/assets/img/BER/Cajero/Flecha-ER.png" alt="">
                                </div>
                            </div>
                        </a>
                        <a id="btnPasoSiete">
                            <div class="cuadroFlecha">
                                <div class="imgCont">
                                    <img src="https://simuladores.pages.dev/assets/img/BER/Cajero/Flecha-ER.png" alt="">
                                </div>
                            </div>
                        </a>
                        <a id="btnPasoOcho">
                            <div class="cuadroFlecha">
                                <div class="imgCont">
                                    <img src="https://simuladores.pages.dev/assets/img/BER/Cajero/Flecha-ER.png" alt="">
                                </div>
                            </div>
                        </a>
                        <a id="btnPasoNueve">
                            <div class="cuadroFlecha">
                                <div class="imgCont">
                                    <img src="https://simuladores.pages.dev/assets/img/BER/Cajero/Flecha-ER.png" alt="">
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="contImgFija">
                        <img src="https://simuladores.pages.dev/assets/img/BER/Homebanking/ER-02.jpg" alt="">
                    </div>
                    <div class="contImgPrincipal">
                        <img src="https://simuladores.pages.dev/assets/img/BER/Homebanking/ER-01.jpg" alt="">
                        <a id="btnPasoUno">
                            <div class="cuadroFlecha">
                                <div class="imgCont">
                                    <img src="https://simuladores.pages.dev/assets/img/BER/Cajero/Flecha-ER.png" alt="">
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <img class="imgFondoCompu" src="https://simuladores.pages.dev/assets/img/BER/Homebanking/Notebook.png" alt="">
                <img class="imgFondoCompu mobile" src="https://simuladores.pages.dev/assets/img/BER/Mobile/Telefono.png" alt="">
                <div id="contMesajeError">
                    <div class="mensajeError">
                        <p>Por favor complete los campos indicados.</p>
                        <a id="btnCerrar">Aceptar</a>
                    </div>
                </div>
            </div>
		</div>
`;

const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
		<link href="https://simuladores.pages.dev/assets/css/style.min.css" rel="stylesheet">
		<div id="idContenedorSimulador" class="ingreso">
			<div class="fondoCajero">
				<div class="contLateral">
					<div class="cuadroTexto">
						<img src="https://simuladores.pages.dev/assets/img/BER/Cajero/Caja-Texto-ER.png" alt="">
						<img class="mobile" src="https://simuladores.pages.dev/assets/img/BER/Mobile/Caja-Texto-ER-mobile.png" alt="">
						<div class="contTexto pasoUno activo">
							<p>Para empezar deberás ingresar la tarjeta de débito en el cajero y escribir <strong>(con el teclado)</strong> la clave PIN que entrega el banco o los últimos 4 dígitos del DNI.</p>
							<p><strong>Para este ejemplo: 1373.</strong> Luego presioná <strong>“Continuar”.</strong></p>
						</div>
						<div class="contTexto pasoDos">
							<p>El cajero te pedirá generar una nueva clave. Lo primero que tenés que ingresar es la clave actual, recordá que son los últimos 4 dígitos de tu DNI o la emitida por el banco. <strong>Para este ejemplo utilizamos 1373.</strong></p>
						</div>
						<div class="contTexto pasoTres">
							<p>Ahora debes ingresar la nueva clave, en este caso: <strong>2080. Luego presioná “Continuar” e ingresala nuevamente</strong> para confirmar el cambio.</p>
						</div>
						<div class="contTexto pasoCuatro">
							<p>La operación será válida si el cajero emite el <strong>ticket de cambio de PIN.</strong></p>
							<p>Extraé la tarjeta y volvé a ingresarla con tu nueva clave si necesitas seguir operando en el cajero.</p>
						</div>
						<div class="contTexto pasoCinco">
							<p>Presioná <strong>“Si”</strong> para repetir el simulador.</p>
						</div>
					</div>
					<div class="cuadroMano num1">
						<img src="https://simuladores.pages.dev/assets/img/BER/Cajero/Mano-02.png" alt="">
					</div>
				</div>
				<div class="contCuadroPantalla pasoUno">
					<div class="pantallaTexto Top">
						<p style="--animation-order: 1;">BIENVENIDO A RED LINK<br />INGRESE SU CODIGO DE<br />ACCESO PERSONAL (PIN)<br />LUEGO PRESIONE CONTIUAR</p>
					</div>
					<div class="pantallaTexto Center" style="--animation-order: 3;">
						<input type="text" id="primerPass"  maxlength="4">
					</div>
					<div class="pantallaTexto btn num-7" style="--animation-order: 4;">
						<p>CONTINUAR -></p>
						<a class="btnClick"></a>
						<div class="cuadroFlecha">
							<div class="imgCont">
								<img src="https://simuladores.pages.dev/assets/img/BER/Cajero/Flecha-ER.png" alt="">
							</div>
						</div>
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
						<p>INGRESE CLAVE ACTUAL:<input type="text" id="segundoPass"  maxlength="4"></p>
						<p>INGRESE NUEVA CLAVE:<input type="text" id="tercerPass"  maxlength="4"></p>
						<p>REINGRESE NUEVA CLAVE:<input type="text" id="cuartoPass"  maxlength="4"></p>
					</div>
					<div class="pantallaTexto btn num-7" style="--animation-order: 4;">
						<p>CONTINUAR -></p>
						<a class="btnClick"></a>
						<div class="cuadroFlecha">
							<div class="imgCont">
								<img src="https://simuladores.pages.dev/assets/img/BER/Cajero/Flecha-ER.png" alt="">
							</div>
						</div>
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
								<div class="cuadroFlecha">
									<div class="imgCont">
										<img src="https://simuladores.pages.dev/assets/img/BER/Cajero/Flecha-ER.png" alt="">
									</div>
								</div>
							</div>
							<div class="btn der">
								<p>SI ---------></p>
							</div>
						</div>
					</div>
				</div>
				<div class="contCuadroPantalla pasoCuatro">
					<div class="pantallaTexto Bottom" style="--animation-order: 2;">
						<p>VOLVER A SIMULAR?</p>
						<div class="contBtnNoSi">
							<div class="btn izq"></div>
							<div class="btn der">
								<p>SI ---------></p>
								<a class="btnClick"></a>
								<div class="cuadroFlecha">
									<div class="imgCont">
										<img src="assets/img/BER/Cajero/Flecha-ER.png" alt="">
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<img class="imgPantallaCajero" src="https://simuladores.pages.dev/assets/img/BER/Cajero/Pantalla-00.png" alt="">
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

        var banco = this.getAttribute("data-banco");
        var template = this.getAttribute("data-template");

        var nombrebanco = "Entre Ríos";
        if(banco == 'BSF') nombrebanco = "Santa Fe";
        else if(banco == 'BSC') nombrebanco = "Santa Cruz";
        else if(banco == 'BSJ') nombrebanco = "San Juan";

        if(template=='ingreso'){
        	shadowRoot.appendChild(headerTemplate.content);
        }else if(template=='movimientos'){
        	 shadowRoot.appendChild(headerTemplateMov.content);
        }else{//homebanking
        	var change = headerTemplateHB.innerHTML;
        	change = change.replace("XXXX", nombrebanco);
        	headerTemplateHB.innerHTML = change;
        	shadowRoot.appendChild(headerTemplateHB.content);
        }

        

        this.shadowRoot.getElementById("idContenedorSimulador").classList.add(template);
        this.shadowRoot.getElementById("idContenedorSimulador").classList.add(banco);

        this.primerPass = this.shadowRoot.getElementById("primerPass");
		this.segundoPass = this.shadowRoot.getElementById("segundoPass");
		this.tercerPass = this.shadowRoot.getElementById("tercerPass");
		this.cuartoPass = this.shadowRoot.getElementById("cuartoPass");

		/*if( !this.isMobile() ){
			var hasVScroll = document.body.scrollHeight > document.body.clientHeight;

		    if(hasVScroll){
		        this.shadowRoot.getElementById('idContenedorSimulador').classList.add('scrollbars');
		    }
		}*/

        /*if( this.isMobile() ){
	        var inputs, index;

	        inputs = this.shadowRoot.querySelectorAll('input');
	        for (index = 0; index < inputs.length; ++index) {
	            inputs[index].removeAttribute('readonly');
	        }
	    }*/

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
	    this.shadowRoot.getElementById('idContenedorSimulador').onkeyup = function(event){
	        //console.log(event.key);

	        if( isNaN( parseInt(event.key)) ){
	            //console.log('letra');
	            return;
	        }

	        if( puntero.textoPantalla.classList.contains('pasoUno') ){
	            if(puntero.front_primerPass.length < 4){
	                puntero.enter_primerPass += ""+event.key;
	                
	                puntero.front_primerPass += 'X';
	                if( !puntero.isMobile() ){
	                    puntero.primerPass.value = puntero.front_primerPass;
	                }
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
	                    if( !puntero.isMobile() ){
	                    	puntero.segundoPass.value = puntero.front_primerPass;
	                    }
	                }
	                if(puntero.front_primerPass.length == 4){
	                    
	                    puntero.shadowRoot.querySelector('.contCuadroPantalla.pasoDos .pantallaTexto.btn').classList.add('siguiente');
	                }
	            }else if( puntero.etapaPasoDos == 2){
	                if(puntero.front_primerPass.length < 4){
	                    puntero.enter_primerPass += ""+event.key;
	                    
	                    puntero.front_primerPass += 'X';
	                    if( !puntero.isMobile() ){
	                    	puntero.tercerPass.value = puntero.front_primerPass;
	                    }
	                }
	                if(puntero.front_primerPass.length == 4){
	                    puntero.shadowRoot.querySelector('.contCuadroPantalla.pasoDos .pantallaTexto.btn').classList.add('siguiente');
	                }
	            }else if( puntero.etapaPasoDos == 3){
	                if(puntero.front_primerPass.length < 4){
	                    puntero.enter_primerPass += ""+event.key;
	                    
	                    puntero.front_primerPass += 'X';
	                    if( !puntero.isMobile() ){
	                    	puntero.cuartoPass.value = puntero.front_primerPass;
	                    }
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

	        this.contTexto_activo = this.shadowRoot.querySelector('.contTexto.pasoTres');
	        this.contTexto_proximo = this.shadowRoot.querySelector('.contTexto.pasoCuatro');

	        this.btnClick.onclick = function() {
	            puntero.textoPantalla.classList.add('animOcultar');

	            puntero.contTexto_activo.classList.remove('activo');
	            puntero.contTexto_proximo.classList.add('activo');

	            puntero.textoPantalla.classList.remove('activo');

	            puntero.pasoCuatro();
	        };
	    }
	}

	pasoCuatro(){
	    this.textoPantalla = this.shadowRoot.querySelector('.contCuadroPantalla.pasoCuatro');

	    var puntero = this;

	    if( this.shadowRoot.getElementById('idContenedorSimulador').classList.contains('movimientos') ){

		    this.contTexto_activo = this.shadowRoot.querySelector('.contTexto.pasoCuatro');
		    this.contTexto_proximo = this.shadowRoot.querySelector('.contTexto.pasoCinco');

		    this.textoPantalla.classList.add("activo");
		    this.textoPantalla.classList.add('anim');

		    this.shadowRoot.querySelector('.contCuadroPantalla.pasoCuatro .pantallaTexto.btn.num-5').classList.add('siguiente');

		    this.btnClick = this.shadowRoot.querySelector('.pasoCuatro .btnClick');

		    this.shadowRoot.querySelector('.cuadroMano').classList.remove('num1');
		    this.shadowRoot.querySelector('.cuadroMano').classList.add('num2');

		    this.btnClick.onclick = function() {
		        puntero.textoPantalla.classList.add('animOcultar');

		        puntero.contTexto_activo.classList.remove('activo');
		        puntero.contTexto_proximo.classList.add('activo');

		        puntero.textoPantalla.classList.remove('activo');

		        puntero.pasoCinco();
		    };
	    }else{
	        this.textoPantalla.classList.add("activo");
	        this.textoPantalla.classList.add('anim');

	        this.shadowRoot.querySelector('.cuadroMano').classList.remove('num3');
	        this.shadowRoot.querySelector('.cuadroMano').classList.add('num1');

	        var btnClick_si = this.shadowRoot.querySelector('.contCuadroPantalla.pasoCuatro .btn.der .btnClick');

	        btnClick_si.onclick = function() {
	            puntero.resetSimuladorUno();
	        };
	    }
	}

	resetSimuladorUno(){
	    this.shadowRoot.querySelector('.contTexto.pasoCuatro').classList.remove('activo');
	    this.shadowRoot.querySelector('.contTexto.pasoUno').classList.add('activo');

	    this.primerPass.value = '';
	    this.segundoPass.value = '';
	    this.tercerPass.value = '';
	    this.cuartoPass.value = '';

	    this.enter_primerPass = "";
	    this.front_primerPass = "";

	    var collection = this.shadowRoot.querySelectorAll(".contCuadroPantalla");
	    for (var i = 0; i < collection.length; i++) {
	        collection[i].classList.remove('activo', 'anim', 'animOcultar');
	    }

	    collection = this.shadowRoot.querySelectorAll(".pantallaTexto");
	    for (i = 0; i < collection.length; i++) {
	        collection[i].classList.remove('siguiente');
	    }

	    this.shadowRoot.querySelector('.contCuadroPantalla.pasoUno').classList.add('activo');

	    //handlerKeyUp();
	    
	    this.pasoUno();
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

	    var btnClick_dos = this.shadowRoot.querySelector('.pasoSiete .der .btnClick');

	    this.shadowRoot.querySelector('.cuadroMano').classList.remove('num2');
	    this.shadowRoot.querySelector('.cuadroMano').classList.add('num1');

	    var puntero = this;

	    btnClick_dos.onclick = function() {
	        puntero.textoPantalla.classList.add('animOcultar');

	        puntero.contTexto_activo.classList.remove('activo');
	        puntero.contTexto_proximo.classList.add('activo');

	        puntero.textoPantalla.classList.remove('activo');

	        puntero.pasoOcho();
	    };

	}

	pasoOcho(){
	    this.textoPantalla = this.shadowRoot.querySelector('.contCuadroPantalla.pasoOcho');

	    this.contTexto_activo = this.shadowRoot.querySelector('.contTexto.pasoOcho');
    	this.contTexto_proximo = this.shadowRoot.querySelector('.contTexto.pasoNueve');

	    this.textoPantalla.classList.add("activo");
	    this.textoPantalla.classList.add('anim');

	    this.btnClick = this.shadowRoot.querySelector('.pasoOcho .btnClick');

	    this.shadowRoot.querySelector('.cuadroMano').classList.remove('num1');
	    this.shadowRoot.querySelector('.cuadroMano').classList.add('num3');

	    var puntero = this;

	    this.btnClick.onclick = function() {

	        puntero.textoPantalla.classList.add('animOcultar');

	        puntero.textoPantalla.classList.remove('activo');

	        puntero.pasoNueve();

	    };
	}

	pasoNueve(){
	    this.textoPantalla = this.shadowRoot.querySelector('.contCuadroPantalla.pasoNueve');

	    this.textoPantalla.classList.add("activo");
	    this.textoPantalla.classList.add('anim');

	    this.shadowRoot.querySelector('.cuadroMano').classList.remove('num3');
	    this.shadowRoot.querySelector('.cuadroMano').classList.add('num1');

	    var btnClick_si = this.shadowRoot.querySelector('.contCuadroPantalla.pasoNueve .btn.der .btnClick');

	    var puntero = this;

	    btnClick_si.onclick = function() {
	        puntero.resetSimuladorDos();
	    };
	}

	resetSimuladorDos(){
	    this.shadowRoot.querySelector('.contTexto.pasoOcho').classList.remove('activo');
	    this.shadowRoot.querySelector('.contTexto.pasoUno').classList.add('activo');

	    this.primerPass.value = '';
	    this.segundoPass.value = '';

	    this.enter_primerPass = "";
	    this.front_primerPass = "";

	    var collection = this.shadowRoot.querySelectorAll(".contCuadroPantalla");
	    for (var i = 0; i < collection.length; i++) {
	        collection[i].classList.remove('activo', 'anim', 'animOcultar');
	    }

	    collection = this.shadowRoot.querySelectorAll(".pantallaTexto");
	    for (i = 0; i < collection.length; i++) {
	        collection[i].classList.remove('siguiente');
	    }

	    this.shadowRoot.querySelector('.contCuadroPantalla.pasoUno').classList.add('activo');

	    this.pasoUno();
	}

	initPasoUno(){

	    var puntero = this;

	    var abtnOpenSelImg = this.shadowRoot.getElementById('abtnOpenSelImage');
	    abtnOpenSelImg.onclick = function() {
	        
	        var div = puntero.shadowRoot.getElementById('contCuadroSelImagen');
	        div.classList.add('activo');
	        setTimeout(function(){
	            div.classList.add('visible');
	        }, 250);

	    };

	    var abtnCerrarCuadro = this.shadowRoot.getElementById('abtnCerrarCuadro');
	    abtnCerrarCuadro.onclick = function() {
	        
	        var div = puntero.shadowRoot.getElementById('contCuadroSelImagen');
	        div.classList.remove('visible');
	        setTimeout(function(){
	            div.classList.remove('activo');
	        }, 500);

	    };

	    this.shadowRoot.getElementById('abtnimagen-1').onclick = function() {
	        puntero.selImagenPerfil('img-1');
	    };
	    this.shadowRoot.getElementById('abtnimagen-2').onclick = function() {
	        puntero.selImagenPerfil('img-2');
	    };
	    this.shadowRoot.getElementById('abtnimagen-3').onclick = function() {
	        puntero.selImagenPerfil('img-3');
	    };
	    this.shadowRoot.getElementById('abtnimagen-4').onclick = function() {
	        puntero.selImagenPerfil('img-4');
	    };
	    this.shadowRoot.getElementById('abtnimagen-5').onclick = function() {
	        puntero.selImagenPerfil('img-5');
	    };
	    this.shadowRoot.getElementById('abtnimagen-6').onclick = function() {
	        puntero.selImagenPerfil('img-6');
	    };

	    var abtn = this.shadowRoot.getElementById('btnPasoUno');
	    var abtncerrar = this.shadowRoot.getElementById('btnCerrar');

	    abtncerrar.onclick = function() {
        
	        puntero.cerrarMensaje();

	    };

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

	    	if( puntero.shadowRoot.getElementById('selectDNI').value == 'DNI' && puntero.shadowRoot.getElementById('inputDNI').value == '12975317' && puntero.shadowRoot.getElementById("inputCaptcha").checked == true){
	        
		        var cont = puntero.shadowRoot.getElementById('contIzqImgs');
		        cont.classList.remove('img-2');
		        cont.classList.add('img-3');

		        puntero.shadowRoot.querySelector('.contTexto.pasoTres').classList.remove('activo');
		        puntero.shadowRoot.querySelector('.contTexto.pasoCuatro').classList.add('activo');

		        puntero.shadowRoot.querySelector('.fondoCompu .contLateral .contMano').classList.remove('mano-3');
		        puntero.shadowRoot.querySelector('.fondoCompu .contLateral .contMano').classList.add('mano-4');
		    }else{
	            puntero.mostrarError();
	        }
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

	    	if( puntero.shadowRoot.getElementById('inputCodigoVerificacion').value == '596445988'){
	        
		        var cont = puntero.shadowRoot.getElementById('contIzqImgs');
		        cont.classList.remove('img-4');
		        cont.classList.add('img-5');

		        puntero.shadowRoot.querySelector('.contTexto.pasoCinco').classList.remove('activo');
		        puntero.shadowRoot.querySelector('.contTexto.pasoSeis').classList.add('activo');

		        puntero.shadowRoot.querySelector('.fondoCompu .contLateral .contMano').classList.remove('mano-1');
		        puntero.shadowRoot.querySelector('.fondoCompu .contLateral .contMano').classList.add('mano-2');
		    }else{
	            puntero.mostrarError();
	        }
	    };

	    var abtnPasoSeis = this.shadowRoot.getElementById('btnPasoSeis');

	    abtnPasoSeis.onclick = function() {

	    	if( puntero.shadowRoot.getElementById('inputCodigoVerificacion2').value == '80245448'){
	        
		        var cont = puntero.shadowRoot.getElementById('contIzqImgs');
		        cont.classList.remove('img-5');
		        cont.classList.add('img-6');

		        puntero.shadowRoot.querySelector('.contTexto.pasoSeis').classList.remove('activo');
		        puntero.shadowRoot.querySelector('.contTexto.pasoSiete').classList.add('activo');

		        puntero.shadowRoot.querySelector('.fondoCompu .contLateral .contMano').classList.remove('mano-2');
		        puntero.shadowRoot.querySelector('.fondoCompu .contLateral .contMano').classList.add('mano-3');
		    }else{
	            puntero.mostrarError();
	        }
	    };

	    var abtnPasoSiete = this.shadowRoot.getElementById('btnPasoSiete');

	    abtnPasoSiete.onclick = function() {

	    	if( puntero.shadowRoot.getElementById('inputUsuario').value == 'Ignacio970' && puntero.shadowRoot.getElementById('inputContrasena').value == '452.122' && puntero.shadowRoot.getElementById('inputRepetirContrasena').value == '452.122' && puntero.shadowRoot.getElementById("inputlegales").checked == true){
	        
		        var cont = puntero.shadowRoot.getElementById('contIzqImgs');
		        cont.classList.remove('img-6');
		        cont.classList.add('img-7');

		        puntero.shadowRoot.querySelector('.contTexto.pasoSiete').classList.remove('activo');
		        puntero.shadowRoot.querySelector('.contTexto.pasoOcho').classList.add('activo');

		        puntero.shadowRoot.querySelector('.fondoCompu .contLateral .contMano').classList.remove('mano-3');
		        puntero.shadowRoot.querySelector('.fondoCompu .contLateral .contMano').classList.add('mano-4');
		    }else{
	            puntero.mostrarError();
	        }
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

	        var contimagensel = puntero.shadowRoot.getElementById('contimagensel');

	        contimagensel.className = '';
	        contimagensel.classList.add('Img');

	        puntero.shadowRoot.getElementById('selectDNI').selectedIndex = 0;
	        puntero.shadowRoot.getElementById('inputDNI').value = '';
	        puntero.shadowRoot.getElementById("inputCaptcha").checked = false;
	        puntero.shadowRoot.getElementById('inputCodigoVerificacion').value = '';
	        puntero.shadowRoot.getElementById('inputCodigoVerificacion2').value = '';
	        puntero.shadowRoot.getElementById('inputUsuario').value = '';
	        puntero.shadowRoot.getElementById('inputContrasena').value = '';
	        puntero.shadowRoot.getElementById('inputRepetirContrasena').value = '';
	        puntero.shadowRoot.getElementById("inputlegales").checked = false;
	    };
	}

	selImagenPerfil(sel){
	    var contimagensel = this.shadowRoot.getElementById('contimagensel');

	    contimagensel.className = '';
	    contimagensel.classList.add('Img', 'showimagen', sel);

	    this.shadowRoot.getElementById('abtnCerrarCuadro').click();
	}

	mostrarError(){
	    var contMesajeError = this.shadowRoot.getElementById('contMesajeError');

	    contMesajeError.classList.add('visible');
	    setTimeout(function(){
	        contMesajeError.classList.add('anim');
	    }, 50);
	}

	cerrarMensaje(){
	    var contMesajeError = this.shadowRoot.getElementById('contMesajeError');

	    contMesajeError.classList.remove('anim');
	    setTimeout(function(){
	        contMesajeError.classList.remove('visible');
	    }, 550);
	}
}

window.customElements.define("simulador-bancos-prod", simuladorBancosProd);