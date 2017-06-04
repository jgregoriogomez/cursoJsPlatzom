#Platzom

Platzom es un ejercicio sobre un idioma inventado para
el [Curso de Fundamentos de JavaScript](https://platzi.com/js) 
de [Platzi](http://platzi.com), un portal de educaciión online.

## Descripción de idioma

- Si la palabra termina en "ar" se le quitan esos caracteres
- Si la palabra inicia con z se le añade 'pe' al final 
- Si la palabra traducida tiene más de 9 letras, se debe partir en la mitad con un guion
- Si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra intercalando mayúsculas y minúsculas 

## Instalación

```
npm install cursojsplatzom
```

## Uso

```
import platzom from 'platzom'

platzom('programar') program
cplatzom('zarpar') zarp
platzom('zorro') zorrope
platzom('palindromoy')palin-dromoy
platzom('abecedario')abece-dario
platzom('arepera')ArEpErA
```

## Créditos

-[José Gregorio Gómez](https://twitter,com/@jgregoriogomez)

## Licencia
[MIT](https://opensource.org/licenses/MIT)