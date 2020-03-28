# Hamagen

Indian Ministry of Health COVID-19 exposure prevention app.


## Hacking

You're awesome. See [CONTRIBUTING.md](CONTRIBUTING.md).

### Security Measures

Please review at:
https://medium.com/proferosec-osm/hamagen-application-fighiting-the-corona-virus-4ecf55eb4f7c

### Local Database Retrieval

Make sure your app is [`debuggable`](https://developer.android.com/guide/topics/manifest/application-element).

~~~
$ adb exec-out run-as com.ino.covid.dev cat databases/Reactoffline.db > app_db.sqlite
~~~

## Debug & Release

Please make sure that you've created a keystore.properties file in your project's root dir with following variables set:

## License

MIT
