## SSL Certificate Generation

Keytool run from bin of JDK/JRE Path  
Assuming keystore has been created and password is set

### Command to convert jks format keystore to pkcs12  
   **Format**: `keytool -importkeystore -srckeystore <<AbsolutePathToKeystore>> -destkeystore <<AbsolutePathToKeystore>> -deststoretype pkcs12`  
   **Command**: `keytool -importkeystore -srckeystore C:\Users\Username\.keystore -destkeystore C:\Users\Username\.keystore -deststoretype pkcs12`  

- Prompt for first and last name: <<ProvdetheCNName>>
- Prompt for Organziational Unit: <<ProvdethUNITNName>>
- Prompt for Organization name: <<ProvdetheORGName>>
- Prompt for city name: <<ProvdetheCityName>>
- Prompt for country name: <<ProvdetheCountryName>>
- Proompt for keystore password

2. Command to set parameters for CSR:
   Format: keytool -genkey -alias <<aliasName>> -keyalg RSA -keysize 2048 -validity <<ValidDays>>
   Command: keytool -genkey -alias app2020 -keyalg RSA -keysize 2048 -validity 720
   -- Prompt for keystore password

3. Generate the CSR"
   Format: JAVA Home/keytool –certreq –keyalg RSA –alias <<aliasCreatedAbove>> –file <<AbsolutePathToOutputFile>> –keystore <<AbsolutePathToKeystore>> -ext SAN=dns:<<cn name>>
   Command: keytool –certreq –keyalg RSA –alias app2020 –file C:/Users/Username/intvmaip02.txt –keystore C:/Users/Username/.keystore –ext SAN=dns:mywebsiteName
  _Proompt for keystore password_