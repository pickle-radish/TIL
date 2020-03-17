### log spooping



id와 pw에  a입력하면 다음과 같은 결과가 나온다

ogin failed for username: a



id와 pw에 admin입력 결과는 마찬가지

ogin failed for username: admin



Smith%0d%0aLogin Succeeded for username:admin<script>alert('ok');</script>





#### asp 로그 분석

D:\LogFiles\W3SVC1965632154>logparser "select date,time,c-ip,cs-method,cs-uri-st
em,cs-uri-query,sc-status into log.csv from ex200316.log where sc-status=500" -i
:W3C -o:csv 



#### apache 로그 분석

D:\APM_Setup\Server\Apache\logs>logparser "select DateTime,RemoteHostName,Reques
t,StatusCode,BytesSent into log.csv from access.log where StatusCode >= 500" -i:
NCSA -o:csv