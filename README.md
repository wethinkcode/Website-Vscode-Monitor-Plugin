# Website-Vscode-Monitor README
## Features

- Gives you the ability to keep an eye on a website/service to see if it is down.

## Requirements

- Nodejs v15 above

## Run Dev Testing

- Start with `npm -i`
- To test it in a Exenstion developer window just press `F5`

## Build

```
$ npm i -g vsce
$ vcse package
```

Once this is done, install it manually through VSCODE

## Extension Settings
This extension contributes the following settings:
 
```
 "WebsiteStatusUpdater.WebsitesToUse": [
        {
            "website": "https://google.com",
            "name": "Google Oogle"
        }
    ]
```
## Known Issues

 - Not offcially relesed
 - Github Action doesnt include the svgs to display status color
 - Tree doesnt update proprely.

## Release Notes

### 0.0.1

- We have a TreeView of the services
- Update button to update services

### 0.0.4

- Interval Working again

-----------------------------------------------------------------------------------------------------------