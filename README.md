
# ![system7.css!](https://github.com/opencoca/system7.css/assets/26581192/a1f9ccba-9049-43e7-9c73-a75f4bc30833)


[Documentation](https://opencoca.github.io/system7.css/)

System7.css is a CSS library for building interfaces that resemble Apple's System OS which ran from 1984-1991. Design-wise, not much really changed from System 1 to System 6; however, this library is based on System 6 as it was the final monochrome version of macOS.

Fortunately, this library does not use any JavaScript and is compatible with any front-end framework of your choice. Most styles can also be overwritten to allow for deeper customization.

## Getting Started
There are a couple of ways you can get started with System7.css!

**Import from CDN (easiest)**

Add the following to your head tag:

```html
<link rel="stylesheet" href="https://unpkg.com/system7/style.css" />
```

Here's some starter code to help you get started:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>System7.css Starter</title>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="https://unpkg.com/system7/style.css" />
</head>
<body>
    <div class="window" style="width:30rem;">
        <div class="title-bar"> 
            <button aria-label="Close" class="close"></button>
            <h1 class="title">System7.css</h1>
            <button aria-label="Resize" class="resize"></button>
        </div>
        <div class="separator"></div>
        
        <div class="window-pane">
            Hello world!
        </div>
    </div>

    <div class="window" style="width:30rem;">
        <div class="title-bar"> 
            <button aria-label="Close" class="close"></button>
            <h1 class="title">Search</h1>
            <button aria-label="Resize" disabled class="hidden"></button>
        </div>
        <div class="separator"></div>
        
        <div class="modeless-dialog">
            <section class="field-row" style="justify-content: flex-start">
                <label for="text_find" class="modeless-text">Find:</label>
                <input id="text_find" type="text" style="width:100%;" placeholder="">
            </section>
            <section class="field-row" style="justify-content: flex-end">
                <button class="btn">Cancel</button>
                <button class="btn" style="width:95px;">Find</button>
            </section>
        </div>
        </div>
</body>
</html>
```

**Import from [npmjs](https://unpkg.com/system7)**

    npm i system7

## Developing

1. Clone the repository and run ```npm install```
2. Run ```npm start``` to start the development environment.

Everything you'll need can be found in [style.css](https://github.com/opencoca/system7.css/blob/main/style.css).


## Contributing, Credits, etc.

Thanks for checking this project out! This library was made in good fun and was directly inspired by [ystem.css](https://github.com/sakofchit/system.css) and [98.css](https://github.com/jdan/98.css). The Chicago 12pt and Geneva 9pt fonts are recreations by [@blogmywiki](https://twitter.com/blogmywiki)

System7.css is still in beta! I recreated components based on Apple's Human Interface Guidelines. However, there's still a pretty good chance that I might've missed/overlooked something essential. I've also had to recreate most of the assets, which can also be found [here](https://github.com/opencoca/system7.css/tree/main/icon).

If you find a bug, consider opening an issue. If there's something that you'd like to add, please feel free to create a PR!

If you'd like to see what else I'm up to, consider following me on [Twitter](https://twitter.com/opencoca) or checking out my [personal site](https://startr_.co) :)

## Sponsors

### If you would like to sponsor System7 css please reach out at info@openco.ca
