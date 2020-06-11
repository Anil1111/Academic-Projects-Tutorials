# Intellicode Issue

## [Intellicode is unable to download its model behind proxy](https://github.com/MicrosoftDocs/intellicode/issues/4)

1. For each language you want to have an IntelliCode model for, click one of the below links and download the blob file located at the URL in the readSasToken key.
    - [JavaScript or TypeScript](https://prod.intellicode.vsengsaas.visualstudio.com/api/v1/model/common/javascript/intellisense-members/output/latest)
    - [Java](https://prod.intellicode.vsengsaas.visualstudio.com/api/v1/model/common/java/intellisense-members/output/latest)
    - [Python](https://prod.intellicode.vsengsaas.visualstudio.com/api/v1/model/common/python/intellisense-members/output/latest)

2. Create a folder called IntellicodeModels in `C:\Users\<username>\.vscode\extensions\visualstudioexptteam.vscodeintellicode-<extension-version>`
3. Replace `<username>` with your username, and `<extension-version>` with the installed IntelliCode extension version.
4. Move all of the blob files you downloaded to the newly created folder.
5. In that newly created folder, create a `IntelliCodeModels-v2.json` file and give it the following contents, removing any language you didn't save the blob for.

    ```json
    [{
        "analyzerName": "intellisense-members",
        "languageName": "javascript",
        "identity": {
            "modelId": "1A3F919CD5B7725108B03C349630A1C82B03",
            "outputId": "manually-downloaded",
            "modifiedTimeUtc": "2018-12-11T20:41:34.686Z"
        },
        "filePath": "c:\\Users\\<username>\\.vscode\\extensions\\visualstudioexptteam.vscodeintellicode-<extension-version>\\IntellicodeModels\\<blob-filename>",
        "lastAccessTimeUtc": "2019-01-02T17:08:30.930Z"
    }, {
        "analyzerName": "intellisense-members",
        "languageName": "java",
        "identity": {
            "modelId": "45788CA1782FEF17F07049DB4764F5647A62",
            "outputId": "manually-downloaded",
            "modifiedTimeUtc": "2018-12-11T20:43:15.144Z"
        },
        "filePath": "c:\\Users\\<username>\\.vscode\\extensions\\visualstudioexptteam.vscodeintellicode-<extension-version>\\IntellicodeModels\\<blob-filename>",
        "lastAccessTimeUtc": "2018-12-14T18:13:56.047Z"
    }, {
        "analyzerName": "intellisense-members",
        "languageName": "python",
        "identity": {
            "modelId": "88630A1B4C077752096ECAA576B92C7D3FA1",
            "outputId": "manually-downloaded",
            "modifiedTimeUtc": "2018-12-11T20:45:03.430Z"
        },
        "filePath": "c:\\Users\\<username>\\.vscode\\extensions\\visualstudioexptteam.vscodeintellicode-<extension-version>\\IntellicodeModels\\<blob-filename>",
        "lastAccessTimeUtc": "2019-01-02T17:09:02.863Z"
    }]
    ```

6. Replace `<username>` with your username, `<extension-version>` with the IntelliCode extension version, and `<blob-filename>` with the name of the downloaded blob.

7. Start VSCode, open a source code file in a language you downloaded the blob for, and inspect the VS IntelliCode output window. It should look similar to the below:

    ```output
    Acquiring model 'intellisense-members' for python
    Querying IntelliCode service for available models.
    Couldn't reach service Error Message: getaddrinfo ENOTFOUND prod.intellicode.vsengsaas.visualstudio.com prod.intellicode.vsengsaas.visualstudio.com:443, (Error)
    Could not reach the IntelliCode service. Checking the local model cache.
    Recent model was found in cache.
    ```

If you don't see the message "Recent model was found in cache", double check that the json is valid and the blob file exists at the path specified in filePath, then respond with the contents of your VS IntelliCode output window.
