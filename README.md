# Patrones de Diseño: Decorator y Proxy

## Principales diferencias

| Aspecto | Patrón Decorator | Patrón Proxy |
|---------|------------------|--------------|
| **Propósito** | Añadir responsabilidades o comportamientos adicionales a un objeto dinámicamente | Controlar el acceso a un objeto proporcionando un sustituto o marcador de posición |
| **Intención** | Extender funcionalidad sin modificar el código original | Representar a otro objeto y controlar su acceso |
| **Estructura** | Envuelve el objeto original con capas de funcionalidad | Actúa como intermediario entre el cliente y el objeto real |
| **Composición** | Permite apilar múltiples decoradores | Generalmente es una capa única entre el cliente y el objetivo |

## Escenarios de uso

### Patrón Decorator

- Cuando se requiere añadir funcionalidades a objetos individuales sin afectar a otros objetos de la misma clase
- Permite añadir responsabilidades a objetos de forma dinámica y transparente
- Cuando la extensión mediante herencia no es práctica o posible
- Dentro de sistemas que requieren combinar comportamientos de una forma flexible

### Patrón Proxy

- Para implementar control de acceso 
- Cuando se necesita retrasar la creación de objetos costosos hasta que sean realmente necesarios 
- Para implementar caché 
- Para proporcionar acceso remoto a objetos 
- Para registrar llamadas a métodos 

## Conclusión

Aunque ambos patrones utilizan composición y siguen el principio de sustitución, el **Decorator** se centra en añadir comportamiento mientras que el **Proxy** se enfoca en controlar el acceso. Elegir entre uno u otro depende principalmente de si se requiere extender funcionalidad (Decorator) o gestionar el acceso a un objeto (Proxy).
