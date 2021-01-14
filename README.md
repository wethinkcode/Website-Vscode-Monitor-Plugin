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
or Download it from relases

## Extension Settings
This extension contributes the following settings:
 
```
 "WebsiteStatusUpdater.WebsitesToUse": [
        {
            "url": "https://google.com",
            "redirect_url": "https://google.com",
            "name": "Google Oogle"
        }
    ]
```
## Known Issues

 - Not offcially relesed
 - Tree doesnt update proprely. (new additions)

## Release Notes

### 0.0.1

- We have a TreeView of the services
- Update button to update services

### 0.0.4

- Interval Working again
- Images include now thanks to Github action


### 0.0.5

 - Now updates list when changes made to setting

 ### 0.0.6

 - Can open links by clicking on the service
 - Unreachable services error out with a -1 for now
 

 ### 0.0.7

 - Rework entire system

-----------------------------------------------------------------------------------------------------------