---
title: Headcount
module: Admin. de personal
screen: headcount
version: 1.0
updated: 2026-09-21
---

# Headcount

Esta pantalla permite consultar y administrar el **límite de posiciones (headcount)** configurado para las distintas combinaciones de referencias de la estructura organizacional.

> **Nota**
>
> El headcount se agrupa según las referencias configuradas para la empresa (Razón Social, Centro de Costo, Departamento, Puesto y/o Ubicación). Solo las referencias marcadas como activas en la configuración se utilizan para agrupar y filtrar la información.

## ¿Para qué sirve?

Sirve para dar seguimiento al número de posiciones ocupadas contra el límite autorizado para cada combinación de referencias, y para actualizar dicho límite de forma individual o masiva.

Esta información es utilizada por el módulo de **Movimientos de empleados**: cuando se captura un movimiento para una posición de nueva creación, el sistema valida el límite de headcount configurado y, si se supera, marca el movimiento con un aviso y notifica por correo al responsable configurado.

## ¿Cómo se utiliza?

La tabla muestra el listado de combinaciones de referencias (según las referencias activas configuradas), junto con el **Total** de posiciones ocupadas, el **Límite** autorizado y una barra de **Progreso** que indica visualmente qué tan cerca está el grupo de alcanzar su límite.

Puedes filtrar el listado por las referencias activas: Razón Social, Centro de Costo, Departamento, Puesto y Ubicación. Los filtros disponibles dependen de las referencias configuradas para la empresa.

Para modificar el límite de un grupo, selecciona el botón de edición sobre el renglón correspondiente y actualiza el campo **Límite**; el resto de las columnas no son editables desde la tabla.

## Acciones disponibles

Desde esta pantalla puedes editar el límite de un grupo de forma individual, importar límites de forma masiva mediante layout, descargar la plantilla de importación, configurar las referencias utilizadas para el cálculo del headcount y exportar la información a **Excel**.

### Editar límite

Permite modificar el **Límite** de un grupo específico de forma individual, directamente desde la tabla.

### Importar layout

Permite actualizar los límites de forma masiva mediante la carga de un archivo **xlsx**. El layout debe contener una columna por cada referencia activa (con su clave numérica válida según el catálogo correspondiente), además de las columnas **Cantidad** y **Límite**.

El sistema valida que el número de columnas corresponda a las referencias configuradas y que cada clave exista en su catálogo. Si se encuentran errores, se indica el renglón y la columna donde ocurrieron, y la importación no se aplica hasta que la información sea corregida.

### Descargar plantilla

Genera y descarga un archivo **Excel** con el formato requerido para la importación, incluyendo una columna por cada referencia activa, así como el **Total** y **Límite** actuales de cada grupo existente.

### Configuración

Permite definir qué referencias (Razón Social, Centro de Costo, Departamento, Puesto, Ubicación) se utilizan para agrupar y calcular el headcount, activando o desactivando cada una. Debe seleccionarse al menos una referencia activa.

Al guardar la configuración, el sistema recalcula el headcount con base en las referencias seleccionadas.

## Consideraciones

Cambiar la configuración de referencias **restablece los límites existentes a 0**, por lo que deben capturarse nuevamente después de aplicar el cambio.

Las acciones de edición, importación y configuración dependen de los permisos de modificación asignados al usuario sobre la opción de Headcount; sin ese permiso, la pantalla se muestra únicamente en modo de consulta.

El límite configurado en esta pantalla impacta directamente la validación de headcount que se realiza al capturar movimientos de empleado para posiciones de nueva creación.

---
Versión 1.0 · Última actualización: septiembre 2026
