# Help
## 基本的な使い方
1. 画像の読み込み
まずコード内で使用する画像を読み込みます。画像はバックグラウンドで`<img>`タグに変換され、
自動的に生成された`id`でアクセスすることができます。読み込んだ画像をクリックすると、その画像にアクセスするためのJavascriptのコードがクリップボードに保存されます。画像は何枚でも読み込むことができます。
2. コードを書く
画像を処理するためのコードを書きます。ここでOpenCV.jsのコードについて簡単に説明いたします。  
	- cv.imread(imgElement: HTMLImageElement)
		- OpenCV.jsで画像処理を行なうにはまずOpenCV.jsに画像を読み込み、Mat型の変数に変換する必要があります。
		- そのために`cv.imread()`関数を用います。引数には`<img>`要素への参照を取ります。
```
const imgElement = document.getElementById("image"); // <img id="image"/>
const src = cv.imread(imgElement); // Mat型の画像
```
	- cv.imshow(canvasId: string, dst: cv.Mat)
		- 処理を行なった画像を表示するために`cv.imshow()`関数を用います。
		- 引数には表示に用いる`<canvas>`要素を指す`id`と、Mat型の画像を取ります。
		- 本アプリでは`<canvas id="output"/>`を出力先に想定しているので、以下のコードを使用してください。
```
cv.imshow("output", dst);
```

## OpenCV.jsに関するさらなる情報はこちら
[OpenCV: OpenCV.js Tutorials](https://docs.opencv.org/master/d5/d10/tutorial_js_root.html)