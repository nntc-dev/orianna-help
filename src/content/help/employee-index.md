---
title: Empleados
module: Admin. de personal
screen: empleados
version: 1.0
updated: 2026-09-22
---

# Empleados

Esta pantalla permite consultar y administrar el **expediente completo de cada empleado**: su estructura organizacional, historial de movimientos, datos personales, información extraordinaria y su configuración de Tiempo y Asistencia.

> **Nota**
>
> La información disponible en cada sección del expediente depende de los permisos asignados al usuario. Si no tienes permiso sobre una sección, esta simplemente no se muestra.

## ¿Para qué sirve?

Sirve como el expediente central del empleado dentro de ORIANNA: desde aquí puedes consultar en qué posición está, su jefe, su sueldo (si tienes permiso), su historial laboral, sus datos de contacto y domicilio, así como su configuración de horarios, turnos, biométricos y marcajes.

## ¿Cómo se utiliza?

Del lado izquierdo se muestra el listado de empleados en formato de tarjetas, con su fotografía, clave, nombre y puesto. Puedes buscar por clave o nombre, y filtrar por **estatus** (activos, inactivos o ambos), **departamento** y **ubicación**.

![Lista lateral de empleados](../../src/assets/employee/employee01.jpg)

> Si el usuario es supervisor, aparece además un filtro adicional para elegir entre empleados a su cargo de forma **directa** o **indirecta**.

Al seleccionar un empleado de la lista, se abre su expediente del lado derecho, organizado en dos grandes pestañas: **Perfil** y **Tiempo y Asistencia**.

![Expediente del empleado](../../src/assets/employee/employee02.jpg)

## Pestaña Tiempo y Asistencia

### Turnos

Muestra el calendario de horarios del empleado (mes actual, con navegación entre meses) y el horario anterior, actual y siguiente. También indica cuántos días de excepción de turno tiene capturados en el mes.

![Turnos](../../src/assets/employee/employee03.jpg)

Desde aquí puedes **agregar una excepción de turno** (asignar un horario distinto para un día específico) y **eliminar excepciones** ya capturadas.

![Excepciones de turnos](../../src/assets/employee/employee04.jpg)

![Ejemplo captura de excepción de turno](../../src/assets/employee/employee05.jpg)

### Marcajes

Muestra el historial de marcajes del empleado (entrada, salida a comida, regreso de comida y salida), con la fecha y hora real de cada uno.

![Ejemplo historial de marcajes](../../src/assets/employee/employee06.jpg)

### Rol de turnos

Muestra el historial de asignaciones de rol de turno del empleado. Desde aquí puedes **asignar un nuevo rol de turno** a partir de una fecha (con fecha de fin opcional, si el cambio es temporal) y **eliminar** una asignación del historial.

![Ejemplo vista rol de turnos](../../src/assets/employee/employee07.jpg)

![Ejemplo vista captura cambio rol de turnos](../../src/assets/employee/employee08.jpg)

### Biométricos

Muestra los dispositivos (biométricos, móvil o tableta) autorizados para que el empleado registre su asistencia. Puedes **configurar** los dispositivos permitidos, o marcar que el empleado puede marcar desde **cualquier dispositivo**, así como **eliminar** un dispositivo ya asignado.

![Ejemplo vista biométricos ](../../src/assets/employee/employee09.jpg)

![Ejemplo captura configuración biométricos ](../../src/assets/employee/employee10.jpg)

![Dispositivos capturados ](../../src/assets/employee/employee11.jpg)

### Configuración T&A

Permite definir los **días de descanso** fijos del empleado, seleccionando los días de la semana que le corresponden.

![Vista configuración T&A ](../../src/assets/employee/employee12.jpg)

### Kárdex anual

Muestra un calendario anual con la clasificación de cada día del empleado (asistencia, vacaciones, ausencia, incapacidad, permiso), junto con los totales y su distribución porcentual.

![Vista Kardex anual ](../../src/assets/employee/employee13.jpg)

## Pestaña Perfil

### Estructura

Muestra la información organizacional del empleado: razón social, ubicación, registro patronal, centro de costo, división, área, departamento, jefe (dependencia), periodo de pago, prestación, puesto y rol de turno, así como el sueldo diario (si el usuario tiene permiso para verlo).

También se muestran interruptores rápidos para activar o desactivar, de forma individual, si al empleado le **aplica tiempo extra**, **vacaciones**, **tiempo y asistencia**, **banco de horas**, **solicitud de rol de turno** y **solicitud de incidencias**.

### Historial de empleado

Muestra el historial de movimientos del empleado (altas, bajas, cambios de puesto, cambios de salario, etc.) en orden cronológico, indicando el puesto correspondiente a cada movimiento y, cuando aplica, el cambio de salario con su variación porcentual.

* El **alta más reciente** puede modificarse.
* El **último movimiento registrado** (distinto de un alta) puede eliminarse, siempre que se cuente con permiso.

### Datos personales

Muestra tres bloques de información editable de forma independiente:

* **Datos generales:** teléfono, celular, contacto y número de emergencia, tipo de sangre, fecha de nacimiento, género, correo y PIN.
* **Domicilio:** calle y número, colonia, código postal, ciudad y estado.
* **Datos laborales:** CURP, RFC, número de seguridad social, tipo de empleado y tipo de salario.

Cada bloque cuenta con su propio botón de edición; al activarlo, los campos se habilitan para modificarse y se muestran los botones de **guardar** y **cancelar**.

### Datos extraordinarios

Muestra campos adicionales configurables por la empresa (texto, numéricos, fecha, casillas de verificación, listas, etc.) para capturar información particular del empleado que no está contemplada en los datos estándar.
## Acciones disponibles

Desde esta pantalla puedes agregar un nuevo empleado, dar de baja a un empleado, modificar su historial (movimientos), editar su nombre, actualizar su fotografía de perfil y administrar dispositivos, excepciones de turno y roles de turno.

### Agregar empleado

Permite capturar un nuevo empleado asignándolo a una posición vacante disponible, junto con sus datos generales, de contrato y de salario.

### Baja

Permite dar de baja a un empleado activo, seleccionando el tipo de movimiento de baja y la fecha correspondiente.

### Modificar (movimiento)

Permite registrar un movimiento sobre el empleado (cambio de puesto, cambio de salario, etc.), pudiendo modificarse únicamente cuando se trata del movimiento más reciente de su historial.

### Editar nombre

Permite corregir el nombre, apellido paterno, apellido materno y fecha de ingreso del empleado.

### Fotografía de perfil

Permite subir o eliminar la fotografía del empleado, la cual se muestra en su expediente y en el listado de tarjetas.

---

Versión 1.0 · Última actualización: septiembre 2026