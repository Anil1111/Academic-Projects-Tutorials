# SSL Certificate

`Keytool` run from bin of JDK/JRE Path  or JAVA_HOME. Assuming keystore has been created and password is set. The default location of the keystore is the `C:\User\UserName\.keystore`.

## SSL Certificate Generation

### Checking Keystore

`keytool --list` to list all the keys stored in the keytool
`keytool --delete --alias <<aliadName>>`

### Command to convert jks format keystore to pkcs12

   **Format**: `keytool -importkeystore -srckeystore <<AbsolutePathToKeystore>> -destkeystore <<AbsolutePathToKeystore>> -deststoretype pkcs12`  
   **Command**: `keytool -importkeystore -srckeystore C:\Users\Username\.keystore -destkeystore C:\Users\Username\.keystore -deststoretype pkcs12`  

- Prompt for first and last name: `<<ProvdetheCNName>>`
- Prompt for Organziational Unit: `<<ProvdethUNITNName>>`
- Prompt for Organization name: `<<ProvdetheORGName>>`
- Prompt for city name: `<<ProvdetheCityName>>`
- Prompt for country name: `<<ProvdetheCountryName>>`
- Proompt for keystore password

### Command to set parameters for CSR

   **Format**: JAVA Home/`keytool -genkey -alias <<aliasName>> -keyalg RSA -keysize 2048 -validity <<ValidDays>>`  
   **Command**: `keytool -genkey -alias alias2020 -keyalg RSA -keysize 2048 -validity 720`  
   -- Prompt for keystore password

### Generate the CSR

   **Format**: JAVA Home/`keytool –certreq –keyalg RSA –alias <<aliasCreatedAbove>> –file <<AbsolutePathToOutputFile>> –keystore <<AbsolutePathToKeystore>> -ext SAN=dns:<<cn name>>`  
   **Command**: `keytool –certreq –keyalg RSA –alias app2020 –file C:/Users/Username/name.txt –keystore C:/Users/Username/.keystore –ext SAN=dns:mywebsiteName`  
  -- Proompt for keystore password

### Importing Chain of Certificates on the server

>**Prerequisite:** Must have a digital certificate issued by a certificate authority having .cer, .crt, .p7b extension.

1. Use `mmc.exe` on windows to open the Certificate Manager.
2. Convert the certificate into .p7b format
   - Rt. Click the certificate --> Click Open --> In the details tab --> Click copy to file.
   - Choose Export File Format: `Cryptographic Message Syntax Standard: PKCS #7 Certificate (.p7b)` and check `Include all certification in the certification path` option
3. Provide path to save the `.p7b` file
4. Import the certificate as a trusted root certificate
   - JAVA Home/`keytool -import -trustcerts -file <<pathTop7bCert>> -alias <<aliasName>>`
5. Enter `Yes` to install the certificate
6. Restart your Web server/App server hosting the application
7. Manual Method if the:
    - Start --> `certmgr.msc` --> Open trusted root certificate --> Import manually
