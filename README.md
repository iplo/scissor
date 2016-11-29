# scissor

### Please use specific version of scissor not the ```master```  branch as it is experimental.

## How to install Scissor
Download the ```.zip``` or ```.tar.gz``` file (tar.gz for _**Linux**_ systems). Next ```Unzip``` the downloaded file and
rename to your name of choice / project name,
Move the files in thr ```resources``` folder.
Now delete the ```resources``` folder.

In all html file make sure you have in the head section: ```<script src="scissor.js"></script>```

## How to install hosted libary
for this example we are going to be using ```https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js```.

Edit ```scissor.json``` and go into the ```libs``` section, now enter ```"(NAME)": "(LINK)"```.<br />
Replace ```(NAME)``` and ```(LINK)``` with your actual name and link,<br />
for me: ```"jquery": "https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"```

Edit ```scissor.js``` and search for ```// libs```,<br />
On a new line, type ```addlib("jquery");``` change ```jquery``` to the name you put in the ```scissor.json``` file.

## How to install preinstalled package
for this example we are going to be using ```jquery/3.1.1/jquery.js```.

Edit ```scissor.json``` and go into the ```pkgs``` section, now enter ```"(NAME)": "(DIR)"```.<br />
Replace ```(NAME)``` and ```(DIR)``` with your actual name and directory,<br />
for me: ```"jquery": "jquery/3.1.1/jquery.min.js"```

Edit ```scissor.js``` and search for ```// pkgs```,<br />
On a new line, type ```addpkg("jquery");``` change ```jquery``` to the name you put in the ```scissor.json``` file.
