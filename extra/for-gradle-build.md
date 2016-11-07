
```
$ ionic run android
```

のときにメモリヒープサイズエラーとなった場合は
(root)/platforms/android/cordova/lib/build.js に以下の行を足す。

```
ret.extraArgs.push('-Dorg.gradle.jvmargs=-Xmx512m');
```

これにより強制的にメモリサイズを指定できる。
