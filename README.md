# Cypress_first_lab

Pruebas automatizadas para validar la pagina ZERO BANK

## Descripción

En esta pruebas verificamos que la pagina zero banck cumpliera con los requisitos del cliente como por ejemplo que los usuarios pudieran registrase, que las imagenes se mostraran como se debian y que los usuarios no tuvieran problema al transferir sus dineros a otra cuenta.

## Visuales

Capturas de pantalla, videos o GIFs que demuestran lo que hace el proyecto y cómo usarlo.

### Pre-requisitos 📋

Que vamos a necesitar para empezar ?

- Instalar el editor visual studio code
- Instalar Node.Js
- Luego instalamos el manejador de paquetes NPM
- Por ultimo instalamos cypress como dependencia en el proyecto a probar 

### Instalación 🔧

Una guía paso a paso sobre cómo configurar el entorno de desarrollo e instalar todas las dependencias.

## Ejecutando las Pruebas ⚙️

```bash
# describe("Test suite - conjunto de pruebas", () => {
    
    beforeEach(() => {
        // runs before each test in the block
        cy.visit("http://zero.webappsecurity.com")
    
    })
    // pagina de inicio
    it("Validar pagina de inicio",() => {


        cy.get(".active > img").should("be.visible")
        cy.get(".active > .custom > h4").contains("Online Banking")
    
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
```

### Pruebas de Principio a Fin 🔩

Explica qué cubren estas pruebas, por qué son importantes y cómo interpretar sus resultados.


## Despliegue 📦

Instrucciones sobre cómo desplegar esto en un sistema en vivo o ambiente de producción.






