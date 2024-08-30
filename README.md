# Cypress_first_lab

Pruebas automatizadas para validar la pagina ZERO BANK

## Descripción

En esta pruebas verificamos que la pagina zero banck cumpliera con los requisitos del cliente como por ejemplo que los usuarios pudieran registrase, que las imagenes se mostraran como se debian y que los usuarios no tuvieran problema al transferir sus dineros a otra cuenta.

### Pre-requisitos 📋

Que vamos a necesitar para empezar ?

- Instalar el editor visual studio code
- Instalar Node.Js
- Luego instalamos el manejador de paquetes NPM
- Por ultimo instalamos cypress como dependencia en el proyecto a probar 

### Instalación 🔧

1. Instalamos el editor visual studio code. https://code.visualstudio.com/
     - Damos clic en Download
     - Elegimos el sistema operativo de la computadora. En este caso fue Windows 11 x64
     - Una vez descargado el archivo en tu computadora le damos clic a ejecutar, aceptamos los acuerdos, le damos siguiente
     - Por ultimo le damos instalar

2. Instalar Node.js. https://nodejs.org/en
    - Vamos a la pestaña "prebuilt installer"
    - Seleccionamos la version mas actual y seleccionamos el SO de nuestra computadora
    - Damos clic en descargar
    - Una ves descargado el archivo damos clic en ejecutar
    - Aceptamos terminos y le damos siguiente
    - Por ultimo le damos a instalar
   

## Ejecutando las Pruebas ⚙️
Para realizar estas pruebas debemos:
1. Creamos una carpeta en nuestra computadora donde vamos almacenar el test de cypress
2. Luego debemos navegar en la carpeta que acabamos de crear. Esto como lo hacemos ? Sencillo...
3. Damos clic en la terminal de nuestro computador buscamos la carpeta que acabamos de crar
4. Luego el paso anterior debemos hacerlo pero visual studio code, aqui le damos clic en la parte superior izquierda donde dice  abrir archivo y buscamos la carpeta.
5. MUY IMPORTANTE debemos estar ubicados tanto en la terminal como en visual studio en la carpeta que acabamos de crear.
6. Iniciamos nuestro proyecto tipo node.js
7. Utilizamos el comando "NPM INIT" (Es un pequeño programa que nos ayuda en la creación de un archivo llamado el package.json , ese archivo nos define la estructura del archivo del proyecto que vamos a crear)
8. Luego de escribir el comando damos enter y colocamos una breve descripción(OPCIONAL)
9. Volvemos a dar Enter hasta que nos salga la seccion de autor
10. Aqui en autor colocamos nuestro nombre y volvemos a dar enter.

Luego de realizar estos pasos debemos abrir la dependcia de cypress
1.Ejecutamos el comando npm install cypress – sabe-dev y le damos enter (Este comando descarga toda las librerías de cypress y las intala en la carpeta que creamos) 
2.Abrimos cypress desde la terminal utilizando el comando "Npx  cypress open" 

Una vez realizados estos pasos ya estamos listos para crear las pruebas para la pagina ZERO BANK

Prueba en cypress- ZERO BANK : http://zero.webappsecurity.com/index.html

1.	Vamos al visual studio code
2.	Creamos un archivo en la carpeta e2e y colocamos un nombre, este caso lo llame smoketestbanco.cy.js
3.	Cy.js es la extensión de cypress y javascript
4.	Definimos nuestro conjunto de pruebas 

Abrimos el cypress runer para mirar que cada cambio que guardemos se vaya ejecutando en la pagina que estamos haciéndole las pruebas 

En el visual Studio colocamos 

```bash
# describe("Test suite - conjunto de pruebas", () => {
    
    beforeEach(() => {
        // runs before each test in the block
        cy.visit("http://zero.webappsecurity.com")

-- Este primer segmento nos permite direccionarnos desde cypress hacia la pagina que queremos hacerle pruebas
    
    })
    // pagina de inicio
    it("Validar pagina de inicio",() => {

        cy.get(".active > img").should("be.visible")
        cy.get(".active > .custom > h4").contains("Online Banking")

-- Con estos comando verificamos que la imagen principal de la pagina este ubicada donde debe.
    
    })

    it("Prueba E2E - transferencia de fondos", () => {
       
        cy.get("#signin_button").click()
        cy.get("#user_login").type("username")
        cy.get("#user_password").type("password")
        cy.get(".btn").click()
        cy.get('#transfer_funds_tab > a').click() 
        cy.get('#tf_fromAccountId').select(1)
        cy.get('#tf_toAccountId').select(5)
        cy.get('#tf_amount').type("300")
        cy.get('#tf_description').type("Transferencia de prueba")
        cy.get('#btn_submit').click()
        cy.get('#btn_submit').click()
        cy.get('.alert').contains("You successfully submitted your transaction")

-- Con esta seccion de pruebas comprobamos que los usuarios pueda realizar transferencias sin ningu problema.
    })

    it("Prueba de validacion del grafico", () => {
      
        cy.get("#signin_button").click()
        cy.get("#user_login").type("username")
        cy.get("#user_password").type("password")
        cy.get(".btn").click()
        cy.get('#money_map_tab > a').click()
        cy.get('#ext-sprite-1259').should("be.visible")
        cy.get('#ext-sprite-1167 > tspan').click()
        cy.get('#ext-sprite-1259').should("not.be.visible")

    })

Y por ultimo con esta ultima parte podemos verificar que ningun usuario tenga problemas con el inicio de sesion en la pagina.






