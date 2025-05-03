# **WeatherApp - Documentación**  

## **📌 Descripción**  
Aplicación móvil de clima que muestra el pronóstico actual, por horas y próximos días, consumiendo una API de clima. Desarrollada con **React Native (Expo)** y diseñada específicamente para dispositivos Android.  

---

## **🚀 Características**  
✅ **Búsqueda por ciudad**  
✅ **Pronóstico actual** (temperatura, condiciones, humedad, lluvia)  
✅ **Pronóstico por horas** (cada 3 horas)  
✅ **Pronóstico para 5 días**   
✅ **Manejo de errores** y estados de carga  

---

## **🛠️ Tecnologías**  
- **React Native** (Expo)  
- **API de Clima**: [weatherapi-main-gvtxrs.laravel.cloud](https://weatherapi-main-gvtxrs.laravel.cloud/api/weather/)  
- **Navegación**: `@react-navigation/native`  
- **Iconos**: `@expo/vector-icons`  

---

## **⚙️ Configuración Inicial**  

### **1. Clonar el repositorio**  
```bash
git clone [URL_DEL_REPOSITORIO]
cd WeatherApp
```

### **2. Instalar dependencias**  
```bash
npm install
# ó
yarn install
```


## **🔧 Ejecución**  

### **En Android (Moto G9 Play)**  
1. Conecta tu dispositivo vía USB con **depuración USB activada**.  
2. Ejecuta:  
```bash
npx expo start --android
```
3. Selecciona tu dispositivo en el menú de Expo.  

### **En emulador Android**  
```bash
npx expo start
# Luego presiona "a" para abrir en Android Emulator
```

---

## **📂 Estructura del Proyecto**  
```
WeatherApp/
├── app/
│   ├── components/       # Componentes reutilizables
│   │   ├── CurrentWeather.js
│   │   ├── DailyForecast.js
│   │   ├── HourlyForecast.js
│   │   ├── SearchBar.js
│   │   └── WeatherIcon.js
│   ├── constants/        # Configuraciones
│   │   └── config.js
│   ├── services/         # Lógica de API
│   │   └── weatherService.js
│   └── (tabs)/           # Pantallas
│       └── index.js
├── assets/               # Imágenes/iconos
├── App.js                # Punto de entrada
└── app.json              # Config de Expo
```

---

## **🔍 Solución de Problemas**  

### **⚠️ Error: "VirtualizedLists should never be nested inside plain ScrollViews"**  
**Solución**:  
- Asegúrate de no anidar `FlatList` dentro de `ScrollView`. Usa `scrollEnabled={false}` en listas verticales.  

### **📱 Problemas de diseño en Moto G9 Play**  
**Solución**:  
- Ajusta los valores en `Dimensions.get('window')` si los elementos no se ven bien.  

### **🔌 API no responde**  
**Solución**:  
- Verifica la conexión a internet.  
- Revisa la URL en `weatherService.js`.  


## **💡 Créditos**  
- **Desarrollador**: Fernando  

--- 

### **¿Listo para probar?** 🚀  
```bash
npx expo start
```  

--- 