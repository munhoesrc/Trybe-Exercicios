PI = 3.14  # PI é uma "constante" em nosso módulo


def square(side):
    """Calcula a área de um quadrado."""
    return side**2


def rectangle(length, width):
    """Calcula a área de um retângulo."""
    return length * width


def circle(radius):
    """Calcula a área de um círculo."""
    return PI * radius**2


print("Área do quadrado:", square(10))
print("Área do retângulo:", rectangle(2, 2))
print("Área do círculo:", circle(3))
