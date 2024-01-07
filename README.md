- introduzione ad Angular
- capire con cosa lavoriamo
- componenti
- data binding ed eventi
- direttive (directive)
- pipe
- service
- routing
- observable
- form
- modulo http
- registrazione, login e logout

- extra:
  deploy online
  impostare un' app dashboard

Spiegazione:

Angular è un framework JavaScript che ci permette di creare single page application
Per generare un nuovo componente, sintassi da terminale --> ng g c nameComponent (angular generate component)
Per generare un nuovo componente in una cartella specifica, sintassi da terminale -->
ng g c nomeCartella/nomeComponent

<!--  -->

DATA BINDING:

- one-way(una direzione, dal componente grafico alla logica o al contrario):
  string interpolation(interpolazione delle stringhe {{}} ), property binding(proprietà degli elementi) [] = , event binding(eventi degli elementi)
- two-way(doppia direzione, dal componente grafico alla logica o al contrario in contemporanea)

<!--  -->

DIRECTIVES (direttive)
Sono clasi che aggiungono comportamenti agli elementi
Si dividono in 3 categorie:

- built-in (ngClass, ngStyle, ngModel) modificano comportamento
- attribute (personalizzate) modificano comportamento o apparenza di un elemento
- structural (*ngIf, *ngFor) cambiano il DOM aggiungendo o rimuovendo elementi

comando per generare una directive --> ng g d nameDirective

<!--  -->

PIPES
Sono delle funzioni che possiamo utilizzare all'interno delle espressioni stringa, di base con le string interpolation {{nome}}

- uppercase, lowercase
- datepipe
- decimalpipe, percentagepipe
- currencypipe

<!--  -->

Service
comando per generare un service --> ng g s nomeService

<!--  -->

Routing
Se vogliamo generare un file routing, nel caso non l'avessimo gia creato all'installazione di un nuovo progetto,
possiamo generarlo uno da terminale con questo codice:
ng g m app-routing --flat --module=app
ng generate module app-routing --flat(stiamo specificando che vogliamo solo il file, sennò ci crea anche la cartella routing) --module=app(stiamo specificandoche deve fare riferimento ad app.module.ts)

<!--  -->

Proteggere i rout

- creare auth(authorization) service --> possiamo crearlo da terminale con questo codice: ng g s nomeFile
- creare authguard --> possimao crearlo da terminale con questo codice: ng g guard auth/auth e poi scegliamo CanActivate

<!--  -->

Routing Module

ng g module nameModule --routing
