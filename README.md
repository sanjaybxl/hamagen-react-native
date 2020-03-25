# Hamagen

Indian Ministry of Health COVID-19 exposure prevention app.


## Hacking

You're awesome. See [CONTRIBUTING.md](CONTRIBUTING.md).

### Local Database Retrieval

Make sure your app is [`debuggable`](https://developer.android.com/guide/topics/manifest/application-element).

~~~
$ adb exec-out run-as com.ino.covid.dev cat databases/Reactoffline.db > app_db.sqlite
~~~

## Debug & Release

Please make sure that you have the following environment variables set:

## License

MIT
