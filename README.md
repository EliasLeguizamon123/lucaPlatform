# LucaPlatform

### Plataforma para niños de entre 6 y 17 años de edad (Primaria y Secundaria)

## 1 - Comandos útiles para configurar este software en tu PC correctamente

```
 npm install express body-parser morgan pug 
 npm install mysqljs/mysql
```

** IMPORTANTE **

Al utilizar una BD creada con MySQL es importante tener preparados los datos para ingresar, recomiendo utilizar WAMP (para Windows) o configurar si prefiere manualmente los datos:

- Host: localhost
- User: root
- Password: ' '
- database: lucaPlatform
- port: 3306

Estos datos pueden ser intercambiados tanto dentro de la app como en WAMP o su servidor SQL de preferencia.

## 2 - Comandos para correr la app

Simplemente con el comando:

```
 npm run dev
```

Podrá correr la app desde VScode o la terminal que posea en su equipo.

## 3 - Screenshots

Imagenes ilustrativas sobre como debe verse el sitio

![home-image](https://github.com/EliasLeguizamon123/lucaPlatform/blob/main/platformAll.png)

Home actual de la web

![preguntas](https://github.com/EliasLeguizamon123/lucaPlatform/blob/main/platformQuestion.png)

## 4 - Lista pendiente para el futuro

- [ ] Cambiar MySQL por MongoDB o Firebase
- [ ] Cambiar las views de Pug por ReactJS
- [ ] Hacer el sitio mas ligero
- [ ] Agregar funcionalidades extra