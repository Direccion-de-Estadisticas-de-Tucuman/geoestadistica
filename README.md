<img width="100%" src="assets/images/dep_logo.png" alt="Dirección de Estadística de la Provincia de Tucumán" />

---

Este es el **portal de geoestadística** de la [Dirección de Estadística de Tucumán](https://estadistica.tucuman.gob.ar/).

Esta basado en el framework [HUGO](https://gohugo.io/)

---

# Documentación

Por cosas específicas de como funciona HUGO consultar la [documentación oficial](https://gohugo.io/documentation/).

El **portal** esta seccionado en 4 páginas principales:

- Inicio definido en [/layouts/index.html](/layouts/index.html)
- Mapoteca definido en [/layouts/\_default/mapoteca.html](/layouts/_default/mapoteca.html)
- Geoservicios definido en [/layouts/\_default/geoservicios.html](/layouts/_default/geoservicios.html)
- Visor definido en [/layouts/\_default/visor.html](/layouts/_default/visor.html)

## Acerca del Visor

El layout que controla el visor esta ubicado en

```
/layouts/_default/visor.html
```

Ya está configurado para que tome los archivos desde /static/visor. Importante no poner el html del build en /static/visor, dejar que el layout lo controle.

El visor esta basado en un proyecto npm con openlayers, en la carpeta [/static/visor/](/static/visor/) se encuentra la build del proyecto del visor para que pueda ser levantado (renderizado) por hugo.
Entonces, para actualizar el visor se deben colocar en esta carpeta las nuevas (versiones) builds del visor.

## Acerca de la Mapoteca

La mapoteca esta construida con [secciones](/layouts/mapotecasecciones). Para construir una nueva sección se debe crear una nueva carpeta en content/mapoteca, por ejemplo:

```hugo
  hugo new content content/mapoteca/censo2030/_index.md
```

Donde adentro del \_index.md debe colocarse el type

```
...
title ='Censo 2030'
type ='mapotecasecciones'
```

### Nuevo mapa

Y así sucesivamente con las subcarpetas dentro de la sección. Una vez definido el útlimo nivel, debe crearse la carpeta que contendrá el mapa nuevo, por ejemplo:

```hugo
  hugo new content content/mapoteca/censo2030/departamento/hogares/nbi/nbi1.md
```

Dentro de este archivo md debe agregarse las tags, el type y el pdf correspondiente

```
...
title = 'NBI 1 Vivienda Incoveniente'
tags = ["nbi","censo2022"]
type = 'mapadescarga'
[[resources]]
    name = 'pdf'
    src = 'NBI1.pdf'
```

## Acerca de Geoservicios

Geoservicios esta controlado por /layouts/\_default/geoservicios.html

## Nueva página o sección o item en el menú

Si se desea crear otra página que corresponda al menú (que tenga el mismo nivel que mapoteca, visor y geoservicios), se debe:

1. Crear el nuevo layout para la página en /layouts/\_default/X.html
2. Agregar nuevo contenido para esa página

```
  hugo new content content/X/_index.md
```

3. Agregar el layout correspondiente a ese \_index.md

```
...
layout= "visor"
```

4. En hugo.toml agregar en `[menu]`

```toml
[menu]
...
  [[menu.main]]
    name = "x"
    pageref = "x/"
    weight=5
```
