:local version 1; 
:log info "1";
:if ([/put [/file find name="update.txt"]]="") do={/file print file=update; :delay 5; /file set update.txt contents=1;};
:delay 5;
:log info [/file get [/file find name=update.txt] contents];
:delay 5;
:if ($version > [/file get [/file find name=update.txt] contents] ) do={
:delay 5;
#here_put_update_script
/ip hotspot profile set hsprof1 trial-uptime-limit=00:00:00 trial-uptime-reset=00:00:00 trial-user-profile=default
/ip hotspot profile set hsprof1 http-cookie-lifetime=00:00:00
/tool fetch url=ftp://188.166.243.96/files/E48D8CA0ED7B/hotspot/1.jpg src-path=1.jpg mode=ftp user=ftpuser password=changepassword dst-path=hotspot/1.jpg;
:delay 5;
/tool fetch url=ftp://188.166.243.96/files/E48D8CA0ED7B/hotspot/1h.jpg src-path=1h.jpg mode=ftp user=ftpuser password=changepassword dst-path=hotspot/1h.jpg;
:delay 5;
/tool fetch url=ftp://188.166.243.96/files/E48D8CA0ED7B/hotspot/2.jpg src-path=2.jpg mode=ftp user=ftpuser password=changepassword dst-path=hotspot/2.jpg;
:delay 5;
/tool fetch url=ftp://188.166.243.96/files/E48D8CA0ED7B/hotspot/2h.jpg src-path=2h.jpg mode=ftp user=ftpuser password=changepassword dst-path=hotspot/2h.jpg;
:delay 5;
/tool fetch url=ftp://188.166.243.96/files/E48D8CA0ED7B/hotspot/3.jpg src-path=3.jpg mode=ftp user=ftpuser password=changepassword dst-path=hotspot/3.jpg;
:delay 5;
/tool fetch url=ftp://188.166.243.96/files/E48D8CA0ED7B/hotspot/3h.jpg src-path=3h.jpg mode=ftp user=ftpuser password=changepassword dst-path=hotspot/3h.jpg;
:delay 5;
/tool fetch url=ftp://188.166.243.96/files/E48D8CA0ED7B/hotspot/a1.jpg src-path=a1.jpg mode=ftp user=ftpuser password=changepassword dst-path=hotspot/a1.jpg;
:delay 5;
/tool fetch url=ftp://188.166.243.96/files/E48D8CA0ED7B/hotspot/a1h.jpg src-path=a1h.jpg mode=ftp user=ftpuser password=changepassword dst-path=hotspot/a1h.jpg;
:delay 5;
/tool fetch url=ftp://188.166.243.96/files/E48D8CA0ED7B/hotspot/a2.jpg src-path=a2.jpg mode=ftp user=ftpuser password=changepassword dst-path=hotspot/a2.jpg;
:delay 5;
/tool fetch url=ftp://188.166.243.96/files/E48D8CA0ED7B/hotspot/a2h.jpg src-path=a2h.jpg mode=ftp user=ftpuser password=changepassword dst-path=hotspot/a2h.jpg;
:delay 5;
/tool fetch url=ftp://188.166.243.96/files/E48D8CA0ED7B/hotspot/a3.jpg src-path=a3.jpg mode=ftp user=ftpuser password=changepassword dst-path=hotspot/a3.jpg;
:delay 5;
/tool fetch url=ftp://188.166.243.96/files/E48D8CA0ED7B/hotspot/a3h.jpg src-path=a3h.jpg mode=ftp user=ftpuser password=changepassword dst-path=hotspot/a3h.jpg;
:delay 5;
/tool fetch url=ftp://188.166.243.96/files/E48D8CA0ED7B/hotspot/111.html src-path=111.html mode=ftp user=ftpuser password=changepassword dst-path=hotspot/111.html;
:delay 5;
/tool fetch url=ftp://188.166.243.96/files/E48D8CA0ED7B/hotspot/112.html src-path=112.html mode=ftp user=ftpuser password=changepassword dst-path=hotspot/112.html;
:delay 5;
/tool fetch url=ftp://188.166.243.96/files/E48D8CA0ED7B/hotspot/113.html src-path=113.html mode=ftp user=ftpuser password=changepassword dst-path=hotspot/113.html;
:delay 5;
/tool fetch url=ftp://188.166.243.96/files/E48D8CA0ED7B/hotspot/221.html src-path=221.html mode=ftp user=ftpuser password=changepassword dst-path=hotspot/221.html;
:delay 5;
/tool fetch url=ftp://188.166.243.96/files/E48D8CA0ED7B/hotspot/222.html src-path=222.html mode=ftp user=ftpuser password=changepassword dst-path=hotspot/222.html;
:delay 5;
/tool fetch url=ftp://188.166.243.96/files/E48D8CA0ED7B/hotspot/223.html src-path=223.html mode=ftp user=ftpuser password=changepassword dst-path=hotspot/223.html;
:delay 5;
/tool fetch url=ftp://188.166.243.96/files/E48D8CA0ED7B/hotspot/html2.html src-path=html2.html mode=ftp user=ftpuser password=changepassword dst-path=hotspot/html2.html;
:delay 5;
/tool fetch url=ftp://188.166.243.96/files/E48D8CA0ED7B/hotspot/login.html src-path=login.html mode=ftp user=ftpuser password=changepassword dst-path=hotspot/login.html;
:delay 5;
/tool fetch url=ftp://188.166.243.96/files/E48D8CA0ED7B/hotspot/md5.js src-path=md5.js mode=ftp user=ftpuser password=changepassword dst-path=hotspot/md5.js;
:delay 5;
/tool fetch url=ftp://188.166.243.96/files/E48D8CA0ED7B/hotspot/img/jquery.min.js src-path=jquery.min.js mode=ftp user=ftpuser password=changepassword dst-path=hotspot/img/jquery.min.js;
:delay 5;
/tool fetch url=ftp://188.166.243.96/files/E48D8CA0ED7B/hotspot/img/jquery.tools.min.js src-path=jquery.tools.min.js mode=ftp user=ftpuser password=changepassword dst-path=hotspot/img/jquery.tools.min.js;
:delay 5;
/tool fetch url=ftp://188.166.243.96/files/E48D8CA0ED7B/hotspot/img/jquery-ui.min.js src-path=jquery-ui.min.js mode=ftp user=ftpuser password=changepassword dst-path=hotspot/img/jquery-ui.min.js;
:delay 5;
/tool fetch url=ftp://188.166.243.96/files/E48D8CA0ED7B/hotspot/img/slide-2-icon.png src-path=slide-2-icon.png mode=ftp user=ftpuser password=changepassword dst-path=hotspot/img/slide-2-icon.png;
:delay 5;
/tool fetch url=ftp://188.166.243.96/files/E48D8CA0ED7B/hotspot/img/slide-icon.png src-path=slide-icon.png mode=ftp user=ftpuser password=changepassword dst-path=hotspot/img/slide-icon.png;
:delay 5;
/tool fetch url=ftp://188.166.243.96/files/E48D8CA0ED7B/hotspot/img/leftarrow.png src-path=slide-leftarrow.png mode=ftp user=ftpuser password=changepassword dst-path=hotspot/img/leftarrow.png;
:delay 5;
/tool fetch url=ftp://188.166.243.96/files/E48D8CA0ED7B/hotspot/img/rightarrow.png src-path=rightarrow.png mode=ftp user=ftpuser password=changepassword dst-path=hotspot/img/rightarrow.png;
:delay 5;
/tool fetch url=ftp://188.166.243.96/files/E48D8CA0ED7B/hotspot/img/slider.css src-path=slider.css mode=ftp user=ftpuser password=changepassword dst-path=hotspot/img/slider.css;
:delay 5;
/tool fetch url=ftp://188.166.243.96/files/E48D8CA0ED7B/hotspot/favicon.ico src-path=favicon.ico mode=ftp user=ftpuser password=changepassword dst-path=hotspot/favicon.ico;
#here_put_update_script
:delay 5; 
/file set update.txt contents=$version;
:log info "Updated to $version";
} else={
:log info "update no need";}