---
title: Dependencias
module: Admin. de personal
screen: dependencias
version: 1.0
updated: 2026-09-21
---

# Dependencias

Esta pantalla permite consultar y administrar la **dependencia jerárquica y funcional** de las plazas de la empresa.

> **Nota**
>
> Cada plaza puede tener asignados dos tipos de jefe: un **jefe jerárquico** (línea de mando formal) y un **jefe funcional** (responsable operativo, cuando aplica). Ambos se administran de forma independiente.

## ¿Para qué sirve?

Sirve para definir y consultar a quién reporta cada plaza dentro de la estructura organizacional, tanto en su línea jerárquica como funcional.

Esta relación es utilizada por otros procesos de ORIANNA que dependen de la cadena de mando, como flujos de autorización y consultas basadas en jefe directo.

## ¿Cómo se utiliza?

La tabla muestra el listado de plazas agrupadas por jefe jerárquico, incluyendo razón social, puesto, empleado asignado (con fotografía y clave) y su jefe jerárquico correspondiente (también con fotografía y clave).

Puedes filtrar el listado por **Razón social**, **Departamento**, **Puesto** o **Empleado**.

Para modificar la dependencia de una plaza específica, selecciona el botón de edición sobre el renglón correspondiente; se abrirá una ventana donde se muestra la información del empleado, su jefe jerárquico y su jefe funcional actuales, y desde donde puedes actualizar ambos.

## Acciones disponibles

Desde esta pantalla puedes modificar la dependencia de una plaza de forma individual, realizar un cambio masivo de dependencia y exportar la información a **Excel**.

### Modificar dependencia individual

Permite actualizar el **Jefe jerárquico** y el **Jefe funcional** de una plaza específica, seleccionando la nueva plaza responsable en cada caso.

### Cambio masivo de dependencia

Permite reasignar, en una sola operación, todas las plazas que actualmente dependen de un **jefe actual** hacia un **nuevo jefe**. Se actualiza tanto la dependencia jerárquica como la funcional de todas las plazas afectadas.

## Consideraciones

Las acciones de modificación individual y masiva dependen de los permisos de modificación asignados al usuario sobre la opción de Dependencias; sin ese permiso, la pantalla se muestra únicamente en modo de consulta.

Un cambio masivo de dependencia afecta a todas las plazas relacionadas con el jefe actual seleccionado, por lo que es recomendable validar cuidadosamente el jefe origen y el jefe destino antes de aplicar el cambio.

El sistema registra en la bitácora los cambios de dependencia realizados, tanto individuales como masivos.

---

Versión 1.0 · Última actualización: septiembre 2026
