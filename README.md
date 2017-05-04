# ae.server
A little demo showing how to setup After Effects as a server.

## Usage
Run `ae-server.jsx` in your After Effects application, "File>Scripts>Run Script File" or place it in the Startup scripts directory so each session is automatically a server session.

Once the script is up and running, any messages pushed to that port are **AUTOMATICALLY RAN** as extendscript snippets, similiar to Maya's commandPort functionality.

## Examples
Here is an example of communicating with After Effects through Python
```python
import socket 
s = socket.socket() 
s.connect(("localhost", 9000)) 
s.send("alert('I bet this can get annoying)") 
s.shutdown(2) 
s.close()
```

## Features
* **Non-Blocking**, prior to CC 2015, setting up AE as a server meant not being able to interact with AE while it was serving. app.setTimeout now allows us non-blocking pauses. The other option is to use node through the new CEF panels.

* **Auto Executing**, rather than parsing through details, we mimic maya's functionality of just pushing script data directly. This uses eval. You have been warned.
