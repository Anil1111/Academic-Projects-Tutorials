# Remote Server
`Secure Shell` (SSH) for Linux-based machines   
`Remote Desktop Protocol`(RDP) for Windows-based machines

## SSH Vs RDP
Read more from [here](https://phoenixnap.com/kb/ssh-to-connect-to-remote-server-linux-or-windows)

### SSH
Secure Shell, sometimes referred to as Secure Socket Shell, is a protocol which allows you to connect securely to a remote computer or a server by using a text-based interface.


### RDP
Remote Desktop Protocol (RDP) is a protocol developed by Microsoft. It is used to control and manage machines with a Windows operating system remotely.Unlike Secure Shell, connections established using an RDP client provide a user with a graphical interface through which they can gain access to a remote computer and control it in the same manner as their local computer.



### Connecting to Remote machine from Client

#### Command to open RDP from cmd
`msctsc /v:<<IPAddressOfRemote>>` from cmd will open up a Remote desktop connection