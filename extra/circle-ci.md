## Ionic rc.2 のアプリをCircleCIでビルドするときのコツ。

1. Build EnvironmentでOSは**Ubuntu 14.04**を選択する。
1. circle.ymlでNodeのバージョンを指定しない。(デフォルトでは4.x.xとなる)
1. android-sdkのバージョンは**24**を指定する。
1. `ionic hooks add`を実行しない。

設定ファイル記述例 → [circle.yml](https://github.com/ovrmrw/dreamhouse-ionic/blob/master/circle.yml)