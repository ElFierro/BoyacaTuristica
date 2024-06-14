import pandas as pd
import matplotlib.pyplot as plt

# Cargar los datos desde el archivo Excel
df = pd.read_excel("data.xlsx")

# Mostrar las primeras filas del DataFrame
print(df.head())

# Describir el DataFrame
print(df.describe())

# Generar algunas visualizaciones
# Histograma de una columna específica (por ejemplo, 'Edad')
df['Edad'].hist()
plt.title('Distribución de la Edad')
plt.xlabel('Edad')
plt.ylabel('Frecuencia')
plt.savefig('histograma_edad.png')
plt.show()

# Gráfico de barras de otra columna (por ejemplo, 'Departamento')
df['Departamento'].value_counts().plot(kind='bar')
plt.title('Frecuencia por Departamento')
plt.xlabel('Departamento')
plt.ylabel('Frecuencia')
plt.savefig('frecuencia_departamento.png')
plt.show()
